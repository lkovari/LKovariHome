Mersenne-prím generátor — Dokumentáció
======================================

Marin Mersenne
-------------
Marin Mersenne (született 1588. szeptember 8., meghalt 1648. szeptember 1.)
francia minimita szerzetes, matematikus és zeneelméleti szakember.
A

  M_p = 2^p - 1

alakú számokat róla nevezték el Mersenne-számoknak. Ha p prím, és M_p is
prím, akkor M_p Mersenne-prím.

A Mersenne-prímek hivatalos leírása:
  https://en.wikipedia.org/wiki/Mersenne_prime

Magyar összefoglaló:
  https://hu.wikipedia.org/wiki/Mersenne-pr%C3%ADm

Ismert Mersenne-prímek és a kapcsolódó felfedező munka (GIMPS):
  https://www.mersenne.org/primes/


Édouard Lucas és Derrick Henry Lehmer
-------------------------------------
Édouard Lucas (született 1842. április 4., meghalt 1891. október 3.)
francia matematikus, aki a Mersenne-számok vizsgálatára alkalmas
sorozatokat tanulmányozta.

Derrick Henry Lehmer (született 1905. február 23., meghalt 1991. május 22.)
amerikai matematikus, aki Lucas ötleteiből kialakította a modern
Lucas-Lehmer prímszámtesztet Mersenne-számokra.

A Lucas-Lehmer teszt működése:
  https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test


A Lucas-Lehmer teszt (az itt használt pontos definíció)
------------------------------------------------------
Legyen p páratlan prím. Definiáljuk a következő sorozatot:

  s_0 = 4
  s_(i+1) = (s_i^2 - 2) mod (2^p - 1)

Ekkor 2^p - 1 akkor és csak akkor prím, ha s_(p-2) = 0.

p = 2 esetén M_2 = 3 külön, triviális esetként prím.

Az oldal mindkét motorja pontosan ezt a rekurziót valósítja meg. Csak abban
különböznek, hogyan ábrázolják és számolják a nagy egészeket, illetve a
maradékképzést.


Közös keresési folyamat (mindkét motor)
---------------------------------------
1. A felhasználó max kitevőjét (P) korlátozzuk (alapértelmezés 256,
   kemény felső határ 100000).
2. Eratoszthenész-szita előállítja a prím jelölteket: 2 <= p <= P.
   Mersenne-prím csak prím p kitevőnél lehetséges (p = 2 külön kezelt).
3. Minden prím p-re lefut a választott motor Lucas-Lehmer tesztje.
4. Találat esetén kiszámoljuk M_p = 2^p - 1 tizes alakját, és egy sort
   írunk:  P=<p>  M=<decimal>
5. A Stop AbortSignal-t használ: a ciklus (és ahol van, a belső LL
   lépések) figyelik a megszakítást, és nem fejezik be a fennmaradó munkát.
6. Az Elapsed idő minden Startnál nullázódik. A Clear üríti az
   eredménymezőt. A Save letölti a
   mersenne-primes-YYYYMMDD-HHMMSS.txt fájlt
   (a dátum-idő részben nincsenek szóközök).


========================================================================
NATIVE BIGINT MÓDSZER — RÉSZLETES MŰKÖDÉS
========================================================================

Mi a BigInt?
------------
A JavaScript BigInt beépített, tetszőleges pontosságú egész típus.
A 4n vagy (1n << 61n) - 1n érték pontos egész, a futtatókörnyezet
memóriakorlátáig. Nincs saját számjegytömb: az s és az M_p = 2^p - 1
közvetlenül bigint értékként tárolódik.


A. lépés — a modulus felépítése
-------------------------------
  M_p = 2^p - 1 = (1n << BigInt(p)) - 1n

Binárisan ez p darab egymást követő egybit.
Példa: p = 5  =>  M_5 = 31 = 0b11111


B. lépés — opcionális próbafaktorizálás (pontos korai elvetés)
-------------------------------------------------------------
A drága Lucas-Lehmer ciklus előtt a BigInt útvonal kis, valódi osztót
keres M_p-hez.

A 2^p - 1 bármely prímosztója

  q = 2*k*p + 1

alakú (k >= 1), és (páratlan p esetén)

  q ≡ 1 vagy 7  (mod 8)

Az implementáció:

  - végigpróbálja a k = 1, 2, ... értékeket, amíg q = 2*k*p + 1 <= 2000000
  - kihagyja a 8-cal osztva 1-gyel vagy 7-tel nem kongruens q-kat
  - leáll / kihagy, ha q >= M_p (így maga az M_p nem számít „osztónak”,
    ami tévesen összetettnek minősítene egy prímet)
  - ha valamely valódi q-ra M_p mod q = 0, akkor M_p összetett
    -> Lucas-Lehmer kimarad, visszatérés: false

Ez nem változtatja a matematikai eredményt: osztó megtalálása pontosan
bizonyítja az összetettséget; ha nincs találat, a teljes Lucas-Lehmer
továbbra is lefut.


C. lépés — Lucas-Lehmer Mersenne-összecsukásos maradékkal
---------------------------------------------------------
Kezdet: s = 4n. (p - 2)-szer ismételve:

  t = s * s - 2
  s = t mod M_p

Az általános nagyegész maradék helyett (pontosabban: azzal matematikailag
ekvivalens módon) az M_p = 2^p - 1 szerinti redukció bit-összecsukást
használ:

  Amíg t > M_p:
    t = (t AND M_p) + (t >> p)

  Ha ezután t = M_p, akkor t = 0; különben t marad.

Miért egyenlő ez t mod (2^p - 1)-gyel?
  Ha t = q * 2^p + r és 0 <= r < 2^p, akkor
  t = q*(M_p + 1) + r = q*M_p + (q + r),
  tehát t ≡ q + r  (mod M_p).
  A magas bitek visszahajtása az alsó p bitre ezt valósítja meg.

Negatív köztes érték (s*s - 2 < 0) a {0, ..., M_p - 1} tartományba kerül
normalizálásra.

(p - 2) lépés után M_p akkor prím, ha s = 0n.


D. lépés — tizes megjelenítés
-----------------------------
Találatkor M_p.toString(10) adja a UI / mentés tizes számjegyeit.


Futási modell (BigInt UI)
-------------------------
- Ha lehet, Web Workerben fut, így a fő UI-szál reszponzív marad.
- Megszakításkor a worker azonnal leáll (terminate).
- Időnkénti yield segíti a progress üzeneteket.
- Ha a Worker nem indul, ugyanez a BigInt algoritmus a fő szálon fut tovább.


Forrásmodulok (BigInt)
----------------------
  bigint-lucas-lehmer.ts     — összecsukásos redukció + Lucas-Lehmer
  mersenne-trial-factor.ts   — 2*k*p+1 próbafaktorizálás
  mersenne.worker.ts         — fő szálon kívüli keresési ciklus


========================================================================
BASE-65536 CUSTOM ARYTHMETICS — RÉSZLETES MŰKÖDÉS
========================================================================

Cél
---
A nagyegész Lucas-Lehmer újraimplementálása úgy, hogy az LL ciklusban ne
BigInt legyen, hanem explicit számjegytömb

  B = 65536 = 2^16

alapban. Ez a történelmi DOS Pascal „limb” / számjegytömbös nagyegész
stílust követi; a klasszikus 256-os alapnál szélesebb limb kevesebb
számjegyet és gyorsabb iskolai négyzetre emelést ad.

A kiírt M_p továbbra is szokásos 10-es számjegyekkel jelenik meg.


Számjegy-ábrázolás
------------------
  Alap:                     B = 65536
  Bitek számjegyenként:     16
  Számjegyértékek:          0 ... 65535
  Bájtsorrend:              little-endian tömb — a 0 index a
                            legkisebb helyiértékű limb

Példa: a 100000 tizes szám 65536-os alakban nagyjából [34464, 1],
mert 1*65536 + 34464 = 100000.

Az X szám d_0, d_1, ..., d_(n-1) limbekkel:

  X = d_0 + d_1*65536 + d_2*65536^2 + ... + d_(n-1)*65536^(n-1)


M_p = 2^p - 1 felépítése limbekként
-----------------------------------
A 2^p - 1 binárisan p darab 1-es. 16 bites limbekbe csomagolva:

  - floor(p / 16) teljes limb, értéke 0xFFFF (65535)
  - ha p mod 16 = r > 0, egy felső limb: 2^r - 1


Alapműveletek (pontos egész aritmetika)
---------------------------------------
Szétválasztás / átvitel.
  Tetszőleges nemnegatív value:
    low   = value mod 65536
    carry = floor(value / 65536)
  (Math.floor alapú; nem 32 bites bitművelet, így a 2^31-1 feletti
  limb*limb szorzat is pontos marad a JS biztonságos egész tartományában.)

Összeadás / kivonás.
  Limbénkénti átvitellel / kölcsönzéssel — mint papíron, 65536-os
  rendszerben.

Négyzetre emelés (iskolai).
  Az a_0, ..., a_(n-1) limbekre minden a_i * a_j szorzat az i+j helyre
  gyűlik, majd átvitel. Az eredmény hossza körülbelül 2n limb.
  Ez pontosan s^2.

2 kivonása.
  Helyben kivonjuk a konstans 2-t (s^2 - 2).

Mersenne-maradék (összecsukás limbeken).
  Matematikailag ugyanaz a fold, mint BigIntnél, számjegytömbön:
    - Alsó rész: az alsó p bit megtartása (M_p limb-maszkjával)
    - Felső rész: a teljes érték jobbra tolása p bittel
      (floor(p/16) limb + p mod 16 bit)
    - Alsó + felső összeadása; ismétlés, amíg a bit hossz > p
    - Ha egyenlő M_p-vel -> 0; ha nagyobb -> egyszer kivonjuk M_p-t
  Eredmény: pontosan (s^2 - 2) mod (2^p - 1).


Lucas-Lehmer ciklus (custom)
----------------------------
1. Kezdet: az s = 4 limb-ábrázolása.
2. i = 1 ... p-2:
     - négyzetre emelés munkapufferbe
     - 2 kivonása
     - redukció M_p szerint limb-összecsukással
     - pufferek cseréje (ping-pong), hogy a következő kör az új s-t olvassa
     - ha Stop történt (AbortSignal), azonnali kilépés
       (minden LL lépésben ellenőrizve)
3. M_p prím, ha a végső limbek mind nullák.


Tizes konverzió (csak megjelenítés)
-----------------------------------
M_p 10-es kiírásához a limb-számot ismételten 10-zel osztjuk, a
maradékokat gyűjtjük (először a legkisebb helyiértékű tizes számjegy),
majd megfordítjuk. Az LL ciklusban nincs BigInt; a konverzió csak
találat formázásakor (vagy M_p megjelenítésekor) fut.


Futási modell (Base-65536 UI)
-----------------------------
- A fő szálon fut (oktatási / összehasonlítható útvonal).
- Minden jelölt p után yield, és az LL minden lépésében abort-ellenőrzés
  -> a Stop hosszú teszt közben is gyorsan hat.
- Ugyanaz a szita és ugyanaz a Lucas-Lehmer matematika, mint BigIntnél;
  csak a nagyegész motor más.


Forrásmodulok (Base-65536)
--------------------------
  base65536-number.ts        — limbek, négyzet, fold mod, gyors LL,
                               tizes konverzió
  base65536-lucas-lehmer.ts  — prím-kitevő ellenőrzés + motor felület


========================================================================
ÖSSZEHASONLÍTÁS
========================================================================

Egész tárolás
  Native BigInt:     bigint
  Base-65536:        number[] limbek, alap 2^16

LL képlet
  Native BigInt:     s <- (s^2 - 2) mod M_p
  Base-65536:        ugyanaz

Mod M_p
  Native BigInt:     bit-összecsukás bigint-en
  Base-65536:        limb-összecsukás (shift / maszk / összeadás)

LL előtt
  Native BigInt:     2*k*p+1 próbafaktorizálás
  Base-65536:        közvetlen LL (ezen az úton nincs TF)

Szálkezelés
  Native BigInt:     Web Worker, ha lehet
  Base-65536:        fő szál

Stop
  Native BigInt:     abort + worker leállítás; LL figyeli a jelet
  Base-65536:        abort minden LL lépésben + yield minden p után

Tipikus sebesség
  Native BigInt:     nagy P-nél gyorsabb
  Base-65536:        lassabb; átláthatóbb számjegytömb-modell

Helyesség
  Native BigInt:     pontos
  Base-65536:        pontos (ugyanazok a prímek)

Mindkét opciónak egyeznie kell az ismert Mersenne-kitevőkön 127-ig
(és összetett eseteken, pl. p = 11 vagy p = 67).


Az oldal használata
-------------------
1. Válassza a Native BigInt vagy a Base-65536 custom arythmetics opciót.
2. Állítsa be a max kitevőt P (alap 256, max 100000).
3. Start  — törli a korábbi eredményeket, indítja a keresést; a prímek
            soronként jelennek meg.
4. Stop   — amint a motor észleli a jelet, megszakít.
5. Clear  — üresjáratban üríti az eredménymezőt.
6. Save   — az aktuális eredményt
            mersenne-primes-<datetime>.txt néven tölti le.
