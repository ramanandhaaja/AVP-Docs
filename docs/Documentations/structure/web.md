# Web Application Structure

This document provides a detailed structure of the AVP Web Application, based on the actual source code at `/assetvaluerpro-avp/API/Web/`.

## Top-Level Structure
- **src/**: Main application source code
- **public/**: Static assets (images, favicon, etc.)
- **index.html**: Main HTML entry point
- **package.json**: Project dependencies and scripts
- **vite.config.mjs**: Vite configuration file
- **tailwind.config.js**: Tailwind CSS configuration
- **tsconfig.json**: TypeScript configuration

## `src/` Folder Structure
- **components/**: Reusable UI components (modals, drawers, lists, etc.)
- **pages/**: Page-level React components (views/routes)
- **models/**: TypeScript interfaces and data models
- **contexts/**: React context providers for state management
- **hooks/**: Custom React hooks
- **entities/**: Domain-specific entity logic
- **styles/**: CSS/Tailwind styles
- **config.js**, **constants.ts**: App configuration and constants
- **db.ts**: Local database logic
- **serviceWorker.ts**: Service worker for offline support
- **setupTests.ts**: Test setup file

## Key Files
- `App.tsx`: Main React application component
- `index.tsx`: Main entry point for React app
- `reportWebVitals.js`: Performance measurement

## Root-Level Configs
- `.env`, `.env.prod`, `.env.test`: Environment configs
- `yarn.lock`, `package-lock.json`: Dependency lock files

Refer to the [Repository Structure Overview](./index.md) for a high-level map and cross-component context.
