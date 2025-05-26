
# RefreshJobData Command Documentation

## QUICK DOCUMENTATION
- **File Path**: Application/Jobs/Commands/RefreshJobData/RefreshJobDataCommand.cs
- **Primary Purpose**: Calculates and persists asset valuations for a specific job
- **Key Methods**: 
  - `Handle`: Loads all assets for a job, calculates valuations, and persists results
  - `CreateValuation`: Called on assets and components to calculate valuations
- **Used By**: JobController (RefreshReportData endpoint)
- **Related Models**: 
  - Asset
  - Component
  - AssetValuation
  - ComponentValuation
  - ValuationProfile
  - AssetReplacementCost
  - ComponentReplacementCost

## DETAILED DOCUMENTATION

### Overview
The RefreshJobData command calculates valuations for all assets within a job. It implements core valuation logic by loading all necessary data, applying calculations, and persisting results. Validation is included to compare values before and after the refresh.

### Service Details
- **Namespace**: AVP.Application.Jobs.Commands.RefreshJobData
- **Dependencies**: 
  - IApplicationDbContext
  - ILogger
  - ICurrentUserService
  - IEmailSender
  - IBusRegistry
- **Implements**: `IRequestHandler<RefreshJobDataCommand, string>`

### Methods

#### Handle
- **Signature**: `Task<string> Handle(RefreshJobDataCommand request, CancellationToken cancellationToken)`
- **Description**: Loads assets, calculates valuations, saves results
- **Steps**:
  1. Load ValuationProfiles and Scores
  2. Load all job-related assets
  3. Call CreateValuation on each asset and component
  4. Delete previous valuation records
  5. Save new records
  6. Compare old vs. new values
  7. Log discrepancies
  8. Send notification if issues found

#### Business Rules
- Assets are valued based on ValuationType (ApportionmentCost, DirectCost, Market, Income, HistoricalCost)
- Component values derive from ConsumptionScore and ValuationProfile
- Repeated refreshes should yield consistent results
- Logs all changes for auditing
- Sends notifications for inconsistencies

## Business Context

### Central Role in Valuation
This service implements core logic from the valuation framework:

> "...the valuer refreshes all the calculations... accesses data... applies assumptions... runs algorithms... produces valuations."

Responsibilities:
- Load raw data and supporting references
- Apply valuation logic based on configuration
- Save final asset and component valuations

### Supports Valuation Methodologies
Implements logic for:
1. **Market approach**
2. **Income approach**
3. **Cost approach**

Based on asset ValuationType.

### Used in Report Workflow
- Refresh must be completed before validation or reporting
- Ensures up-to-date values for reporting modules

### ValuationProfile Integration
- Pulls profile data
- Maps consumption scores to useful life and value
- Applies condition-based adjustments

## Performance Considerations
- Resource-heavy for large jobs
- Use batch processing for scale

## Error Handling
- Logs DB and validation errors
- Emails sent on validation issues
- Continues processing even if individual items fail
