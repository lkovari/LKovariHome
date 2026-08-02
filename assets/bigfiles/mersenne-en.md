Mersenne Prime Generator — Documentation
========================================

Marin Mersenne
-------------
Marin Mersenne (born 8 September 1588, died 1 September 1648) was a French
Minim friar, mathematician, and music theorist. Numbers of the form

  M_p = 2^p - 1

are named Mersenne numbers after him. When p is prime and M_p is also prime,
M_p is called a Mersenne prime.

Official description of Mersenne primes:
  https://en.wikipedia.org/wiki/Mersenne_prime

Known Mersenne primes and related discovery work (GIMPS):
  https://www.mersenne.org/primes/


Edouard Lucas and Derrick Henry Lehmer
--------------------------------------
Edouard Lucas (born 4 April 1842, died 3 October 1891) was a French
mathematician who studied sequences used to test Mersenne numbers.

Derrick Henry Lehmer (born 23 February 1905, died 22 May 1991) was an American
mathematician who refined Lucas's ideas into the modern Lucas-Lehmer
primality test for Mersenne numbers.

How the Lucas-Lehmer test works:
  https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test


The Lucas-Lehmer test (exact definition used here)
--------------------------------------------------
Let p be an odd prime. Define the sequence:

  s_0 = 4
  s_(i+1) = (s_i^2 - 2) mod (2^p - 1)

Then 2^p - 1 is prime if and only if s_(p-2) = 0.

For p = 2, M_2 = 3 is prime by a separate trivial case.

Both engines on this page implement exactly this recurrence. They differ only
in how large integers and the modular reduction are represented and computed.


Shared search pipeline (both engines)
-------------------------------------
1. Clamp the user max exponent P (default 256, hard maximum 100000).
2. Sieve of Eratosthenes builds the list of prime candidates p with
   2 <= p <= P. Only prime exponents can yield a Mersenne prime
   (except the trivial handling of p = 2).
3. For each prime p, run the selected engine's Lucas-Lehmer test.
4. If the test succeeds, compute the decimal string of M_p = 2^p - 1 and
   append one line:  P=<p>  M=<decimal>
5. Stop uses an AbortSignal: the loop and (where applicable) the inner LL
   iterations check abort and exit without finishing the remaining work.
6. Elapsed time resets on every Start. Clear empties the result area.
   Save downloads mersenne-primes-YYYYMMDD-HHMMSS.txt
   (no spaces in the timestamp).


========================================================================
NATIVE BIGINT METHOD — HOW IT WORKS IN DETAIL
========================================================================

What BigInt is
--------------
JavaScript BigInt is a built-in arbitrary-precision integer type. A value
such as 4n or (1n << 61n) - 1n is an exact integer of any bit length the
runtime can allocate. There is no custom digit array: the engine stores s
and M_p = 2^p - 1 directly as bigint values.


Step A — build the modulus
--------------------------
  M_p = 2^p - 1 = (1n << BigInt(p)) - 1n

In binary this is p consecutive ones.
Example: p = 5  =>  M_5 = 31 = 0b11111


Step B — optional trial factoring (exact early reject)
------------------------------------------------------
Before the expensive Lucas-Lehmer loop, the BigInt path searches for a
small proper factor of M_p.

Any prime factor of 2^p - 1 must be of the form

  q = 2*k*p + 1

for some integer k >= 1, and (for odd p) such factors satisfy

  q ≡ 1 or 7  (mod 8)

The implementation:

  - tries k = 1, 2, ... with q = 2*k*p + 1 <= 2000000
  - skips q not congruent to 1 or 7 mod 8
  - skips / stops when q >= M_p (so M_p itself is never treated as a
    "factor" that would falsely mark a prime composite)
  - if M_p mod q = 0 for some proper q, then M_p is composite
    -> skip Lucas-Lehmer and return false

This does not change the mathematical result: finding a factor proves
compositeness exactly; finding none means the full Lucas-Lehmer test
must still run.


Step C — Lucas-Lehmer with Mersenne fold reduction
--------------------------------------------------
Initialize s = 4n. Repeat (p - 2) times:

  t = s * s - 2
  s = t mod M_p

Instead of relying only on a general big-integer remainder, reduction
modulo M_p = 2^p - 1 uses the bit-fold identity (exact for this modulus):

  While t > M_p:
    t = (t AND M_p) + (t >> p)

  Then if t = M_p, set t = 0; otherwise keep t.

Why this equals t mod (2^p - 1):
  Write t = q * 2^p + r with 0 <= r < 2^p.
  Then t = q*(M_p + 1) + r = q*M_p + (q + r),
  so t ≡ q + r  (mod M_p).
  Folding high bits into the low p bits implements that identity.

Negative intermediates (possible if s*s - 2 < 0) are normalized into
the range {0, ..., M_p - 1} before continuing.

After (p - 2) steps, M_p is prime iff s = 0n.


Step D — decimal output
-----------------------
When a hit is found, M_p.toString(10) produces the base-10 digit string
for the UI / save file.


Execution model (BigInt UI path)
--------------------------------
- Work runs in a Web Worker when available, so the main UI thread stays
  responsive.
- Abort terminates the worker immediately.
- Cooperative yielding every few candidates keeps progress messages flowing.
- If the Worker cannot start, the same BigInt algorithm falls back to the
  main thread.


Source modules (BigInt)
-----------------------
  bigint-lucas-lehmer.ts     — fold reduction + Lucas-Lehmer
  mersenne-trial-factor.ts   — 2*k*p+1 trial factoring
  mersenne.worker.ts         — off-main-thread search loop


========================================================================
BASE-65536 CUSTOM ARYTHMETICS — HOW IT WORKS IN DETAIL
========================================================================

Design goal
-----------
Reimplement large-integer Lucas-Lehmer without using BigInt inside the LL
loop, using an explicit digit array in radix

  B = 65536 = 2^16

This mirrors historical DOS Pascal "limb" / digit-array big-integer style,
with a wider limb than classic base 256 for fewer digits and faster
schoolbook squaring.

The final printed M_p is still converted to ordinary base-10 digits for
display.


Digit representation
--------------------
  Base:                 B = 65536
  Bits per digit/limb:  16
  Digit values:         0 ... 65535
  Endianness:           little-endian array — index 0 is the least
                        significant limb

Example: decimal 100000 in base 65536 is roughly limbs [34464, 1]
because 1*65536 + 34464 = 100000.

A number X with limbs d_0, d_1, ..., d_(n-1) means:

  X = d_0 + d_1*65536 + d_2*65536^2 + ... + d_(n-1)*65536^(n-1)


Building M_p = 2^p - 1 as limbs
-------------------------------
2^p - 1 is p ones in binary. Packed into 16-bit limbs:

  - floor(p / 16) full limbs equal to 0xFFFF (65535)
  - if p mod 16 = r > 0, one high limb equal to 2^r - 1


Core operations (exact integer arithmetic)
------------------------------------------
Split / carry.
  Any non-negative integer value is split as:
    low   = value mod 65536
    carry = floor(value / 65536)
  (implemented with Math.floor, not 32-bit bitwise ops, so products larger
  than 2^31-1 stay exact in JS number safe-integer range for a single
  limb*limb product).

Addition / subtraction.
  Limb-wise with carry / borrow, same as pencil-and-paper in base 65536.

Squaring (schoolbook).
  For limbs a_0, ..., a_(n-1), compute all products a_i * a_j, accumulate
  into position i+j, propagate carry. Result length is about 2n limbs.
  This computes s^2 exactly.

Subtract 2.
  In-place subtraction of the constant 2 from the squared value (s^2 - 2).

Mersenne modular reduction (fold on limbs).
  Same mathematical fold as BigInt, but on the digit array:
    - Low part: keep the low p bits (mask with the limb encoding of M_p)
    - High part: shift the whole value right by p bits
      (limb shift floor(p/16) plus bit shift p mod 16)
    - Add low + high; repeat while bit-length > p
    - If equal to M_p, become 0; if greater, subtract M_p once
  This yields exactly (s^2 - 2) mod (2^p - 1).


Lucas-Lehmer loop (custom)
--------------------------
1. Start with limbs representing s = 4.
2. For i = 1 ... p-2:
     - square into a work buffer
     - subtract 2
     - reduce mod M_p by limb fold
     - swap buffers (ping-pong) so the next iteration reads the new s
     - if Stop was pressed (AbortSignal), exit immediately
       (checked every LL iteration)
3. M_p is prime iff the final limbs are all zero.


Decimal conversion (display only)
---------------------------------
To show M_p in base 10, repeatedly divide the limb number by 10, collecting
remainders (least significant decimal digit first), then reverse.
BigInt is not used inside the LL loop; conversion runs only when formatting
a found prime (or when generating M_p for display).


Execution model (Base-65536 UI path)
------------------------------------
- Runs on the main thread (educational / comparable path).
- Yields to the event loop after every candidate p, and checks abort
  inside each LL iteration, so Stop reacts quickly even during a long test.
- Same sieve and same Lucas-Lehmer mathematics as BigInt; only the
  big-integer engine differs.


Source modules (Base-65536)
---------------------------
  base65536-number.ts        — limbs, square, fold mod, LL fast loop,
                               decimal conversion
  base65536-lucas-lehmer.ts  — prime-exponent checks + engine facade


========================================================================
SIDE-BY-SIDE COMPARISON
========================================================================

Integer storage
  Native BigInt:     engine bigint
  Base-65536:        number[] limbs, base 2^16

LL formula
  Native BigInt:     s <- (s^2 - 2) mod M_p
  Base-65536:        same

Mod M_p
  Native BigInt:     bit fold on bigint
  Base-65536:        limb fold (shift / mask / add)

Before LL
  Native BigInt:     trial factor 2*k*p+1
  Base-65536:        direct LL (no trial factoring on this path)

Threading
  Native BigInt:     Web Worker when possible
  Base-65536:        main thread

Stop
  Native BigInt:     abort + worker terminate; LL checks signal
  Base-65536:        abort every LL step + yield after every p

Typical speed
  Native BigInt:     faster for large P
  Base-65536:        slower; clearer digit-array model

Correctness
  Native BigInt:     exact
  Base-65536:        exact (same primes)

Both options must agree on the known Mersenne exponents through 127
(and on compositeness of cases such as p = 11 or p = 67).


How to use the page
-------------------
1. Choose Native BigInt or Base-65536 custom arythmetics.
2. Set max exponent P (default 256, max 100000).
3. Start  — clears previous results and runs the search; primes stream
            into the text area.
4. Stop   — aborts as soon as the current engine can observe the signal.
5. Clear  — empties the result area when idle.
6. Save   — downloads the current results as
            mersenne-primes-<datetime>.txt
