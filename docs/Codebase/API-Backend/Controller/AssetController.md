# AssetController

## Summary

* **File Path**: `/API/Controllers/AssetController.cs`
* **Authentication Required**: ✅ Yes
* **Primary Role**: Centralized handling of asset records including their creation, retrieval, update, deletion, import, and export.
* **Used In**:

  * Asset Management UI
  * Field Data Collection (Mobile app)
  * Valuation Calculation Workflow
  * Import/Export of Asset Registers

## Technical Overview

### Dependencies

* **Namespace**: `AVP.API.Controllers`
* **Frameworks & Patterns**:

  * Mediator (CQRS implementation)
  * Logger (Error tracking)
  * BusRegistry (Legacy import support)

### Related DTOs

* `AssetDto` – Full representation of an asset
* `AssetSummaryDto` – Condensed version for lists/grids
* `AssetOfflineDto` – For mobile offline usage
* `AssetNoteDto` – Notes attached to an asset

---

## API Endpoints

### Search Assets

* **Method**: `POST`
* **URL**: `/SearchAssets`
* **Auth**: ✅ Required
* **Purpose**: Searches for assets based on criteria (e.g., name, type, condition, value)

**Request Body**: `SearchAssetsQuery`

**Example Response**:

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

---

### Get Asset by ID

* **Method**: `GET`
* **URL**: `/Get`
* **Auth**: ✅ Required
* **Purpose**: Retrieve full details of a single asset

**Query Param**: `GetAssetQuery`

**Example Response**:

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

---

### Update Asset

* **Method**: `POST`
* **URL**: `/Update`
* **Auth**: ✅ Required
* **Purpose**: Updates an asset’s properties

**Request Body**: `UpdateAssetCommand`

**Example Response**:

```json
123
```

(Returns updated asset ID)

---

### Import Assets

* **Method**: `POST`
* **URL**: `/Import`
* **Auth**: ✅ Required
* **Purpose**: Imports asset data from an uploaded spreadsheet

**Request Body**: `ImportAssetRegisterSpreadsheetCommand`

**Example Response**:

```json
{
  "importedCount": 15,
  "failedCount": 0,
  "messages": ["Import completed successfully"]
}
```

---

### Export Assets

* **Method**: `POST`
* **URL**: `/Export`
* **Auth**: ✅ Required
* **Purpose**: Exports asset data to downloadable formats (CSV/Excel)

**Request Body**: `ExportAssetsQuery`

**Response**: Binary file download (e.g., `.csv`, `.xlsx`)

---

## Business Context (Non-Technical)

### What is the AssetController?

The AssetController manages **assets**, which are items such as buildings, vehicles, and infrastructure that need to be valued. It acts as a bridge between the business side (asset management and valuation) and the technical backend.

### Business Functions It Supports

1. **Initial Setup & Registration**

   * Uploading asset registers via Excel import
   * Creating individual asset records via UI

2. **Valuation Process**

   * Supports the 3 standard valuation methods:

     * **Cost Approach**: Used for public benefit assets
     * **Market Approach**: Used when similar assets are sold
     * **Income Approach**: Used for income-producing assets

3. **Field Inspection & Update**

   * Mobile app integration enables inspectors to update assets on-site
   * Notes, photos, and condition data can be recorded in the field

4. **ERP/Finance System Integration**

   * Import/export capability allows asset data to be synced with external systems while keeping valuation work separate

5. **Reporting & Lifecycle Planning**

   * Assets can be exported and analyzed for:

     * Condition reports
     * Renewal needs
     * Depreciation forecasts

---

## Security

All operations require users to be authenticated. Permissions are enforced based on user roles and organization-level access.

---

## Performance Tips

* Always apply filters when using `/SearchAssets` to avoid long queries
* For bulk operations, prefer Import/Export endpoints instead of manual editing

---

## Notes

* This controller is version-agnostic but supports legacy Excel formats and V3 service-based imports
* Asset classification (Class → Type → Sub-Type) is essential and must match the hierarchy defined elsewhere in the system

---