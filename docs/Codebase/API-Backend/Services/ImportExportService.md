# ImportExportServices Documentation

## Quick Summary

- **Location in Project**:
  - Implementation: `/Infrastructure/Services/ImportExport/*`
  - Interfaces: `/Application/Common/Interfaces/IImport*`, `/Application/Common/Interfaces/IExport*`
- **Purpose**: Handles import and export of asset-related data (like asset registers, field data, and images) between Asset Valuer Pro and external systems.
- **Core Features**:
  - Import and export of Excel/CSV data
  - Image handling
  - Mobile field data sync
  - Business rule validation
  - Logging and error reporting
- **Key Consumers**:
  - `ImportController`, `AssetController`, `JobController`
  - Command/query handlers

## Overview

The `ImportExportServices` suite provides tools to transfer structured data to and from Asset Valuer Pro. It supports workflows for importing asset registers, syncing field-collected data, and exporting structured information for reporting or analysis. The services emphasize data accuracy, structured error handling, and robust logging.

## 🔍 Service Architecture

- **Namespace**: `AVP.Infrastructure.Services.ImportExport`
- **Design Pattern**: Implements domain service interfaces
- **Dependencies**:
  - `ExcelService`: Reads/writes Excel files
  - `FileStorageService`: Manages file I/O
  - `ValidationService`: Enforces business rules

---

## Import Services

### AssetImportService

- **Goal**: Import structured asset data from Excel/CSV
- **Key Methods**:
  - `ImportAssetRegister(file)`: Main method to import an entire asset register.
  - `ParseAssetData(data)`: Converts spreadsheet data to internal asset model.
  - `ValidateAssetImport(assets)`: Validates format, required fields, and relationships.
  - `ProcessImportResults(results)`: Handles post-import processing and feedback.

### FieldDataImportService

- **Goal**: Import data gathered in the field (e.g., via iPads or mobile apps).
- **Key Methods**:
  - `ImportFieldData(data)`: Primary entry for field data.
  - `MergeFieldData(existing, new)`: Updates or merges data with what's already in the system.
  - `SynchronizeOfflineData(data)`: Reconciles data collected offline.
  - `ProcessFieldUpdates(updates)`: Applies field updates to master data.

### ImageImportService

- **Goal**: Manage and import asset images.
- **Key Methods**:
  - `ImportImages(files)`: Imports and processes image files.
  - `CreateThumbnails(images)`: Creates small versions for UI previews.
  - `AssociateImagesWithAssets(images, assets)`: Links images with their respective assets.
  - `SetPrimaryImage(asset, image)`: Flags an image as the asset’s main display photo.

---

## Export Services

### AssetExportService

- **Goal**: Export asset information to spreadsheet formats.
- **Key Methods**:
  - `ExportAssetRegister(criteria)`: Export filtered or complete registers.
  - `ConfigureExportColumns(options)`: Customize which data fields to include.
  - `GenerateExcelFile(data)`, `GenerateCsvFile(data)`: Format outputs.

### ImageExportService

- **Goal**: Export images associated with assets.
- **Key Methods**:
  - `ExportImages(assetIds)`: Collects and packages images by asset.
  - `CreateImageZipFile(images)`: Bundles images in a ZIP for download.
  - `GenerateImageMetadata(images)`: Creates metadata about exported images.

---

## Data Validation Services

### ImportValidationService

- **Purpose**: Ensures data integrity before insertion.
- **Key Methods**:
  - `ValidateAssetData(assets)`: Checks asset structure and required fields.
  - `ValidateComponentData(components)`: Validates related components.
  - `ValidateRelationships(assets, components)`: Ensures correct links.
  - `GenerateValidationReport(results)`: Outputs a summary of all issues found.

---

## Process Workflows

### Import Process

1. **Upload**: Spreadsheet or mobile device sends data.
2. **Pre-processing**: Detects file type and validates structure.
3. **Parse**: Maps raw data to internal data models.
4. **Validation**: Checks for missing, invalid, or inconsistent data.
5. **Process**: Updates or creates records in database.
6. **Feedback**: Returns results, error logs, and summary to user.

### Export Process

1. **Parameter Collection**: User specifies filters and options.
2. **Data Retrieval**: Gathers relevant records and relations.
3. **Transformation**: Formats data for Excel, CSV, etc.
4. **File Creation**: Generates downloadable file (ZIP for images).
5. **Delivery**: User downloads file or stores to file system.

---

## Business Use Cases

### Core to Valuation Workflow

> *“Initial asset register and attributes are imported into Asset Valuer Pro via Excel.”*

### Field Collection Support

> *“Data is exported/imported via CSV and image ZIPs between Asset Valuer Pro and File Maker/iPads.”*

### Client Data Integration

> *“Client-provided Excel files are cleaned and imported to AVP.”*

### Format Requirements

- Excel (.xls/.xlsx) and CSV for text
- ZIP for image batch imports/exports

---

## Performance Notes

- **Batching**: Handle large imports in chunks.
- **Memory**: Stream files to reduce memory footprint.
- **Parallelization**: Use background threads for heavy processing.

---

## Common Pitfalls & Fixes

| Issue | Description | Solution |
|------|-------------|----------|
| Field mismatch | Field names don't match system | Use flexible alias mapping |
| Encoding errors | Special characters lost | Use consistent UTF-8 encoding |
| Large images | Memory issues | Resize/compress automatically |
| Broken links | Asset/image/component mismatches | Validate relationships first |

---

## Integration Points

- **File Storage**: Uploads and downloads
- **Validation**: Cross-check business rules
- **Mobile Sync**: Field data exchange
- **Authorization**: Controls access to sensitive actions
- **Logging**: Tracks all import/export operations

---
