export type Direction = 1 | 2 | 3 | 4;

export interface LabyrinthParams {
  step: number;
  probability: number;
  depth: number;
  plr: number;
}

export interface RasterPoint {
  x: number;
  y: number;
}

export interface StorePointResult {
  points: RasterPoint[];
  mazeWidth: number;
  mazeHeight: number;
}

export const DEFAULT_LABYRINTH_PARAMS: LabyrinthParams = {
  step: 7,
  probability: 70,
  depth: 700,
  plr: 70,
};

const DN: readonly [number, number, number][] = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];

const RANDOM_COLORS = [
  '#e6194b',
  '#3cb44b',
  '#4363d8',
  '#f58231',
  '#911eb4',
  '#42d4f4',
  '#f032e6',
  '#bfef45',
  '#fabed4',
  '#469990',
  '#dcbeff',
  '#9a6324',
  '#800000',
  '#aaffc3',
  '#808000',
  '#ffd8b1',
  '#000075',
  '#a9a9a9',
];

export function computeAlignedMazeSize(
  containerWidth: number,
  containerHeight: number,
  step: number
): { width: number; height: number } {
  const cols = Math.max(Math.floor(containerWidth / step), 1);
  const rows = Math.max(Math.floor(containerHeight / step), 1);
  return {
    width: cols * step,
    height: rows * step,
  };
}

export function pickRandomRasterPoint(mazeWidth: number, mazeHeight: number, step: number): RasterPoint {
  const gridCountX = Math.floor(mazeWidth / step) + 1;
  const gridCountY = Math.floor(mazeHeight / step) + 1;
  const sx = Math.floor(Math.random() * gridCountX) * step;
  const sy = Math.floor(Math.random() * gridCountY) * step;
  return { x: sx, y: sy };
}

export function randomRasterIterationCount(mazeWidth: number, mazeHeight: number, step: number): number {
  const gridCountX = Math.floor(mazeWidth / step) + 1;
  const gridCountY = Math.floor(mazeHeight / step) + 1;
  return gridCountX * gridCountY;
}

export function storePoint(canvasWidth: number, canvasHeight: number, step: number): StorePointResult {
  const mazeWidth = Math.trunc(canvasWidth / step) * step || step;
  const mazeHeight = Math.trunc(canvasHeight / step) * step || step;
  const points: RasterPoint[] = [];

  for (let y = step; y <= mazeHeight - step; y += step) {
    for (let x = step; x <= mazeWidth - step; x += step) {
      points.push({ x, y });
    }
  }

  return { points, mazeWidth, mazeHeight };
}

export interface PosNextResult {
  x: number;
  y: number;
  heading: Direction;
  lastHeading: Direction;
}

export function posnext(
  ox: number,
  oy: number,
  heading: Direction,
  dto: number,
  step: number
): PosNextResult {
  const lastHeading = heading;
  let x = ox;
  let y = oy;
  let newHeading = heading;

  if (heading === 1) {
    if (dto === 1) {
      newHeading = 3;
      x = ox - step;
    } else if (dto === 2) {
      newHeading = 1;
      y = oy - step;
    } else {
      newHeading = 4;
      x = ox + step;
    }
  } else if (heading === 2) {
    if (dto === 1) {
      newHeading = 4;
      x = ox + step;
    } else if (dto === 2) {
      newHeading = 2;
      y = oy + step;
    } else {
      newHeading = 3;
      x = ox - step;
    }
  } else if (heading === 3) {
    if (dto === 1) {
      newHeading = 2;
      y = oy + step;
    } else if (dto === 2) {
      newHeading = 3;
      x = ox - step;
    } else {
      newHeading = 1;
      y = oy - step;
    }
  } else {
    if (dto === 1) {
      newHeading = 1;
      y = oy - step;
    } else if (dto === 2) {
      newHeading = 4;
      x = ox + step;
    } else {
      newHeading = 2;
      y = oy + step;
    }
  }

  return { x, y, heading: newHeading, lastHeading };
}

export function poschk(xx: number, yy: number, mazeWidth: number, mazeHeight: number): boolean {
  return xx >= 0 && xx < mazeWidth && yy >= 0 && yy < mazeHeight;
}

export class OccupancyBitmap {
  private readonly occupied: Uint8Array;

  constructor(
    readonly width: number,
    readonly height: number
  ) {
    this.occupied = new Uint8Array(width * height);
  }

  isFree(px: number, py: number): boolean {
    if (px < 0 || py < 0 || px >= this.width || py >= this.height) {
      return false;
    }
    return this.occupied[py * this.width + px] === 0;
  }

  markPixel(px: number, py: number): void {
    if (px < 0 || py < 0 || px >= this.width || py >= this.height) {
      return;
    }
    this.occupied[py * this.width + px] = 1;
  }

  markLine(x1: number, y1: number, x2: number, y2: number): void {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);

    if (x1 === x2) {
      for (let y = minY; y <= maxY; y++) {
        this.markPixel(x1, y);
      }
    } else {
      for (let x = minX; x <= maxX; x++) {
        this.markPixel(x, y1);
      }
    }
  }
}

export function dotchk(occupancy: OccupancyBitmap, px: number, py: number): boolean {
  return occupancy.isFree(px, py);
}

export function chkd(heading: Direction, fd: Direction): boolean {
  if (fd === 1 && heading === 2) {
    return false;
  }
  if (fd === 2 && heading === 1) {
    return false;
  }
  if (fd === 3 && heading === 4) {
    return false;
  }
  if (fd === 4 && heading === 3) {
    return false;
  }
  return true;
}

export function lrd(heading: Direction, fd: Direction, plr: number): boolean {
  const vr = Math.floor(Math.random() * 101);

  if (fd === 1) {
    if (heading === 3 || heading === 4) {
      return vr < plr;
    }
  } else if (fd === 2) {
    if (heading === 4 || heading === 3) {
      return vr < plr;
    }
  } else if (fd === 3) {
    if (heading === 2 || heading === 1) {
      return vr < plr;
    }
  } else if (heading === 1 || heading === 2) {
    return vr < plr;
  }

  return true;
}

export function shouldRecurse(probability: number): boolean {
  return Math.floor(Math.random() * 100) <= probability;
}

function randomPenColor(): string {
  const index = Math.floor(Math.random() * RANDOM_COLORS.length);
  const color = RANDOM_COLORS[index];
  if (color === undefined) {
    return '#000000';
  }
  return color;
}

function drawLine(
  ctx: CanvasRenderingContext2D,
  occupancy: OccupancyBitmap,
  color: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): void {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  occupancy.markLine(x1, y1, x2, y2);
}

interface WallFrame {
  posx: number;
  posy: number;
  sel: Direction;
  fd: Direction;
  dp: number;
  dotn: number;
  dotnm: number;
  initialized: boolean;
  needBackstep: boolean;
  savedLastHeading: Direction;
}

function applyParentBackstep(stack: WallFrame[]): void {
  if (stack.length === 0) {
    return;
  }
  const parent = stack[stack.length - 1];
  if (parent === undefined) {
    return;
  }
  if (parent.needBackstep) {
    parent.sel = parent.savedLastHeading;
    parent.needBackstep = false;
  }
}

function wallIterative(
  ctx: CanvasRenderingContext2D,
  occupancy: OccupancyBitmap,
  treeColor: string,
  startX: number,
  startY: number,
  seedDir: Direction,
  params: LabyrinthParams,
  mazeWidth: number,
  mazeHeight: number
): void {
  ctx.lineWidth = 1;
  const stack: WallFrame[] = [
    {
      posx: startX,
      posy: startY,
      sel: seedDir,
      fd: seedDir,
      dp: 0,
      dotn: 0,
      dotnm: 1,
      initialized: false,
      needBackstep: false,
      savedLastHeading: seedDir,
    },
  ];

  while (stack.length > 0) {
    const frame = stack[stack.length - 1];
    if (frame === undefined) {
      break;
    }

    if (!frame.initialized) {
      frame.dp += 1;
      frame.dotn = Math.floor(Math.random() * 6) + 1;
      frame.dotnm = 1;
      frame.initialized = true;
    }

    if (frame.dotnm > 3) {
      stack.pop();
      applyParentBackstep(stack);
      continue;
    }

    const permutation = DN[frame.dotn - 1];
    if (permutation === undefined) {
      frame.dotnm += 1;
      continue;
    }
    const dotnum = permutation[frame.dotnm - 1];
    if (dotnum === undefined) {
      frame.dotnm += 1;
      continue;
    }

    const next = posnext(frame.posx, frame.posy, frame.sel, dotnum, params.step);
    frame.sel = next.heading;

    const valid =
      poschk(next.x, next.y, mazeWidth, mazeHeight) &&
      dotchk(occupancy, next.x, next.y) &&
      chkd(next.heading, frame.fd) &&
      lrd(next.heading, frame.fd, params.plr);

    frame.dotnm += 1;

    if (valid) {
      drawLine(ctx, occupancy, treeColor, frame.posx, frame.posy, next.x, next.y);

      if (shouldRecurse(params.probability) && frame.dp <= params.depth) {
        frame.needBackstep = true;
        frame.savedLastHeading = next.lastHeading;
        stack.push({
          posx: next.x,
          posy: next.y,
          sel: next.heading,
          fd: frame.fd,
          dp: frame.dp,
          dotn: 0,
          dotnm: 1,
          initialized: false,
          needBackstep: false,
          savedLastHeading: next.heading,
        });
        continue;
      }
    }

    frame.sel = next.lastHeading;
  }
}

function drawBorderTeeth(
  ctx: CanvasRenderingContext2D,
  occupancy: OccupancyBitmap,
  mazeWidth: number,
  mazeHeight: number,
  step: number
): void {
  ctx.strokeStyle = '#0000ff';
  ctx.lineWidth = 1;

  for (let x = step; x <= mazeWidth - step; x += step) {
    if (Math.floor(Math.random() * 10) === 7) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, step);
      ctx.stroke();
      occupancy.markLine(x, 0, x, step);
    }
  }

  for (let x = step; x <= mazeWidth - step; x += step) {
    if (Math.floor(Math.random() * 10) === 7) {
      ctx.beginPath();
      ctx.moveTo(x, mazeHeight);
      ctx.lineTo(x, mazeHeight - step);
      ctx.stroke();
      occupancy.markLine(x, mazeHeight, x, mazeHeight - step);
    }
  }

  for (let y = step; y <= mazeHeight - step; y += step) {
    if (Math.floor(Math.random() * 10) === 7) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(step, y);
      ctx.stroke();
      occupancy.markLine(0, y, step, y);
    }
  }

  for (let y = step; y <= mazeHeight - step; y += step) {
    if (Math.floor(Math.random() * 10) === 7) {
      ctx.beginPath();
      ctx.moveTo(mazeWidth, y);
      ctx.lineTo(mazeWidth - step, y);
      ctx.stroke();
      occupancy.markLine(mazeWidth, y, mazeWidth - step, y);
    }
  }
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  occupancy: OccupancyBitmap,
  mazeWidth: number,
  mazeHeight: number
): void {
  ctx.strokeStyle = '#0000ff';
  ctx.lineWidth = 6;
  ctx.strokeRect(0, 0, mazeWidth, mazeHeight);
  occupancy.markLine(0, 0, mazeWidth, 0);
  occupancy.markLine(mazeWidth, 0, mazeWidth, mazeHeight);
  occupancy.markLine(mazeWidth, mazeHeight, 0, mazeHeight);
  occupancy.markLine(0, mazeHeight, 0, 0);
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, mazeWidth, mazeHeight);
}

function drawTreeRandom(
  ctx: CanvasRenderingContext2D,
  occupancy: OccupancyBitmap,
  mazeWidth: number,
  mazeHeight: number,
  params: LabyrinthParams,
  iterations: number
): void {
  for (let i = 0; i < iterations; i++) {
    const { x: sx, y: sy } = pickRandomRasterPoint(mazeWidth, mazeHeight, params.step);
    for (let sel = 1; sel <= 4; sel++) {
      const treeColor = randomPenColor();
      wallIterative(
        ctx,
        occupancy,
        treeColor,
        sx,
        sy,
        sel as Direction,
        params,
        mazeWidth,
        mazeHeight
      );
    }
  }
}

export function labyrinthGen(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  params: LabyrinthParams
): void {
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const { mazeWidth, mazeHeight } = storePoint(canvasWidth, canvasHeight, params.step);
  const iterations = randomRasterIterationCount(mazeWidth, mazeHeight, params.step);
  const occupancy = new OccupancyBitmap(canvasWidth, canvasHeight);

  drawFrame(ctx, occupancy, mazeWidth, mazeHeight);
  drawBorderTeeth(ctx, occupancy, mazeWidth, mazeHeight, params.step);
  drawTreeRandom(ctx, occupancy, mazeWidth, mazeHeight, params, iterations);
}

export async function labyrinthGenAsync(
  ctx: CanvasRenderingContext2D,
  canvasWidth: number,
  canvasHeight: number,
  params: LabyrinthParams,
  yieldEvery = 50
): Promise<void> {
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  const { mazeWidth, mazeHeight } = storePoint(canvasWidth, canvasHeight, params.step);
  const iterations = randomRasterIterationCount(mazeWidth, mazeHeight, params.step);
  const occupancy = new OccupancyBitmap(canvasWidth, canvasHeight);

  drawFrame(ctx, occupancy, mazeWidth, mazeHeight);
  drawBorderTeeth(ctx, occupancy, mazeWidth, mazeHeight, params.step);

  let iteration = 0;

  for (let i = 0; i < iterations; i++) {
    const { x: sx, y: sy } = pickRandomRasterPoint(mazeWidth, mazeHeight, params.step);
    for (let sel = 1; sel <= 4; sel++) {
      const treeColor = randomPenColor();
      wallIterative(
        ctx,
        occupancy,
        treeColor,
        sx,
        sy,
        sel as Direction,
        params,
        mazeWidth,
        mazeHeight
      );
      iteration += 1;
      if (iteration % yieldEvery === 0) {
        await new Promise<void>((resolve) => setTimeout(resolve, 0));
      }
    }
  }
}
