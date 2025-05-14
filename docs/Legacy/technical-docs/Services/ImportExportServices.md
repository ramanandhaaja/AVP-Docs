# 📋 ImportExportServices Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: Services in `/Infrastructure/Services/ImportExport/*` and interfaces in `/Application/Common/Interfaces/IImport*` and `/Application/Common/Interfaces/IExport*`
- **Primary Purpose**: Provides services for importing and exporting assets, components, and related data between Asset Valuer Pro and external systems
- **Key Methods**:
  - `ImportAssetRegister()`: Processes asset register spreadsheets
  - `ExportAssetRegister()`: Exports asset data to spreadsheets
  - `ImportFieldData()`: Imports data collected from mobile devices
  - `ImportImages()`: Processes asset images
  - `ValidateImportData()`: Validates data against business rules
- **Used By**:
  - `ImportController`: For import operations
  - `AssetController`: For asset export operations
  - `JobController`: For job-related exports
  - Import/Export command and query handlers
- **Related Models**:
  - `Asset`: Assets being imported/exported
  - `Component`: Components being imported/exported
  - `ImportLog`: Log entries for import operations
  - `ImportValidationResult`: Validation results for imports

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ImportExportServices provide a comprehensive set of services for transferring data between Asset Valuer Pro and external systems. These services handle importing asset data from client systems, field data from mobile collection apps, and exporting data for reporting and analysis. The services include robust validation, error handling, and logging to ensure data integrity during transfer operations.

### 🔧 Service Details
- **Namespace**: AVP.Infrastructure.Services.ImportExport
- **Pattern**: Service implementations of domain interfaces
- **Dependencies**:
  - `ExcelService`: Handles Excel file processing
  - `FileStorageService`: Manages file storage operations
  - `ValidationService`: Validates data against business rules

### 📋 Import Services

#### ✏️ AssetImportService
- **Purpose**: Imports asset data from Excel/CSV spreadsheets
- **Key Methods**:
  - `ImportAssetRegister(file)`: Imports a complete asset register
  - `ParseAssetData(data)`: Converts raw data to asset entities
  - `ValidateAssetImport(assets)`: Validates imported asset data
  - `ProcessImportResults(results)`: Handles import results

#### ✏️ FieldDataImportService
- **Purpose**: Processes data collected via mobile app
- **Key Methods**:
  - `ImportFieldData(data)`: Imports field collection data
  - `MergeFieldData(existingData, newData)`: Merges field data with existing records
  - `SynchronizeOfflineData(offlineData)`: Handles offline data reconciliation
  - `ProcessFieldUpdates(updates)`: Applies field updates to assets

#### ✏️ ImageImportService
- **Purpose**: Imports and associates images with assets
- **Key Methods**:
  - `ImportImages(files)`: Processes image files
  - `CreateThumbnails(images)`: Generates thumbnail versions
  - `AssociateImagesWithAssets(images, assets)`: Links images to appropriate assets
  - `SetPrimaryImage(asset, image)`: Sets primary image for an asset

### 📋 Export Services

#### 🔍 AssetExportService
- **Purpose**: Exports asset data to spreadsheets
- **Key Methods**:
  - `ExportAssetRegister(criteria)`: Exports asset data based on criteria
  - `ConfigureExportColumns(options)`: Configures export column selection
  - `GenerateExcelFile(data)`: Creates Excel output files
  - `GenerateCsvFile(data)`: Creates CSV output files

#### 🔍 ImageExportService
- **Purpose**: Exports asset images
- **Key Methods**:
  - `ExportImages(assetIds)`: Exports images for selected assets
  - `CreateImageZipFile(images)`: Creates downloadable zip archives
  - `GenerateImageMetadata(images)`: Creates metadata files for exports

### 📋 Validation Services

#### ⚠️ ImportValidationService
- **Purpose**: Validates imported data against business rules
- **Key Methods**:
  - `ValidateAssetData(assets)`: Validates asset data completeness and correctness
  - `ValidateComponentData(components)`: Validates component data
  - `ValidateRelationships(assets, components)`: Validates entity relationships
  - `GenerateValidationReport(results)`: Creates validation summary reports

### 📋 Import/Export Process Flow

#### 📋 Import Flow
1. **File Upload**: User uploads spreadsheet or mobile app syncs data
2. **Pre-processing**: 
   - File format detection and validation
   - Basic structure validation
3. **Data Parsing**: 
   - Convert raw data to entity structures
   - Map external field names to internal properties
4. **Business Validation**:
   - Validate required fields
   - Check data types and constraints
   - Validate relationships and dependencies
5. **Processing**:
   - Create new records or update existing ones
   - Apply business rules and defaults
6. **Results**:
   - Generate import result summary
   - Create detailed logs for review
   - Return success/failure to user

#### 📋 Export Flow
1. **Request Parameters**:
   - User specifies export criteria and options
   - System validates request parameters
2. **Data Retrieval**:
   - Query database for requested entities
   - Include related data as needed
3. **Data Transformation**:
   - Format data for target output format
   - Apply formatting and calculations
4. **File Generation**:
   - Create Excel, CSV, or ZIP files
   - Apply consistent formatting
5. **Delivery**:
   - Return file for download
   - Store file in file system if requested

### 📝 Business Context

#### 📋 Critical Role in Valuation Workflow
According to the legacy documentation, import/export functionality is fundamental to the Asset Valuer Pro workflow:

> "An initial asset register and associated attributes are sourced from the client and imported into Asset Valuer Pro via Excel"

The ImportExportServices implement this core business requirement, enabling the data acquisition that begins the valuation process.

#### 📋 Field Data Collection Process
The legacy documentation describes a specific workflow for field data collection:

> "All data held within Asset Valuer Pro is exported to CSV files and zip files (images) and imported into File Maker Pro running off the valuers PC. This is then synchronised to the iPad. On return to the office (or web access) the data is then synchronised back to the PC, exported and then imported back into Asset Valuer Pro."

The FieldDataImportService and export services implement this workflow, handling the transfer of data between the core system and mobile collection devices.

#### 📋 Client Data Integration
For infrastructure assets, the documentation notes:

> "For infrastructure, the data is normally provided by the client in Excel files. The valuers will then clean up and sort the Excel files and import the data into Asset Valuer Pro."

The ImportExportServices include functionality specifically for handling and processing client-provided Excel files, with validation to ensure data quality.

#### 📋 Format Support Requirements
The legacy documentation specifies format requirements:

> "All textual data can be imported and exported via Excel (version 2) or CSV file (version 3)... A separate process using zip files is used to import/export photos and images."

The services implement these exact format requirements, supporting both Excel and CSV for textual data and zip files for images.

### ⚡ Performance Considerations
When working with large datasets:

1. **Batch Processing**
   - Process large imports in smaller batches
   - Use transactions for data integrity

2. **Memory Management**
   - Stream large files rather than loading entirely in memory
   - Release resources promptly after processing

3. **Parallel Processing**
   - Process multiple files concurrently where appropriate
   - Use background tasks for time-consuming operations

### ⚠️ Common Issues and Solutions
ℹ️ **Note:** Watch for these common import/export challenges:

1. **Data Mapping Issues**
   - Field name mismatches
   - Solution: Use flexible mapping with alias support

2. **Character Encoding**
   - Special characters corrupted during transfer
   - Solution: Enforce UTF-8 encoding

3. **Image Handling**
   - Large images consuming excessive resources
   - Solution: Automatic resizing and compression

4. **Relationship Integrity**
   - References to non-existent entities
   - Solution: Validation before database modification

### 🔧 Integration Points
The ImportExportServices integrate with several other components:

- **File Storage**: Stores and retrieves import/export files
- **Validation Services**: Validates data against business rules
- **Logging Services**: Records import/export activities
- **Mobile App Interfaces**: Communicates with field collection apps
- **Authorization Services**: Controls access to import/export operations