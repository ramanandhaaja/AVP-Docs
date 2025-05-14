# 📊 AssetController Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/AssetController.cs
- **Primary Purpose**: Manages all asset-related operations including creation, retrieval, updates, deletion, and import/export functionality.
- **Key Endpoints**: 
  - 🔍 GET /Get - Retrieves a specific asset by ID
  - ✏️ POST /SearchAssets - Searches for assets based on various criteria
  - 🔄 POST /Update - Updates asset details
  - ✏️ POST /Import - Imports assets from a spreadsheet
  - ✏️ POST /Export - Exports assets to downloadable files
- **Related Models**: AssetDto, AssetSummaryDto, AssetOfflineDto, AssetNoteDto
- **Used By**: 
  - Asset management screens
  - Data capture and import/export processes
  - Valuation calculation workflows
  - Field data collection (iOS app)

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The AssetController is a core component of Asset Valuer Pro, handling all aspects of asset management. Assets are the primary entities being valued in the system, and this controller provides comprehensive functionality for creating, reading, updating, and deleting assets, as well as managing asset-related data such as images, notes, and valuation parameters.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
  - Logger (for error logging)
  - BusRegistry (for V2 import functionality)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Search Assets
- **HTTP Method**: POST
- **URL Pattern**: /SearchAssets
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Searches for assets based on various criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | SearchAssetsQuery | Yes | Search criteria and filters |

##### Response Format
```json
[
  {
    "id": 123,
    "jobId": 456,
    "name": "Example Asset",
    "assetClass": "Building",
    "assetType": "Commercial",
    "condition": "Good",
    "value": 1500000
  }
]
```

#### 🔍 Get Asset By ID
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific asset by its ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetQuery | Yes | Contains AssetId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "jobId": 456,
  "name": "Example Asset",
  "assetClass": "Building",
  "assetType": "Commercial",
  "assetSubType": "Office",
  "description": "4-story office building",
  "address": "123 Main St",
  "valuationApproach": "CostApproach",
  "components": [
    {
      "id": 789,
      "name": "Structure",
      "replacementCost": 1200000,
      "condition": "Good"
    }
  ],
  "notes": [
    {
      "id": 101,
      "text": "Recently renovated",
      "author": "John Smith",
      "date": "2025-01-15T00:00:00Z"
    }
  ],
  "images": [
    {
      "id": 201,
      "fileName": "front-view.jpg",
      "isPrimary": true
    }
  ]
}
```

#### 🔄 Update Asset
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates asset properties

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateAssetCommand | Yes | Contains updated asset data |

##### Response Format
```json
123
```
(Returns the asset ID)

#### ✏️ Import Assets
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required
- **Description**: Imports assets from a spreadsheet file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportAssetRegisterSpreadsheetCommand | Yes | Contains file and import options |

##### Response Format
```json
{
  "importedCount": 15,
  "failedCount": 0,
  "messages": ["Import completed successfully"]
}
```

#### ✏️ Export Assets
- **HTTP Method**: POST
- **URL Pattern**: /Export
- **Authentication**: 🔒 Required
- **Description**: Exports assets to a downloadable file (CSV, Excel)

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportAssetsQuery | Yes | Export options and filters |

##### Response Format
File download (binary content)

### 📝 Business Context

> **⚠️ Version Note:**  
> The legacy documentation emphasizes file-based import/export with CSV/Excel files, while the controller code also implements direct API-based data exchange. This reflects the transition from version 2 to version 3 mentioned in the legacy documentation.

#### 📋 Role in the Valuation Process
According to the legacy documentation, the Asset entity is central to the entire valuation process in APV. The AssetController plays a critical role in several key business processes:

1. **Initial Asset Registration**
   - The legacy documentation states that assets are typically created and registered by "importing existing asset register via Excel"
   - The ImportAssets endpoint implements this core business requirement
   - The controller supports the "Create and register Assets" step in the setup process

2. **Field Data Collection**
   - The Update endpoint supports data collected from the mobile app
   - Field inspections update asset attributes, including condition scores essential for valuation

3. **Asset Hierarchy Management**
   - The controller enables categorization of assets within the required Asset Class → Asset Type → Asset Sub-Type hierarchy
   - This hierarchical classification is described in the legacy documentation as "an essential element" of the valuation framework

4. **Data Exchange with External Systems**
   - The Import and Export endpoints implement the business requirement for data isolation between the valuation system and client's ERP/finance systems
   - The legacy documentation emphasizes that "the valuation process must be undertaken external to any live data held in an entity's ERP or finance system"

#### 📋 Support for Multiple Valuation Approaches
This controller enables users to apply different valuation methodologies based on asset type, supporting the three approaches described in the legacy documentation:
- Market approach (for assets with open and active markets)
- Income approach (for assets with income-earning potential)
- Cost approach (for assets delivering community benefits with no market)

#### 📋 Integration with Asset Management
Beyond valuation, the AssetController supports the asset management outputs mentioned in the legacy documentation:
- Asset portfolio analysis
- Condition reporting
- Renewal planning
- Cost to bring to satisfactory calculations

### ⚡ Performance Considerations
💡 **Tip:** For large asset datasets, use pagination and filtering in the SearchAssets endpoint to improve query performance.

### 🔒 Security Notes
ℹ️ **Note:** All asset endpoints require authentication and proper authorization based on the user's role and client association.