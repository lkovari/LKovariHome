import { Base65536Number, lucasLehmerBase65536Fast } from './base65536-number';
import type { MersenneEngine } from './mersenne.types';

function isOddPrime(n: number): boolean {
  if (n < 3 || n % 2 === 0) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) {
      return false;
    }
  }
  return true;
}

export function base65536MersenneDecimal(p: number): string {
  if (!Number.isInteger(p) || p < 2) {
    return '';
  }
  return Base65536Number.mersenne(p).toDecimalString();
}

export function base65536LucasLehmerTest(
  p: number,
  signal?: AbortSignal
): boolean {
  if (!Number.isInteger(p) || p < 2) {
    return false;
  }
  if (p === 2) {
    return true;
  }
  if (!isOddPrime(p)) {
    return false;
  }
  if (signal?.aborted) {
    return false;
  }
  return lucasLehmerBase65536Fast(p, signal);
}

export const base65536MersenneEngine: MersenneEngine = {
  test: base65536LucasLehmerTest,
  mersenneDecimal: base65536MersenneDecimal,
};
