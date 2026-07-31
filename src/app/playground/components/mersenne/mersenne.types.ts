export type MersenneEngineId = 'bigint' | 'base256';

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
  test(p: number): boolean;
  mersenneDecimal(p: number): string;
}

export const MERSENNE_DEFAULT_MAX_EXPONENT = 127;
export const MERSENNE_HARD_MAX_EXPONENT = 5000;
export const MERSENNE_MIN_EXPONENT = 2;
