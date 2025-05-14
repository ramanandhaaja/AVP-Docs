# 🧮 ValuationServices Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: Various services in `/Infrastructure/Services/Valuation/*` and corresponding interfaces in `/Application/Common/Interfaces/IValuation*`
- **Primary Purpose**: Implements the business logic for asset and component valuation using various valuation methodologies
- **Key Methods**:
  - `ApplyValuationProfile()`: Applies the appropriate valuation profile to an asset
  - `CalculateCurrentValue()`: Computes current value based on replacement cost and depreciation
  - `DetermineValuationMethod()`: Selects appropriate valuation method based on asset type
  - `CalculateComponentValues()`: Determines values for individual components
- **Used By**:
  - `AssetController`: For asset valuation operations
  - `JobController`: For job-level valuation operations
  - `ReportsController`: For valuation reporting
  - Valuation calculation handlers
- **Related Models**:
  - `Asset`: Assets being valued
  - `Component`: Components being valued
  - `ValuationProfile`: Valuation profile parameters
  - `AssetAssumptions`/`ComponentAssumptions`: Valuation assumptions
  - `ValuationMethod`: Results of valuation calculations

## 🏗️ DETAILED DOCUMENTATION

### 🧮 Overview
The ValuationServices implement the core business logic for asset and component valuation in Asset Valuer Pro. These services encapsulate the various valuation methodologies supported by the system (Cost, Market, and Income approaches) and provide a consistent interface for valuation operations across the application. ValuationServices transform raw asset data into financial values that comply with accounting standards such as IFRS and IPSAS.

### 🔧 Service Details
- **Namespace**: AVP.Infrastructure.Services.Valuation
- **Pattern**: Service implementations of domain interfaces
- **Key Components**:
  - Valuation method services
  - Profile application services
  - Calculation helpers

### 🧮 Valuation Approach Services

#### 📊 CostApproachValuationService
Implements cost-based valuation methods including:

1. **Apportionment Method Service**
   - Calculates component values as percentages of total asset replacement cost
   - Uses component condition scores and valuation profiles to determine depreciation
   - Aggregates component values to determine total asset value

2. **Direct Cost Method Service**
   - Calculates component values directly from component replacement costs
   - Uses component-specific measurement data and unit rates
   - Applies condition-based depreciation through valuation profiles

3. **Historical Cost Method Service**
   - Based on original acquisition cost
   - Applies indices for time value adjustments
   - Uses a standardized depreciation schedule

#### 📊 MarketApproachValuationService
- Implements market-based valuation
- Uses comparable sales data and adjustment factors
- Supports different market valuation types

#### 📊 IncomeApproachValuationService
- Implements income-based valuation
- Uses income streams, expenses, and capitalization factors
- Supports cash flow projection calculations

### 📋 Valuation Process

#### 🧮 ValuationProfileService
1. **Profile Identification**
   - Determines appropriate valuation profile based on asset hierarchy
   - Applies business rules from ValuationProfileRules
   - Handles special cases and exceptions

2. **Profile Application**
   - Applies valuation profile parameters to asset/component
   - Translates condition scores to remaining useful life percentages
   - Configures consumption curves and depreciation rates

#### 🧮 ValuationCalculationService
1. **Replacement Cost Calculation**
   - Determines appropriate unit rates based on asset attributes
   - Applies quantity measurements (area, length, count)
   - Adjusts for location, accessibility, and complexity factors

2. **Depreciation Calculation**
   - Applies condition-based depreciation
   - Calculates accumulated depreciation
   - Determines current value

3. **Valuation Result Creation**
   - Creates AssetValuation and ComponentValuation entities
   - Records calculation parameters for audit purposes
   - Updates job status for completed valuations

### 📝 Business Context

#### 📋 Core Valuation Approaches
According to the legacy documentation, Asset Valuer Pro supports three primary valuation approaches as defined in accounting standards:

> "Under the accounting standards the valuations may be delivered by one of or a combination of - Market approach (used when there is an open and active market - eg residential properties/cars), Income approach (used when value is driven by income earning potential. Eg commercial highrise), Cost approach (where there is no market and assets are used to deliver community benefits e.g roads)"

The ValuationServices implement all these approaches as distinct service components that can be selected based on asset type and client requirements.

#### 📋 Calculation Process Flow
The legacy documentation describes the calculation process flow that these services implement:

> "Once all data is populated the valuer refreshes all the calculations. This process reads the raw data (such as asset hierarchy), accesses relevant information (based on the hierarchy) from the assumptions table and populates relevant fields (such as valuation profiles, unit rates, useful life, residual value, depreciation profile, obsolescence profile), [and] uses the populated data to run the various algorithms and produce valuations."

The ValuationServices follow this exact flow, retrieving asset data, applying assumptions according to hierarchy, and executing valuation algorithms.

#### 📋 Insurance Value Calculation
ValuationServices also support insurance valuation, as described in the legacy documentation:

> "Asset Valuer Pro uses the replacement cost of the assets to determine the full insurance value and the current value to determine the indemnity value."

The services include specific methods for calculating both full replacement and indemnity values.

### ⚡ Performance Considerations
The ValuationServices include optimizations for handling large datasets:

1. **Batch Processing**
   - Assets are processed in manageable batches
   - Results are saved incrementally

2. **Calculation Caching**
   - Common calculation results are cached where possible
   - Valuation profiles are loaded once per job

3. **Parallel Processing**
   - Independent valuations can be processed in parallel
   - Resource-intensive calculations can be distributed

### 🔒 Regulatory Compliance
ℹ️ **Note:** The ValuationServices implement accounting standards including:
- IFRS 13/AASB 13: Fair Value Measurement
- IFRS 16/AASB 16: Leases
- IPSAS 17: Property, Plant and Equipment

### 🔧 Integration Points
The ValuationServices integrate with several other components:

- **Asset Management**: Receives asset and component data
- **Assumption Management**: Retrieves valuation parameters and business rules
- **Reporting Services**: Provides valuation results for reports
- **Audit Logging**: Records valuation activities and parameters