# Mobile Application Structure

## Overview

This document provides an overview of the folder structure for the AVP Mobile Application, located at `/assetvaluerpro-ioscapture`. Use this guide to understand where to find and place code, assets, and configuration files.

## Top-Level Structure

- `.eslintignore`, `.eslintrc`: ESLint configuration for code linting.
- `.gitignore`: Files and folders to exclude from version control.
- `.yarnrc.yml`: Yarn configuration.
- `App.tsx`: Main application entry point.
- `README.md`: Project overview and setup instructions.
- `app.config.ts`: App configuration for build and deployment.
- `app.json`: App metadata and settings.
- `assets/`: Images, icons, and splash screens for the app.
- `azure-pipelines.yml`: CI/CD pipeline configuration.
- `babel.config.js`, `metro.config.js`: Build and bundler configuration files.
- `eas.json`: Expo Application Services configuration.
- `package.json`, `package-lock.json`, `yarn.lock`: Project dependencies and lock files.
- `src/`: Main source code (see details below).
- `store.config.json`, `store.config.ts`: Store and state management configuration.
- `tsconfig.json`: TypeScript configuration.

## `assets/` Directory

- App icons, splash screens, and other static assets used by the mobile app.

## `src/` Directory

The `src/` folder contains the main application code:

- `components/`: Reusable UI components (e.g., checkboxes, dropdowns, tables, maps, toasts).
- `context/`: React context providers for managing global state (e.g., authentication, jobs, inspection types).
- `data/`: Static or mock data used in the app.
- `entities/`: TypeScript models and data entities (e.g., Asset, Component, Insurance, Job, Lookup).
- `hooks/`: Custom React hooks for shared logic and API calls.
- `pages/`: Page-level components/screens (e.g., AssetEdit, JobList, ManageJobs).
- `styles/`: Style sheets and color definitions for consistent UI.
- `ApportComponentEdit.tsx`, `AssetReplacementCostEdit.tsx`, etc.: Feature-specific components and modals.
- `config.js`, `constants.ts`, `db.ts`: App configuration, constants, and database helpers.
- `Format.tsx`, `Helper.tsx`: Utility and formatting helper functions.

## Key Files
- `App.tsx`: Main React Native application component.
- `app.config.ts`: Application configuration for build and deployment.
- `app.json`: App metadata and Expo configuration.
- `azure-pipelines.yml`: CI/CD pipeline setup.
- `README.md`: Project overview and instructions.

## Root-Level Configs
- `.env`: Environment variable definitions (if present).
- `.eslintrc`, `.eslintignore`: Linting rules.
- `yarn.lock`, `package-lock.json`: Dependency lock files.
- `tsconfig.json`: TypeScript configuration.
- `babel.config.js`, `metro.config.js`: Build and bundler configs.

## Tips

- Place reusable UI elements in `components/` and main screens in `pages/`.
- Use `entities/` for data models and `context/` for shared app state.
- Add static assets (icons, splash screens) to `assets/`.
- Keep styles organized in the `styles/` folder for maintainability.

:::tip
Refer to this document whenever you need to find or organize files in the mobile app codebase.
:::

Refer to the [Repository Structure Overview](./index.md) for a high-level map and cross-component context.
- `App.tsx`: Main React Native application component
- `configuration.ts`: App configuration logic
- `index.tsx`: App entry point (if present)

Refer to the [Repository Structure Overview](./index.md) for a high-level map and cross-component context.
