# 🔧 MaintenancePlanController Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/MaintenancePlanController.cs
- **Primary Purpose**: Manages maintenance plans for assets, including creating, retrieving, updating, and deleting maintenance plans and their associated images.
- **Key Endpoints**: 
  - 🔍 POST /List - Retrieves a list of maintenance plans
  - 🔍 GET /Get - Gets a specific maintenance plan by ID
  - 🔄 POST /Update - Updates a maintenance plan
  - 🗑️ POST /Delete - Deletes a maintenance plan
  - 🗑️ POST /DeleteImage - Deletes an image associated with a maintenance plan
  - 🗑️ POST /BulkDelete - Deletes multiple maintenance plans
- **Related Models**: MaintenancePlanDto, MaintenancePlanSummary
- **Used By**: 
  - Maintenance planning interfaces
  - Asset management screens
  - Maintenance scheduling tools
  - Asset lifecycle management

## DETAILED DOCUMENTATION

### 📝 Overview
The MaintenancePlanController manages maintenance plans for assets within Asset Valuer Pro. Maintenance plans define scheduled maintenance activities, inspections, and interventions for assets, supporting asset lifecycle management and preventive maintenance strategies. This controller provides functionality to list, retrieve, update, and delete maintenance plans and their associated images.

### 🏗️ Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
  - ILogger (for logging operations)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 List Maintenance Plans
- **HTTP Method**: POST
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of maintenance plans based on query parameters

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetMaintenancePlanListQuery | Yes | Query parameters for filtering maintenance plans |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Annual HVAC Maintenance",
    "assetId": 456,
    "assetName": "Office Building A",
    "description": "Annual maintenance schedule for HVAC systems",
    "scheduledDate": "2025-06-15T00:00:00Z",
    "status": "Scheduled",
    "estimatedCost": 5000,
    "assignedTo": "John Smith",
    "priority": "Medium",
    "hasImages": true
  },
  {
    "id": 124,
    "name": "Quarterly Electrical Inspection",
    "assetId": 457,
    "assetName": "Warehouse B",
    "description": "Quarterly inspection of electrical systems",
    "scheduledDate": "2025-05-10T00:00:00Z",
    "status": "Scheduled",
    "estimatedCost": 2500,
    "assignedTo": "Jane Doe",
    "priority": "High",
    "hasImages": false
  }
]
```

#### 🔍 Get Maintenance Plan
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves detailed information about a specific maintenance plan

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetMaintenancePlanQuery | Yes | Contains MaintenancePlanId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "Annual HVAC Maintenance",
  "assetId": 456,
  "assetName": "Office Building A",
  "description": "Annual maintenance schedule for HVAC systems",
  "scheduledDate": "2025-06-15T00:00:00Z",
  "completionDate": null,
  "status": "Scheduled",
  "estimatedCost": 5000,
  "actualCost": null,
  "assignedTo": "John Smith",
  "priority": "Medium",
  "maintenanceType": "Preventive",
  "recurrencePattern": "Annual",
  "nextScheduledDate": "2026-06-15T00:00:00Z",
  "notes": "Check all filters, belts, and bearings. Test cooling capacity and clean condenser coils.",
  "componentIds": [101, 102, 103],
  "images": [
    {
      "id": 201,
      "fileName": "hvac_system_diagram.jpg",
      "uploadDate": "2025-01-15T00:00:00Z",
      "description": "HVAC system diagram"
    },
    {
      "id": 202,
      "fileName": "maintenance_checklist.jpg",
      "uploadDate": "2025-01-15T00:00:00Z",
      "description": "Maintenance checklist"
    }
  ]
}
```

#### 🔄 Update Maintenance Plan
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Updates an existing maintenance plan or creates a new one

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateMaintenancePlanCommand | Yes | Contains maintenance plan data to update |

##### Response Format
```json
123
```
(Returns the maintenance plan ID)

#### 🗑️ Delete Maintenance Plan Image
- **HTTP Method**: POST
- **URL Pattern**: /DeleteImage
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Deletes an image associated with a maintenance plan

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteMaintenancePlanImageCommand | Yes | Contains MaintenancePlanId and ImageId to delete |

##### Response Format
```json
"Image deleted successfully"
```
(Returns a status message)

#### 🗑️ Delete Maintenance Plan
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Deletes a maintenance plan by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteMaintenancePlanCommand | Yes | Contains MaintenancePlanId to delete |

##### Response Format
```json
"Maintenance plan deleted successfully"
```
(Returns a status message)

#### 🗑️ Bulk Delete Maintenance Plans
- **HTTP Method**: POST
- **URL Pattern**: /BulkDelete
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Deletes multiple maintenance plans at once

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteMaintenancePlansCommand | Yes | Contains array of MaintenancePlanIds to delete |

##### Response Format
```json
"4 maintenance plans deleted successfully"
```
(Returns a status message with count)

### 💡 Tips for Maintenance Plan Management
- ✅ Maintenance plans can be linked to specific components within assets for better tracking
- 📋 Use recurring patterns to automatically schedule future maintenance activities
- ⚠️ Deleting maintenance plans will also delete associated images
- ℹ️ Completed maintenance plans provide valuable historical data for asset lifecycle analysis