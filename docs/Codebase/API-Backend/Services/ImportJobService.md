# ImportJob Command Documentation

## QUICK DOCUMENTATION
- **File Path**: /Application/Jobs/Commands/ImportJobCommand/ImportJobCommand.cs
- **Primary Purpose**: Imports asset and component data from Excel files into the system
- **Key Methods**:
  - `Handle`: Processes the Excel file and imports the data
  - `configureExcelData`: Sets up data relations between Excel sheets
- **Used By**: ImportController (Import endpoint)
- **Related Models**:
  - Job
  - Asset
  - Component
  - AssetReplacementCost
  - ComponentReplacementCost

## DETAILED DOCUMENTATION

### Overview
The ImportJob command service handles importing data from Excel files into the system. It processes multiple worksheets including asset register data, component data, and replacement cost data. The service sets up relationships between these data sheets, validates the data, and inserts or updates records in the database.

### Service Details
- **Namespace**: AVP.Application.Jobs.Commands.ImportJobCommand
- **Dependencies**:
  - IApplicationDbContext
  - ILogger
  - IExcelFileBuilder
  - IMapper
- **Implements**: `IRequestHandler<ImportJobCommand, string>`

### Methods

#### Handle
- **Signature**: `Task<string> Handle(ImportJobCommand request, CancellationToken cancellationToken)`
- **Description**: Processes the import request by parsing Excel data and saving it to the database
- **Key Steps**:
  1. Parse Excel with IExcelFileBuilder
  2. Extract job information
  3. Create or retrieve Job
  4. Merge and validate data
  5. Save changes

#### configureExcelData
- **Signature**: `Task<DataSet> configureExcelData(ImportJobCommand request)`
- **Description**: Processes Excel file into a `DataSet` with established relationships between sheets

### Business Context

#### Role in Valuation
- Critical part of Asset Valuer Pro's workflow for job creation and asset/component import.
- Enforces relationships and hierarchy: Asset Class → Asset Type → Asset Sub-Type → Component.
- Ensures valuation job has effective dates and data mapping per regulatory standards.

#### Import Requirements
- Components must be correctly linked to their parent assets.
- Includes lifecycle data: short/long-life splits, useful life, residual value, etc.

#### Validation Requirements
- Ensures alignment between field inspection and imported data.
- Promotes audit-ready and accurate job-level valuation data.

### Data Validation Logic
1. **Data Integrity**
   - Required fields must exist.
   - Component must reference valid asset.

2. **Business Logic**
   - Asset/component percentages valid.
   - Dates align with valuation rules.

3. **Referential Integrity**
   - Relationships preserved.
   - Duplicate handling.

### Performance Considerations
- Use batching for large datasets.
- Avoid loading entire dataset in memory when possible.

### Security Notes
- File validation performed before processing.
- Data integrity checks guard against malformed content.
