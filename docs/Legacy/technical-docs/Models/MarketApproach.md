# 🧮 MarketApproach Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/MarketApproach.cs
- **Database Table**: MarketApproaches
- **Primary Purpose**: Provides data and algorithms for market-based asset valuation
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - AssetId (int) - Links to the parent asset
  - Type (MarketApproaches enum) - The market approach type
  - PropertyValue (decimal) - Total property value
  - LandTotal (decimal) - Total land value
  - LandArea (decimal) - Area of the land
  - ImprovementsPct (decimal) - Percentage of improvements to value
  - IndexationPct (decimal) - Adjustment for time-based changes
- **🔗 Related Models**: 
  - Asset (parent) - The asset being valued

## 📝 DETAILED DOCUMENTATION

### 🧮 Overview
The MarketApproach entity contains data and methods needed to perform market-based valuations of assets. It supports three types of market approaches: Improvements on Land, Item Only, and Land Only. Each approach uses different calculations to determine market value based on property values, land values, improvement percentages, and indexation factors.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

### 🧮 Market Valuation Approaches
The MarketApproach entity supports three distinct valuation methodologies:

1. **Improvements On Land**
   - Values both land and improvements separately
   - Applicable for buildings on land parcels
   - Formula: `MarketValue = LandTotal + (PropertyValue - LandTotal) × IndexationPct`

2. **Item Only**
   - Values the asset directly without land considerations
   - Applicable for vehicles, equipment, art, etc.
   - Formula: `MarketValue = PropertyValue × IndexationPct`

3. **Land Only**
   - Values only the land component
   - Applicable for vacant land, parks, etc.
   - Formula: `MarketValue = LandTotal × IndexationPct`

### 🧮 Calculation Methods
The entity provides several key calculation methods:

1. **LandRate()**
   - Calculates land value per unit area
   - Returns `LandTotal / LandArea` if area > 0
   - Returns 0 if area is 0 or negative

2. **MarketValue()**
   - Calculates total market value based on approach type
   - Handles different calculations for each type
   - Applies indexation to adjust values over time

3. **ImprovementsValue()**
   - Calculates the value of improvements separate from land
   - Returns `PropertyValue - LandTotal` for Improvements On Land
   - Returns `PropertyValue` for Item Only
   - Returns 0 for Land Only

### 📝 Business Rules Applied
- MarketApproach is used when an asset's ValuationType is set to Market
- Different calculation methods are used based on the Type of market approach
- The LandRate() method calculates land value per unit area
- The MarketValue() method calculates the total market value based on the approach type
- The ImprovementsValue() method calculates the value of improvements separate from land
- Domain events are triggered when values change, ensuring asset valuations are recalculated
- The approach handles various edge cases including preventing negative improvement values

### 📊 Application in Valuation
ℹ️ **Note:** Market approach is typically used for:

1. **Asset Types with Active Markets**
   - Residential and commercial properties
   - Vehicles and mobile equipment
   - Art and collectibles
   - Standard office equipment

2. **Fair Value Measurement**
   - Supports Level 1 and Level 2 fair value hierarchy
   - Provides market evidence for financial reporting
   - Creates defensible valuation basis for audit

### 🧮 Indexation Application
The IndexationPct field enables time-based adjustments:

- Adjusts historical market data to current valuation date
- Accounts for market trends and inflation
- Formula: `CurrentValue = HistoricalValue × (1 + IndexationPct)`

### 📝 Business Context
The market approach directly supports these business needs:

1. **Financial Reporting**
   - Complies with market evidence requirements in accounting standards
   - Provides transparent valuation methodology
   - Creates audit trail of market-based evidence

2. **Property Management**
   - Separates land from improvement values
   - Supports taxation and insurance calculations
   - Enables comparative analysis with similar properties

3. **Market Analysis**
   - Tracks property value changes over time
   - Provides basis for trend analysis
   - Supports investment decision-making