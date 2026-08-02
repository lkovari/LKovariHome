export const MERSENNE_TRIAL_FACTOR_Q_MAX = 2_000_000;

export function hasSmallMersenneFactor(
  p: number,
  qMax: number = MERSENNE_TRIAL_FACTOR_Q_MAX
): boolean {
  if (!Number.isInteger(p) || p < 3) {
    return false;
  }

  const modulus = (1n << BigInt(p)) - 1n;
  const maxK = Math.floor((qMax - 1) / (2 * p));

  for (let k = 1; k <= maxK; k++) {
    const q = 2 * k * p + 1;
    if (q % 8 !== 1 && q % 8 !== 7) {
      continue;
    }
    const qBig = BigInt(q);
    if (qBig >= modulus) {
      break;
    }
    if (modulus % qBig === 0n) {
      return true;
    }
  }

  return false;
}
