export type MersenneEngineId = 'bigint' | 'base65536';

export interface MersennePrimeHit {
  p: number;
  decimal: string;
}

export interface GenerateMersennePrimesOptions {
  maxExponent: number;
  engine: MersenneEngineId;
  signal?: AbortSignal;
  onPrime?: (hit: MersennePrimeHit) => void;
  onProgress?: (p: number) => void;
}

export interface MersenneEngine {
  test(p: number, signal?: AbortSignal): boolean;
  mersenneDecimal(p: number): string;
}

export const MERSENNE_DEFAULT_MAX_EXPONENT = 256;
export const MERSENNE_HARD_MAX_EXPONENT = 100000;
export const MERSENNE_MIN_EXPONENT = 2;
