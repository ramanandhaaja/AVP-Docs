

# AVP Mobile iOS Installation Guide

This guide walks you through setting up, running, and deploying the AVP iOS Capture App using EAS CLI and Expo.

---

## Prerequisites

Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **npm**
- **EAS CLI** (`npm install -g eas-cli`)
- **Git**
- (Optional) **Xcode** (for iOS simulator)
- (Optional) **Physical iOS device**

---

## 1. Clone the Repository

```sh
git clone <repo-url>
cd assetvaluerpro-ioscapture
```
**What it does:**
- Downloads the latest version of the AVP iOS Capture App source code to your local machine
- Changes into the project directory where all subsequent commands should be run

---

## 2. Install Dependencies

```sh
npm install
```
**What it does:**
- Installs all Node.js package dependencies listed in package.json
- Sets up the development environment with required JavaScript/TypeScript libraries

---

## 3. Running the App (Development)

If required, create a development build:

```sh
eas build --profile development --platform ios
```
**What it does:**
- Creates a development build of the iOS app using Expo Application Services (EAS)
- Compiles the React Native code into a format that can run on iOS simulators and devices
- Handles all necessary compilation and bundling steps

Start the development server:

```sh
npx expo start --dev-client --lan
```
**What it does:**
- Launches the Metro bundler, which serves the JavaScript code to your app
- Enables hot reloading for faster development
- Makes the app accessible on your local network for testing on physical devices
- The `--dev-client` flag enables the development client for better debugging
- The `--lan` flag makes the app accessible to other devices on the same network

---

## 4. Deploying a New Version to the App Store

To submit a new version to the Apple App Store:

1. Increment the app version in `app.json` and `package.json`.

2. Commit changes and create a new production build:
   ```sh
   eas build --profile production --platform ios --clear-cache
   ```
   **What it does:**
   - Creates an optimized production build of the app
   - The `--clear-cache` flag ensures a clean build by removing any cached data
   - The build is optimized for App Store submission
   - Outputs an .ipa file ready for App Store submission

3. Submit the build to App Store Connect:
   ```sh
   eas submit -p ios
   ```
   **What it does:**
   - Uploads the compiled app to App Store Connect
   - Handles code signing and provisioning profiles automatically
   - Prepares the build for App Store review

4. Go to [App Store Connect](https://appstoreconnect.apple.com/) and navigate to your app.
5. Go to apps -> Asset Valuer Pro -> Press 'manage compliance', press on 'standard encryption' and press on 'no' for distribution in France
6. Go to the 'Distribution' tab. In the top left corner, create new app version using blue plus button next to iOS App on app distribution page. *Make sure version number is higher
7. Go to new app version created in step 2 and populate 'What's New in This Version' and add the new build created in step 1.
8. Submit the new version for review.

---

## Troubleshooting

- For build issues, check the [EAS/Expo documentation](https://docs.expo.dev/build/introduction/).
- For App Store issues, review the [Apple developer documentation](https://developer.apple.com/documentation/).

For more details, refer to the [Repository Structure Overview](../../structure/mobile.md).
