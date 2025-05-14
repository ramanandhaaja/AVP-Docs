# API Controllers Inventory

This document provides an inventory of all API controllers in the Asset Valuer Pro application. Controllers are organized by their functional domain and include a brief description of their purpose.

## Core Controllers

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| ApiController | `/API/Controllers/ApiController.cs` | Base controller that provides common functionality to other controllers |
| ClientController | `/API/Controllers/ClientController.cs` | Manages client entities and operations |
| UserController | `/API/Controllers/UserController.cs` | Handles user management and authentication |
| RoleController | `/API/Controllers/RoleController.cs` | Manages user roles and permissions |
| GroupController | `/API/Controllers/GroupController.cs` | Handles user group management |
| SubscriptionController | `/API/Controllers/SubscriptionController.cs` | Manages client subscriptions |
| LookupController | `/API/Controllers/LookupController.cs` | Provides lookup values for dropdowns and other UI elements |
| FilterController | `/API/Controllers/FilterController.cs` | Handles filtering operations for various entities |

## Asset Management

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| AssetController | `/API/Controllers/AssetController.cs` | Core asset management operations (CRUD) |
| AssetClassController | `/API/Controllers/AssetClassController.cs` | Manages asset classification |
| AssetHierarchyController | `/API/Controllers/AssetHierarchyController.cs` | Handles asset hierarchical structure |
| ComponentController | `/API/Controllers/ComponentController.cs` | Manages asset components |
| ComponentHierarchyController | `/API/Controllers/ComponentHierarchyController.cs` | Handles component hierarchical structure |
| ContentController | `/API/Controllers/ContentController.cs` | Manages content items associated with assets |
| MaintenancePlanController | `/API/Controllers/MaintenancePlanController.cs` | Handles maintenance planning for assets |
| LeaseController | `/API/Controllers/LeaseController.cs` | Manages lease information for assets |

## Valuation

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| JobController | `/API/Controllers/JobController.cs` | Manages valuation jobs |
| ValuationProfileController | `/API/Controllers/ValuationProfileController.cs` | Handles valuation profile configuration |
| ValuationProfileRuleController | `/API/Controllers/ValuationProfileRuleController.cs` | Manages rules for valuation profiles |
| ValuationClassController | `/API/Controllers/ValuationClassController.cs` | Manages valuation classifications |
| FinancialClassController | `/API/Controllers/FinancialClassController.cs` | Handles financial classifications |
| AssumptionsController | `/API/Controllers/AssumptionsController.cs` | Manages valuation assumptions |
| BaselineAssumptionsController | `/API/Controllers/BaselineAssumptionsController.cs` | Handles baseline assumptions for valuations |
| StrategyController | `/API/Controllers/StrategyController.cs` | Manages valuation strategies |

## Cost Management

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| AssetReplacementCostController | `/API/Controllers/AssetReplacementCostController.cs` | Manages asset replacement costs |
| ComponentReplacementCostController | `/API/Controllers/ComponentReplacementCostController.cs` | Handles component replacement costs |

## Reports and Documents

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| ReportsController | `/API/Controllers/ReportsController.cs` | Generates and manages reports |
| DocumentController | `/API/Controllers/DocumentController.cs` | Handles document management |

## Import and Export

| Controller | File Path | Primary Purpose |
|------------|-----------|----------------|
| ImportController | `/API/Controllers/ImportController.cs` | Handles data import operations |
| ImportLogController | `/API/Controllers/ImportLogController.cs` | Manages logs of import operations |

## Priority Controllers

Based on the business requirements and core functionality, the following controllers should be prioritized for detailed documentation:

1. **AssetController** - Core asset management functionality
2. **JobController** - Key for valuation processes
3. **ValuationProfileController** - Critical for valuation configuration
4. **ComponentController** - Essential for asset component management 
5. **ImportController** - Important for data integration workflows
