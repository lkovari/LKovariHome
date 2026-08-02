import { base65536MersenneEngine } from './base65536-lucas-lehmer';
import {
  bigintLucasLehmerTestKnownPrime,
  bigintMersenneDecimal,
  bigintMersenneEngine,
} from './bigint-lucas-lehmer';
import {
  MERSENNE_YIELD_EVERY,
  clampMaxExponent,
  oddPrimeExponents,
} from './mersenne-sieve';
import type {
  GenerateMersennePrimesOptions,
  MersenneEngine,
  MersenneEngineId,
  MersennePrimeHit,
} from './mersenne.types';

function resolveEngine(engineId: MersenneEngineId): MersenneEngine {
  if (engineId === 'base65536') {
    return base65536MersenneEngine;
  }
  return bigintMersenneEngine;
}

export { clampMaxExponent, oddPrimeExponents, MERSENNE_YIELD_EVERY };

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

export async function generateMersennePrimesOnMainThread(
  options: GenerateMersennePrimesOptions
): Promise<MersennePrimeHit[]> {
  const maxExponent = clampMaxExponent(options.maxExponent);
  const engine = resolveEngine(options.engine);
  const primes = oddPrimeExponents(maxExponent);
  const hits: MersennePrimeHit[] = [];
  const yieldEvery = options.engine === 'base65536' ? 1 : MERSENNE_YIELD_EVERY;
  let sinceYield = 0;

  for (const p of primes) {
    if (options.signal?.aborted) {
      break;
    }
    options.onProgress?.(p);

    let isPrime = false;
    if (options.engine === 'bigint') {
      isPrime = bigintLucasLehmerTestKnownPrime(p, options.signal);
    } else {
      isPrime = engine.test(p, options.signal);
    }

    if (options.signal?.aborted) {
      break;
    }

    if (isPrime) {
      const decimal =
        options.engine === 'bigint'
          ? bigintMersenneDecimal(p)
          : engine.mersenneDecimal(p);
      const hit: MersennePrimeHit = { p, decimal };
      hits.push(hit);
      options.onPrime?.(hit);
    }

    sinceYield++;
    if (sinceYield >= yieldEvery) {
      sinceYield = 0;
      await yieldToEventLoop();
    }
  }

  return hits;
}

export async function generateMersennePrimes(
  options: GenerateMersennePrimesOptions
): Promise<MersennePrimeHit[]> {
  if (options.engine === 'bigint' && typeof Worker !== 'undefined') {
    try {
      return await generateMersennePrimesInWorker(options);
    } catch {
      return generateMersennePrimesOnMainThread(options);
    }
  }
  return generateMersennePrimesOnMainThread(options);
}

function generateMersennePrimesInWorker(
  options: GenerateMersennePrimesOptions
): Promise<MersennePrimeHit[]> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./mersenne.worker', import.meta.url), {
      type: 'module',
    });
    const hits: MersennePrimeHit[] = [];
    let settled = false;

    const finish = (result: MersennePrimeHit[]) => {
      if (settled) {
        return;
      }
      settled = true;
      options.signal?.removeEventListener('abort', onAbort);
      worker.terminate();
      resolve(result);
    };

    const fail = (error: unknown) => {
      if (settled) {
        return;
      }
      settled = true;
      options.signal?.removeEventListener('abort', onAbort);
      worker.terminate();
      reject(error);
    };

    const onAbort = () => {
      finish(hits);
    };

    options.signal?.addEventListener('abort', onAbort);

    worker.onmessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === 'progress') {
        options.onProgress?.(data.p);
        return;
      }
      if (data.type === 'prime') {
        const hit: MersennePrimeHit = {
          p: data.p,
          decimal: data.decimal,
        };
        hits.push(hit);
        options.onPrime?.(hit);
        return;
      }
      if (data.type === 'done') {
        finish(hits);
        return;
      }
      if (data.type === 'error') {
        fail(new Error(data.message));
      }
    };

    worker.onerror = error => {
      fail(error);
    };

    worker.postMessage({
      type: 'start',
      maxExponent: options.maxExponent,
    });

    if (options.signal?.aborted) {
      onAbort();
    }
  });
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
