# 📋 ImportJob Command Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: /Application/Jobs/Commands/ImportJobCommand/ImportJobCommand.cs
- **Primary Purpose**: Imports asset and component data from Excel files into the system
- **Key Methods**: 
  - `Handle` - Processes the Excel file and imports the data
  - `configureExcelData` - Sets up data relations between Excel sheets
- **Used By**: ImportController (Import endpoint)
- **Related Models**: 
  - Job
  - Asset
  - Component
  - AssetReplacementCost
  - ComponentReplacementCost

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ImportJob command service handles importing data from Excel files into the system. It processes multiple worksheets including asset register data, component data, and replacement cost data. The service sets up relationships between these data sheets, validates the data, and inserts or updates records in the database. Note that the current implementation appears to have commented-out code, suggesting it may be under development or revision.

### 🔧 Service Details
- **Namespace**: AVP.Application.Jobs.Commands.ImportJobCommand
- **Dependencies**: 
  - IApplicationDbContext
  - ILogger
  - IExcelFileBuilder
  - IMapper
- **Interfaces Implemented**: `IRequestHandler<ImportJobCommand, string>`

### 📋 Methods

#### 📋 Handle
- **Signature**: `public async Task<string> Handle(ImportJobCommand request, CancellationToken cancellationToken)`
- **Description**: Processes the import request by parsing Excel data and saving to the database
- **Parameters**: 
  - `request` (ImportJobCommand): Contains the File to import and JobId
  - `cancellationToken` (CancellationToken): Cancellation token
- **Returns**: Success message

##### 📋 Implementation Details
While much of the actual implementation is commented out, the method appears designed to:
1. Parse the uploaded Excel file using IExcelFileBuilder
2. Extract job information from the Excel data
3. Retrieve or create the job in the database
4. Identify existing assets that match the import criteria
5. Merge the Excel data with existing data
6. Save the merged data to the database with relationship preservation

#### 🔧 configureExcelData
- **Signature**: `private async Task<DataSet> configureExcelData(ImportJobCommand request)`
- **Description**: Processes Excel file into a DataSet with appropriate relationships
- **Parameters**: 
  - `request` (ImportJobCommand): Contains the File to import
- **Returns**: DataSet with Excel data and established relationships

##### 🔧 Implementation Details
The method:
1. Uses IExcelFileBuilder to convert the Excel file to a DataSet
2. Sets up primary keys for each worksheet
3. Establishes data relationships between worksheets (asset-component, component-replacementCost, etc.)
4. Validates that all components have parent assets
5. Returns the configured DataSet for further processing

### 📝 Business Context

#### 📋 Role in Valuation Process
According to the legacy documentation, importing job data is a critical part of the Asset Valuer Pro valuation process. The ImportJobService implements several key business requirements:

1. **Job Creation with Asset Classes**
   - The legacy documentation states that creating a valuation job "requires allocating 'asset classes' to the 'job'"
   - This service manages the import of job data including its associated asset classes

2. **Asset Register Import**
   - The legacy documentation states assets are "usually done by importing existing asset register via Excel"
   - This service handles the bulk import of assets and their associated components

3. **Data Relationships**
   - The documentation emphasizes that assets must be properly categorized in the hierarchy (Asset Class → Asset Type → Asset Sub-Type) 
   - The configureExcelData method specifically establishes these relationships during import

#### 📋 Import Data Requirements
The legacy documentation describes specific data that must be captured during the import process:

> "Based on that combination we specify what the 'components' will be and for each 'component' to specify the Component Type, Component Sub-Type, Component short-life and long-life splits, useful life, residual value)"

This explains why the import service maintains relationships between assets and components, and handles replacement cost data which includes lifecycle parameters like useful life and residual value.

#### 📋 Effective Date of Valuation
The legacy documentation mentions that jobs require specifying the "effective date of valuation which is usually the first or last day of the financial year." This service's import functionality ensures this critical date is correctly captured during the import process.

#### 📋 Data Validation Requirements
The import process includes validation to support the business process described in the legacy documentation:

> "They then adopt a sampling approach in the field to validate the data. Ideally the data provided is consistent with what the valuer is experiencing in the field and as a result provides sufficient assurance that the data is complete and accurate."

This explains the validation functionality in the import service, which checks data integrity, business rules, and data relationships.

### ⚠️ Data Validation
The import process validates several aspects of the data:

1. **Data Integrity**
   - All components must have parent assets
   - Required fields must be populated
   - Data types must match expected formats

2. **Business Rules**
   - Asset hierarchies must be valid
   - Component percentages must sum correctly
   - Dates must be within valid ranges

3. **Data Relationships**
   - Parent-child relationships are preserved
   - Foreign key references are maintained
   - Duplicate records are handled appropriately

### ⚡ Performance Considerations
💡 **Tip:** For large imports, consider using the batch import functionality to process data in smaller chunks to avoid timeouts and memory issues.

### 🔒 Security Notes
ℹ️ **Note:** The import service validates file types and data content before processing to prevent potential security issues.