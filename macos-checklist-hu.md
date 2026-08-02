# macOS ellenőrzőlista (magyar): a programok bezáródnak fedélcsukás után

Ez a fájl a `macos-checklist.md` részletesebb magyar változata. Célja: megérteni, **mi történik**, **mi mire való**, és **melyik parancs / beállítás mit javít**.

Ellenőrzött gép: MacBook Pro (Apple Silicon / M3), aktuális macOS, kb. 99 nap uptime (újraindítás nélkül).

---

## 1. Mi a pontos probléma?

### Amit várnál
Bezárod a fedelet Cursorral, VS Code-dal, böngészővel nyitva. Órák vagy egy nap múlva kinyitod → a programok **még futnak**, az ablakok visszajönnek.

### Ami valójában történik a Maceden
A fedélcsukás **nem** azt jelenti, hogy a gép „bekapcsolva marad, mint egy asztali PC”. A macOS:

1. **Alvásba (sleep)** megy – a processzek elvileg a memóriában maradnak.
2. A te gépeden ezután **szinte azonnal mély készenléti / hibernáló (standby / hibernate)** állapotba vált.
3. Órák / nap után felébredéskor a Cursor, VS Code, Chromium-alapú böngészők (Electron) gyakran **nem élik túl** ezt a mély alvást: a folyamatok eltűnnek vagy nem állnak helyre.

### Fontos megkülönböztetés

| Állapot | Mit csinál | Appok sorsa tipikusan |
| --- | --- | --- |
| **Könnyű alvás (sleep)** | RAM áram alatt marad, CPU majdnem áll | Appok általában megmaradnak |
| **Standby / mély alvás** | Mélyebb energiatakarékosság | Electron appok gyakrabban elhalnak |
| **Hibernate (hibernatemode 3)** | RAM tartalma lemezre íródik, a RAM áramellátása elvágható | Felébredés = „majdnem újraindítás” a processzek szempontjából |
| **Valódi újraindítás** | Teljes boot | Minden app kilép; csak session restore hozza vissza |

A géped **nem** indult újra gyakran (uptime ~99 nap), tehát nem „normál reboot” öli meg az appokat, hanem a **mély alvás + memória-nyomás**.

---

## 2. Fogalomtár – mi mire jó?

### `pmset`
A macOS energiakezelő parancssori eszköze. Ezzel látod és állítod: alvás, standby, hibernálás, Low Power Mode, Power Nap stb.

| Parancs | Mire jó |
| --- | --- |
| `pmset -g` | Jelenleg **használatban lévő** energiabeállítások (AC vagy akkumulátor szerint) |
| `pmset -g custom` | **Külön** Battery Power és AC Power profilok |
| `pmset -g log` | Alvás / ébredés / hibernálás napló (miért aludt, miért kelt) |
| `sudo pmset -a ...` | Beállítás **minden** áramforrásra (`-a` = all) |
| `sudo pmset -b ...` | Csak **akkumulátorra** (`-b` = battery) |
| `sudo pmset -c ...` | Csak **hálózati tápegységre** (`-c` = charger / AC) |
| `sudo pmset -a restoredefaults` | Apple gyári energiabeállítások visszaállítása |

### Alvás / hibernálás kulcsparaméterek

| Paraméter | Mit jelent | Miért fontos nálad |
| --- | --- | --- |
| `hibernatemode = 3` | „Safe sleep”: alváskor a RAM tartalma a lemezre (`sleepimage`) is kiíródik | Hosszú alvás után a rendszer lekapcsolhatja a RAM-ot; felébredéskor lemezről tölt vissza |
| `standby = 1` | Engedélyezett a mély készenléti (standby) út | A gép nem marad örökké könnyű alvásban |
| `standbydelaylow` | Mennyi másodperc után menjen standby-ba (alacsonyabb töltöttség / bizonyos feltételek) | Nálad **0** → gyakorlatilag azonnali mély alvás |
| `standbydelayhigh` | Ugyanígy, magasabb töltöttség / másik küszöb | Nálad **0** → ugyanaz a baj |
| `sleep` | Ennyi perc tétlenség után rendszer-alvás | Akkun: `1` = 1 perc → nagyon gyors alvás |
| `displaysleep` | Kijelző kikapcsolása percben | Nem öli meg az appokat önmagában |
| `lowpowermode` | Alacsony fogyasztású mód | `1` akkun → agresszívebb alvás / energiatakarékosság |
| `powernap` | Power Nap: alvás közben időszakos „félig ébredés” (mail, frissítések) | Gyakori DarkWake a naplódban |
| `tcpkeepalive` | Hálózat / kapcsolat ébrentartása alvás közben | Általában jó hagyni |
| `womp` | Wake on LAN / hálózati ébresztés | AC-n tipikusan bekapcsolva |
| `disksleep` | Merevlemez alvása | SSD-nél kevésbé kritikus |

**Normál standby késleltetés** tipikusan órákban van (pl. `10800` = 3 óra). A te gépeden `0` / `0` – ez a legerősebb bizonyíték.

### Naplóban megjelenő kifejezések

| Kifejezés | Jelentés |
| --- | --- |
| `Clamshell Sleep` | Fedélcsukás miatti alvás |
| `DarkWake` | Rövid, „háttér” ébredés kijelző nélkül (karbantartás, Power Nap) |
| `FullWake` | Teljes ébredés (te nyitottad ki / használtad) |
| `HibernateStats` | Hibernálás / standby statisztika; itt látod a `standbydelay*` értékeket |
| `Maintenance Sleep` | Karbantartás után visszamenés alvásba |
| `jetsam` / `JetsamEvent` | A rendszer **memóriahiány** miatt folyamatokat öl meg |
| `hibernate user wake` | A kernel szerint hibernálásból ébredtél, nem csak könnyű alvásból |

### Session / ablak-visszaállítás

| Beállítás | Mire jó |
| --- | --- |
| `TALLogoutSavesState` | Kilépéskor / session mentéskor mentse-e az ablakállapotot (`1` = igen, nálad jó) |
| `NSQuitAlwaysKeepsWindows` | App kilépésekor maradjanak-e meg az ablakok a következő indításhoz |
| „Close windows when quitting an application” | Ha **be** van kapcsolva, kilépéskor elvesznek az ablakok |
| „Reopen windows when logging back in” | Bejelentkezéskor nyissa-e újra a korábbi appokat |

### Miért szenvednek a Cursor / VS Code / Chrome?

Ezek **Electron** (Chromium) alapú appok: sok helper process, nagy RAM. Mély hibernálás + memória-nyomás után gyakrabban „eltűnnek”, mint a natív kis macOS appok. Ez nem hiányzó jogosultság (Privacy), hanem alvásmélység + memória.

---

## 3. Mit találtunk ezen a gépen? (bizonyíték)

| Megfigyelés | Érték | Magyarázat |
| --- | --- | --- |
| Hibernate mód | `hibernatemode = 3` | Safe sleep aktív |
| Standby késleltetés | `standbydelaylow = 0`, `standbydelayhigh = 0` | **Rendellenes** – azonnali mély alvás |
| Standby | `standby = 1` | Mély alvás útvonal bekapcsolva |
| Low Power Mode (akku) | `lowpowermode = 1` | Akkun agresszívebb energiakezelés |
| Alvás akkun | `sleep = 1` | 1 perc tétlenség után alvás |
| Fedélcsukás példa | `2026-07-31 23:54` → ébredés `2026-08-02 09:27` | ~33 óra mély idle / clamshell |
| Memória-nyomás | `JetsamEvent-2026-08-01-005959.ips` | Éjszaka a rendszer memóriát szabadított (nagy fogyasztó: virtualizáció / VM) |
| Újraindítás | ~99 nap uptime | Nem reboot öli az appokat |

**Összegzés:** rövid fedélcsukásnál még „könnyű alvás” érzetű lehet; órák / nap után a `standbydelay = 0` miatt mély hibernálás + Electron resume-hiba → az appok nincsenek ott, amikor kinyitod.

---

## 4. Gyors diagnózis (először futtasd)

A zsh-ben **egyenként** másold be a blokkokat. Ne másolj `#` kommentes sorokat, ha a terminálod furcsán kezeli őket.

### 4.1 Energiaprofil – mi van most beállítva?

```bash
pmset -g
pmset -g custom
```

**Mire jó:** látod az aktuális és a Battery/AC külön profilokat (`lowpowermode`, `sleep`, `standby`, `hibernatemode`).

### 4.2 Standby késleltetés és alvásokok a naplóban

```bash
pmset -g log | grep HibernateStats | tail -20
pmset -g log | grep -E "Sleep|Wake|Hibernate|DarkWake|Clamshell" | tail -40
```

**Mire jó:**
- `HibernateStats`: megerősíti, hogy `standbydelaylow/high` még mindig `0`-e
- Sleep/Wake: fedélcsukás, DarkWake, FullWake idővonala

### 4.3 Memóriagyilkosságok (jetsam) és crash jelentések

```bash
ls -lt /Library/Logs/DiagnosticReports/JetsamEvent* 2>/dev/null | head
ls -lt ~/Library/Logs/DiagnosticReports/*.ips 2>/dev/null | head
```

**Mire jó:** ha fedélcsukás idején `JetsamEvent` keletkezett, a rendszer RAM-hiány miatt ölt folyamatokat (VM, böngésző, stb.).

### 4.4 VM / konténer + session restore

```bash
pgrep -lf -i 'Virtualization|qemu|UTM|Parallels|Docker|colima|multipass'
defaults read com.apple.loginwindow TALLogoutSavesState
defaults read -g NSQuitAlwaysKeepsWindows
```

**Mire jó:**
- Fut-e virtualizáció / Docker, ami RAM-ot zabál alvás alatt is
- Session mentés be van-e kapcsolva
- Ablakmegtartás be van-e állítva (`does not exist` = még nincs beállítva)

---

## 5. Javítási ellenőrzőlista (sorrendben)

Minden nagyobb lépés után tesztelj: hagyd nyitva a Cursort + böngészőt, csukd be a fedelet több órára, nyisd ki újra.

### 5.1 Standby késleltetés javítása (legfontosabb)

**Miért:** a `0` / `0` késleltetés miatt a gép azonnal mély standby/hibernate felé megy. Ha ezt órákra emeled, az appok sokkal nagyobb eséllyel túlélik az éjszakát.

```bash
pmset -g custom

sudo pmset -a standbydelaylow 10800
sudo pmset -a standbydelayhigh 86400

sudo pmset -a standby 1
sudo pmset -a hibernatemode 3

pmset -g custom
```

| Érték | Jelentés |
| --- | --- |
| `10800` | 3 óra (másodpercben) – alacsonyabb küszöb / battery-ish |
| `86400` | 24 óra – magasabb küszöb / hosszabb késleltetés |
| `standby 1` | Standby maradjon engedélyezve, de **késleltetve** |
| `hibernatemode 3` | Apple tipikus safe sleep (általában hagyd így) |

**Opcionális – maximális app-túlélés** (több akkuhasználat alvás közben):

```bash
sudo pmset -a standby 0
```

**Mire jó:** teljesen kikapcsolja a mély standby utat; tovább marad könnyebb alvásban.

Ellenőrzés a **következő** alvás/ébredés után:

```bash
pmset -g log | grep HibernateStats | tail -5
```

Itt már **nem** szabad `standbydelaylow=0 standbydelayhigh=0`-nak lennie.

---

### 5.2 Low Power Mode kikapcsolása, ha túl kell élniük az appoknak

**GUI:** Rendszerbeállítások → Akkumulátor → Alacsony fogyasztású mód → Ki.

```bash
pmset -g custom | grep -A20 "Battery Power"

sudo pmset -b lowpowermode 0
sudo pmset -c lowpowermode 0
```

**Mire jó:** Low Power Mode agresszívebbé teszi az alvást / energiatakarékosságot. Ha azt akarod, hogy Cursor/böngésző megmaradjon, kapcsold ki (legalább akkor, amikor számítógépen dolgozol és fedélcsukva hagysz mindent).

---

### 5.3 Ne hagyj nehéz terhelést futni fedélcsukás előtt

**Miért:** a gépeden éjszaka memória-nyomás volt; a legnagyobb fogyasztók között virtualizáció (VM) és böngésző/Cursor helperek voltak. A jetsam ilyenkor háttérfolyamatokat (és szélsőséges esetben appokat) ölhet.

Fedélcsukás előtt:

- [ ] UTM / Parallels / VMware / VirtualBuddy / Linux VM bezárása
- [ ] Docker Desktop / Colima / Lima / QEMU bezárása
- [ ] Felesleges Chrome/Edge profilok és nehéz tabok bezárása
- [ ] Felesleges Cursor / VS Code ablakok bezárása

```bash
ps -axo pid,rss,comm | sort -nrk2 | head -25
```

**Mire jó:** kiírja a legtöbb memóriát használó processzeket (`rss` = resident memory).

---

### 5.4 macOS ablak- / session-visszaállítás bekapcsolva

**GUI:**

- Rendszerbeállítások → Asztal és Dock → **Alkalmazás bezárásakor az ablakok is záródjanak be** → **Ki**
- Bejelentkezéskor / frissítés után: **Ablakok újranyitása bejelentkezéskor** → igen

```bash
defaults write -g NSQuitAlwaysKeepsWindows -bool true
defaults write com.apple.loginwindow TALLogoutSavesState -bool true
```

**Mire jó:**
- Ha egy app mégis kilép, a következő indításkor nagyobb eséllyel visszakapod az ablakokat
- Session mentés engedélyezve marad logout / session restore esetén

Ez **nem helyettesíti** az 5.1-et (az élő processzek megmaradását), de biztonsági háló.

---

### 5.5 App-specifikus beállítások

#### VS Code / Cursor
- Kapcsold be a hot exit / window restore funkciókat (`files.hotExit`, ablakok visszaállítása)
- Fedélcsukás előtt **ne** Force Quitolj
- Ha ébredés után nincs a Dockban: nyisd meg egyszer – a szerkesztőknek vissza kell jönniük, ha a hot exit működött

**Mire jó:** még ha a processz meg is halt, a fájlok/ablakok állapota lemezről visszatölthető.

#### Chrome / Edge / Brave
- Beállítások → Indításkor → **Folytatás onnan, ahol abbahagytad**
- Ne „Quit” menüponttal lépj ki, ha csak egy ablakot akartál zárni (a Quit az egész böngészőt kilövi)

#### Safari
- Beállítások → Általános → Safari megnyitása ezzel: **Az utolsó munkamenet összes ablaka**

---

### 5.6 Power Nap csökkentése (opcionális)

**Mikor:** ha a naplóban sok DarkWake van, és gyanítod, hogy ezek hozzájárulnak a memória-/ébredési problémákhoz. Általában nem kötelező.

**GUI:** Rendszerbeállítások → Akkumulátor → Beállítások → Hálózati hozzáférés miatti ébresztés.

```bash
sudo pmset -b powernap 0
sudo pmset -c powernap 0
```

**Mire jó:** kevesebb háttér-ébredés alvás közben (kevesebb mail/iCloud aktivitás alvás alatt).

---

### 5.7 Zárolóképernyő ≠ appkilépés

A felébredéskori jelszó **nem** zárja be az appokat. Ha teljes bejelentkező képernyőt látsz (nem csak zárolást):

**GUI:** Rendszerbeállítások → Zárolóképernyő → ha van „Kijelentkezés X perc tétlenség után”, kapcsold ki.

```bash
defaults read com.apple.loginwindow AutoLogOutDelay 2>/dev/null || echo "AutoLogOutDelay not set (good)"
```

**Mire jó:** ellenőrzi, van-e automatikus kijelentkezés (ami tényleg lezárná a sessiont).

---

### 5.8 Rossz ébredés után: mi volt az ok?

```bash
uptime
last reboot | head -5

pmset -g log | grep -E "Clamshell|Hibernate|Wake from|DarkWake to FullWake" | tail -30

ls -lt /Library/Logs/DiagnosticReports/JetsamEvent* 2>/dev/null | head -5
ls -lt ~/Library/Logs/DiagnosticReports/ | head -15
```

| Eredmény | Következtetés | Teendő |
| --- | --- | --- |
| `uptime` nullázódott | Reboot / frissítés / kernel panic | Kapcsold be az ablakok újranyitását bejelentkezéskor |
| Jetsam a fedélcsukás idején | Memóriaölés | VM/Docker ki, kevesebb böngészőtab |
| HibernateStats még mindig delay `0` | Az 5.1 nem ragadt meg | Újra futtasd a `sudo pmset ...` parancsokat |
| Nincs reboot, nincs jetsam, appok eltűntek | Mély standby + Electron resume hiba | 5.1: növeld / kapcsold ki a standby-t |

---

## 6. Ajánlott „stabil éjszakai” profil

Egyszerre beállítható „ésszerű” csomag:

```bash
sudo pmset -a standby 1
sudo pmset -a standbydelaylow 10800
sudo pmset -a standbydelayhigh 86400
sudo pmset -a hibernatemode 3
sudo pmset -b lowpowermode 0
sudo pmset -c lowpowermode 0
sudo pmset -b sleep 10
sudo pmset -c sleep 0
```

| Parancs | Mire jó |
| --- | --- |
| `standby 1` + delay 10800/86400 | Mély alvás csak órák múlva |
| `hibernatemode 3` | Biztonságos Apple-féle hibernálás megtartása |
| `lowpowermode 0` | Ne erőltesse az agresszív energiatakarékosságot |
| `sleep 10` (akku) | 10 perc tétlenség után aludjon (nem 1 perc) |
| `sleep 0` (AC) | Hálózaton ne aludjon el magától a rendszer (kijelző külön állítható) |

Utána:

1. VM/Docker bezárása hosszú fedélcsukás előtt  
2. Asztal és Dock: ablakok ne záródjanak appkilépéskor  
3. Böngésző: folytatás onnan, ahol abbahagytad  
4. Teszt: fedelet 4+ órára csukva → az appok a Dockban maradnak és visszatérnek  

---

## 7. Visszaállítás, ha elállítottad a beállításokat

```bash
sudo pmset -a restoredefaults
pmset -g custom
```

**Mire jó:** minden `pmset` kísérletet visszatesz az Apple alapértékekre. Ha utána megint `standbydelay = 0` jelenik meg a naplóban, érdemes újra rátenni a 10800/86400 értékeket.

---

## 8. Ami NEM fogja megoldani

- Több Privacy / Security jogosultság adása Cursornak / VS Code-nak  
- Csak a Cursor / VS Code újratelepítése (a gyökér ok OS alvásmélység + memória, nem hiányzó TCC engedély)  
- Csak a kijelző kikapcsolása nyitott fedéllel (ez **más** útvonal, mint a clamshell sleep)

---

## 9. Újratesztelési napló

| Dátum | Fedél zárva (idő) | AC bedugva? | VM-ek bezárva? | standbydelay értékek | Appok megmaradtak? | Megjegyzés |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

---

## 10. Gyors „mit csináljak most?” sorrend

1. Futtasd:

```bash
sudo pmset -a standbydelaylow 10800
sudo pmset -a standbydelayhigh 86400
sudo pmset -b lowpowermode 0
sudo pmset -b sleep 10
```

2. GUI: Alacsony fogyasztású mód ki; „ablakok záródjanak appkilépéskor” ki.  
3. Éjszaka előtt: VM/Docker ki.  
4. Reggel: ha az appok megmaradtak → kész. Ha nem → 5.8 szerint nézd meg, reboot / jetsam / még mindig delay 0 volt-e.
