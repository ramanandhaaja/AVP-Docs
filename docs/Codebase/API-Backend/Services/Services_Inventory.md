
# Business Logic Services Inventory

This document provides an inventory of the business logic services in the Asset Valuer Pro application. The application follows the CQRS (Command Query Responsibility Segregation) pattern, which separates read operations (Queries) from write operations (Commands).

## Application Architecture Overview

The business logic in Asset Valuer Pro is organized using the following patterns:

1. **Command Handlers** – Perform operations that change system state (create, update, delete)
2. **Query Handlers** – Handle data retrieval and reporting
3. **Event Handlers** – Manage domain events
4. **Services** – Provide cross-cutting application support

Each domain contains its own commands, queries, and services for separation of concerns.

## Command Handlers

| Command Handler | Path | Purpose |
|-----------------|------|---------|
| UpdateJobCommandHandler | /Application/Jobs/Commands/UpdateJob/UpdateJobCommand.cs | Create or update a valuation job |
| ArchiveJobCommandHandler | /Application/Jobs/Commands/ArchiveJob/ArchiveJobCommand.cs | Archive a completed job |
| DeleteJobCommandHandler | /Application/Jobs/Commands/DeleteJob/DeleteJobCommand.cs | Delete a job and its related data |
| RefreshJobDataCommandHandler | /Application/Jobs/Commands/RefreshJobData/RefreshJobDataCommand.cs | Recalculate job data |
| RevalidateCommandHandler | /Application/Jobs/Commands/Revalidate/RevalidateCommand.cs | Revalidate job data |
| UpdateAssetCommandHandler | /Application/Assets/Commands/UpdateAsset/UpdateAssetCommand.cs | Create or update an asset |
| DeleteAssetsCommandHandler | /Application/Assets/Commands/DeleteAssets/DeleteAssetsCommand.cs | Delete assets |
| ImportAssetRegisterSpreadsheetCommandHandler | /Application/Assets/Commands/ImportAssets/ImportAssetRegisterSpreadsheetCommand.cs | Import assets from spreadsheet |
| UpdateValuationProfileCommandHandler | /Application/ValuationProfiles/Commands/UpdateValuationProfile/UpdateValuationProfileCommand.cs | Update valuation profile |
| UpdateComponentCommandHandler | /Application/Components/Commands/UpdateComponent/UpdateComponentCommand.cs | Update a component |
| UpdateAssetAssumptionsCommandHandler | /Application/Assumptions/Commands/UpdateAssetAssumptions/UpdateAssetAssumptionsCommand.cs | Update asset assumptions |
| UpdateComponentAssumptionsCommandHandler | /Application/Assumptions/Commands/UpdateComponentAssumptions/UpdateComponentAssumptionsCommand.cs | Update component assumptions |
| ImportHierarchyCommandHandler | /Application/AssetHierarchy/Commands/ImportHierarchy/ImportHierarchyCommand.cs | Import asset hierarchy data |
| CopyHierarchyNodeCommandHandler | /Application/AssetHierarchy/Commands/CopyHierarchyNode/CopyHierarchyNodeCommand.cs | Copy hierarchy node structure |
| UpdateHierarchyNodeCommandHandler | /Application/AssetHierarchy/Commands/UpdateHierarchyNode/UpdateHierarchyNodeCommand.cs | Update hierarchy node |
| ImportCaptureAssetCommandHandler | /Application/Assets/Commands/ImportCaptureAsset/ImportCaptureAssetCommand.cs | Import assets from mobile |
| ImportImagesCommandHandler | /Application/Assets/Commands/ImportImages/ImportImagesCommand.cs | Import asset images |

## Query Handlers

| Query Handler | Path | Purpose |
|---------------|------|---------|
| GetJobQueryHandler | /Application/Jobs/Queries/GetJob/GetJobQuery.cs | Retrieve detailed job information |
| GetJobListQueryHandler | /Application/Jobs/Queries/GetJobList/GetJobListQuery.cs | Retrieve list of jobs |
| GetAssetQueryHandler | /Application/Assets/Queries/GetAsset/GetAssetQuery.cs | Retrieve asset details |
| SearchAssetsQueryHandler | /Application/Assets/Queries/Search/SearchAssets/SearchAssetsQuery.cs | Filtered asset search |
| ExportAssetsQueryHandler | /Application/Assets/Queries/ExportAssets/ExportAssetsQuery.cs | Export assets |
| GetAssetHierarchyForOfflineQueryHandler | /Application/AssetHierarchy/Queries/GetAssetHierarchyForOffline/GetAssetHierarchyForOfflineQuery.cs | Hierarchy for offline access |
| GetValuationProfileQueryHandler | /Application/ValuationProfiles/Queries/GetValuationProfile/GetValuationProfileQuery.cs | Get valuation profile |
| GetComponentQueryHandler | /Application/Components/Queries/GetComponent/GetComponentQuery.cs | Get component data |
| GetAssetAssumptionsQueryHandler | /Application/Assumptions/Queries/GetAssetAssumptions/GetAssetAssumptionsQuery.cs | Get asset assumptions |
| GetReplacementCostQueryHandler | /Application/ReplacementCosts/Queries/GetReplacementCost/GetReplacementCostQuery.cs | Replacement cost data |
| GetSummaryReportQueryHandler | /Application/Reports/Queries/GetSummaryReport/GetSummaryReportQuery.cs | Generate summary report |
| GetMethodologyReportQueryHandler | /Application/Reports/Queries/GetMethodologyReport/GetMethodologyReportQuery.cs | Generate methodology report |

## Event Handlers

| Event Handler | Path | Purpose |
|---------------|------|---------|
| GetValuationProfileEventHandler | /Application/Assets/EventHandlers/GetValuationProfileEventHandler.cs | Fetch valuation profile |
| RefreshAssetValuationDataEventHandler | /Application/Assets/EventHandlers/RefreshAssetValuationDataEventHandler.cs | Refresh asset valuation |
| ValidateAssetEventHandler | /Application/Assets/EventHandlers/ValidateAssetEventHandler.cs | Trigger asset validation |

## Services

| Service | Path | Purpose |
|---------|------|---------|
| ICurrentUserService | /Application/Common/Interfaces/ICurrentUserService.cs | User identity access |
| ApiCurrentUserService | /API/Services/ApiCurrentUserService.cs | API implementation for user service |
| BgTasksCurrentUserService | /AVP.BackgroundTasks/Services/BgTasksCurrentUserService.cs | Background tasks user service |
| IApplicationDbContext | /Application/Common/Interfaces/IApplicationDbContext.cs | DB context abstraction |
| IIdentityService | /Application/Common/Interfaces/IIdentityService.cs | User identity management |
| IExcelBuilder | /Application/Common/Interfaces/IExcelBuilder.cs | Excel generation service |
| IFileStore | /Application/Common/Interfaces/IFileStore.cs | File handling service |

## Core Domain Services

| Service | Description |
|---------|-------------|
| JobOperation | Manages lifecycle of valuation jobs |
| ValuationCalculation | Performs core valuation logic |
| ImportExport | Handles data transfer from files |
| AssetValidation | Validates and flags asset issues |
| HierarchyManagement | Manages classification structure |
| ReportGeneration | Creates and formats reports |

## Priority Services

These services should be documented first due to their core importance:

1. **JobOperation**
2. **ValuationCalculation**
3. **ImportExport**
4. **AssetValidation**
5. **ReportGeneration**
