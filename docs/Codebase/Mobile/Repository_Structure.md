
# Code Structure & Workflow

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

A mobile app built using React Native with Expo, structured as follows:

### Main Structure

- **App.tsx** – App entry point
- **app.config.ts** – Environment configuration

### Source Code Organization (`src/`)

- **src/components/** – Reusable UI components
  - Form controls (e.g., `ControlledInput.tsx`, `ControlledDropdown.tsx`)
  - Map components (e.g., `MapMarker.tsx`, `ClusterMarker.tsx`)
  - Data display components (e.g., `AssetSearchTable.tsx`)

- **src/context/** – React Context providers for state management
  - `AuthContext.tsx` – Authentication state
  - `JobContext.tsx` – Job management state
  - `AssetSearchContext.tsx` – Asset search functionality
  - `InspectionTypeContext.tsx` – Inspection configuration
  - `InspectorContext.tsx` – Inspector information

- **src/data/** – Static data and configurations
  - `MaintenancePlanHierarchy.ts` – Maintenance plan structure

- **src/entities/** – TypeScript interfaces and data models
  - Asset-related models (e.g., `Asset.ts`, `Component.ts`)
  - Valuation models (e.g., `IncomeApproach.ts`, `MarketApproach.ts`)
  - Job and system models (e.g., `Job.ts`, `Status.ts`)

- **src/hooks/** – Custom React hooks
  - `Api.tsx` – API integration hooks

- **src/pages/** – Main application screens
  - `JobList.tsx` – Job listing and selection
  - `ManageJobs.tsx` – Job management
  - `AssetSearch.tsx` – Asset search functionality
  - `AssetEdit.tsx` – Asset editing interface
  - `AssetSearchInfrastructure.tsx` – Infrastructure-specific search

- **src/styles/** – Styling configurations
  - Screen-specific styles (e.g., `AssetEditStyleSheet.ts`)
  - Global colors and themes (e.g., `Colors.ts`)

### UI Components

The application includes various modal components and utility views:

- Asset management modals (e.g., `ImageModal.tsx`, `NoteModal.tsx`)
- Confirmation dialogs (e.g., `DeleteModal.tsx`, `SaveWithErrorsModal.tsx`)
- Navigation components (e.g., `SideDrawer.tsx`)
- Data entry forms (e.g., `AssetReplacementCostEdit.tsx`)

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
- `src/pages/AssetEdit.tsx` – Asset data capture
- `src/pages/AssetSearch.tsx` – Asset search functionality
- `src/pages/AssetSearchInfrastructure.tsx` – Infrastructure-specific search
- `src/pages/JobList.tsx` – Job management entry point
- `src/pages/ManageJobs.tsx` – Job management
- `src/context/AuthContext.tsx` – Authentication management

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
