# 📊 Valuation Fields Data Dictionary

## 📋 Overview
This document provides a comprehensive data dictionary for valuation-related fields in the Asset Valuer Pro system. It maps technical field names to their business purpose, data types, validation rules, and usage examples across various valuation methods.

## 📋 Core Valuation Method Fields

The `AssetValuationMethod` abstract class defines these common fields for all valuation methods:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Gross | Decimal | Replacement cost | Yes | Gross replacement cost | 500000.00 |
| GrossLong | Decimal | Long-life portion | Yes | Long-life component of gross | 375000.00 |
| GrossShort | Decimal | Short-life portion | Yes | Short-life component of gross | 125000.00 |
| DepreciationAmountLong | Decimal | Long-life depreciation | Yes | Depreciation amount for long-life | 75000.00 |
| DepreciationAmountShort | Decimal | Short-life depreciation | Yes | Depreciation amount for short-life | 60000.00 |
| DepreciationAmountTotal | Decimal | Total depreciation | Yes | Total accumulated depreciation | 135000.00 |
| CurrentValue | Decimal | Fair value | Yes | Current/fair value | 365000.00 |
| CurrentValueLong | Decimal | Long-life fair value | Yes | Fair value of long-life portion | 300000.00 |
| CurrentValueShort | Decimal | Short-life fair value | Yes | Fair value of short-life portion | 65000.00 |
| AccumulatedDepreciation | Decimal | Accumulated depreciation | Yes | Total accumulated depreciation | 135000.00 |
| DepreciationExpense | Decimal | Annual depreciation | Yes | Annual depreciation expense | 15000.00 |
| DepreciationExpenseLong | Decimal | Long-life expense | Yes | Annual depreciation for long-life | 9000.00 |
| DepreciationExpenseShort | Decimal | Short-life expense | Yes | Annual depreciation for short-life | 6000.00 |
| WeightedAverageUL | Decimal | Weighted useful life | Yes | Weighted average useful life (years) | 45.5 |
| WeightedAverageRUL | Decimal | Weighted remaining life | Yes | Weighted average remaining useful life | 32.75 |

## 📋 Direct Cost Valuation Method

The `DirectCostValuationMethod` extends the base class with:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| ComponentValuations | Collection | Component details | Yes | Component-level valuations | List of ComponentValuation objects |
| TotalApportionment | Decimal | Apportionment check | Yes | Sum of component apportionments | 1.0 (100%) |

### Business Logic
Direct Cost valuation calculates asset value by summing component values:
```csharp
// Simplified logic
public override decimal CalculateGross()
{
    return ComponentValuations.Sum(c => c.Gross);
}

public override decimal CalculateCurrentValue()
{
    return ComponentValuations.Sum(c => c.CurrentValue);
}
```

## 📋 Apportionment Cost Valuation Method

The `ApportionmentCostValuationMethod` extends the base class with:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| AssetReplacementCosts | Collection | Cost elements | Yes | Asset-level replacement costs | List of AssetReplacementCost objects |
| ComponentApportionments | Collection | Component allocations | Yes | How costs are apportioned to components | List of ComponentValuation objects |

### Business Logic
Apportionment valuation distributes asset-level costs to components based on apportionment percentages:
```csharp
// Simplified logic
public override decimal CalculateGross()
{
    return AssetReplacementCosts.Sum(c => c.Gross);
}

// Components get apportioned values
private void ApportionToComponents()
{
    var totalGross = CalculateGross();
    foreach (var component in ComponentApportionments)
    {
        component.Gross = totalGross * component.ApportionmentPct;
    }
}
```

## 📋 Market Approach Valuation Method

The `MarketValuationMethod` extends the base class with:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Type | String | Market valuation type | Yes | Type of market approach used | "Direct Comparison" |
| PropertyValue | Decimal | Total property value | Yes | Total property market value | 1200000.00 |
| LandRate | Decimal | Land unit rate | Yes | Rate per unit of land area | 750.00 |
| LandArea | Decimal | Land area | Yes | Total land area | 1500.00 |
| LandAreaUnit | String | Area unit | Yes | Unit of measurement for area | "sqm" |
| LandTotal | Decimal | Land value | Yes | Total land value | 1125000.00 |
| ImprovementsPct | Decimal | Improvements percentage | Yes | Percentage for improvements | 0.25 (25%) |
| ImprovementsValue | Decimal | Improvements value | Yes | Value of improvements | 300000.00 |
| MarketValue | Decimal | Final market value | Yes | Final determined market value | 1425000.00 |
| IndexationPct | Decimal | Indexation factor | No | Adjustment for time | 0.03 (3%) |

### Business Logic
Market valuation uses comparable sales data and standard valuation techniques:
```csharp
// Simplified logic
public override decimal CalculateGross()
{
    return MarketValue;
}

public override decimal CalculateCurrentValue()
{
    return MarketValue;
}
```

## 📋 Income Approach Valuation Method

The `IncomeValuationMethod` extends the base class with:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| LandRate | Decimal | Land unit rate | Yes | Rate per unit of land area | 750.00 |
| LandArea | Decimal | Land area | Yes | Total land area | 1500.00 |
| LandValue | Decimal | Land value | Yes | Total land value | 1125000.00 |
| ImprovementsPct | Decimal | Improvements percentage | Yes | Percentage for improvements | 0.25 (25%) |
| ImprovementsValue | Decimal | Improvements value | Yes | Value of improvements | 300000.00 |
| MarketValue | Decimal | Final market value | Yes | Final determined market value | 1425000.00 |
| IncomeApproachItems | Collection | Income streams | Yes | Individual income streams | List of IncomeApproachItem objects |

### Income Approach Item Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| ItemName | String | Income source | Yes | Description of income source | "Retail Tenancy" |
| Inflow | Decimal | Income amount | Yes | Annual income | 120000.00 |
| Outflow | Decimal | Expense amount | Yes | Annual expenses | 40000.00 |
| VacancyFactorPct | Decimal | Vacancy rate | Yes | Expected vacancy rate | 0.05 (5%) |
| LeasedUpMonths | Integer | Lease-up period | No | Months to fully lease | 3 |
| CapitalisationRatePct | Decimal | Cap rate | Yes | Capitalization rate | 0.07 (7%) |
| CapitalAdjustment | Decimal | Adjustment | No | Capital value adjustment | 50000.00 |
| NetFlow | Decimal | Net income | Yes | Net annual income | 80000.00 |
| Valuation | Decimal | Capitalized value | Yes | Capitalized income value | 1142857.14 |

### Business Logic
Income valuation capitalizes income streams to determine value:
```csharp
// Simplified logic
public override decimal CalculateGross()
{
    return MarketValue;
}

public decimal CalculateNetFlow()
{
    return IncomeApproachItems.Sum(i => i.Inflow - i.Outflow);
}

public decimal CalculateCapitalizedValue()
{
    return IncomeApproachItems.Sum(i => 
        (i.NetFlow * (1 - i.VacancyFactorPct)) / i.CapitalisationRatePct + i.CapitalAdjustment);
}
```

## 📋 Insurance Valuation Fields

The `Insurance` class contains:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Coverage | String | Coverage type | Yes | Type of insurance coverage | "Full" |
| LeadBuildMonths | Integer | Lead time | Yes | Months required to rebuild | 12 |
| DemoMonths | Integer | Demolition time | Yes | Months required for demolition | 2 |
| ReplacementAdjustmentPct | Decimal | Adjustment factor | No | Adjustment to replacement cost | 0.05 (5%) |
| EscalationFactorPct | Decimal | Cost escalation | Yes | Annual cost escalation rate | 0.04 (4%) |
| ProfessionalFeesPct | Decimal | Professional fees | Yes | Professional fees percentage | 0.10 (10%) |
| DebrisRemovalPct | Decimal | Debris removal | Yes | Debris removal percentage | 0.05 (5%) |
| DebrisRemovalMinimum | Decimal | Minimum removal | No | Minimum debris removal cost | 10000.00 |
| DebrisRemoval | Decimal | Calculated removal | Yes | Calculated debris removal cost | 25000.00 |
| Total | Decimal | Base insured value | Yes | Base insured value | 500000.00 |
| EscalationFees | Decimal | Escalation amount | Yes | Calculated escalation amount | 20000.00 |
| ProfessionalFees | Decimal | Fees amount | Yes | Calculated professional fees | 50000.00 |
| TotalPlusEscalation | Decimal | With escalation | Yes | Total plus escalation | 520000.00 |
| TotalPlusEscalationPlusProfessional | Decimal | Full insurance | Yes | Full insurance value | 570000.00 |

### Business Logic
Insurance valuation calculates replacement cost with allowances for time delays:
```csharp
// Simplified logic
public decimal CalculateEscalationFees()
{
    var totalMonths = LeadBuildMonths + DemoMonths;
    var annualFactor = Math.Pow(1 + EscalationFactorPct, totalMonths / 12.0) - 1;
    return Total * (decimal)annualFactor;
}

public decimal CalculateProfessionalFees()
{
    return TotalPlusEscalation * ProfessionalFeesPct;
}

public decimal CalculateDebrisRemoval()
{
    var calculatedRemoval = Total * DebrisRemovalPct;
    return calculatedRemoval < DebrisRemovalMinimum ? DebrisRemovalMinimum : calculatedRemoval;
}
```

## 📋 Component Valuation Fields

The `ComponentValuation` class contains:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Name | String | Component name | Yes | Descriptive name of component | "Roof Structure" |
| Type | String | Component type | Yes | Type of component | "Structural" |
| SubType | String | Component sub-type | Yes | Sub-type of component | "Roof" |
| ApportionmentPct | Decimal | Cost allocation | Yes | Percentage of asset cost | 0.15 (15%) |
| ConsumptionScore | Integer | Condition score | Yes | Condition rating (1-10) | 7 |
| ScoreChangedDate | DateTime | Score update | No | When condition score was last updated | "2023-09-15" |
| Gross | Decimal | Replacement cost | Yes | Gross replacement cost | 75000.00 |
| LongLifePct | Decimal | Long-life portion | Yes | Percentage of long-life portion | 0.70 (70%) |
| ShortLifePct | Decimal (Derived) | Short-life portion | Yes | Percentage of short-life portion | 0.30 (30%) |
| ValuationProfile | String | Valuation profile | Yes | Profile for valuation calculations | "Standard Building" |
| ULShort | Decimal | Short-life span | Yes | Useful life of short-life portion (years) | 15 |
| ULLong | Decimal | Long-life span | Yes | Useful life of long-life portion (years) | 40 |
| RULShort | Decimal | Short remaining life | Yes | Remaining useful life of short portion | 9 |
| RULLong | Decimal | Long remaining life | Yes | Remaining useful life of long portion | 28 |
| RSPPctShort | Decimal | Short RSP percentage | Yes | Remaining service potential (short) | 0.60 (60%) |
| RSPPctLong | Decimal | Long RSP percentage | Yes | Remaining service potential (long) | 0.70 (70%) |
| DepreciationPolicy | String | Depreciation method | Yes | Method of depreciation | "Straight Line" |
| ObsolescenceProfile | String | Obsolescence pattern | No | Pattern of obsolescence | "None" |

### Business Logic
Component valuation calculates depreciation based on condition:
```csharp
// Simplified logic
public decimal CalculateRSPPct(int consumptionScore, string profile)
{
    // Get profile mapping from valuation profile service
    return _valuationProfileService.GetRSPPercentage(profile, consumptionScore);
}

public decimal CalculateCurrentValue()
{
    return CalculateCurrentValueLong() + CalculateCurrentValueShort();
}

public decimal CalculateCurrentValueLong()
{
    return GrossLong * RSPPctLong;
}

public decimal CalculateCurrentValueShort()
{
    return GrossShort * RSPPctShort;
}
```

## 📋 Replacement Cost Fields

The `AssetReplacementCost` class contains:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Name | String | Item name | Yes | Description of replacement item | "Main Structure" |
| AreaType | String | Area type | No | Type of area measurement | "GFA" |
| Length | Decimal | Length | No | Length measurement | 25.0 |
| Width | Decimal | Width | No | Width measurement | 15.0 |
| Area | Decimal | Area | No | Area measurement | 375.0 |
| Quantity | Decimal | Quantity | Yes | Quantity of items | 1.0 |
| TotalDimension | Decimal | Total dimension | Yes | Total dimension for costing | 375.0 |
| SpecifiedRate | Decimal | Rate specified | No | Client-specified rate | 2000.00 |
| LocalityFactorPct | Decimal | Locality adjustment | No | Adjustment for location | 0.10 (10%) |
| AdoptedRate | Decimal | Rate used | Yes | Final rate adopted | 2200.00 |
| IndexationPct | Decimal | Current indexation | No | Current period indexation | 0.03 (3%) |
| AccumulatedIndexPct | Decimal | Total indexation | No | Accumulated indexation | 0.07 (7%) |
| Gross | Decimal | Total cost | Yes | Total replacement cost | 882750.00 |

## 📋 Valuation Profile Fields

The `ValuationProfile` class contains:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Name | String | Profile name | Yes | Name of valuation profile | "Standard Building" |
| Description | String | Profile description | No | Description of profile usage | "For standard building components" |
| ValuationProfileScores | Collection | Condition mappings | Yes | Maps condition scores to RSP/RUL | Collection of ValuationProfileScore |

### Valuation Profile Score Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| ConsumptionScoreStart | Integer | Score range start | Yes | Starting condition score | 6 |
| ConsumptionScoreEnd | Integer | Score range end | Yes | Ending condition score | 7 |
| RSPPctStart | Decimal | RSP range start | Yes | Starting RSP percentage | 0.60 (60%) |
| RSPPctEnd | Decimal | RSP range end | Yes | Ending RSP percentage | 0.70 (70%) |
| RULPctStart | Decimal | RUL range start | Yes | Starting RUL percentage | 0.55 (55%) |
| RULPctEnd | Decimal | RUL range end | Yes | Ending RUL percentage | 0.65 (65%) |

## 📋 Valuation Class Fields

The `ValuationClass` class contains financial reporting classification fields:

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Name | String | Class name | Yes | Name of valuation class | "Property, Plant & Equipment" |
| Technique | String | Valuation technique | Yes | Technique used | "Cost Approach" |
| Level | Integer | FV hierarchy level | Yes | Fair value hierarchy level | 3 |
| Description | String | Class description | No | Description of valuation class | "Assets valued using cost approach" |

## 📋 Integrated Business Logic Chains

### Condition Score to Fair Value
The system uses a chain of mappings to convert condition scores to fair value:

1. **Condition Score Assignment**: Inspector assigns condition score (1-10)
2. **Profile Mapping**: Score mapped to RSP percentage via ValuationProfile
3. **Remaining Service Potential**: RSP calculated as a percentage
4. **Current Value Calculation**: RSP applied to Gross to determine Current Value
5. **Depreciation Calculation**: (1-RSP) of Gross equals Accumulated Depreciation

### Depreciation Expense Calculation
Annual depreciation expense is calculated based on pattern and useful life:

1. **Useful Life Determination**: From component assumptions
2. **Pattern Selection**: Straight line, diminishing value, etc.
3. **Expense Calculation**: For straight line: Gross / UL
4. **Remaining Life Calculation**: Based on RUL percentage or explicit assignment

## 📋 Business Value and Impact

### Financial Reporting Impact
Valuation fields directly impact:
- Asset carrying values in financial statements
- Depreciation expense in income statements
- Fair value measurement disclosures
- Movements reconciliation reporting

### Asset Management Impact
Valuation data supports:
- Asset renewal planning
- Remaining useful life estimation
- Maintenance timing and budgeting
- Strategic replacement decisions

### Risk Management
Valuation fields contribute to:
- Insurance coverage adequacy
- Replacement cost accuracy
- Disaster recovery planning
- Financial risk assessment

## 📋 Version Considerations

### Version 2 vs. Version 3 Differences
- Version 3 adds more comprehensive condition score history
- Version 3 enhances valuation profile flexibility
- Version 3 improves calculation performance
- Version 3 adds more detailed validation for valuation fields

## 📋 Related Documentation

- [Asset Data Dictionary](Asset_Fields_Dictionary.md)
- [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow.md)
- [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
- [Reporting Process Workflow](../Workflows/Reporting_Process_Workflow.md)
