import { describe, expect, it } from 'vitest';
import {
  generate,
  generateMersennePrimes,
  oddPrimeExponents,
  test,
} from './mersenne-prim-generator';
import type { MersenneEngineId } from './mersenne.types';

const KNOWN_MERSENNE_EXPONENTS = [2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127];
const ENGINES: MersenneEngineId[] = ['bigint', 'base256'];

describe('mersenne-prim-generator', () => {
  describe.each(ENGINES)('engine %s', engine => {
    it.each(KNOWN_MERSENNE_EXPONENTS)('test(%i) is true', p => {
      expect(test(p, engine)).toBe(true);
    });

    it('rejects composite exponents 11 and 67', () => {
      expect(test(11, engine)).toBe(false);
      expect(test(67, engine)).toBe(false);
    });

    it('generate returns decimal Mersenne numbers', () => {
      expect(generate(5, engine)).toBe('31');
      expect(generate(13, engine)).toBe('8191');
    });
  });

  it('both engines agree on generate for known exponents', () => {
    for (const p of KNOWN_MERSENNE_EXPONENTS) {
      expect(generate(p, 'base256')).toBe(generate(p, 'bigint'));
    }
  });

  it('oddPrimeExponents sieves primes up to the limit', () => {
    expect(oddPrimeExponents(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it('generateMersennePrimes streams known primes up to 127', async () => {
    const streamed: number[] = [];
    const hits = await generateMersennePrimes({
      maxExponent: 127,
      engine: 'bigint',
      onPrime: hit => {
        streamed.push(hit.p);
      },
    });
    expect(hits.map(h => h.p)).toEqual(KNOWN_MERSENNE_EXPONENTS);
    expect(streamed).toEqual(KNOWN_MERSENNE_EXPONENTS);
  });

  it('generateMersennePrimes honors AbortSignal', async () => {
    const controller = new AbortController();
    const streamed: number[] = [];
    const run = generateMersennePrimes({
      maxExponent: 127,
      engine: 'bigint',
      signal: controller.signal,
      onPrime: hit => {
        streamed.push(hit.p);
        if (hit.p === 13) {
          controller.abort();
        }
      },
    });
    const hits = await run;
    expect(hits.map(h => h.p)).toEqual(streamed);
    expect(streamed[streamed.length - 1]).toBe(13);
    expect(streamed).not.toContain(17);
  });
});
