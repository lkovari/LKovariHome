# Mersenne Prime Generator — Documentation

## Marin Mersenne

**Marin Mersenne** (born 8 September 1588, died 1 September 1648) was a French Minim friar, mathematician, and music theorist. Numbers of the form \(M_p = 2^p - 1\) are named **Mersenne numbers** after him. When \(p\) is prime and \(M_p\) is also prime, \(M_p\) is called a **Mersenne prime**.

Official description of Mersenne primes:

https://en.wikipedia.org/wiki/Mersenne_prime

Known Mersenne primes and related discovery work (GIMPS):

https://www.mersenne.org/primes/

---

## Édouard Lucas and Derrick Henry Lehmer

**Édouard Lucas** (born 4 April 1842, died 3 October 1891) was a French mathematician who studied sequences used to test Mersenne numbers.

**Derrick Henry Lehmer** (born 23 February 1905, died 22 May 1991) was an American mathematician who refined Lucas’s ideas into the modern **Lucas–Lehmer primality test** for Mersenne numbers.

How the Lucas–Lehmer test works:

https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test

### The test (summary)

Let \(p\) be an odd prime. Define the sequence:

- \(s_0 = 4\)
- \(s_{i+1} = (s_i^2 - 2) \bmod (2^p - 1)\)

Then \(2^p - 1\) is prime if and only if \(s_{p-2} = 0\).

For \(p = 2\), \(M_2 = 3\) is prime by a separate trivial case.

This page sieves candidate exponents \(p\), then runs Lucas–Lehmer for each prime \(p\) up to the chosen maximum.

---

## Custom base-256 arithmetic

JavaScript’s native `BigInt` can hold arbitrarily large integers. The **Base-256 custom arythmetics** engine instead stores each large integer as an array of digits in **base 256** (each digit is one byte, values 0…255), in the same spirit as historical DOS Pascal digit-array big-integer code.

Operations used by Lucas–Lehmer on that representation:

- addition and subtraction with carry / borrow
- squaring (schoolbook multiplication of the digit array by itself)
- modular reduction modulo a Mersenne number \(2^p - 1\) (fold high bits into the low \(p\) bits)
- conversion to decimal for display by repeated division by 10

Because each digit packs 8 bits, fewer digits are needed than in base 10. Squaring and reduction stay entirely in digit-array arithmetic; only the final printed \(M_p\) value is shown in everyday base-10 digits.

Use **Native BigInt** for speed, or **Base-256 custom arythmetics** to compare the educational digit-array path with the same Lucas–Lehmer logic.
