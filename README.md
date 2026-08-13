# Combat System App v1.0 RC1

Release-candidate build of the local-first Combat System application.

## Core retained

- 116 Boxing + Muay Thai technical/meta nodes
- 36 Hybrid Integration Nodes (not extra technique inventory)
- 232 canonical drills/protocols
- conservative Gate Engine with S-MOTOR / S-INTERACTIVE separation
- D1-D10 diagnostic engine
- Fighter Body + Engine prescriptions
- adaptive Today scheduler + 4/6-week Cycle Manager
- round-by-round technical review and local video review metadata
- Galaxy S25-first Android shell

## New in RC1

- **Settings & Backup** is separated from the six primary training screens.
- **Strict backup import validation** refuses malformed state payloads instead of silently replacing valid progress.
- **Local restore points**: up to five snapshots, including before import/reset and a daily overwrite safety point.
- **External JSON backup**: browser download on desktop; native Android `ACTION_CREATE_DOCUMENT` save flow inside the APK shell.
- **State integrity check** detects orphan skill/integration IDs and observations referencing missing canonical skills.
- **Reduced-motion support** and additional Galaxy S25 touch/timer hardening.
- Existing v0.1-v0.9 local state migrates into the RC1 state model.

## Safety / interpretation boundaries

- No solo result certifies live interactive mastery.
- Gate promotion remains explicit and phase/evidence-sensitive.
- Check-in is categorical scheduling support, not medical diagnosis or a numeric readiness score.
- Accumulated-load signals are programming heuristics, not measured physiological fatigue.
- Body exercise prescriptions are capacity-development choices; they are not claims of direct technique transfer.

## Verify

```bash
npm run verify:all
```

RC1 currently passes **60 automated tests**, TypeScript typecheck, canonical app validation, Android asset sync and Android project validation.

## Run locally

```bash
npm run serve
```

Open `http://localhost:4173`.

## Android / Galaxy S25

Android source is under `android/`:

- application id: `com.combatsystem.app`
- `minSdk = 29`
- `targetSdk = 36`
- `versionCode = 100`
- `versionName = 1.0.0-rc1`

Native shell features include background round/rest alerts, notification permission, haptics, tones, keep-screen-on, local video chooser, native JSON backup export and Galaxy S25 device-profile detection.

This execution environment still does **not** contain the Android SDK or Gradle executable, so it cannot honestly emit the final `.apk` here. The RC1 Android project itself is synchronized and statically validated; the remaining APK step is compilation/signing on an Android toolchain.
