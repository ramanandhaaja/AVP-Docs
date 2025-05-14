# 📋 JobOperation Documentation

## 📋 QUICK DOCUMENTATION
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

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The JobOperation services manage the complete lifecycle of valuation jobs in the Asset Valuer Pro system. These services implement the CQRS pattern through various command handlers, each responsible for specific job-related operations. The job entity is central to the valuation process, as it defines the scope, parameters, and effective date of a valuation.

### 🔧 Service Details
- **Namespace**: AVP.Application.Jobs.Commands
- **Pattern**: CQRS (Command Query Responsibility Segregation)
- **Key Services**:
  - UpdateJobCommand
  - ArchiveJobCommand
  - RefreshJobDataCommand
  - RevalidateCommand

### 📋 Methods

#### ✏️ UpdateJobCommand.Handle()
- **Purpose**: Creates a new job or updates an existing job
- **Key Parameters**:
  - JobId (int): ID of the job to update (0 for new jobs)
  - Name (string): Job name
  - Description (string): Job description
  - EffectiveDate (DateTime): The official date of valuation
  - AssetClassIds (List of `int` values): Asset classes to include
  - Status (enum): Job status (Open, Draft, Final)
- **Behavior**:
  - Creates a new job if JobId is 0
  - Updates job details for existing jobs
  - Manages job-asset class relationships
  - Sets appropriate audit information

#### 🔄 ArchiveJobCommand.Handle()
- **Purpose**: Archives a completed job and prepares for the next valuation cycle
- **Key Parameters**:
  - JobId (int): ID of the job to archive
- **Behavior**:
  - Changes job status to "Archived"
  - Stores final valuation data as historical records
  - Sets up the job's data to be available as previous values in future valuations
  - Prevents further modifications to the job data

#### 🧮 RefreshJobDataCommand.Handle()
- **Purpose**: Recalculates all valuation data for assets in a job
- **Key Parameters**:
  - JobId (int): ID of the job to refresh
- **Behavior**:
  - Loads all assets associated with the job
  - Applies valuation rules based on asset and component configuration
  - Calculates financial, insurance, and management values
  - Stores calculated values in the database

#### ✅ RevalidateCommand.Handle()
- **Purpose**: Validates job data against business rules
- **Key Parameters**:
  - JobId (int): ID of the job to validate
- **Behavior**:
  - Checks asset and component data for completeness
  - Validates that all required fields are populated
  - Ensures business rules are followed (e.g., apportionment percentages sum to 100%)
  - Records validation issues for later resolution

### 📝 Business Context
JobOperation services are central to the Asset Valuer Pro workflow. The job lifecycle follows these stages:
1. **Creation**: New job with defined asset classes and valuation date
2. **Data Collection**: Assets are associated with the job via asset classes
3. **Calculation**: All asset values are calculated
4. **Validation**: Data is checked for completeness and consistency
5. **Finalization**: Job is finalized once client approves
6. **Archiving**: Final values are stored for historical reference

These operations support the valuation workflow described in the Overview document, where jobs represent point-in-time valuations that must be kept separate from live asset data.

### ⚠️ Important Considerations
- Jobs with status "Final" or "Archived" cannot be modified
- Archiving a job is irreversible
- The effective date determines which asset data is included in calculations
- Archive operations may take significant time for large datasets

### ⚡ Performance Considerations
💡 **Tip:** For jobs with many assets, operations like RefreshJobData and Archive can be resource-intensive. Consider:
- Running these operations during off-peak hours
- Processing assets in batches
- Using background processing for large jobs