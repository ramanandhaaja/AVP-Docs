# Business Logic Services Inventory

This document provides an inventory of the business logic services in the Asset Valuer Pro application. The application follows the CQRS (Command Query Responsibility Segregation) pattern, which separates read operations (Queries) from write operations (Commands).

## Application Architecture Overview

The business logic in Asset Valuer Pro is organized using the following patterns:

1. **Command Handlers** - Handle operations that change state (create, update, delete)
2. **Query Handlers** - Handle operations that read data
3. **Event Handlers** - Process domain events
4. **Services** - Provide cross-cutting functionality

Each functional domain has its own set of commands, queries, and handlers.

## Command Handlers

Command handlers implement the business logic for state-changing operations.

| Command Handler | Path | Primary Purpose |
|-----------------|------|----------------|
| UpdateJobCommandHandler | `/Application/Jobs/Commands/UpdateJob/UpdateJobCommand.cs` | Create or update a valuation job |
| ArchiveJobCommandHandler | `/Application/Jobs/Commands/ArchiveJob/ArchiveJobCommand.cs` | Archive a completed job |
| DeleteJobCommandHandler | `/Application/Jobs/Commands/DeleteJob/DeleteJobCommand.cs` | Delete a job and its related data |
| RefreshJobDataCommandHandler | `/Application/Jobs/Commands/RefreshJobData/RefreshJobDataCommand.cs` | Recalculate job data |
| RevalidateCommandHandler | `/Application/Jobs/Commands/Revalidate/RevalidateCommand.cs` | Revalidate job data |
| UpdateAssetCommandHandler | `/Application/Assets/Commands/UpdateAsset/UpdateAssetCommand.cs` | Create or update an asset |
| DeleteAssetsCommandHandler | `/Application/Assets/Commands/DeleteAssets/DeleteAssetsCommand.cs` | Delete assets |
| ImportAssetRegisterSpreadsheetCommandHandler | `/Application/Assets/Commands/ImportAssets/ImportAssetRegisterSpreadsheetCommand.cs` | Import assets from spreadsheet |
| UpdateValuationProfileCommandHandler | `/Application/ValuationProfiles/Commands/UpdateValuationProfile/UpdateValuationProfileCommand.cs` | Update valuation profile |
| UpdateComponentCommandHandler | `/Application/Components/Commands/UpdateComponent/UpdateComponentCommand.cs` | Update a component |
| UpdateAssetAssumptionsCommandHandler | `/Application/Assumptions/Commands/UpdateAssetAssumptions/UpdateAssetAssumptionsCommand.cs` | Update asset assumptions |
| UpdateComponentAssumptionsCommandHandler | `/Application/Assumptions/Commands/UpdateComponentAssumptions/UpdateComponentAssumptionsCommand.cs` | Update component assumptions |
| ImportHierarchyCommandHandler | `/Application/AssetHierarchy/Commands/ImportHierarchy/ImportHierarchyCommand.cs` | Import asset hierarchy data |
| CopyHierarchyNodeCommandHandler | `/Application/AssetHierarchy/Commands/CopyHierarchyNode/CopyHierarchyNodeCommand.cs` | Copy hierarchy node structure |
| UpdateHierarchyNodeCommandHandler | `/Application/AssetHierarchy/Commands/UpdateHierarchyNode/UpdateHierarchyNodeCommand.cs` | Update hierarchy node |
| ImportCaptureAssetCommandHandler | `/Application/Assets/Commands/ImportCaptureAsset/ImportCaptureAssetCommand.cs` | Import assets captured via mobile |
| ImportImagesCommandHandler | `/Application/Assets/Commands/ImportImages/ImportImagesCommand.cs` | Import asset images |

## Query Handlers

Query handlers implement the business logic for read operations.

| Query Handler | Path | Primary Purpose |
|---------------|------|----------------|
| GetJobQueryHandler | `/Application/Jobs/Queries/GetJob/GetJobQuery.cs` | Retrieve detailed job information |
| GetJobListQueryHandler | `/Application/Jobs/Queries/GetJobList/GetJobListQuery.cs` | Retrieve list of jobs |
| GetAssetQueryHandler | `/Application/Assets/Queries/GetAsset/GetAssetQuery.cs` | Retrieve detailed asset information |
| SearchAssetsQueryHandler | `/Application/Assets/Queries/Search/SearchAssets/SearchAssetsQuery.cs` | Search for assets with filtering |
| ExportAssetsQueryHandler | `/Application/Assets/Queries/ExportAssets/ExportAssetsQuery.cs` | Export assets to spreadsheet |
| GetAssetHierarchyForOfflineQueryHandler | `/Application/AssetHierarchy/Queries/GetAssetHierarchyForOffline/GetAssetHierarchyForOfflineQuery.cs` | Get hierarchy for offline use |
| GetValuationProfileQueryHandler | `/Application/ValuationProfiles/Queries/GetValuationProfile/GetValuationProfileQuery.cs` | Get valuation profile details |
| GetComponentQueryHandler | `/Application/Components/Queries/GetComponent/GetComponentQuery.cs` | Get component details |
| GetAssetAssumptionsQueryHandler | `/Application/Assumptions/Queries/GetAssetAssumptions/GetAssetAssumptionsQuery.cs` | Get asset assumptions |
| GetReplacementCostQueryHandler | `/Application/ReplacementCosts/Queries/GetReplacementCost/GetReplacementCostQuery.cs` | Get replacement cost information |
| GetSummaryReportQueryHandler | `/Application/Reports/Queries/GetSummaryReport/GetSummaryReportQuery.cs` | Generate summary report |
| GetMethodologyReportQueryHandler | `/Application/Reports/Queries/GetMethodologyReport/GetMethodologyReportQuery.cs` | Generate methodology report |

## Event Handlers

Event handlers process domain events for loosely coupled operations.

| Event Handler | Path | Primary Purpose |
|---------------|------|----------------|
| GetValuationProfileEventHandler | `/Application/Assets/EventHandlers/GetValuationProfileEventHandler.cs` | Handle valuation profile retrieval events |
| RefreshAssetValuationDataEventHandler | `/Application/Assets/EventHandlers/RefreshAssetValuationDataEventHandler.cs` | Refresh asset valuation data when triggered |
| ValidateAssetEventHandler | `/Application/Assets/EventHandlers/ValidateAssetEventHandler.cs` | Validate asset data when triggered |

## Services

Services provide cross-cutting functionality used across the application.

| Service | Path | Primary Purpose |
|---------|------|----------------|
| ICurrentUserService | `/Application/Common/Interfaces/ICurrentUserService.cs` | Provides access to current user context |
| ApiCurrentUserService | `/API/Services/ApiCurrentUserService.cs` | Implementation of current user service for API |
| BgTasksCurrentUserService | `/AVP.BackgroundTasks/Services/BgTasksCurrentUserService.cs` | Implementation for background tasks |
| IApplicationDbContext | `/Application/Common/Interfaces/IApplicationDbContext.cs` | Database context interface |
| IIdentityService | `/Application/Common/Interfaces/IIdentityService.cs` | User identity management |
| IExcelBuilder | `/Application/Common/Interfaces/IExcelBuilder.cs` | Excel file generation |
| IFileStore | `/Application/Common/Interfaces/IFileStore.cs` | File storage operations |

## Core Domain Services

These services implement core business logic related to valuation calculations.

| Service | Description |
|---------|-------------|
| JobOperation | Core service for managing job lifecycle and operations |
| ValuationCalculation | Implements valuation calculation logic |
| ImportExport | Handles data import and export operations |
| AssetValidation | Validates asset data completeness and correctness |
| HierarchyManagement | Manages asset and component hierarchy |
| ReportGeneration | Generates various reports |

## Priority Services

Based on business requirements and core functionality, the following services should be prioritized for detailed documentation:

1. **JobOperation** - Critical for valuation workflow
2. **ValuationCalculation** - Core business logic for valuations
3. **ImportExport** - Essential for data integration
4. **AssetValidation** - Important for data quality
5. **ReportGeneration** - Key for business outputs
