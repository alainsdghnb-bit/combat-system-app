# Building the APK later

The app code does not require a GitHub account.

## Simplest path on a Mac
1. Install Android Studio.
2. Open the `android/` folder as the project.
3. Let Android Studio install/sync the requested Android SDK/Gradle components.
4. Build an APK from the Android build menu.
5. Install the debug/release candidate APK on the Galaxy S25 for the device checklist.

The codebase already embeds the compiled local web assets under `android/app/src/main/assets/web/`.

## Why the APK is not emitted in this ChatGPT runtime
Java is present, but Gradle and Android SDK are not. DNS/network access from the shell cannot resolve Gradle distribution hosts, so the missing Android toolchain cannot be bootstrapped honestly inside this runtime.
