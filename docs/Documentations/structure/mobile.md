# Mobile Application Structure

This document provides a detailed structure of the AVP Mobile Application, based on the actual source code at `/assetvaluerpro-ioscapture/`.

## Top-Level Structure
- **App.tsx**: Main application entry point
- **app.config.ts**: App configuration
- **app.json**: App metadata/configuration
- **assets/**: Images, fonts, and static files
- **src/**: Main source code
- **package.json**, `yarn.lock`, `package-lock.json`: Project dependencies and lock files
- **tsconfig.json**: TypeScript configuration
- **babel.config.js**, **metro.config.js**: Build and bundler configs
- **azure-pipelines.yml**: CI/CD pipeline config

## `src/` Folder Structure
- **components/**: Reusable UI components
- **screens/**: Screen components for navigation/views
- **services/**: API and device services
- **contexts/**: React context providers
- **hooks/**: Custom React hooks
- **models/**: TypeScript data models
- **pages/**: Page-level components (if used)
- **utils/**: Utility functions
- **icons/**: Icon assets
- **images/**: Image assets
- **data/**: Static or mock data
- **styles/**: CSS/Tailwind styles

## Key Files
- `App.tsx`: Main React Native application component
- `configuration.ts`: App configuration logic
- `index.tsx`: App entry point (if present)

Refer to the [Repository Structure Overview](./index.md) for a high-level map and cross-component context.
