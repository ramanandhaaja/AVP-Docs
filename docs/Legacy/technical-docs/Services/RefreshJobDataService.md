# 🧮 RefreshJobData Command Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: Application/Jobs/Commands/RefreshJobData/RefreshJobDataCommand.cs
- **Primary Purpose**: Calculates and persists asset valuations for a specific job
- **Key Methods**: 
  - `Handle` - Loads all assets for a job, calculates valuations, and persists results
  - `CreateValuation` - Called on assets and components to calculate valuations
- **Used By**: JobController (RefreshReportData endpoint)
- **Related Models**: 
  - Asset - Core asset entity
  - Component - Parts of an asset
  - AssetValuation - Stores calculated asset values
  - ComponentValuation - Stores calculated component values
  - ValuationProfile - Defines how condition scores translate to remaining value
  - AssetReplacementCost - Cost data for insurance valuation
  - ComponentReplacementCost - Component-level cost data

## 📋 DETAILED DOCUMENTATION

### 🏗️ Overview
The RefreshJobData command is a critical service that calculates valuations for all assets within a job. It implements the core valuation business logic by loading all necessary data, applying valuation calculations, and persisting the results to the database. It also performs validation to ensure consistent calculations by comparing values before and after the refresh.

### 🔧 Service Details
- **Namespace**: AVP.Application.Jobs.Commands.RefreshJobData
- **Dependencies**: 
  - IApplicationDbContext - Database access
  - ILogger - Logging service
  - ICurrentUserService - User context
  - IEmailSender - Notification service
  - IBusRegistry - Message bus for events
- **Interfaces Implemented**: `IRequestHandler<RefreshJobDataCommand, string>`

### 🧮 Methods

#### Handle
- **Signature**: `public async Task<string> Handle(RefreshJobDataCommand request, CancellationToken cancellationToken)`
- **Description**: Processes the refresh job data command by loading assets, calculating valuations, and saving results
- **Parameters**: 
  - `request` (RefreshJobDataCommand): Contains the JobId to refresh
  - `cancellationToken` (CancellationToken): Cancellation token
- **Returns**: String message with count of assets processed

##### 📋 Implementation Details
The method follows these steps:
1. Loads all ValuationProfiles with their ValuationProfileScores
2. Loads all assets for the specified job with their related data
3. Calls CreateValuation() on each asset, which calculates the valuation based on ValuationType
4. For each component, loads its ValuationProfile and calls CreateValuation()
5. Removes existing valuation records in a transaction
6. Saves new valuation records
7. Performs validation by comparing values before and after the refresh
8. Logs any discrepancies and sends notification email if issues are found

##### 📝 Business Rules Applied
- Assets are valued based on their ValuationType (ApportionmentCost, DirectCost, Market, Income, HistoricalCost)
- Components valuations are calculated based on their ConsumptionScore, ValuationProfile, and other parameters
- Valuation calculations should be idempotent - refreshing multiple times should yield the same result
- The system logs detailed information about valuation changes for auditing purposes
- Support staff are notified by email if discrepancies are found between previous and new values

### 📝 Business Context

#### 📋 Central Role in Valuation Process
According to the legacy documentation, the calculation refresh process is a critical step in the valuation workflow:

> "Once all data is populated the valuer refreshes all the calculations. This process reads the raw data (such as asset hierarchy), accesses relevant information (based on the hierarchy) from the assumptions table and populates relevant fields (such as valuation profiles, unit rates, useful life, residual value, depreciation profile, obsolescence profile), [and] uses the populated data to run the various algorithms and produce valuations."

This directly describes the functionality implemented in this service. The RefreshJobDataService orchestrates the entire valuation calculation process by:

1. Reading raw data (loading assets and related entities)
2. Accessing relevant information (loading ValuationProfiles based on hierarchy)
3. Running valuation algorithms (calling CreateValuation methods)
4. Producing final valuations (saving calculation results)

#### 📋 Support for Multiple Valuation Methodologies
The legacy documentation describes three primary valuation approaches that must be supported:

1. **Market approach** - "Used when there is an open and active market (e.g. residential properties/cars)"
2. **Income approach** - "Used when value is driven by income earning potential. Eg commercial highrise"
3. **Cost approach** - "Where there is no market and assets are used to deliver community benefits e.g roads"

This explains why the RefreshJobDataService implements different valuation types (ApportionmentCost, DirectCost, Market, Income, HistoricalCost) and applies different calculation methodologies based on the ValuationType.

#### 📋 Relationship to Report Generation
The legacy documentation defines a specific workflow sequence:

> "Once the refresh of calculations is completed the valuer is able to run validations to ensure there are no obvious mistakes or missing data [and] produce the various reports..."

This explains the connection between this service and the reporting functionality. The RefreshJobDataService must be executed before reports can be generated, and it includes validation to identify potential issues.

#### 📋 ValuationProfile Application
The legacy documentation describes how condition scores and valuation profiles work together:

> "Based on that combination we specify... for each 'component' to specify the... short-life and long-life splits, useful life, residual value."

This explains why the RefreshJobDataService loads ValuationProfiles and applies them to components with their respective ConsumptionScores to calculate current values.

### ⚡ Performance Considerations
💡 **Tip:** This operation can be resource-intensive for jobs with many assets. Consider implementing batch processing for very large datasets.

### ⚠️ Error Handling
The service implements comprehensive error handling:
- Database exceptions are caught and logged
- Validation failures trigger email notifications
- Processing continues even if individual asset calculations fail
