# Mersenne-prím generátor — Dokumentáció

## Marin Mersenne

**Marin Mersenne** (született 1588. szeptember 8., meghalt 1648. szeptember 1.) francia minimita szerzetes, matematikus és zeneelméleti szakember. A \(M_p = 2^p - 1\) alakú számokat róla nevezték el **Mersenne-számoknak**. Ha \(p\) prím, és \(M_p\) is prím, akkor \(M_p\) **Mersenne-prím**.

A Mersenne-prímek hivatalos leírása:

https://en.wikipedia.org/wiki/Mersenne_prime

Magyar összefoglaló:

https://hu.wikipedia.org/wiki/Mersenne-pr%C3%ADm

Ismert Mersenne-prímek és a kapcsolódó felfedező munka (GIMPS):

https://www.mersenne.org/primes/

---

## Édouard Lucas és Derrick Henry Lehmer

**Édouard Lucas** (született 1842. április 4., meghalt 1891. október 3.) francia matematikus, aki a Mersenne-számok vizsgálatára alkalmas sorozatokat tanulmányozta.

**Derrick Henry Lehmer** (született 1905. február 23., meghalt 1991. május 22.) amerikai matematikus, aki Lucas ötleteiből kialakította a modern **Lucas–Lehmer prímszámtesztet** Mersenne-számokra.

A Lucas–Lehmer teszt működése:

https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test

### A teszt (összefoglaló)

Legyen \(p\) páratlan prím. Definiáljuk a következő sorozatot:

- \(s_0 = 4\)
- \(s_{i+1} = (s_i^2 - 2) \bmod (2^p - 1)\)

Ekkor \(2^p - 1\) akkor és csak akkor prím, ha \(s_{p-2} = 0\).

\(p = 2\) esetén \(M_2 = 3\) külön, triviális esetként prím.

Ez az oldal a jelölt kitevőket (\(p\)) szitával válogatja, majd minden prím \(p\)-re Lucas–Lehmer tesztet futtat a megadott felső határig.

---

## Egyedi 256-os alapú aritmetika

A JavaScript natív `BigInt` típusa tetszőlegesen nagy egészeket tud tárolni. A **Base-256 custom arythmetics** motor ehelyett minden nagy egészet **256-os számrendszerben** tárolt számjegy-tömbként kezel (minden számjegy egy bájt, érték 0…255), a történelmi DOS Pascal számjegytömbös nagyegész-megközelítés szellemében.

A Lucas–Lehmerhez használt műveletek ezen a reprezentáción:

- összeadás és kivonás átvitellel / kölcsönzéssel
- négyzetre emelés (a számjegytömb önmagával való szorzása)
- maradékképzés egy Mersenne-szám, \(2^p - 1\) szerint (a magas bitek visszahajtása az alsó \(p\) bitre)
- tizes számrendszerre váltás a megjelenítéshez ismételt 10-zel osztással

Mivel minden számjegy 8 bitet hordoz, kevesebb számjegy kell, mint a 10-es rendszerben. A négyzetre emelés és a maradékképzés végig a számjegytömb-aritmetikában marad; csak a végső, kiírt \(M_p\) érték jelenik meg megszokott 10-es számjegyekkel.

Használja a **Native BigInt** opciót a sebességért, vagy a **Base-256 custom arythmetics** útvonalat, hogy ugyanazzal a Lucas–Lehmer logikával összehasonlíthassa az oktatási célú számjegytömbös megoldást.
