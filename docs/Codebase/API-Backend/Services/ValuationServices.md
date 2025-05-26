
# ValuationServices Documentation

## QUICK DOCUMENTATION
- **File Path**: `/Infrastructure/Services/Valuation/*` and interfaces in `/Application/Common/Interfaces/IValuation*`
- **Primary Purpose**: Core service layer for performing valuation calculations using multiple approaches
- **Key Methods**:
  - `ApplyValuationProfile()`
  - `CalculateCurrentValue()`
  - `DetermineValuationMethod()`
  - `CalculateComponentValues()`
- **Used By**:
  - AssetController
  - JobController
  - ReportsController
  - Valuation calculation handlers
- **Related Models**:
  - Asset, Component, ValuationProfile
  - AssetAssumptions, ComponentAssumptions
  - ValuationMethod

## DETAILED DOCUMENTATION

### Overview
ValuationServices implement key logic to support cost, market, and income-based asset valuation. These services handle assumptions, condition scores, and calculation flows. Each valuation strategy is encapsulated in its own service, enabling flexibility and consistency across valuation operations.

### Service Details
- **Namespace**: AVP.Infrastructure.Services.Valuation
- **Pattern**: Interface-based service abstraction
- **Key Components**:
  - CostApproachValuationService
  - MarketApproachValuationService
  - IncomeApproachValuationService
  - ValuationProfileService
  - ValuationCalculationService

## Valuation Approach Services

### CostApproachValuationService

#### Apportionment Method
- Calculates components as percentage of total asset replacement cost
- Applies depreciation using condition scores and valuation profiles

#### Direct Cost Method
- Uses component-level replacement costs
- Calculates depreciation based on measurements and profiles

#### Historical Cost Method
- Adjusts original cost by index
- Uses standardized schedules

### MarketApproachValuationService
- Uses market comparables with adjustment factors
- Implements direct and indexed market value calculation

### IncomeApproachValuationService
- Calculates income stream value using cap rates
- Accounts for operating costs and vacancy

## Valuation Workflow

### ValuationProfileService
- Selects appropriate profile via ValuationProfileRules
- Applies depreciation and scoring logic

### ValuationCalculationService
- Calculates replacement cost using unit rate × quantity
- Applies adjustment factors (location, complexity)
- Calculates current value and stores results

## Business Context

### Compliance with Accounting Standards
Implements methodologies outlined in:
- IFRS 13 / AASB 13: Fair Value
- IFRS 16 / AASB 16: Leases
- IPSAS 17: Property, Plant & Equipment

### Insurance Valuation Support
- Calculates Full Replacement and Indemnity Value
- Based on valuation profile and cost data

## Performance Considerations

- **Batching**: Processes large jobs in segments
- **Caching**: Reuses profile data across assets
- **Parallelism**: Allows multiple valuations to run concurrently

## Integration Points

- **Asset Services**: Sends assets to be valued
- **Assumptions Engine**: Provides depreciation curves and business rules
- **Reporting Engine**: Pulls results to generate output
- **Audit Trail**: Logs inputs, outputs, and methods used
