# 🧮 ComponentAssumptions Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/ComponentAssumptions.cs
- **Database Table**: ComponentAssumptions
- **Primary Purpose**: Stores valuation and lifecycle parameters for specific component types
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - ComponentSubTypeId (int) - Links to the associated component subtype
  - UnitRate (decimal) - Base unit rate for cost calculations
  - LongLifePct (decimal) - Percentage of the component with longer useful life
  - ULLong, ULShortMin, ULShortMax (decimal) - Useful life parameters in years
  - RVPctLong, RVPctShort (decimal) - Residual value percentages
  - DepreciationPolicy (enum) - How depreciation should be applied
- **🔗 Related Models**: 
  - ComponentSubType - The subtype these assumptions apply to
  - ValuationProfile (as ObsolescenceProfile) - Pattern of obsolescence
  - Component (one-to-many) - Components using these assumptions

## 📝 DETAILED DOCUMENTATION

### 🧮 Overview
The ComponentAssumptions entity stores detailed lifecycle and valuation parameters that are applied to components during the valuation process. It defines useful life splits between short-life and long-life portions, residual values, unit rates, and depreciation policies. These parameters are critical for the calculation of depreciated replacement cost and remaining useful life.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

### 🧮 Valuation Parameters
The ComponentAssumptions entity contains several specialized parameters:

1. **Lifecycle Split**
   - LongLifePct - Percentage of component with extended lifecycle
   - RemainingPct - Percentage of component with standard lifecycle
   - Different useful lives are applied to each portion

2. **Useful Life Parameters**
   - ULLong - Useful life for long-life portion in years
   - ULShortMin - Minimum useful life for short-life portion
   - ULShortMax - Maximum useful life for short-life portion
   - UsefulLifeSelection - Selection method for short-life useful life

3. **Residual Value Parameters**
   - RVPctLong - Residual value percentage for long-life portion
   - RVPctShort - Residual value percentage for short-life portion

4. **Depreciation Parameters**
   - DepreciationPolicy - Determines depreciation calculation method
   - ObsolescenceProfileId - Links to ValuationProfile for obsolescence patterns

### 📊 Split Lifecycle Concept
ℹ️ **Note:** The split lifecycle concept is fundamental to component valuation:

Many components have portions that deteriorate at different rates. For example:
- A roof may have structural elements (long-life) and covering materials (short-life)
- A road may have base course layers (long-life) and wearing surfaces (short-life)

ComponentAssumptions allows these differences to be modeled by:
1. Defining the percentage split (LongLifePct)
2. Assigning different useful lives to each portion
3. Calculating weighted depreciation across the entire component

### 🧮 Application in Calculations
The parameters are used in these key calculations:

1. **Weighted Useful Life**
   ```
   Weighted UL = (ULLong × LongLifePct) + (ULShort × (1-LongLifePct))
   ```

2. **Remaining Useful Life**
   ```
   Remaining UL = UL × (1 - Consumption%)
   ```
   Where Consumption% is derived from the component's condition score

3. **Component Value with Split Lifecycle**
   ```
   Value = (RC × LongLifePct × (1-DepLong)) + (RC × (1-LongLifePct) × (1-DepShort))
   ```
   Where:
   - RC = Replacement Cost
   - DepLong = Depreciation for long-life portion
   - DepShort = Depreciation for short-life portion

### 📝 Business Rules Applied
- ComponentAssumptions are linked to a specific ComponentSubType, providing standardized values for all components of that subtype
- Components can have split lifecycle characteristics (short-life and long-life portions)
- The ULShortMin and ULShortMax define a range for the short-life portion's useful life
- DepreciationPolicy determines how useful life and remaining useful life are applied in calculations
- The LocalityFactorPct adjusts costs based on regional differences
- ObsolescenceProfile (a ValuationProfile) can be linked to define obsolescence patterns
- Each ComponentAssumptions record is client-specific, allowing different clients to use different parameters

### ⚡ Performance Considerations
💡 **Tip:** ComponentAssumptions are frequently accessed during valuation calculations. Consider caching these values when processing large numbers of components to minimize database queries.

### 📝 Business Context
ComponentAssumptions provide critical benefits for asset management:

1. **Accurate Lifecycle Modeling**
   - Reflects real-world deterioration patterns
   - Accounts for different deterioration rates within the same component
   - Supports more accurate depreciation calculations

2. **Capital Planning**
   - Enables accurate forecast of component replacements
   - Distinguishes between partial and full replacements
   - Supports maintenance vs. capital renewal decisions

3. **Financial Reporting**
   - Aligns with accounting standards for componentization
   - Provides detailed support for depreciation calculations
   - Enables more precise fair value determinations