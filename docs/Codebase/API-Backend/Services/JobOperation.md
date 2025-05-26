
# JobOperation Documentation

## QUICK DOCUMENTATION
- **File Path**: Various command handlers in `/Application/Jobs/Commands/*`
- **Primary Purpose**: Manages the lifecycle of valuation jobs including creation, updating, archiving, and related operations
- **Key Methods**:
  - `UpdateJobCommand.Handle()`: Creates or updates job information
  - `ArchiveJobCommand.Handle()`: Archives a job and stores final valuation data
  - `RefreshJobDataCommand.Handle()`: Recalculates all values for a job
  - `RevalidateCommand.Handle()`: Validates job data for completeness and consistency
- **Used By**:
  - `JobController`: For job management operations
  - `ReportsController`: For report generation
  - `ImportController`: For associating imports with jobs
- **Related Models**:
  - `Job`: The central entity being managed
  - `AssetClass`: Asset classes included in jobs
  - `Asset`: Assets within job asset classes
  - `ValuationProfile`: Profiles used for valuation

## DETAILED DOCUMENTATION

### Overview
The JobOperation services manage the complete lifecycle of valuation jobs in the Asset Valuer Pro system. These services implement the CQRS pattern through various command handlers, each responsible for specific job-related operations. The job entity is central to the valuation process, as it defines the scope, parameters, and effective date of a valuation.

### Service Details
- **Namespace**: AVP.Application.Jobs.Commands
- **Pattern**: CQRS (Command Query Responsibility Segregation)
- **Key Services**:
  - UpdateJobCommand
  - ArchiveJobCommand
  - RefreshJobDataCommand
  - RevalidateCommand

### Methods

#### UpdateJobCommand.Handle()
- **Purpose**: Creates a new job or updates an existing job
- **Key Parameters**:
  - JobId (int): ID of the job to update (0 for new jobs)
  - Name (string): Job name
  - Description (string): Job description
  - EffectiveDate (DateTime): The official date of valuation
  - AssetClassIds (List of int): Asset classes to include
  - Status (enum): Job status (Open, Draft, Final)
- **Behavior**:
  - Creates a new job if JobId is 0
  - Updates job details for existing jobs
  - Manages job-asset class relationships
  - Sets appropriate audit information

#### ArchiveJobCommand.Handle()
- **Purpose**: Archives a completed job and prepares for the next valuation cycle
- **Key Parameters**:
  - JobId (int): ID of the job to archive
- **Behavior**:
  - Changes job status to "Archived"
  - Stores final valuation data as historical records
  - Makes data available for future comparisons
  - Prevents further modifications

#### RefreshJobDataCommand.Handle()
- **Purpose**: Recalculates all valuation data for assets in a job
- **Key Parameters**:
  - JobId (int): ID of the job to refresh
- **Behavior**:
  - Loads all assets associated with the job
  - Applies valuation rules based on configuration
  - Calculates financial, insurance, and management values
  - Stores calculated values

#### RevalidateCommand.Handle()
- **Purpose**: Validates job data against business rules
- **Key Parameters**:
  - JobId (int): ID of the job to validate
- **Behavior**:
  - Checks asset and component completeness
  - Validates required fields
  - Verifies rule compliance
  - Logs validation issues

## Business Context
JobOperation services support the valuation workflow in Asset Valuer Pro. Each job represents a valuation at a specific time and follows a defined lifecycle:

1. **Creation**: Define valuation job and asset classes
2. **Data Collection**: Import or assign assets
3. **Calculation**: Compute all asset and component values
4. **Validation**: Check completeness and rule conformance
5. **Finalization**: Lock job for client approval
6. **Archiving**: Preserve results for historical analysis

These steps ensure data consistency and traceability in line with best practices for financial reporting and asset management.

## Important Considerations
- Jobs with status "Final" or "Archived" are immutable
- Archiving is a one-way operation
- The effective date filters the data included
- Performance may degrade for large datasets

## Performance Considerations
- Run heavy operations during low-traffic periods
- Use batch processing for large volumes
- Offload tasks using background services
