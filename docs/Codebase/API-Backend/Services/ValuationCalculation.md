
# ValuationCalculation Documentation

## QUICK DOCUMENTATION
- **File Path**: Multiple locations under `/Application/Assets/EventHandlers/*` and `/Application/Assets/Commands/*`
- **Primary Purpose**: Performs valuation calculations for assets and components using configured assumptions and profiles
- **Key Methods**:
  - `RefreshAssetValuationDataEventHandler.Handle()`
  - `GetValuationProfileEventHandler.Handle()`
  - `RefreshJobDataCommand.Handle()`
- **Used By**:
  - AssetController
  - ComponentController
  - JobController
  - ReportsController
- **Related Models**:
  - Asset, Component, ValuationProfile
  - AssetAssumptions, ComponentAssumptions
  - ValuationMethod

## DETAILED DOCUMENTATION

### Overview
ValuationCalculation is a collection of event and command handlers that implement the core logic for calculating asset and component values based on valuation approaches and assumptions. It processes data such as replacement cost, condition score, and hierarchy classification to derive final valuation results compliant with accounting standards.

### Service Details
- **Namespace**: AVP.Application.Assets
- **Pattern**: CQRS with event-driven extensions
- **Key Components**:
  - Asset and Component valuation handlers
  - Job-wide refresh commands
  - Central valuation algorithms

## Valuation Approaches

### Cost Approach

#### Apportionment Method
- Calculates each component as a share of the asset's replacement cost
- Applies depreciation via condition scores and valuation profiles

#### Direct Cost Method
- Uses direct component data (unit rates, measurements)
- Applies profile-based depreciation

#### Historical Cost Method
- Uses acquisition data
- Applies indexation to adjust to current value

### Market Approach
- Uses comparable sale data and asset-specific adjustments
- Market factors are configured in MarketApproach model

### Income Approach
- Based on net income and capitalization rates
- Adjusted for risk, vacancy, and income variation

## Calculation Process

### Asset Valuation Steps
1. Determine valuation approach
2. Retrieve assumptions (asset, component, profile)
3. Calculate base value (replacement or market)
4. Apply depreciation/adjustments
5. Store result (AssetValuation, ComponentValuation)

### Result Storage
- Output saved in database under asset/job context
- Linked to reporting and audit trail

## Business Context

### Supported Approaches (Per Standards)
Implements the three accounting-standard valuation types:
- Market
- Income
- Cost (Direct, Apportionment, Historical)

### Legacy Documentation Match
Process mirrors the official calculation flow:
- Load data → Apply assumptions → Run algorithm → Persist result

### Assumption Types Used
- Entity-level: Valuation Profiles
- Asset-level: Unit Rates, Indices, Apportionment
- Component-level: Useful Life, Residual, Split %

## Performance Considerations
- Batches large jobs to avoid timeouts
- Caches ValuationProfiles for re-use
- Uses bulk DB operations to store results

## Regulatory Compliance
- Supports IFRS 13 / AASB 13 (Fair Value)
- Complies with IPSAS 17 (Property, Plant and Equipment)
- Supports lease valuation (IFRS 16 / AASB 16)
