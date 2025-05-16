# Web Application Installation Guide

## Prerequisites

- **Node.js** (LTS recommended)
  - JavaScript runtime required to run the web application
  - LTS version is recommended for better stability and support
- **Yarn** or **npm**
  - Package managers to install and manage dependencies
  - Yarn is preferred but npm will work as well
- Ensure the [API Backend has been installed and running](../api-backend/index.md).
  - The web application requires the backend API to be running for full functionality

## Install Dependencies

From the `API/Web` directory:
```sh
yarn
# or
npm install
```
**What it does:**
- Installs all the required Node.js packages listed in `package.json`
- Creates a `node_modules` directory with all dependencies
- Sets up the development environment with necessary tools and libraries
- For Yarn, also generates a `yarn.lock` file (or `package-lock.json` for npm) to lock dependency versions

## Running the Web Application

From the `API/Web` directory:
```sh
yarn start
# or
npm start
```
**What it does:**
- Starts the development server (typically on port 3000)
- Automatically opens the application in your default web browser
- Enables hot module replacement for faster development
- Watches for file changes and automatically reloads the application
- Displays build errors and lint warnings in the console
