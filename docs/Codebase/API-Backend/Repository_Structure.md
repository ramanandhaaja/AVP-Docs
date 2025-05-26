
# Asset Valuer Pro Repository Structure

**Important Note:**  
This documentation outlines the repository structure. The actual source code is maintained in a separate repository and is not included here.

## Overview

The Asset Valuer Pro (AVP) application consists of two main components:

1. **Web Application (.NET Core and React)** – Located in `assetvaluerpro-avp/`
2. **iOS Capture Application** – Located in `assetvaluerpro-ioscapture/`

This document describes the high-level structure of both.

## Web Application Structure

The web application follows a standard .NET solution architecture with multiple projects and a React frontend.

### Solution Layout

The primary solution file `AVP.sln` includes:

- `API` – Backend API project
- `Application` – Core business logic and use cases
- `AVP.BackgroundTasks` – Background job services
- `AVP.Test` – Unit and integration testing

### Backend Overview

Follows clean architecture principles with the following layers:

1. **Controllers** – Located in `API/Controllers/`
2. **Services** – Application service logic
3. **Models** – Business entities
4. **Application Layer** – Commands, queries, handlers (CQRS pattern)

#### API Controllers

API endpoints are organized by domain:

- `AssetController.cs` – Manages asset records
- `AssetClassController.cs` – Asset classifications
- `AssetHierarchyController.cs` – Asset tree structure
- `ComponentController.cs` – Components under assets
- `JobController.cs` – Valuation job management
- `ValuationProfileController.cs` – Configuration of valuation rules

#### Application Layer

Implements CQRS with:

- **Commands** – Write operations (e.g., create/update)
- **Queries** – Read operations (e.g., fetch/search)
- **Event Handlers** – Processes for background or cross-cutting concerns

Each domain area includes its own structured folder.

### Frontend (React)

Located in `API/Web/`, structured as follows:

- `components/` – Shared and feature-specific UI blocks
- `pages/` – Page-level components
- `models/` – TypeScript interfaces and DTOs
- `contexts/` – State management via React context
- `hooks/` – Custom logic for interaction and data

**Technologies Used**:
- React with TypeScript
- Tailwind CSS
- Context API for state management
- Feature-based folder structure

## iOS Capture Application

A mobile app built using React Native with Expo:

- **App.tsx** – App entry point
- **src/components/** – UI elements
- **src/screens/** – View-level screens
- **src/services/** – API integration and device utilities
- **src/utils/** – Helper functions

## Data Flow

1. iOS app captures and syncs field data (including images)
2. Data sent to backend API
3. Web app provides management and calculation interface
4. Backend performs valuations
5. Reports are generated and stored for review

## Key Files

### Backend

- `Startup.cs` – Application setup and middleware
- `Program.cs` – Entry point
- `API/Controllers/` – API endpoints

### Frontend

- `Web/src/App.tsx` – Main app component
- `Web/src/index.tsx` – App bootstrapping file

### iOS App

- `App.tsx` – Main app entry
- `app.config.ts` – Environment configuration

## Dependency Structure

Application dependencies flow top-down:

1. **Controllers** depend on **Application Layer**
2. **Application Layer** uses **Domain Models**
3. **React Frontend** accesses data via REST APIs
4. **Mobile App** communicates through wrapper services

## Notes

- Backend architecture leverages dependency injection
- React frontend follows modern conventions with hooks
- Architecture emphasizes separation of concerns
- Communication is RESTful and consistent across layers
