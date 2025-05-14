# 🧮 ValuationCalculation Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: Various handlers in `/Application/Assets/EventHandlers/*` and command handlers in `/Application/Assets/Commands/*`
- **Primary Purpose**: Performs valuation calculations for assets and components based on configured assumptions and profiles
- **Key Methods**:
  - `RefreshAssetValuationDataEventHandler.Handle()`: Recalculates asset valuation data
  - `GetValuationProfileEventHandler.Handle()`: Retrieves and applies the appropriate valuation profile
  - `RefreshJobDataCommand.Handle()`: Recalculates all valuations for a job
- **Used By**:
  - `AssetController`: For asset valuation operations
  - `ComponentController`: For component valuation operations
  - `JobController`: For job-wide valuation operations
  - `ReportsController`: For report generation
- **Related Models**:
  - `Asset`: Assets being valued
  - `Component`: Components being valued
  - `ValuationProfile`: Valuation profile parameters
  - `AssetAssumptions`/`ComponentAssumptions`: Valuation assumptions
  - `ValuationMethod`: Results of valuation calculations

## 🏗️ DETAILED DOCUMENTATION

### 🧮 Overview
The ValuationCalculation service is a collection of event handlers and command handlers that implement the core business logic for asset and component valuation. It performs complex calculations based on configured valuation approaches, using inputs such as condition scores, replacement costs, and valuation profiles to determine financial values. This service is the heart of the Asset Valuer Pro system, transforming raw asset data into financial values compliant with accounting standards.

### 🔧 Service Details
- **Namespace**: Various namespaces in AVP.Application.Assets
- **Pattern**: CQRS with Event Handlers
- **Key Components**:
  - Asset Valuation Event Handlers
  - Component Valuation Event Handlers
  - Job-level Valuation Commands
  - Valuation Method Implementations

### 🧮 Valuation Approaches

#### 📊 Cost Approach
The cost approach calculates asset values based on replacement cost and depreciation:

1. **Apportionment Method**
   - Calculates component values as percentages of total asset replacement cost
   - Uses component condition scores and valuation profiles to determine depreciation
   - Aggregates component values to determine total asset value

2. **Direct Cost Method**
   - Calculates component values directly from component replacement costs
   - Uses component-specific measurement data and unit rates
   - Applies condition-based depreciation through valuation profiles

3. **Historical Cost Method**
   - Based on original acquisition cost
   - Applies indices for time value adjustments
   - Uses a standardized depreciation schedule

#### 📊 Market Approach
- Uses comparable sales data
- Adjusts for specific asset characteristics
- Applies market factors defined in MarketApproach entity

#### 📊 Income Approach
- Based on income-generating capacity
- Uses cash flow projections and capitalization rates
- Adjusts for operating expenses and vacancies

### 📋 Calculation Process

#### 🧮 Asset Valuation Flow
1. **Initialization**
   - Identify valuation approach based on ValuationType
   - Retrieve relevant assumptions (AssetAssumptions, ComponentAssumptions)
   - Determine valuation profiles through ValuationProfileRules

2. **Core Calculations**
   - For cost approaches:
     - Calculate replacement costs
     - Apply condition-based depreciation
     - Calculate accumulated depreciation and current value
   - For market approach:
     - Apply comparable adjustment factors
     - Calculate market-based value
   - For income approach:
     - Calculate present value of income streams
     - Apply capitalization rates

3. **Result Storage**
   - Create AssetValuation records
   - Create ComponentValuation records
   - Link to appropriate Job

### 📝 Business Context

#### 📋 Core Valuation Approaches
According to the legacy documentation, Asset Valuer Pro supports three primary valuation approaches as defined in accounting standards:

> "Under the accounting standards the valuations may be delivered by one of or a combination of - Market approach (used when there is an open and active market - eg residential properties/cars), Income approach (used when value is driven by income earning potential. Eg commercial highrise), Cost approach (where there is no market and assets are used to deliver community benefits e.g roads)"

This ValuationCalculation service implements all three approaches, with particular focus on the Cost approach which has multiple variants (Apportionment, Direct, Historical).

#### 📋 Calculation Process Flow
The legacy documentation describes the calculation process flow that this service implements:

> "Once all data is populated the valuer refreshes all the calculations. This process reads the raw data (such as asset hierarchy), accesses relevant information (based on the hierarchy) from the assumptions table and populates relevant fields (such as valuation profiles, unit rates, useful life, residual value, depreciation profile, obsolescence profile), [and] uses the populated data to run the various algorithms and produce valuations."

This describes exactly what the ValuationCalculation service does: it reads asset data, applies assumptions based on hierarchy, and runs valuation algorithms.

#### 📋 Valuation Framework
The legacy documentation emphasizes the importance of the "valuation framework" which includes:

> "The asset hierarchy is an essential element. It requires all assets to be described based on Asset Class, Asset Type, Asset Sub-Type. Based on that combination we specify what the 'components' will be and for each 'component' to specify the Component Type, Component Sub-Type."

The ValuationCalculation service uses this hierarchy to apply the correct assumptions and valuation profiles to each asset and component.

#### 📋 Assumption Types
The legacy documentation lists specific types of assumptions that must be applied during valuation:

> "The types of assumptions include: Entity level assumptions (valuation profiles), Asset Class level assumptions (valuation profile rules), Asset Level assumptions (asset level unit rates, indices, apportionment), Component level assumptions (component level unit rates, short-life and long-life splits, useful life, residual value)"

This service incorporates all these assumption types into the valuation calculation process, applying them at the appropriate level (entity, asset class, asset, or component).

### ⚡ Performance Considerations
The valuation calculation process can be resource-intensive, especially for jobs with many assets and components. Some optimizations include:

1. **Batch Processing**
   - Assets are processed in manageable batches
   - Results are saved incrementally

2. **Calculation Caching**
   - Common calculation results are cached where possible
   - Valuation profiles are loaded once per job

3. **Database Optimization**
   - Bulk database operations are used for saving results
   - Indices on frequently queried fields improve performance

### 🔒 Regulatory Compliance
ℹ️ **Note:** The valuation calculation implements accounting standards including:
- IFRS 13/AASB 13: Fair Value Measurement
- IFRS 16/AASB 16: Leases
- IPSAS 17: Property, Plant and Equipment