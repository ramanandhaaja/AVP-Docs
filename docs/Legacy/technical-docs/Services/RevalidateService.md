# ✅ Revalidate Command Documentation

## ✅ QUICK DOCUMENTATION
- **File Path**: /Application/Jobs/Commands/Revalidate/RevalidateCommand.cs
- **Primary Purpose**: Validates assets and components against business rules and updates the validation status
- **Key Methods**: 
  - `Handle` - Loads assets, triggers validation, and saves validation results
  - `Validate` - Called on assets and components to check business rule compliance
- **Used By**: ImportLogController (Revalidate endpoint)
- **Related Models**: 
  - Asset
  - Component
  - ValuationProfile
  - AssetClass
  - Job

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The Revalidate command service performs validation of assets and components against business rules. Unlike the RefreshJobData command, it focuses on identifying and recording validation issues rather than calculating values. It uses the IValidationService to check for errors and warnings in the data and updates the entities with validation results.

### 🔧 Service Details
- **Namespace**: AVP.Application.Jobs.Commands.Revalidate
- **Dependencies**: 
  - IApplicationDbContext
  - ILogger
  - ICurrentUserService
  - IValidationService
- **Interfaces Implemented**: `IRequestHandler<RevalidateCommand, int>`

### 📋 Methods

#### ✅ Handle
- **Signature**: `public async Task<int> Handle(RevalidateCommand request, CancellationToken cancellationToken)`
- **Description**: Processes the revalidation command by loading assets and validating them
- **Parameters**: 
  - `request` (RevalidateCommand): Contains the JobId to revalidate
  - `cancellationToken` (CancellationToken): Cancellation token
- **Returns**: Count of modified entities after validation

##### 📋 Implementation Details
The method follows these steps:
1. Loads all ValuationProfiles with their ValuationProfileScores
2. Loads all assets for the specified job with their related data
3. For each asset:
   - Calls CreateValuation() to set up valuation data
   - For each component, loads its ValuationProfile and calls CreateValuation()
   - Uses the IValidationService to validate each component
   - Uses the IValidationService to validate the asset
4. Saves changes for any entities modified during validation
5. Returns count of modified entities

##### 📝 Business Rules Applied
- Assets and components must meet various validation rules to be considered valid
- The IValidationService applies business rules and populates Errors and Warnings dictionaries
- Validation checks data completeness, consistency, and business logic compliance
- The system tracks validation results within the entities themselves

### 📝 Business Processes Supported
- Data quality validation
- Business rule compliance checking
- Error and warning reporting
- Asset and component data verification

### ⚡ Performance Considerations
ℹ️ **Note:** Validation can be resource-intensive for large datasets. Consider validating in batches for jobs with many assets.

### ⚠️ Validation Rules Categories
The validation service checks for several categories of issues:

1. **Missing Required Data**
   - Components missing required fields
   - Assets missing classification or valuation data
   - Missing valuation parameters

2. **Data Consistency**
   - Valuation approach matches available data
   - Component hierarchy integrity
   - Date consistency (acquisition dates, valuation dates)

3. **Business Logic**
   - Valid condition scores
   - Appropriate valuation profiles
   - Asset/component relationship integrity

💡 **Tip:** The validation results can be used to generate data quality reports for clients before finalizing valuations.