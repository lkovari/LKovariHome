/// <reference lib="webworker" />

import {
  bigintLucasLehmerTestKnownPrime,
  bigintMersenneDecimal,
} from './bigint-lucas-lehmer';
import {
  MERSENNE_YIELD_EVERY,
  clampMaxExponent,
  oddPrimeExponents,
} from './mersenne-sieve';

let aborted = false;

addEventListener('message', async (event: MessageEvent) => {
  const data = event.data;
  if (data.type === 'abort') {
    aborted = true;
    return;
  }
  if (data.type !== 'start') {
    return;
  }

  aborted = false;
  try {
    const maxExponent = clampMaxExponent(data.maxExponent);
    const primes = oddPrimeExponents(maxExponent);
    let sinceYield = 0;

    for (const p of primes) {
      if (aborted) {
        break;
      }
      postMessage({ type: 'progress', p });

      if (bigintLucasLehmerTestKnownPrime(p)) {
        postMessage({
          type: 'prime',
          p,
          decimal: bigintMersenneDecimal(p),
        });
      }

      sinceYield++;
      if (sinceYield >= MERSENNE_YIELD_EVERY) {
        sinceYield = 0;
        await new Promise<void>(resolve => {
          setTimeout(resolve, 0);
        });
      }
    }

    postMessage({ type: 'done' });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Worker failed';
    postMessage({ type: 'error', message });
  }
});
