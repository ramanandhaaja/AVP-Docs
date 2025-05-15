---
title: Mobile App Installation (iOS)
description: Step-by-step guide to install, run, and deploy the AVP iOS Capture App.
sidebar_label: iOS App Installation
---

## Mobile App Installation Guide (iOS)

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

---

## 2. Install Dependencies

```sh
npm install
```

---

## 3. Running the App (Development)

If required, create a development build:

```sh
eas build --profile development --platform ios
```

Start the development server:

```sh
npx expo start --dev-client --lan
```

---

## 4. Deploying a New Version to the App Store

To submit a new version to the Apple App Store:

1. Increment the app version in `app.json` and `package.json`.
2. Commit changes and create a new production build:
   ```sh
   eas build --profile production --platform ios --clear-cache
   ```
3. Submit the build to App Store Connect:
   ```sh
   eas submit -p ios
   ```
4. Go to [App Store Connect](https://appstoreconnect.apple.com/) and navigate to your app.
5. Go to apps -> Asset Valuer Pro -> .  Press 'manage compliance', press on 'standard encryption' and press on 'no' for distribution in France
6. Go to the 'Distribution' tab.In the top left corner, create new app version using blue plus button next to iOS App on app distribution page. *Make sure version number is higher
7. Go to new app version created in step 2 and populate 'What's New in This Version' and add the new build created in step 1.
8. Submit the new version for review.

---

## Troubleshooting

- For build issues, check the EAS/Expo documentation.
- For App Store issues, review the Apple developer documentation.

For more details, refer to the [Repository Structure Overview](../../structure/mobile.md).
