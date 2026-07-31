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

export function bigintMersenneDecimal(p: number): string {
  if (!Number.isInteger(p) || p < 2) {
    return '';
  }
  return ((1n << BigInt(p)) - 1n).toString(10);
}

export function bigintLucasLehmerTest(p: number): boolean {
  if (!Number.isInteger(p) || p < 2) {
    return false;
  }
  if (p === 2) {
    return true;
  }
  if (!isOddPrime(p)) {
    return false;
  }

  const modulus = (1n << BigInt(p)) - 1n;
  let s = 4n;
  for (let i = 0; i < p - 2; i++) {
    s = (s * s - 2n) % modulus;
  }
  return s === 0n;
}

export const bigintMersenneEngine: MersenneEngine = {
  test: bigintLucasLehmerTest,
  mersenneDecimal: bigintMersenneDecimal,
};
