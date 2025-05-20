# API Controllers Inventory

This document outlines all API controllers in the Asset Valuer Pro application. Controllers are grouped by domain and described briefly to help both technical and non-technical users understand their roles.

---

## Core Functionality Controllers

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `ApiController` | `/API/Controllers/ApiController.cs` | Base class providing shared controller logic |
| `ClientController` | `/API/Controllers/ClientController.cs` | Manages client entities and related operations |
| `UserController` | `/API/Controllers/UserController.cs` | Handles user registration, login, and management |
| `RoleController` | `/API/Controllers/RoleController.cs` | Manages access roles and permissions |
| `GroupController` | `/API/Controllers/GroupController.cs` | Organizes users into groups |
| `SubscriptionController` | `/API/Controllers/SubscriptionController.cs` | Manages client subscriptions and plans |
| `LookupController` | `/API/Controllers/LookupController.cs` | Provides static data for dropdowns and references |
| `FilterController` | `/API/Controllers/FilterController.cs` | Supports filtering features across modules |

---

## Asset Management Controllers

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `AssetController` | `/API/Controllers/AssetController.cs` | Provides core Create, Read, Update, Delete (CRUD) operations for assets |
| `AssetClassController` | `/API/Controllers/AssetClassController.cs` | Manages classification of assets |
| `AssetHierarchyController` | `/API/Controllers/AssetHierarchyController.cs` | Maintains parent-child asset structures |
| `ComponentController` | `/API/Controllers/ComponentController.cs` | Manages components linked to assets |
| `ComponentHierarchyController` | `/API/Controllers/ComponentHierarchyController.cs` | Manages nested relationships between components |
| `ContentController` | `/API/Controllers/ContentController.cs` | Associates and manages content items linked to assets |
| `MaintenancePlanController` | `/API/Controllers/MaintenancePlanController.cs` | Manages asset maintenance schedules and tasks |
| `LeaseController` | `/API/Controllers/LeaseController.cs` | Stores and manages leasing data for assets |

---

## Valuation Controllers

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `JobController` | `/API/Controllers/JobController.cs` | Coordinates valuation jobs and workflows |
| `ValuationProfileController` | `/API/Controllers/ValuationProfileController.cs` | Configures valuation profiles for use in assessments |
| `ValuationProfileRuleController` | `/API/Controllers/ValuationProfileRuleController.cs` | Manages specific rules within a valuation profile |
| `ValuationClassController` | `/API/Controllers/ValuationClassController.cs` | Categorizes valuation types and attributes |
| `FinancialClassController` | `/API/Controllers/FinancialClassController.cs` | Defines financial groupings and classifications |
| `AssumptionsController` | `/API/Controllers/AssumptionsController.cs` | Manages high-level assumptions used in valuations |
| `BaselineAssumptionsController` | `/API/Controllers/BaselineAssumptionsController.cs` | Handles assumptions serving as default benchmarks |
| `StrategyController` | `/API/Controllers/StrategyController.cs` | Oversees valuation strategy configurations |

---

## Cost Management Controllers

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `AssetReplacementCostController` | `/API/Controllers/AssetReplacementCostController.cs` | Manages estimated replacement costs of full assets |
| `ComponentReplacementCostController` | `/API/Controllers/ComponentReplacementCostController.cs` | Manages replacement costs for individual components |

---

## Reports and Document Management

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `ReportsController` | `/API/Controllers/ReportsController.cs` | Handles generation and retrieval of reports |
| `DocumentController` | `/API/Controllers/DocumentController.cs` | Manages documents uploaded or associated with the system |

---

## Import and Export Controllers

| **Controller** | **File Path** | **Purpose** |
|----------------|---------------|-------------|
| `ImportController` | `/API/Controllers/ImportController.cs` | Supports importing data into the system |
| `ImportLogController` | `/API/Controllers/ImportLogController.cs` | Tracks and audits past import operations |

---

## Controllers to Prioritize for Documentation

These controllers are especially important based on core system usage and business value. Prioritize them for full documentation:

1. **AssetController** – Critical for asset lifecycle management
2. **JobController** – Central to the valuation process
3. **ValuationProfileController** – Key to configuration of valuation logic
4. **ComponentController** – Essential for managing sub-asset components
5. **ImportController** – Supports critical data onboarding processes