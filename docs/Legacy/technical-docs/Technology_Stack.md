# 🏗️ Asset Valuer Pro Technology Stack

> **⚠️ Important Note:**  
> This documentation describes the technology stack of Asset Valuer Pro, but the actual source code is maintained in a separate repository and is not included in this documentation repository.

## 🏗️ Overview

Asset Valuer Pro (AVP) is built using a modern technology stack that combines .NET Core for the backend services and React for the frontend user interface. This document provides a comprehensive overview of the technologies, frameworks, and libraries used in the application.

## 🔧 Backend Technologies

### 🔧 Core Framework
- **.NET Core** - The primary backend framework
- **ASP.NET Core** - Web framework for building the API
- **Entity Framework Core** - ORM for database interactions

### 🏗️ Architecture Patterns
- **Clean Architecture** - Separation of concerns with layers
- **CQRS (Command Query Responsibility Segregation)** - Separate command and query models
- **MediatR** - Mediator pattern implementation for CQRS
- **Repository Pattern** - Data access abstraction

### 🔒 Authentication & Security
- **ASP.NET Core Identity** - Authentication and user management
- **JWT (JSON Web Tokens)** - Token-based authentication for API access
- **Azure Active Directory** - Enterprise authentication integration

### 📊 Data Storage
- **SQL Server** - Primary relational database
- **Azure Blob Storage** - Storage for documents and images
- **Azure SQL Database** - Cloud-hosted database service

### 🔧 API Design
- **RESTful API** - Standard HTTP methods and resource-based URLs
- **Swagger/OpenAPI** - API documentation and exploration
- **FluentValidation** - Request validation

### ⚡ Background Processing
- **Hosted Services** - Long-running background services
- **Azure WebJobs** - Scheduled and triggered tasks

### ✅ Testing
- **xUnit** - Testing framework
- **Moq** - Mocking framework for unit tests
- **SQLite** - Lightweight database for testing

## 🌐 Frontend Technologies

### 🔧 Core Framework
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better developer experience

### 🏗️ State Management
- **React Context API** - State management across components
- **React Hooks** - Functional component state and lifecycle management

### 🌐 UI Components and Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Components** - Reusable UI building blocks

### 🔧 HTTP Client
- **Fetch API** - Native browser API for making HTTP requests

### 🌐 Forms and Validation
- **Formik** - Form management
- **Yup** - Schema-based form validation

### 📊 Charts and Visualizations
- **Chart.js** - Interactive charts and graphs

### 🌐 Routing
- **React Router** - Client-side routing

## 📱 iOS Capture Application

### 🔧 Core Framework
- **React Native** - Cross-platform mobile app development
- **Expo** - React Native toolchain

### 📱 Device Features
- **Expo Camera** - Camera access for photo capture
- **AsyncStorage** - Local data persistence
- **Geolocation** - Location services for asset coordinates

### 🌐 UI Components
- **React Native Paper** - Material Design components
- **Custom Components** - Specialized input forms

## 🏗️ Deployment and Infrastructure

### ☁️ Cloud Platform
- **Microsoft Azure** - Primary cloud provider
- **Azure App Service** - Web application hosting
- **Azure Storage** - Blob storage for files and images
- **Azure SQL Database** - Managed database service

### 🔧 CI/CD
- **Azure DevOps** - Continuous integration and deployment
- **Azure Pipelines** - Build and release automation

### 🔍 Monitoring and Logging
- **Application Insights** - Performance monitoring and diagnostics
- **Azure Monitor** - Infrastructure monitoring
- **Structured Logging** - Consistent log format

## 🔧 Development Tools

### 🔧 IDEs and Editors
- **Visual Studio** - Primary .NET development environment
- **Visual Studio Code** - Frontend and cross-platform development
- **Xcode** - iOS build and signing

### 🔧 Build Tools
- **NPM/Yarn** - JavaScript package management
- **.NET CLI** - Command-line tools for .NET
- **Webpack** - Module bundling for frontend

### 🔧 Version Control
- **Git** - Source code management
- **Bitbucket** - Repository hosting

## 🔗 Third-Party Services and Integrations

### 📄 Document Generation
- **Microsoft Office Interop** - Document generation from templates

### 🗺️ Mapping
- **Mapbox** - Interactive maps for asset locations

### 🔒 Authentication
- **OAuth 2.0/OpenID Connect** - Authentication protocols
