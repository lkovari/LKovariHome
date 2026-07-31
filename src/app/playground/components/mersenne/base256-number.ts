const BASE = 256;
const BASE_MASK = 255;

function trimLength(digits: number[], length: number): number {
  let len = length;
  while (len > 1 && digits[len - 1] === 0) {
    len--;
  }
  if (len === 0) {
    return 1;
  }
  return len;
}

function copyTrimmed(digits: number[], length: number): number[] {
  const len = trimLength(digits, length);
  return digits.slice(0, len);
}

function bitLengthOf(digits: number[], length: number): number {
  const len = trimLength(digits, length);
  const msb = digits[len - 1];
  if (msb === undefined || (len === 1 && msb === 0)) {
    return 0;
  }
  let v = msb;
  let bits = 0;
  while (v > 0) {
    bits++;
    v >>>= 1;
  }
  return bits + (len - 1) * 8;
}

function compareDigits(
  a: number[],
  aLen: number,
  b: number[],
  bLen: number
): number {
  const aa = trimLength(a, aLen);
  const bb = trimLength(b, bLen);
  if (aa !== bb) {
    return aa > bb ? 1 : -1;
  }
  for (let i = aa - 1; i >= 0; i--) {
    const ai = a[i] ?? 0;
    const bi = b[i] ?? 0;
    if (ai !== bi) {
      return ai > bi ? 1 : -1;
    }
  }
  return 0;
}

function buildMersenneDigits(p: number): number[] {
  const fullBytes = Math.floor(p / 8);
  const remBits = p % 8;
  const digits = new Array<number>(fullBytes + (remBits > 0 ? 1 : 0)).fill(0);
  for (let i = 0; i < fullBytes; i++) {
    digits[i] = BASE_MASK;
  }
  if (remBits > 0) {
    digits[fullBytes] = (1 << remBits) - 1;
  }
  if (digits.length === 0) {
    return [0];
  }
  return digits;
}

function squareInto(src: number[], srcLen: number, dest: number[]): number {
  const n = trimLength(src, srcLen);
  const outLen = 2 * n;
  for (let i = 0; i < outLen; i++) {
    dest[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    const ai = src[i] ?? 0;
    let carry = 0;
    for (let j = 0; j < n; j++) {
      const pos = i + j;
      const prod = ai * (src[j] ?? 0) + (dest[pos] ?? 0) + carry;
      dest[pos] = prod & BASE_MASK;
      carry = prod >>> 8;
    }
    let k = i + n;
    while (carry > 0) {
      const sum = (dest[k] ?? 0) + carry;
      dest[k] = sum & BASE_MASK;
      carry = sum >>> 8;
      k++;
    }
  }
  return trimLength(dest, outLen + 2);
}

function subtractTwoInPlace(digits: number[], length: number): number {
  let borrow = 2;
  let i = 0;
  const len = trimLength(digits, length);
  while (borrow > 0 && i < len) {
    const cur = digits[i] ?? 0;
    if (cur >= borrow) {
      digits[i] = cur - borrow;
      borrow = 0;
    } else {
      digits[i] = cur + BASE - borrow;
      borrow = 1;
    }
    i++;
  }
  return trimLength(digits, len);
}

function modMersenneInPlace(
  digits: number[],
  length: number,
  p: number,
  modulus: number[],
  scratch: number[]
): number {
  let len = trimLength(digits, length);
  const limbBytes = modulus.length;

  while (bitLengthOf(digits, len) > p) {
    for (let i = 0; i < scratch.length; i++) {
      scratch[i] = 0;
    }

    const byteShift = Math.floor(p / 8);
    const bitShift = p % 8;

    for (let i = 0; i < limbBytes; i++) {
      scratch[i] = (digits[i] ?? 0) & (modulus[i] ?? 0);
    }

    if (byteShift < len) {
      if (bitShift === 0) {
        for (let i = byteShift; i < len; i++) {
          const pos = i - byteShift;
          const sum = (scratch[pos] ?? 0) + (digits[i] ?? 0);
          scratch[pos] = sum & BASE_MASK;
          let carry = sum >>> 8;
          let k = pos + 1;
          while (carry > 0) {
            const s = (scratch[k] ?? 0) + carry;
            scratch[k] = s & BASE_MASK;
            carry = s >>> 8;
            k++;
          }
        }
      } else {
        const inv = 8 - bitShift;
        for (let i = byteShift; i < len; i++) {
          const low = (digits[i] ?? 0) >>> bitShift;
          const high =
            i + 1 < len ? ((digits[i + 1] ?? 0) << inv) & BASE_MASK : 0;
          const folded = low | high;
          const pos = i - byteShift;
          const sum = (scratch[pos] ?? 0) + folded;
          scratch[pos] = sum & BASE_MASK;
          let carry = sum >>> 8;
          let k = pos + 1;
          while (carry > 0) {
            const s = (scratch[k] ?? 0) + carry;
            scratch[k] = s & BASE_MASK;
            carry = s >>> 8;
            k++;
          }
        }
      }
    }

    len = trimLength(scratch, Math.max(limbBytes + 2, len - byteShift + 2));
    for (let i = 0; i < len; i++) {
      digits[i] = scratch[i] ?? 0;
    }
    for (let i = len; i < digits.length; i++) {
      digits[i] = 0;
    }
  }

  const cmp = compareDigits(digits, len, modulus, modulus.length);
  if (cmp === 0) {
    digits[0] = 0;
    for (let i = 1; i < digits.length; i++) {
      digits[i] = 0;
    }
    return 1;
  }
  if (cmp > 0) {
    let borrow = 0;
    for (let i = 0; i < modulus.length; i++) {
      let diff = (digits[i] ?? 0) - (modulus[i] ?? 0) - borrow;
      if (diff < 0) {
        diff += BASE;
        borrow = 1;
      } else {
        borrow = 0;
      }
      digits[i] = diff;
    }
    return trimLength(digits, modulus.length);
  }
  return trimLength(digits, len);
}

function isZeroDigits(digits: number[], length: number): boolean {
  const len = trimLength(digits, length);
  return len === 1 && (digits[0] ?? 0) === 0;
}

export function lucasLehmerBase256Fast(p: number): boolean {
  const limbBytes = Math.ceil(p / 8);
  const workSize = limbBytes * 2 + 8;
  const s = new Array<number>(workSize).fill(0);
  const squareBuf = new Array<number>(workSize).fill(0);
  const scratch = new Array<number>(workSize).fill(0);
  const modulus = buildMersenneDigits(p);
  s[0] = 4;
  let sLen = 1;

  for (let i = 0; i < p - 2; i++) {
    const sqLen = squareInto(s, sLen, squareBuf);
    const afterSub = subtractTwoInPlace(squareBuf, sqLen);
    sLen = modMersenneInPlace(squareBuf, afterSub, p, modulus, scratch);
    for (let j = 0; j < sLen; j++) {
      s[j] = squareBuf[j] ?? 0;
    }
    for (let j = sLen; j < s.length; j++) {
      s[j] = 0;
    }
  }

  return isZeroDigits(s, sLen);
}

export class Base256Number {
  readonly digits: number[];

  constructor(digits: number[]) {
    this.digits = digits.length === 0 ? [0] : copyTrimmed(digits, digits.length);
  }

  static zero(): Base256Number {
    return new Base256Number([0]);
  }

  static fromSmall(value: number): Base256Number {
    if (!Number.isInteger(value) || value < 0) {
      return Base256Number.zero();
    }
    if (value === 0) {
      return Base256Number.zero();
    }
    const digits: number[] = [];
    let n = value;
    while (n > 0) {
      digits.push(n & BASE_MASK);
      n = Math.floor(n / BASE);
    }
    return new Base256Number(digits);
  }

  static mersenne(p: number): Base256Number {
    if (!Number.isInteger(p) || p < 1) {
      return Base256Number.zero();
    }
    return new Base256Number(buildMersenneDigits(p));
  }

  clone(): Base256Number {
    return new Base256Number(this.digits);
  }

  isZero(): boolean {
    return isZeroDigits(this.digits, this.digits.length);
  }

  compare(other: Base256Number): number {
    return compareDigits(
      this.digits,
      this.digits.length,
      other.digits,
      other.digits.length
    );
  }

  equals(other: Base256Number): boolean {
    return this.compare(other) === 0;
  }

  gte(other: Base256Number): boolean {
    return this.compare(other) >= 0;
  }

  gt(other: Base256Number): boolean {
    return this.compare(other) > 0;
  }

  add(other: Base256Number): Base256Number {
    const a = this.digits;
    const b = other.digits;
    const maxLen = Math.max(a.length, b.length);
    const result = new Array<number>(maxLen + 1).fill(0);
    let carry = 0;
    for (let i = 0; i < maxLen; i++) {
      const sum = (a[i] ?? 0) + (b[i] ?? 0) + carry;
      result[i] = sum & BASE_MASK;
      carry = sum >>> 8;
    }
    result[maxLen] = carry;
    return new Base256Number(result);
  }

  sub(other: Base256Number): Base256Number {
    if (this.compare(other) < 0) {
      return Base256Number.zero();
    }
    const a = this.digits;
    const b = other.digits;
    const result = new Array<number>(a.length).fill(0);
    let borrow = 0;
    for (let i = 0; i < a.length; i++) {
      let diff = (a[i] ?? 0) - (b[i] ?? 0) - borrow;
      if (diff < 0) {
        diff += BASE;
        borrow = 1;
      } else {
        borrow = 0;
      }
      result[i] = diff;
    }
    return new Base256Number(result);
  }

  square(): Base256Number {
    const dest = new Array<number>(this.digits.length * 2 + 2).fill(0);
    const len = squareInto(this.digits, this.digits.length, dest);
    return new Base256Number(dest.slice(0, len));
  }

  modMersenne(p: number): Base256Number {
    const work = this.digits.slice();
    const scratch = new Array<number>(work.length + 8).fill(0);
    const modulus = buildMersenneDigits(p);
    const len = modMersenneInPlace(work, work.length, p, modulus, scratch);
    return new Base256Number(work.slice(0, len));
  }

  bitLength(): number {
    return bitLengthOf(this.digits, this.digits.length);
  }

  toDecimalString(): string {
    if (this.isZero()) {
      return '0';
    }
    let value = this.digits.slice();
    let len = value.length;
    const digits: string[] = [];
    while (!isZeroDigits(value, len)) {
      let remainder = 0;
      const out = new Array<number>(len).fill(0);
      for (let i = len - 1; i >= 0; i--) {
        const cur = remainder * BASE + (value[i] ?? 0);
        out[i] = Math.floor(cur / 10);
        remainder = cur % 10;
      }
      digits.push(String(remainder));
      value = out;
      len = trimLength(value, len);
    }
    return digits.reverse().join('');
  }
}
