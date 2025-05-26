
# Asset Valuer Pro Technology Stack

**Important Note:**  
This documentation describes the technology stack of Asset Valuer Pro. The actual source code is maintained in a separate repository and is not included here.

## Overview

Asset Valuer Pro (AVP) is built using a modern technology stack that combines .NET Core for backend services and React for the frontend. This document outlines the technologies and frameworks used across all application components.

## Backend Technologies

### Core Frameworks
- .NET Core – Primary backend framework
- ASP.NET Core – Web API development
- Entity Framework Core – ORM for database access

### Architecture Patterns
- Clean Architecture – Separation of layers and responsibilities
- CQRS – Distinct command and query models
- MediatR – CQRS orchestration
- Repository Pattern – Abstract data access

### Authentication and Security
- ASP.NET Core Identity – User authentication
- JWT – Token-based access control
- Azure Active Directory – Enterprise login support

### Data Storage
- SQL Server – Relational database
- Azure Blob Storage – Document and image storage
- Azure SQL Database – Cloud database

### API Design and Middleware
- RESTful APIs – Resource-based endpoints
- Swagger/OpenAPI – API documentation and testing
- FluentValidation – API request validation

### Background Jobs
- Hosted Services – Background task runners
- Azure WebJobs – Cloud-based job scheduling

### Testing Frameworks
- xUnit – Unit testing
- Moq – Mock dependencies
- SQLite – Lightweight test database

## Frontend Technologies

### Core Stack
- React – Component-based UI
- TypeScript – Strong typing for JavaScript

### State Management
- React Context API – State container
- React Hooks – State and lifecycle logic

### Styling and Components
- Tailwind CSS – Utility-first styling
- Custom Components – Feature-specific UI

### HTTP and Forms
- Fetch API – HTTP request layer
- Formik – Form management
- Yup – Form validation

### Visualization and Routing
- Chart.js – Charting library
- React Router – Client-side navigation

## iOS Capture Application

### Core Stack
- React Native – Cross-platform mobile framework
- Expo – Development and build toolchain

### Device Integration
- Camera – Image capture
- AsyncStorage – Local storage
- Geolocation – Asset mapping support

### UI and Form Components
- React Native Paper – Material Design
- Custom UI – For field data capture

## Deployment and Infrastructure

### Cloud Platform
- Microsoft Azure – Hosting environment
- Azure App Service – Web hosting
- Azure Blob Storage – File and media storage
- Azure SQL – Cloud database platform

### CI/CD Tools
- Azure DevOps – Pipeline automation
- Azure Pipelines – Build/deploy scripts

### Monitoring and Logging
- Application Insights – App performance telemetry
- Azure Monitor – Server-level health checks
- Structured Logging – Consistent diagnostic output

## Development Tools

### Editors
- Visual Studio – Backend and API development
- Visual Studio Code – Web and mobile UI
- Xcode – iOS builds and deployment

### Build and Package
- NPM/Yarn – Package managers
- .NET CLI – Build and tooling support
- Webpack – Frontend bundler

### Version Control
- Git – Source management
- Bitbucket – Repository hosting

## Third-Party Integrations

### Document and Reports
- Microsoft Office Interop – Word-based report templating

### Mapping and Visualization
- Mapbox – Interactive maps for asset location

### Authentication Protocols
- OAuth 2.0 / OpenID Connect – Secure authentication standards
