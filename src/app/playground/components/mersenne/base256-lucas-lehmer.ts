import { Base256Number, lucasLehmerBase256Fast } from './base256-number';
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

export function base256MersenneDecimal(p: number): string {
  if (!Number.isInteger(p) || p < 2) {
    return '';
  }
  return Base256Number.mersenne(p).toDecimalString();
}

export function base256LucasLehmerTest(p: number): boolean {
  if (!Number.isInteger(p) || p < 2) {
    return false;
  }
  if (p === 2) {
    return true;
  }
  if (!isOddPrime(p)) {
    return false;
  }
  return lucasLehmerBase256Fast(p);
}

export const base256MersenneEngine: MersenneEngine = {
  test: base256LucasLehmerTest,
  mersenneDecimal: base256MersenneDecimal,
};
