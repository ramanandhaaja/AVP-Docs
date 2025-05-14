# 📋 ImportExport Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: Various command handlers in `/Application/Assets/Commands/Import*` and query handlers in `/Application/Assets/Queries/Export*`
- **Primary Purpose**: Handles import and export of assets, components, and related data to/from external systems and files
- **Key Methods**:
  - `ImportAssetRegisterSpreadsheetCommand.Handle()`: Imports assets from spreadsheets
  - `ImportCaptureAssetCommand.Handle()`: Imports assets captured via mobile app
  - `ImportImagesCommand.Handle()`: Imports asset images
  - `ExportAssetsQuery.Handle()`: Exports asset data to spreadsheets
  - `ExportAssetImagesQuery.Handle()`: Exports asset images
- **Used By**:
  - `ImportController`: For managing import operations
  - `AssetController`: For asset export operations
  - `ComponentController`: For component export operations
  - `JobController`: For job-related exports
- **Related Models**:
  - `Asset`: Assets being imported/exported
  - `Component`: Components being imported/exported
  - `ImportLogItem`: Log entries for import operations
  - `ImportResults`: Results of import operations

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ImportExport service is a collection of command and query handlers that manage the import and export of data to and from Asset Valuer Pro. This includes importing assets from client systems, importing field data from mobile apps, exporting data for reporting, and transferring images. The service handles data validation, transformation, and error logging to ensure data integrity during these operations.

### 🔧 Service Details
- **Namespace**: Various namespaces in AVP.Application.Assets
- **Pattern**: CQRS with Command and Query Handlers
- **Key Components**:
  - Import Command Handlers
  - Export Query Handlers
  - Validation Services
  - File Processing Services

### 📋 Import Services

#### ✏️ ImportAssetRegisterSpreadsheetCommand
- **Purpose**: Imports asset data from Excel/CSV spreadsheets
- **Key Features**:
  - Validates column headers and data types
  - Maps external data to internal model properties
  - Handles both insert and update operations
  - Creates detailed import logs for tracking

#### ✏️ ImportCaptureAssetCommand
- **Purpose**: Processes asset data captured via mobile app
- **Key Features**:
  - Synchronizes data between mobile app and central database
  - Processes field-collected information (condition scores, measurements)
  - Merges data with existing asset records
  - Handles offline data reconciliation

#### ✏️ ImportImagesCommand
- **Purpose**: Imports and associates images with assets
- **Key Features**:
  - Processes image files (jpg, png)
  - Creates thumbnail versions
  - Associates images with appropriate assets
  - Handles primary image designation

### 📋 Export Services

#### 🔍 ExportAssetsQuery
- **Purpose**: Exports asset data to spreadsheets
- **Key Features**:
  - Configurable column selection
  - Filtering by various asset attributes
  - Multiple output formats (Excel, CSV)
  - Inclusion of related data (components, valuations)

#### 🔍 ExportAssetImagesQuery
- **Purpose**: Exports asset images as zip files
- **Key Features**:
  - Bundles multiple images for download
  - Includes metadata files
  - Optional thumbnail generation
  - Naming conventions for file organization

### 📋 Import/Export Process Flow

#### 📋 Import Flow
1. **File Upload**: User uploads spreadsheet or mobile app syncs data
2. **Validation**: Data is validated against business rules
3. **Pre-processing**: Data is transformed to match internal models
4. **Execution**: Records are created or updated in database
5. **Logging**: Import logs are created for tracking and troubleshooting
6. **Response**: Success/failure report is returned to user

#### 📋 Export Flow
1. **Query Parameters**: User specifies export criteria and format
2. **Data Gathering**: System retrieves requested data with related entities
3. **Transformation**: Data is transformed to target format
4. **File Generation**: Output files are created (Excel, CSV, ZIP)
5. **Delivery**: Files are made available for download

### 📝 Business Context

#### 📋 Critical Role in Valuation Workflow
According to the legacy documentation, import/export functionality is fundamental to the Asset Valuer Pro workflow:

> "The initial Asset Register is created and registered by 'importing existing asset register via Excel'"  
> "For infrastructure, the data is normally provided by the client in Excel files"  
> "All textual data can be imported and exported via Excel (version 2) or CSV file (version 3)"  

This service implements these core business requirements, enabling the initial data acquisition that begins the valuation process.

#### 📋 Data Isolation Requirements
The import/export functionality directly supports a critical business requirement mentioned in the legacy documentation:

> "The valuation process must be undertaken external to any live data held in an entity's ERP or finance system... The data held in the valuation must be quarantined from live data to ensure agreed valuation results are not impacted by changes to the live data."

This explains why the import/export functionality includes robust validation, logging, and error handling - to maintain data integrity while transferring between isolated systems.

#### 📋 Field Data Collection Integration
The legacy documentation describes a specific workflow for field data collection:

> "The data is exported to the File Maker Pro app running on the valuers PC. This is then synchronized to the iPad. On return to the office (or web access) the data is then synchronized back to the PC, exported and then imported back into Asset Valuer Pro."

This workflow is implemented through the ImportCaptureAssetCommand and related functionality, which handles the synchronization between field devices and the central system.

#### 📋 Import Validation Process
The legacy documentation specifies an important validation step in the process:

> "The valuers will then clean up and sort the Excel files and import the data into Asset Valuer Pro. They then adopt a sampling approach in the field to validate the data. Ideally the data provided is consistent with what the valuer is experiencing in the field and as a result provides sufficient assurance that the data is complete and accurate."

This explains why the import service includes robust validation capabilities and detailed logging - to support this quality assurance process.

#### 📋 Import Logging Requirements
The legacy documentation specifically mentions the importance of import logging:

> "In version 2 the process is controlled via a log file which provides confirmation of whether or not the import was successful and if it failed, the reasons and row numbers of the data that failed."

This explains the detailed logging functionality in the import services, which tracks success/failure at the row level and provides detailed error messages.

### ⚡ Performance Considerations
When working with large datasets, consider these performance tips:

1. **Batch Processing**
   - Import large datasets in smaller batches
   - Use transaction management for reliable operations

2. **Image Handling**
   - Process images asynchronously for large imports
   - Use compression for faster data transfer

3. **Export Optimization**
   - Use streaming for large data exports
   - Implement pagination for web-based exports

### ⚠️ Common Issues and Solutions
ℹ️ **Note:** Watch for these common import/export challenges:

1. **Data Mapping**
   - Column header mismatches in source files
   - Solution: Use flexible mapping with alias support

2. **Character Encoding**
   - Special characters corrupted during import/export
   - Solution: Use UTF-8 encoding consistently

3. **Relationship Integrity**
   - Component references missing parent assets
   - Solution: Validate relationships before finalizing import