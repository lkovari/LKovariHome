import { base256MersenneEngine } from './base256-lucas-lehmer';
import { bigintMersenneEngine } from './bigint-lucas-lehmer';
import type {
  GenerateMersennePrimesOptions,
  MersenneEngine,
  MersenneEngineId,
  MersennePrimeHit,
} from './mersenne.types';
import {
  MERSENNE_HARD_MAX_EXPONENT,
  MERSENNE_MIN_EXPONENT,
} from './mersenne.types';

function resolveEngine(engineId: MersenneEngineId): MersenneEngine {
  if (engineId === 'base256') {
    return base256MersenneEngine;
  }
  return bigintMersenneEngine;
}

export function clampMaxExponent(maxExponent: number): number {
  if (!Number.isFinite(maxExponent)) {
    return MERSENNE_MIN_EXPONENT;
  }
  const floored = Math.floor(maxExponent);
  if (floored < MERSENNE_MIN_EXPONENT) {
    return MERSENNE_MIN_EXPONENT;
  }
  if (floored > MERSENNE_HARD_MAX_EXPONENT) {
    return MERSENNE_HARD_MAX_EXPONENT;
  }
  return floored;
}

export function oddPrimeExponents(maxExponent: number): number[] {
  const limit = clampMaxExponent(maxExponent);
  if (limit < 2) {
    return [];
  }
  const sieve = new Array<boolean>(limit + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  for (let i = 2; i * i <= limit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }
  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }
  return primes;
}

export function generate(p: number, engine: MersenneEngineId): string {
  return resolveEngine(engine).mersenneDecimal(p);
}

export function test(p: number, engine: MersenneEngineId): boolean {
  return resolveEngine(engine).test(p);
}

function yieldToEventLoop(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

export async function generateMersennePrimes(
  options: GenerateMersennePrimesOptions
): Promise<MersennePrimeHit[]> {
  const maxExponent = clampMaxExponent(options.maxExponent);
  const engine = resolveEngine(options.engine);
  const primes = oddPrimeExponents(maxExponent);
  const hits: MersennePrimeHit[] = [];

  for (const p of primes) {
    if (options.signal?.aborted) {
      break;
    }
    options.onProgress?.(p);
    if (engine.test(p)) {
      const hit: MersennePrimeHit = {
        p,
        decimal: engine.mersenneDecimal(p),
      };
      hits.push(hit);
      options.onPrime?.(hit);
    }
    await yieldToEventLoop();
  }

  return hits;
}

export {
  MERSENNE_DEFAULT_MAX_EXPONENT,
  MERSENNE_HARD_MAX_EXPONENT,
  MERSENNE_MIN_EXPONENT,
} from './mersenne.types';
export type {
  GenerateMersennePrimesOptions,
  MersenneEngineId,
  MersennePrimeHit,
} from './mersenne.types';
