# API Backend Structure

This document describes the detailed structure of the AVP API Backend, based on the actual source code.

## Top-Level Structure

- **AVP.sln**: .NET solution file for all backend projects
- **azure-pipelines.yml**: Azure DevOps CI/CD pipeline configuration
- **local.settings.json**: Local development settings
- **nuget.config**: NuGet package configuration

## Main Folders
- **API/**: Web API project
  - **Controllers/**: Contains all API controllers (e.g., `AssetController.cs`, `JobController.cs`)
  - **Areas/**: MVC areas for modular features
  - **Pages/**: Razor pages (if any)
  - **Services/**: API-level services
  - **Filters/**: Custom filters for requests/responses
  - **Styles/**, **wwwroot/**: Static files and assets
  - **Program.cs**, **Startup.cs**: API entry point and configuration
  - **appsettings.json**: Main configuration file
- **Application/**: Application layer (CQRS, business logic)
  - Subfolders by domain (e.g., `Assets/`, `Jobs/`, `Reports/`, etc.)
  - `DependencyInjection.cs`: Application service registration
- **Domain/**: Domain models/entities and business logic
  - **Entities/**: Core business entities
  - **Events/**: Domain events
  - **Common/**: Shared domain logic
- **Infrastructure/**: Data access and integrations
  - **Persistence/**: Database context, migrations, repositories
  - **Identity/**: Authentication and authorization
  - **Services/**: Infrastructure services
  - **Files/**: File storage integrations
  - **Logging/**: Logging infrastructure
- **AVP.BackgroundTasks/**: Background processing and scheduled jobs
- **AVP.Test/**: Unit and integration tests
- **ForecastGenerator/**: Forecasting logic and utilities

## Key Files
- `API/Controllers/AssetController.cs`, `JobController.cs`, etc.: Main API endpoints
- `API/Startup.cs`, `API/Program.cs`: API configuration and entry point
- `Application/Assets/`, `Application/Jobs/`, etc.: Business logic by domain
- `Domain/Entities/`: Business entities and value objects
- `Infrastructure/Persistence/`: EF Core context, migrations, repositories

Refer to the [Repository Structure Overview](./index.md) for a high-level map and cross-component context.
