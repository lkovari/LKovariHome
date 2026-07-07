import { describe, expect, it } from 'vitest';
import {
  OccupancyBitmap,
  chkd,
  computeAlignedMazeSize,
  dotchk,
  labyrinthGen,
  pickRandomRasterPoint,
  poschk,
  posnext,
  randomRasterIterationCount,
  storePoint,
} from './labyrinth-engine';

describe('labyrinth-engine', () => {
  describe('storePoint', () => {
    it('builds a grid aligned to step', () => {
      const result = storePoint(100, 80, 10);
      expect(result.mazeWidth).toBe(100);
      expect(result.mazeHeight).toBe(80);
      expect(result.points.length).toBe(9 * 7);
      expect(result.points[0]).toEqual({ x: 10, y: 10 });
      expect(result.points[result.points.length - 1]).toEqual({ x: 90, y: 70 });
    });
  });

  describe('computeAlignedMazeSize', () => {
    it('snaps container size to step multiples', () => {
      expect(computeAlignedMazeSize(803, 601, 7)).toEqual({ width: 798, height: 595 });
    });
  });

  describe('pickRandomRasterPoint', () => {
    it('returns step-aligned coordinates within the maze bounds', () => {
      const step = 10;
      for (let i = 0; i < 50; i++) {
        const point = pickRandomRasterPoint(100, 80, step);
        expect(point.x % step).toBe(0);
        expect(point.y % step).toBe(0);
        expect(point.x).toBeGreaterThanOrEqual(0);
        expect(point.y).toBeGreaterThanOrEqual(0);
        expect(point.x).toBeLessThanOrEqual(100);
        expect(point.y).toBeLessThanOrEqual(80);
      }
    });
  });

  describe('randomRasterIterationCount', () => {
    it('matches the LABYR.PAS grid slot count', () => {
      expect(randomRasterIterationCount(100, 80, 10)).toBe(11 * 9);
    });
  });

  describe('posnext', () => {
    it('moves up when heading up and going forward', () => {
      const next = posnext(50, 50, 1, 2, 10);
      expect(next).toEqual({ x: 50, y: 40, heading: 1, lastHeading: 1 });
    });

    it('moves left when heading up and turning left', () => {
      const next = posnext(50, 50, 1, 1, 10);
      expect(next).toEqual({ x: 40, y: 50, heading: 3, lastHeading: 1 });
    });

    it('moves right when heading up and turning right', () => {
      const next = posnext(50, 50, 1, 3, 10);
      expect(next).toEqual({ x: 60, y: 50, heading: 4, lastHeading: 1 });
    });

    it('moves down when heading down and going forward', () => {
      const next = posnext(50, 50, 2, 2, 10);
      expect(next).toEqual({ x: 50, y: 60, heading: 2, lastHeading: 2 });
    });

    it('moves left when heading left and going forward', () => {
      const next = posnext(50, 50, 3, 2, 10);
      expect(next).toEqual({ x: 40, y: 50, heading: 3, lastHeading: 3 });
    });

    it('moves right when heading right and going forward', () => {
      const next = posnext(50, 50, 4, 2, 10);
      expect(next).toEqual({ x: 60, y: 50, heading: 4, lastHeading: 4 });
    });
  });

  describe('poschk', () => {
    it('returns true for in-bounds coordinates', () => {
      expect(poschk(0, 0, 100, 100)).toBe(true);
      expect(poschk(99, 99, 100, 100)).toBe(true);
    });

    it('returns false for out-of-bounds coordinates', () => {
      expect(poschk(-1, 0, 100, 100)).toBe(false);
      expect(poschk(100, 0, 100, 100)).toBe(false);
      expect(poschk(0, 100, 100, 100)).toBe(false);
    });
  });

  describe('dotchk', () => {
    it('detects free and occupied raster points', () => {
      const occupancy = new OccupancyBitmap(10, 10);

      expect(dotchk(occupancy, 5, 5)).toBe(true);

      occupancy.markPixel(5, 5);

      expect(dotchk(occupancy, 5, 5)).toBe(false);
    });
  });

  describe('chkd', () => {
    it('blocks opposite heading to seed direction', () => {
      expect(chkd(2, 1)).toBe(false);
      expect(chkd(1, 2)).toBe(false);
      expect(chkd(4, 3)).toBe(false);
      expect(chkd(3, 4)).toBe(false);
      expect(chkd(3, 1)).toBe(true);
    });
  });

  describe('labyrinthGen', () => {
    it('completes on a small canvas when 2d context is available', () => {
      const canvas = document.createElement('canvas');
      canvas.width = 70;
      canvas.height = 70;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        return;
      }

      labyrinthGen(ctx, 70, 70, { step: 7, probability: 70, depth: 20, plr: 70 });
      const imageData = ctx.getImageData(0, 0, 70, 70);
      let nonWhiteCount = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        if (imageData.data[i] !== 255 || imageData.data[i + 1] !== 255 || imageData.data[i + 2] !== 255) {
          nonWhiteCount += 1;
        }
      }
      expect(nonWhiteCount).toBeGreaterThan(0);
    });
  });
});
