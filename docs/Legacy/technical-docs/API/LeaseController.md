# 🔧 LeaseController Documentation

## QUICK DOCUMENTATION
- **File Path**: `/API/Controllers/LeaseController.cs`
- **Primary Purpose**: Manages property lease information including creating, updating, deleting, and querying lease data
- **Key Endpoints**: 
  - 🔍 `GET /api/Lease/List`: Retrieves a list of leases based on search criteria
  - 🔍 `GET /api/Lease/Get`: Retrieves details of a specific lease
  - 🔄 `POST /api/Lease/Update`: Creates or updates lease information
  - ✏️ `POST /api/Lease/Import`: Imports lease data from a spreadsheet
- **Related Models**: 
  - `LeaseDto`: Represents a property lease
  - `LeaseContactDto`: Represents contact information for lease parties
- **Used By**: 
  - Property management functionality in the APV system
  - Lease reporting and analysis features

## 📝 Business Context
The LeaseController extends Asset Valuer Pro's functionality beyond pure valuation to include property management capabilities. This supports clients who need to track lease agreements for their assets, particularly for income-producing properties that might be valued using the income approach mentioned in the Overview document.

## DETAILED DOCUMENTATION

### 📝 Overview
LeaseController provides endpoints for managing property lease information within Asset Valuer Pro. It supports the full CRUD lifecycle for leases, as well as specialized operations like contact management and lease import/export functionality. This controller handles both tenant and landlord information, as well as internal and external property manager details.

### 🏗️ Controller Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**: 
  - `Mediator`: For handling commands and queries
- **Other Dependencies**: 
  - Inherits from `ApiController`

### 📋 Endpoints

#### 🔍 List Leases
- **HTTP Method**: GET
- **URL Pattern**: `/api/Lease/List`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of leases based on search criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | SearchLeasesQuery | Yes | Search parameters for filtering leases |

##### Response Format
```json
[
  {
    "id": "integer",
    "propertyId": "string",
    "propertyName": "string",
    "tenantName": "string",
    "startDate": "date",
    "endDate": "date",
    "status": "string",
    "rentalAmount": "decimal",
    "contactDetails": { ... }
  }
]
```

#### 🔍 List Lease Contacts
- **HTTP Method**: GET
- **URL Pattern**: `/api/Lease/ListContacts`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves contacts associated with leases

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetLeaseContactListQuery | Yes | Parameters for filtering contacts |

##### Response Format
```json
[
  {
    "id": "integer",
    "leaseId": "integer",
    "contactType": "string",
    "name": "string",
    "email": "string",
    "phone": "string",
    "address": "string"
  }
]
```

#### 🔍 Get Lease
- **HTTP Method**: GET
- **URL Pattern**: `/api/Lease/Get`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves detailed information for a specific lease

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetLeaseQuery | Yes | Identifies the lease to retrieve |

##### Response Format
```json
{
  "id": "integer",
  "propertyId": "string",
  "propertyName": "string",
  "tenantName": "string",
  "startDate": "date",
  "endDate": "date",
  "status": "string",
  "rentalAmount": "decimal",
  "leaseType": "string",
  "renewalOptions": "string",
  "paymentTerms": "string",
  "contacts": [ ... ],
  "additionalDetails": { ... }
}
```

#### 🔄 Update Lease
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/Update`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Creates a new lease or updates an existing one

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateLeaseCommand | Yes | Lease data to create/update |

##### Response Format
```json
integer // ID of the created/updated lease
```

#### 🔄 Export Leases
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/Export`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Exports lease data to a file format

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportLeasesQuery | Yes | Parameters for the export operation |

##### Response Format
File download with lease data in specified format.

#### 🗑️ Delete Lease
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/Delete`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Deletes a specific lease

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteLeaseCommand | Yes | Identifies the lease to delete |

##### Response Format
```json
integer // Number of records affected
```

#### 🗑️ Bulk Delete Leases
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/BulkDelete`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Deletes multiple leases in a single operation

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteLeasesCommand | Yes | Identifies the leases to delete |

##### Response Format
```json
{
  "message": "string" // Result of the operation
}
```

#### 🗑️ Remove Lease Contact
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/RemoveLeaseContact`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Removes a contact from a lease

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RemoveLeaseContactCommand | Yes | Identifies the contact to remove |

##### Response Format
```json
string // Result message
```

#### ✏️ Import Leases
- **HTTP Method**: POST
- **URL Pattern**: `/api/Lease/Import`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Imports lease data from a spreadsheet

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportLeaseSpreadsheetCommand | Yes | Import parameters and file |

##### Response Format
```json
{
  "success": "boolean",
  "message": "string",
  "importedCount": "integer",
  "errors": [ "string" ]
}
```

#### ✏️ Add/Update Contacts
The controller includes endpoints for adding and updating different types of lease contacts:
- ✏️ `/api/Lease/AddLandlord`
- ✏️ `/api/Lease/AddInternalPropertyManager`
- ✏️ `/api/Lease/AddExternalPropertyManager`
- 🔄 `/api/Lease/UpdateLandlord`
- 🔄 `/api/Lease/UpdateInternalPropertyManager`
- 🔄 `/api/Lease/UpdateExternalPropertyManager`

Each of these endpoints accepts a command object specific to the contact type and returns a status message.

### 💡 Implementation Notes
- ℹ️ The controller uses a consistent pattern of delegating to the Mediator for handling commands and queries
- 🔄 Import/export functionality supports data exchange with external systems
- 👥 Contact management is separated into different contact types with specialized operations
- 📄 The controller returns different response types depending on the operation, including direct values, status messages, and file downloads