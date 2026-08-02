# macOS checklist: apps quit after closing the MacBook lid

Machine checked: MacBook Pro (Apple Silicon / M3-class), current macOS, ~99 days uptime.

## Exact problem (what is happening)

Closing the lid does **not** keep apps running like a desk PC left on. macOS goes to **sleep**, then — on your machine — into **deep standby / hibernate** almost immediately.

Evidence from this Mac:

| Finding | Value | Why it matters |
| --- | --- | --- |
| Hibernate mode | `hibernatemode = 3` | Safe sleep: RAM is copied to disk; after long sleep the machine may cut power to RAM |
| Standby delays | `standbydelaylow = 0`, `standbydelayhigh = 0` | **Abnormal.** Defaults are usually hours (e.g. 10800). `0` means enter standby with no useful delay after sleep |
| Standby | `standby = 1` | Deep sleep path is enabled |
| Battery Low Power Mode | `lowpowermode = 1` | Makes sleep more aggressive on battery |
| Battery idle sleep | `sleep = 1` (1 minute) | System sleeps very quickly on battery |
| Hibernate wake | Kernel assertion `hibernate user wake` seen | Machine has woken from hibernate, not only light sleep |
| Overnight lid close | e.g. clamshell sleep `2026-07-31 23:54` → full wake `2026-08-02 09:27` | Long deep-idle sleep while lid closed |
| Memory pressure | `JetsamEvent-2026-08-01-005959.ips` during that night | System under heavy memory pressure (largest consumer was `com.apple.Virtualization.Virtual`) |
| Full reboot | Last reboot ~99 days ago | Apps are **not** disappearing because of a normal restart; processes die or fail to resume across deep sleep/wake |

**Bottom line:** Cursor, VS Code, and browsers (Electron/Chromium especially) often **do not survive deep standby + hibernate + memory pressure**. After hours or a day with the lid closed, those processes are gone when you open the lid. That is not normal “light sleep” behavior; it is deep power management plus heavy RAM use.

Expected behavior after a short lid close: apps still in memory, windows come back.  
What you get after hours/day with `standbydelay* = 0`: deep sleep/hibernate → apps exit or fail to resume → empty session for those apps.

---

## Quick diagnose (run first)

Paste one block at a time. Do not paste `#` comment lines into zsh if your shell treats them oddly.

```bash
pmset -g
pmset -g custom
```

```bash
pmset -g log | grep HibernateStats | tail -20
pmset -g log | grep -E "Sleep|Wake|Hibernate|DarkWake|Clamshell" | tail -40
```

```bash
ls -lt /Library/Logs/DiagnosticReports/JetsamEvent* 2>/dev/null | head
ls -lt ~/Library/Logs/DiagnosticReports/*.ips 2>/dev/null | head
```

```bash
pgrep -lf -i 'Virtualization|qemu|UTM|Parallels|Docker|colima|multipass'
defaults read com.apple.loginwindow TALLogoutSavesState
defaults read -g NSQuitAlwaysKeepsWindows
```

---

## Fix checklist

Work top to bottom. Re-test after each major change: leave Cursor + browser open, close lid for several hours, open again.

### 1) Fix aggressive standby delays (most important on this Mac)

`standbydelaylow/high = 0` is the strongest smoking gun.

```bash
# Inspect current values
pmset -g custom

# Restore sane delays (seconds). Example: 3h on battery-ish, 24h on AC.
# Adjust if you prefer longer battery life vs app survival.
sudo pmset -a standbydelaylow 10800
sudo pmset -a standbydelayhigh 86400

# Keep standby enabled but delayed (recommended)
sudo pmset -a standby 1
sudo pmset -a hibernatemode 3

# Verify
pmset -g custom
pmset -g log | grep HibernateStats | tail -5
```

Optional (maximum app survival, more battery drain while asleep):

```bash
# Disable standby entirely (stays in lighter sleep longer)
sudo pmset -a standby 0
```

### 2) Turn off Low Power Mode when you need apps to survive

**GUI:** System Settings → Battery → Low Power Mode → Off (or only when needed).

```bash
# Current value (1 = on for that power source)
pmset -g custom | grep -A20 "Battery Power"

sudo pmset -b lowpowermode 0
sudo pmset -c lowpowermode 0
```

### 3) Stop heavy workloads before closing the lid

On this Mac, overnight memory pressure included **Apple Virtualization** (VM) plus Chrome/Cursor helpers.

Before long lid-close:

- [ ] Quit UTM / Parallels / VMware / VirtualBuddy / any Linux VM
- [ ] Quit Docker Desktop / Colima / Lima / QEMU
- [ ] Close unused Chrome/Edge profiles and heavy tabs
- [ ] Quit unused Electron apps (extra Cursor/VS Code windows)

```bash
# See top memory consumers
ps -axo pid,rss,comm | sort -nrk2 | head -25
```

### 4) Keep macOS window / session restore enabled

**GUI:**

- System Settings → Desktop & Dock → **Close windows when quitting an application** → **Off**
- At login screen / after updates, enable **Reopen windows when logging back in** when offered

```bash
defaults write -g NSQuitAlwaysKeepsWindows -bool true
defaults write com.apple.loginwindow TALLogoutSavesState -bool true
```

### 5) App-specific survival settings

**VS Code / Cursor**

- Enable hot exit / window restore in settings (`files.hotExit`, restore windows)
- Do not force-quit before lid close; normal close of windows is fine if hot exit is on
- After wake, if the app icon is gone, reopen once — restored editors should return if hot exit worked

**Chrome / Edge / Brave**

- Settings → On startup → **Continue where you left off**
- Avoid “Quit” from the menu if you only meant to close a window (Chrome treats Quit as full exit)

**Safari**

- Settings → General → Safari opens with: **All windows from last session**

### 6) Reduce Power Nap noise (optional)

Power Nap / maintenance dark wakes were frequent in your logs. Usually fine; only change if wakes correlate with kills.

**GUI:** System Settings → Battery → Options → Wake for network access → as needed.

```bash
# Disable Power Nap on battery / AC if you want fewer dark wakes
sudo pmset -b powernap 0
sudo pmset -c powernap 0
```

### 7) Lock screen vs sleep (do not confuse them)

Require password on wake does **not** quit apps. If you see the login window for a full user session (not just lock), check:

**GUI:** System Settings → Lock Screen → disable any **Log out after … minutes of inactivity** if present.

```bash
defaults read com.apple.loginwindow AutoLogOutDelay 2>/dev/null || echo "AutoLogOutDelay not set (good)"
```

### 8) After a bad wake: confirm cause

```bash
# Did the Mac reboot?
uptime
last reboot | head -5

# Last sleep/wake story
pmset -g log | grep -E "Clamshell|Hibernate|Wake from|DarkWake to FullWake" | tail -30

# New crashes / jetsam since the lid close
ls -lt /Library/Logs/DiagnosticReports/JetsamEvent* 2>/dev/null | head -5
ls -lt ~/Library/Logs/DiagnosticReports/ | head -15
```

Interpretation:

- **uptime reset** → reboot/update/panic; enable “reopen windows”
- **jetsam during sleep window** → free RAM, quit VMs, fewer browsers
- **hibernate stats still show delay 0** → step 1 did not stick; re-apply `pmset`
- **no reboot, no jetsam, apps simply gone** → deep standby + Electron resume failure; lengthen/disable standby (step 1)

---

## Recommended “stable overnight” profile

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

Then:

1. Quit VMs/Docker before long lid-close  
2. Desktop & Dock: do not close windows when quitting apps  
3. Browser: continue where you left off  
4. Test: lid closed 4+ hours → apps should still be in Dock and resume  

---

## Reset power settings to Apple defaults (if experiments go wrong)

```bash
sudo pmset -a restoredefaults
pmset -g custom
```

---

## What will not fix this

- Granting more Privacy & Security permissions  
- Reinstalling Cursor/VS Code alone (symptom is OS sleep depth + memory, not missing TCC permission)  
- Only turning off the display while leaving the lid open (different path than clamshell sleep)

---

## Retest log (fill in)

| Date | Lid closed duration | Plug AC? | VMs quit? | standbydelay values | Apps still open? | Notes |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
