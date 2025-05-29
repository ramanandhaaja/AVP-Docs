# Valuation Fields Data Dictionary

## Purpose

This document explains **valuation-related fields** in the Asset Valuer Pro system with improved clarity for both technical and non-technical audiences. It includes descriptions, usage scenarios, and validation rules across different valuation methods to ensure consistent and transparent data handling.

---

## Structure Overview

All valuation classes inherit from the abstract base class `AssetValuationMethod`, with specialized extensions for each valuation approach:

* Direct Cost
* Apportionment Cost
* Market Approach
* Income Approach
* Insurance Valuation

Each section below defines fields with:

* Data Type
* Business Use Case
* Validation Info
* Examples

---

## Core Valuation Method Fields

Defined by `AssetValuationMethod`, applicable across all valuation strategies.

| Field                                                                          | Type    | Required | Description                              | Example           |
| ------------------------------------------------------------------------------ | ------- | -------- | ---------------------------------------- | ----------------- |
| `Gross`, `GrossLong`, `GrossShort`                                             | Decimal | Yes      | Replacement cost (total/long/short life) | `500000.00`       |
| `DepreciationAmountLong`, `DepreciationAmountShort`, `DepreciationAmountTotal` | Decimal | Yes      | Depreciation split across asset lifespan | `135000.00` total |
| `CurrentValue`, `CurrentValueLong`, `CurrentValueShort`                        | Decimal | Yes      | Fair/market value (total/split)          | `365000.00`       |
| `DepreciationExpense`, `DepreciationExpenseLong`, `DepreciationExpenseShort`   | Decimal | Yes      | Annual depreciation figures              | `15000.00`        |
| `WeightedAverageUL`, `WeightedAverageRUL`                                      | Decimal | Yes      | Asset lifespan and remaining useful life | `45.5` yrs UL     |

---

## Direct Cost Valuation

Defined by `DirectCostValuationMethod`.

| Field                 | Type    | Required | Description                  | Example                |
| --------------------- | ------- | -------- | ---------------------------- | ---------------------- |
| `ComponentValuations` | List    | Yes      | Valuation at component level | `[ComponentValuation]` |
| `TotalApportionment`  | Decimal | Yes      | Should equal 1.0 (100%)      | `1.0`                  |

**Logic:** Sum of component values forms total valuation.

---

## Apportionment Cost Valuation

Defined by `ApportionmentCostValuationMethod`.

| Field                     | Type | Required | Description                    | Example                  |
| ------------------------- | ---- | -------- | ------------------------------ | ------------------------ |
| `AssetReplacementCosts`   | List | Yes      | Raw cost inputs at asset level | `[AssetReplacementCost]` |
| `ComponentApportionments` | List | Yes      | Allocation per component       | `[ComponentValuation]`   |

**Logic:** Distributes costs using apportionment percentages.

---

## Market Approach Valuation

Defined by `MarketValuationMethod`.

| Field                                                | Type    | Required | Description               | Example               |
| ---------------------------------------------------- | ------- | -------- | ------------------------- | --------------------- |
| `Type`                                               | String  | Yes      | Type of market comparison | `Direct Comparison`   |
| `PropertyValue`, `LandRate`, `LandArea`, `LandTotal` | Decimal | Yes      | Land-based valuation data | `1125000.00`          |
| `ImprovementsPct`, `ImprovementsValue`               | Decimal | Yes      | Uplift for improvements   | `0.25` / `300000.00`  |
| `MarketValue`, `IndexationPct`                       | Decimal | Yes/No   | Final adjusted value      | `1425000.00` / `0.03` |

**Logic:** Derived from comparable market data and improvements.

---

## Income Approach Valuation

Defined by `IncomeValuationMethod`.

| Field                                  | Type    | Required | Description          | Example                |
| -------------------------------------- | ------- | -------- | -------------------- | ---------------------- |
| `LandRate`, `LandArea`, `LandValue`    | Decimal | Yes      | Base land data       | `1500.00 sqm`          |
| `ImprovementsPct`, `ImprovementsValue` | Decimal | Yes      | Uplift contribution  | `25%`                  |
| `MarketValue`                          | Decimal | Yes      | Derived market value | `1425000.00`           |
| `IncomeApproachItems`                  | List    | Yes      | Cashflow items       | `[IncomeApproachItem]` |

### IncomeApproachItem Fields

| Field                                                         | Type           | Description                | Example                       |
| ------------------------------------------------------------- | -------------- | -------------------------- | ----------------------------- |
| `ItemName`, `Inflow`, `Outflow`                               | String/Decimal | Revenue/expenses           | `Retail Tenancy`, `120000.00` |
| `VacancyFactorPct`, `LeasedUpMonths`, `CapitalisationRatePct` | Decimal/Int    | Risk and yield assumptions | `0.05`, `3`, `0.07`           |
| `CapitalAdjustment`, `NetFlow`, `Valuation`                   | Decimal        | Final yield-based value    | `1142857.14`                  |

**Logic:** Capitalizes net income streams.

---

## Insurance Valuation

Defined by `Insurance` class.

| Field                                                                                                       | Type       | Required                        | Description            | Example |
| ----------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------- | ---------------------- | ------- |
| `Coverage`, `LeadBuildMonths`, `DemoMonths`                                                                 | String/Int | Coverage plan, rebuild timeline | `Full`, `12`, `2`      |         |
| `ReplacementAdjustmentPct`, `EscalationFactorPct`, `ProfessionalFeesPct`, `DebrisRemovalPct`                | Decimal    | Adjustments for valuation       | `0.05`, `0.04`         |         |
| `DebrisRemovalMinimum`, `DebrisRemoval`                                                                     | Decimal    | Cleanup costs                   | `10000.00`, `25000.00` |         |
| `Total`, `EscalationFees`, `ProfessionalFees`, `TotalPlusEscalation`, `TotalPlusEscalationPlusProfessional` | Decimal    | Progressive totals              | `570000.00`            |         |

---

## Component Valuation

Defined by `ComponentValuation` class.

| Field                                       | Type        | Description                   | Example                                |
| ------------------------------------------- | ----------- | ----------------------------- | -------------------------------------- |
| `Name`, `Type`, `SubType`                   | String      | Component identifiers         | `Roof Structure`, `Structural`, `Roof` |
| `ApportionmentPct`, `ConsumptionScore`      | Decimal/Int | Cost allocation and condition | `0.15`, `7`                            |
| `Gross`, `LongLifePct`, `ShortLifePct`      | Decimal     | Cost distribution             | `75000.00`, `0.70`, `0.30`             |
| `ULShort`, `ULLong`, `RULShort`, `RULLong`  | Decimal     | Life metrics                  | `15`, `40`, `9`, `28`                  |
| `RSPPctShort`, `RSPPctLong`                 | Decimal     | Remaining service potential   | `0.60`, `0.70`                         |
| `DepreciationPolicy`, `ObsolescenceProfile` | String      | Valuation strategy details    | `Straight Line`, `None`                |

---

## Asset Replacement Costs

Defined by `AssetReplacementCost` class.

| Field                                  | Type    | Description                            | Example                        |
| -------------------------------------- | ------- | -------------------------------------- | ------------------------------ |
| `Name`, `AreaType`                     | String  | Description of item & area measurement | `Main Structure`, `GFA`        |
| `Length`, `Width`, `Area`, `Quantity`  | Decimal | Size and scale of item                 | `25.0`, `15.0`, `375.0`, `1.0` |
| `SpecifiedRate`, `AdoptedRate`         | Decimal | Unit rates                             | `2000.00`, `2200.00`           |
| `IndexationPct`, `AccumulatedIndexPct` | Decimal | Adjustment factors                     | `0.03`, `0.07`                 |
| `Gross`                                | Decimal | Total calculated replacement cost      | `882750.00`                    |

---

## Valuation Profile

Defined by `ValuationProfile` class.

| Field                    | Type   | Description                      | Example             |
| ------------------------ | ------ | -------------------------------- | ------------------- |
| `Name`, `Description`    | String | Profile info                     | `Standard Building` |
| `ValuationProfileScores` | List   | Maps condition scores to RSP/RUL | Collection          |

### Profile Score Fields

| Field                                                  | Type    | Description             | Example          |
| ------------------------------------------------------ | ------- | ----------------------- | ---------------- |
| `ConsumptionScoreStart`, `ConsumptionScoreEnd`         | Int     | Score range             | `6` to `7`       |
| `RSPPctStart`, `RSPPctEnd`, `RULPctStart`, `RULPctEnd` | Decimal | Resulting mapped values | `0.60` to `0.70` |

---

## Valuation Class Fields

| Field                                       | Type       | Description              | Example                                             |
| ------------------------------------------- | ---------- | ------------------------ | --------------------------------------------------- |
| `Name`, `Technique`, `Level`, `Description` | String/Int | Reporting classification | `Property, Plant & Equipment`, `Cost Approach`, `3` |

---

## Logic Chains

### 🔧 Score → Value

1. Inspector assigns `ConditionScore`
2. Mapped through `ValuationProfile`
3. Results in `RSPPct`
4. Used to compute `CurrentValue`
5. Remaining = Depreciation

### Depreciation Expense

1. Use `UsefulLife` from assumptions
2. Apply policy (e.g., Straight Line)
3. Expense = `Gross / UL`
4. Adjust for RUL as needed

---

## Business Usage

### Financial Reporting

* Fair value disclosures
* Depreciation and amortization
* Asset class breakdowns

### Asset Management

* Renewal timing
* Budgeting for replacement
* Service life tracking

### Risk & Insurance

* Adequate insurance
* Cost estimation post-incident
* Valuation transparency for stakeholders

---

## Version Updates

| Version | Key Changes                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| v3      | Enhanced condition history, improved validation, and optimized logic performance |

---

## Related Documents

* [Asset Fields Dictionary](Asset_Fields_Dictionary)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow)
* [Reporting Process Workflow](../Workflows/Reporting_Process_Workflow)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
