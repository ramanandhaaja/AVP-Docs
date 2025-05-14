# 🏗️ Asset Valuer Pro Repository Structure

> **⚠️ Important Note:**  
> This documentation describes the source code repository structure, but the actual source code is maintained in a separate repository and is not included in this documentation repository.

## 🏗️ Overview

The Asset Valuer Pro (AVP) application codebase consists of two primary components:

1. **Web Application (.NET Core and React)** - Located in `assetvaluerpro-avp/`
2. **iOS Capture Application** - Located in `assetvaluerpro-ioscapture/`

This document outlines the high-level structure of these components.

## 🏗️ Web Application Structure

The web application follows a standard .NET solution architecture with several projects and a React frontend.

### 🏗️ Solution Structure

The main .NET solution file (`AVP.sln`) contains the following projects:

- **API** - Web API project for the backend services
- **Application** - Core application logic and business rules
- **AVP.BackgroundTasks** - Background processing services
- **AVP.Test** - Unit and integration tests

### 🏗️ Backend Architecture

The backend follows a clean architecture pattern with:

1. **Controllers** (`API/Controllers/`) - API endpoints that handle HTTP requests
2. **Services** - Business logic implementation
3. **Models** - Data entities representing business objects
4. **Application** - Application layer with commands and queries (CQRS pattern)

The main backend components include:

#### 🔧 API Controllers

The API controllers handle incoming HTTP requests and are organized by domain entity:

- `AssetController.cs` - Asset management endpoints
- `AssetClassController.cs` - Asset classification endpoints
- `AssetHierarchyController.cs` - Hierarchy management
- `ComponentController.cs` - Component management
- `JobController.cs` - Valuation job management
- `ValuationProfileController.cs` - Valuation profile configuration
- And many more specialized controllers

#### 🧮 Application Logic

The application logic is organized using a Command Query Responsibility Segregation (CQRS) pattern:

- **Commands** - Operations that change state
- **Queries** - Operations that return data
- **EventHandlers** - Handle domain events

Each domain area (Assets, Jobs, Valuation, etc.) has its own set of commands and queries.

### 🌐 Frontend Structure

The frontend is a React application located in `API/Web/` with:

1. **Components** (`Web/src/components/`) - Reusable UI components
2. **Pages** (`Web/src/pages/`) - Page-level components
3. **Models** (`Web/src/models/`) - TypeScript interfaces for data models
4. **Contexts** (`Web/src/contexts/`) - React context providers
5. **Hooks** (`Web/src/hooks/`) - Custom React hooks

Key frontend features:

- Built with React and TypeScript
- Uses Tailwind CSS for styling
- Implements a context-based state management
- Organizes components by feature/domain

## 📱 iOS Capture Application

The iOS capture application is built with React Native (Expo) and consists of:

- **App.tsx** - Main application entry point
- **src/** - Source code directory
  - **components/** - UI components
  - **screens/** - Screen components
  - **services/** - API and device services
  - **utils/** - Utility functions

## 📋 Data Flow

The system follows this general data flow:

1. Mobile app captures asset data and images
2. Data is synchronized with the backend API
3. Web application processes and displays the data
4. Valuation calculations are performed in the backend
5. Reports are generated based on the processed data

## 🔧 Key Files

### Backend
- `assetvaluerpro-avp/API/Startup.cs` - API configuration
- `assetvaluerpro-avp/API/Program.cs` - Application entry point
- `assetvaluerpro-avp/API/Controllers/` - API controllers

### Frontend
- `assetvaluerpro-avp/API/Web/src/App.tsx` - Main React component
- `assetvaluerpro-avp/API/Web/src/index.tsx` - Frontend entry point

### iOS App
- `assetvaluerpro-ioscapture/App.tsx` - Main app component
- `assetvaluerpro-ioscapture/app.config.ts` - App configuration

## 🏗️ Dependency Structure

The application's dependencies flow in this order:

1. API controllers depend on Application services
2. Application services depend on Domain models
3. Frontend components depend on API services through contexts and hooks
4. iOS app depends on API services through service wrappers

## 💡 Implementation Notes

- ℹ️ The backend uses a modern .NET Core architecture with dependency injection
- ℹ️ The frontend follows React best practices with functional components and hooks
- ⚡ The codebase separates concerns between API, application logic, and domain models
- 🔗 Communication between backend and frontend is via RESTful APIs