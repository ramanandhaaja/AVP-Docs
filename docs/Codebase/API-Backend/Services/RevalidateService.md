
# Revalidate Command Documentation

## QUICK DOCUMENTATION
- **File Path**: /Application/Jobs/Commands/Revalidate/RevalidateCommand.cs
- **Primary Purpose**: Validates assets and components against business rules and updates the validation status
- **Key Methods**: 
  - `Handle`: Loads assets, triggers validation, and saves validation results
  - `Validate`: Called on assets and components to check business rule compliance
- **Used By**: ImportLogController (Revalidate endpoint)
- **Related Models**: 
  - Asset
  - Component
  - ValuationProfile
  - AssetClass
  - Job

## DETAILED DOCUMENTATION

### Overview
The Revalidate command service performs validation of assets and components against business rules. Unlike valuation commands, it focuses on identifying and recording validation issues. It uses IValidationService to check for data errors and warnings, then updates the entities with the validation results.

### Service Details
- **Namespace**: AVP.Application.Jobs.Commands.Revalidate
- **Dependencies**:
  - IApplicationDbContext
  - ILogger
  - ICurrentUserService
  - IValidationService
- **Implements**: `IRequestHandler<RevalidateCommand, int>`

### Methods

#### Handle
- **Signature**: `Task<int> Handle(RevalidateCommand request, CancellationToken cancellationToken)`
- **Description**: Loads data and applies validation logic using IValidationService
- **Steps**:
  1. Load ValuationProfiles and Scores
  2. Load all assets and components for the job
  3. Run validation logic on each asset and its components
  4. Save any modified entities
  5. Return number of modified records

### Business Rules Applied
- Assets/components must satisfy data and structural requirements
- Missing required fields or incorrect hierarchy are flagged
- The validation output is saved in Errors/Warnings for each entity
- Validation is tracked and reportable at the entity level

## Business Processes Supported
- Data validation for valuation readiness
- Pre-finalization checks
- Data quality scoring
- Validation-driven reporting and review

## Performance Considerations
- Run in batches for jobs with large asset counts
- Consider parallelization for long-running validations

## Validation Categories

### Missing Required Data
- Required fields (e.g. ConsumptionScore, AssetClass) are not filled
- Valuation parameters (e.g. UsefulLife, ResidualValue) are missing

### Data Consistency
- Component links are missing or misaligned
- Valuation methods do not match asset data
- Timestamps or date sequences are out of range

### Business Logic
- Condition scores are outside allowable range
- Profiles are not assigned to components
- Components do not align with parent asset configuration

## Tip
Validation results (errors/warnings) should be exported into reports or dashboards to help clients assess data quality prior to finalization.
