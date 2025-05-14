# 🧮 AssetAssumptions Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/AssetAssumptions.cs
- **Database Table**: AssetAssumptions
- **Primary Purpose**: Stores valuation parameters and indices for specific asset types/subtypes
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - AssetSubTypeId (int) - Links to the associated asset subtype
  - UnitRate (decimal) - Base unit rate for cost calculations
  - Indices (List of `decimal` values) - Historical index values for adjustments
  - LocalityFactorPct (decimal) - Adjustment for regional cost differences
- **🔗 Related Models**: 
  - AssetSubType - The subtype these assumptions apply to
  - FinancialAssetClass - Financial reporting classification
  - FinancialAssetSubClass - Financial reporting sub-classification
  - ValuationClass - Fair value hierarchy classification
  - Asset (one-to-many) - Assets using these assumptions

## 📝 DETAILED DOCUMENTATION

### 🧮 Overview
The AssetAssumptions entity stores critical valuation parameters used in calculating the replacement cost and current value of assets. It maintains base unit rates, historical indices for multiple years, and adjustment factors that are applied to specific types of assets. These assumptions provide consistent valuation inputs to ensure standardized valuation results across similar assets.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

### 🧮 Valuation Parameters
The AssetAssumptions entity contains several key valuation parameters:

1. **Unit Rates**
   - Base cost per unit of measurement (e.g., per m², per km)
   - Used as the foundation for replacement cost calculations
   - Can be overridden at the individual asset level if needed

2. **Indices**
   - Historical price movements stored as decimal multipliers
   - Typically covers 5 years of historical data
   - Used for indexation of historical costs and trend analysis

3. **Adjustment Factors**
   - LocalityFactorPct - Adjusts for regional cost variations
   - ComplexityFactorPct - Adjusts for construction complexity
   - QualityFactorPct - Adjusts for higher/lower quality specifications

### 📊 Application in Calculations
The parameters in AssetAssumptions are used in these key calculations:

1. **Replacement Cost Calculation**
   ```
   Replacement Cost = Base Unit Rate × Quantity × Adjustment Factors
   ```
   Where Adjustment Factors include:
   - (1 + LocalityFactorPct)
   - (1 + ComplexityFactorPct)
   - (1 + QualityFactorPct)

2. **Historical Cost Indexation**
   ```
   Current Equivalent = Historical Cost × Cumulative Index
   ```
   Where Cumulative Index is calculated from the Indices list.

### 📝 Business Rules Applied
- AssetAssumptions are typically linked to a specific AssetSubType, providing standardized values for all assets of that subtype
- They can optionally be linked to financial classification (FinancialAssetClass, FinancialAssetSubClass) and ValuationClass
- The Indices list stores historical price indices (typically 5 years) used for indexation calculations
- The AccumulatedIndexTotal method calculates cumulative index effects over multiple years
- Unit rates and locality factors are applied in cost-based valuations (Replacement Cost, Depreciated Replacement Cost)
- Each AssetAssumptions record is client-specific, allowing different clients to use different rates and indices

### 📋 Hierarchy of Application
ℹ️ **Note:** AssetAssumptions follow a specific precedence when applied:

1. Asset-specific overrides have highest priority
2. AssetSubType-specific assumptions are applied next
3. AssetType-specific assumptions are used if no subtype match
4. Default client assumptions are used as a fallback

### ⚡ Performance Considerations
💡 **Tip:** AssetAssumptions are frequently queried during valuation calculations. Consider caching commonly used assumptions to reduce database calls when processing large asset sets.

### 📝 Business Context
AssetAssumptions provide critical standardization benefits:

1. **Consistency**
   - Ensures similar assets are valued using the same parameters
   - Provides audit trail for valuation assumptions
   - Enables bulk updates to parameters affecting multiple assets

2. **Localization**
   - Accommodates regional cost differences
   - Supports multiple currency implementations
   - Allows for market-specific adjustments

3. **Historical Trending**
   - Tracks price changes over time
   - Supports trend analysis for asset classes
   - Enables forecasting for future cost projections