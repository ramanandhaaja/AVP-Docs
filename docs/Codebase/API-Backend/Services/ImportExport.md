# Import/Export Documentation

## Overview

This document details the **Import/Export services** within Asset Valuer Pro (AVP), which enable data flow between AVP and external systems. These services support spreadsheet, mobile app, and image-based inputs, while allowing clean exports for reporting, validation, or backup purposes.

---

## File Path & Structure

| Element              | Path                                   |
| -------------------- | -------------------------------------- |
| **Command Handlers** | `/Application/Assets/Commands/Import*` |
| **Query Handlers**   | `/Application/Assets/Queries/Export*`  |

---

## Primary Purpose

To provide robust import/export capabilities for:

* Asset and component data
* Inspection images
* Field-captured information
* External reporting formats

Used across controllers like:

* `ImportController`
* `AssetController`
* `ComponentController`
* `JobController`

---

## Import Handlers

### `ImportAssetRegisterSpreadsheetCommand`

* Imports asset data from spreadsheets (Excel/CSV)
* Validates headers, maps fields, logs errors
* Supports insert/update logic

### `ImportCaptureAssetCommand`

* Syncs field-collected data from mobile apps
* Merges iPad-captured conditions, dimensions, etc.
* Handles offline to online transitions

### `ImportImagesCommand`

* Associates image files with assets
* Supports JPG/PNG
* Generates thumbnails
* Identifies primary images

---

## Export Handlers

### `ExportAssetsQuery`

* Outputs asset records in Excel/CSV
* Supports filters and related entity inclusion

### `ExportAssetImagesQuery`

* Packages images into ZIP files
* Optionally includes thumbnails and metadata

---

## Import/Export Lifecycle

### Import Flow

1. Upload file / receive mobile sync
2. Validate structure + data
3. Transform into domain model
4. Create/update records
5. Log outcomes and errors
6. Return success/failure summary

### Export Flow

1. User specifies filters and format
2. Fetch records and dependencies
3. Format to Excel/CSV/ZIP
4. Package file for download

---

## Business Use Cases

| Scenario          | Role                                   |
| ----------------- | -------------------------------------- |
| Client onboarding | Upload asset register via Excel        |
| Field inspections | Capture and sync data from mobile apps |
| Audit & assurance | Export valuation data for validation   |
| Visual records    | Download image archives for each asset |

---

## Data Integrity & Isolation

> “The valuation process must be undertaken external to any live data... Data must be quarantined.”

* Ensures imports don’t affect live ERP systems
* Enables offline valuation via snapshot approach
* Logs each import/export for audit tracking

---

## Field Data Integration

* Mobile-captured data syncs into AVP
* Full roundtrip supported:

  1. Export to app (e.g., FileMaker)
  2. Inspect in field
  3. Sync on return
  4. Import and reconcile

---

## Validation & Logging

* Column-level validation
* Data type & reference integrity checks
* Sample-based field verification
* Detailed row-by-row import logs

> “The log file provides confirmation of success/failure and row-level errors.”

---

## Technical Architecture

| Component           | Purpose                       |
| ------------------- | ----------------------------- |
| Command Handlers    | Handle file imports           |
| Query Handlers      | Generate exportable content   |
| Validation Services | Ensure data accuracy          |
| File Processing     | Manage parsing and formatting |

---

## Common Issues & Fixes

| Issue                | Solution                                     |
| -------------------- | -------------------------------------------- |
| Header mismatch      | Alias-mapping and flexible schema            |
| Corrupted characters | Enforce UTF-8 encoding                       |
| Broken relations     | Validate component-to-asset links pre-import |

---

## Performance Tips

* Use **batching** for large imports
* Compress images
* Enable **streaming** for exports
* Paginate web-based file results

---

## Related Docs

* [Asset Model](../Models/Asset)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
* [AssetAssumptions](../Models/AssetAssumptions)
