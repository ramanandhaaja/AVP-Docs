# 🧮 ValuationProfile Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/ValuationProfile.cs
- **Database Table**: ValuationProfiles
- **Primary Purpose**: Defines relationships between consumption scores, remaining service potential (RSP), and remaining useful life (RUL) percentages
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Profile name
  - Description (string) - Profile description
  - ValuationProfileScores (collection) - Defines score ranges and corresponding values
  - ValuationProfileRules (collection) - Rules that apply to this profile
- **🔗 Related Models**: 
  - Client - Organization owning the profile
  - ValuationProfileRule (one-to-many) - Rules that apply this profile
  - ValuationProfileScore (one-to-many) - Score conversion definitions
  - Component (one-to-many) - Components using this profile

## 📝 DETAILED DOCUMENTATION

### 🧮 Overview
The ValuationProfile entity is a critical model in the valuation framework that defines how consumption scores (condition ratings) are translated into financial measures like Remaining Service Potential (RSP) and Remaining Useful Life (RUL) percentages. It provides lookup functionality to convert between these different values, which is essential for calculating depreciation and current values of assets.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

### 🧮 Valuation Mathematics
ValuationProfile implements the mathematical relationship between:

1. **Consumption Score** - A subjective rating of an asset's condition (typically 1-5)
2. **Remaining Service Potential (RSP)** - The percentage of value remaining (0-100%)
3. **Remaining Useful Life (RUL)** - The percentage of useful life remaining (0-100%)

These relationships are defined through ValuationProfileScores, which map specific consumption scores to corresponding RSP and RUL values.

### 📝 Business Rules Applied
- ValuationProfiles contain sets of ValuationProfileScores that define ranges of consumption scores and their corresponding RSP and RUL percentages
- The model provides methods to look up values in both directions (e.g., getting RSP from consumption score or getting consumption score from RSP)
- Interpolation is used to calculate precise values between defined score points
- The profile handles edge cases and exceptions such as divide-by-zero scenarios
- ValuationProfiles can be associated with specific clients or be system-wide
- Components reference a ValuationProfile to determine their depreciation patterns

### 📊 Profile Types and Applications
ValuationProfiles support different depreciation patterns through their score definitions:

1. **Linear Profiles**
   - Straight-line relationship between consumption and value
   - Simple depreciation pattern commonly used for standard assets

2. **Non-Linear Profiles**
   - Curved relationships between consumption and value
   - Used for assets that depreciate more rapidly at certain points in their lifecycle

3. **Stepped Profiles**
   - Distinct value plateaus at certain consumption levels
   - Used for assets that maintain value until critical condition thresholds

### 🔗 Application in Valuation
The ValuationProfile is central to the valuation calculation process:

1. A component's condition is assessed and assigned a consumption score
2. The ValuationProfile maps this score to an RSP percentage
3. The RSP percentage is applied to the replacement cost
4. This calculation determines the current (depreciated) value

### ⚡ Performance Considerations
💡 **Tip:** ValuationProfiles are frequently accessed during calculation operations. Consider caching profile data when processing large numbers of components to reduce database queries.

### 📝 Business Context

#### 📋 Role in the Valuation Framework
According to the legacy documentation, valuation profiles are part of the "Valuation Framework" that must be established before asset valuation can begin. They define entity-level assumptions that govern how assets are valued.

The legacy documentation states that for each asset hierarchy combination (Asset Class → Asset Type → Asset Sub-Type), valuation profiles specify the relationship between consumption scores (condition) and Remaining Service Potential (RSP) or Remaining Useful Life (RUL), which are critical inputs to the depreciation calculation in financial reporting valuations.

#### 📋 Creation During Setup Phase
Valuation profiles are created during the initial "Set up a File" phase of the valuation process, as described in the legacy documentation. This is a prerequisite step before asset data can be properly analyzed and valued.

#### 📋 Assumption Management
The legacy documentation categorizes valuation profiles as "Entity level assumptions" within the valuation framework. These assumptions govern how condition scores affect the calculated values of assets and enable consistent application of valuation methodologies across similar asset types.

#### 📋 Impact on Multiple Valuation Approaches
Valuation profiles are particularly important for cost approach valuations, where the depreciated replacement cost is calculated based on condition. However, they may also inform market and income approaches by providing structured condition assessment frameworks.

#### 📋 Configuration through Asset Hierarchy
The valuation profiles are applied through the asset hierarchy using ValuationProfileRules, which determine which profile applies to which combination of asset class, type, and sub-type. This allows for appropriate differentiation in depreciation patterns between different types of assets.