import {
  MERSENNE_HARD_MAX_EXPONENT,
  MERSENNE_MIN_EXPONENT,
} from './mersenne.types';

export const MERSENNE_YIELD_EVERY = 10;

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
