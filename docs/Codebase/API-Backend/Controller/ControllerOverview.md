---
sidebar_label: 'Controller Overview' 
sidebar_position: 0
---

# Controller Overview

> **⚠️ Important Note:**  
> This directory contains documentation about the API controllers used in Asset Valuer Pro. The actual source code is maintained in a separate repository and is not included in this documentation repository.

## Overview

This directory contains documentation for the API controllers that form the backend services of the Asset Valuer Pro system. These controllers handle HTTP requests, implement business logic, and interact with the data models.

## Available Controller Documentation

- [AssetController](AssetController.md) - Manages core asset operations
- [JobController](JobController.md) - Handles valuation job management
- [ReportsController](ReportsController.md) - Generates various reports
- [ImportController](ImportController.md) - Manages data import and export
- And many more...

For a complete list of controllers, see the [Controllers Inventory](Controllers_Inventory.md).

## Controller Organization

The controllers follow a domain-driven organization:

1. **Asset Management**
   - AssetController
   - ComponentController
   - AssetClassController
   - AssetHierarchyController

2. **Valuation Framework**
   - ValuationProfileController
   - ValuationClassController
   - AssumptionsController

3. **Job Management**
   - JobController
   - ImportController
   - ContentController

4. **Reporting**
   - ReportsController
   - MaintenancePlanController
   - StrategyController

5. **User and Client Management**
   - UserController
   - RoleController
   - ClientController
   - SubscriptionController

Refer to the individual controller documentation for detailed endpoint information.
