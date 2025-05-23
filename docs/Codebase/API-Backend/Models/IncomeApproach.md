
# IncomeApproach Model Documentation

#  IncomeApproach Documentation

## QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/IncomeApproach.cs
- **Database Table**: IncomeApproaches
- **Primary Purpose**: Provides data and algorithms for income-based asset valuation
- **Key Fields**: 
  - Id (int) - Primary key
  - AssetId (int) - Links to the parent asset
  - LandArea (decimal) - Area of the land
  - LandRate (decimal) - Rate per unit area
  - ImprovementsPct (decimal) - Percentage of improvements to value
  - IndexationPct (decimal) - Adjustment for time-based changes
  - IncomeApproachItems (collection) - Individual income streams
- **Related Models**: 
  - Asset (parent) - The asset being valued
  - IncomeApproachItem (one-to-many) - Income streams

## DETAILED DOCUMENTATION

## Overview
The IncomeApproach entity contains data and methods needed to perform income-based valuations of assets. It supports the capitalization of income streams from multiple sources, with adjustments for land values, improvement percentages, and indexation factors. Income-based valuation is typically used for assets that generate income, such as commercial properties or revenue-producing infrastructure.

## Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

## Income Capitalization Methodology
The IncomeApproach implements capitalization of income streams:

1. **Direct Capitalization Method**
   - Converts annual net income to value using capitalization rate
   - Formula: `Value = Net Operating Income ÷ Capitalization Rate`
   - Multiple income streams can be calculated separately and summed

2. **Income Stream Components**
   - Gross Income: Total income potential
   - Vacancy and Collection Loss: Reduction for unoccupied periods
   - Operating Expenses: Costs to maintain and operate the asset
   - Net Operating Income: Gross Income minus Vacancies and Expenses

3. **Land and Improvements Separation**
   - Land value calculated separately using market rates
   - Improvements value derived from total value minus land
   - Allows for separate analysis of land and improvements returns

## Calculation Methods
The entity provides several key calculation methods:

1. **LandValue()**
   - Calculates total land value based on area and rate
   - Formula: `LandValue = LandArea × LandRate`

2. **PropertyValue()**
   - Sums the valuations from all income streams
   - Each stream's value is calculated based on its own parameters

3. **ImprovementsValue()**
   - Calculates the value of improvements separate from land
   - Formula: `ImprovementsValue = PropertyValue - LandValue`

4. **MarketValue()**
   - Provides the final market value with all adjustments applied
   - Formula: `MarketValue = PropertyValue × IndexationPct`

## Business Rules Applied
- IncomeApproach is used when an asset's ValuationType is set to Income
- Multiple income streams can be analyzed through IncomeApproachItems
- Each IncomeApproachItem represents a separate income stream with parameters:
  - Annual income and expense amounts
  - Vacancy rates and collection loss percentages
  - Capitalization rates specific to income type
  - Risk adjustments and market factors
- Domain events are triggered when values change, ensuring asset valuations are recalculated
- The approach handles various edge cases including preventing divide-by-zero errors

## Application in Valuation
**Note:** Income approach is typically used for:

1. **Income-Producing Assets**
   - Commercial rental properties
   - Industrial facilities
   - Infrastructure with user fees
   - Agricultural land with productive capacity

2. **Fair Value Measurement**
   - Supports Level 2 and Level 3 fair value hierarchy
   - Used when market approach data is limited
   - Creates defensible valuation basis based on income potential

## Capitalization Rate Significance
The capitalization rate is a critical factor in income valuation:

- Represents the expected rate of return on investment
- Typically derived from market analysis of comparable properties
- Incorporates risk assessment, growth expectations, and market conditions
- Small changes can significantly impact the resulting value

## Business Context
The income approach directly supports these business needs:

1. **Investment Analysis**
   - Evaluates asset performance based on income generation
   - Supports return on investment calculations
   - Enables comparison of different investment opportunities

2. **Property Management**
   - Identifies income optimization opportunities
   - Supports rent-setting decisions
   - Evaluates expense management effectiveness

3. **Financial Reporting**
   - Complies with income approach requirements in accounting standards
   - Provides transparent valuation methodology
   - Creates audit trail of income-based calculations
