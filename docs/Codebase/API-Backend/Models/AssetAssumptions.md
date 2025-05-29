# Asset Assumptions Documentation

## Quick Reference

| Item               | Description                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| **File Path**      | `/Domain/Entities/AssetAssumptions.cs`                                                                 |
| **Database Table** | `AssetAssumptions`                                                                                     |
| **Entity Role**    | Stores valuation parameters (unit rates, indices, adjustment factors) for asset valuation calculations |

## Key Fields

| Field               | Type          | Description                                                      |
| ------------------- | ------------- | ---------------------------------------------------------------- |
| `Id`                | Integer       | Unique identifier                                                |
| `AssetSubTypeId`    | Integer       | Links to the associated asset sub-type                           |
| `UnitRate`          | Decimal       | Base cost per unit (e.g., m², km)                                |
| `Indices`           | `List<Decimal>` | Historical indices used for price indexation (typically 5 years) |
| `LocalityFactorPct` | Decimal       | Regional adjustment factor                                       |

---

## Related Entities

| Entity                                          | Relationship | Purpose                                      |
| ----------------------------------------------- | ------------ | -------------------------------------------- |
| `AssetSubType`                                  | Many-to-One  | Defines scope of assumptions for asset group |
| `Asset`                                         | One-to-Many  | Applies these assumptions to multiple assets |
| `FinancialAssetClass`, `FinancialAssetSubClass` | Optional     | Used for financial report classification     |
| `ValuationClass`                                | Optional     | Defines valuation reporting framework        |

---

## Overview

The `AssetAssumptions` class is a **core configuration model** that defines standardized valuation parameters. It ensures consistent, region-specific, and historically adjusted inputs for calculating replacement and depreciated values across similar assets.

This entity is especially critical in cost-based valuation methods, supporting accurate forecasts and historical indexing.

---

## Valuation Parameters Explained

### 1. **Unit Rate**

* Represents base cost per unit (e.g., \$/m², \$/km)
* Directly feeds into replacement cost formulas
* Can be **overridden at the individual asset level**

### 2. **Indices**

* List of decimal multipliers representing historical cost inflation
* Typically includes **5 years of data**
* Used for indexation of past values:

  ```
  IndexedValue = HistoricalCost × CumulativeIndex
  ```

### 3. **Adjustment Factors**

| Factor                | Description                              | Use                                  |
| --------------------- | ---------------------------------------- | ------------------------------------ |
| `LocalityFactorPct`   | Adjusts for regional cost differences    | Location-based variance              |
| `ComplexityFactorPct` | Optional; adjusts for project complexity | Architectural/engineering difficulty |
| `QualityFactorPct`    | Optional; adjusts for material quality   | Higher/lower build standards         |

Used collectively in replacement cost:

```math
ReplacementCost = UnitRate × Quantity × (1 + Locality + Complexity + Quality)
```

---

## Application in Valuation Calculations

### Replacement Cost

Core usage:

```math
Replacement Cost = Base Unit Rate × Quantity × Adjustment Factors
```

### Historical Cost Indexation

Used for trending:

```math
Current Equivalent = Historical Cost × Cumulative Index (from Indices)
```

---

## Business Rules

* Must be linked to a valid `AssetSubType` for application
* Indices list must contain sufficient history (usually 5 years)
* Each record is **client-specific**, allowing tailored assumptions per client
* Valuation Class and Financial Classes are **optional** but useful for structured reporting
* Provides values used in multiple methods: `DirectCost`, `ApportionmentCost`, and other cost-based approaches

---

## Hierarchy of Precedence

When applying assumptions, the following hierarchy is respected:

1. **Asset-specific overrides** (highest priority)
2. `AssetSubType`-level assumptions
3. `AssetType`-level assumptions (if applicable)
4. **Client default values** (fallback)

---

## Performance Considerations

* Frequently accessed during batch valuations → recommend **caching** for reuse
* Avoid repeated reads of unchanged assumptions per asset loop

> Best Practice: Load once per valuation job or cache at API layer

---

## Business Context

### Consistency

* All assets under the same sub-type receive standardized assumptions
* Ensures audit traceability and parameter transparency

### Localization

* Regional costs factored via `LocalityFactorPct`
* Supports global deployment with localized unit costs

### Trending & Forecasting

* Historical price trends captured via `Indices`
* Enables predictive modeling for long-term asset planning

---

## Technical Details

| Property       | Value                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **Namespace**  | `AVP.Domain.Entities`                                                                                    |
| **Interfaces** | `IClientEntity`                                                                                          |
| **Usage**      | Referenced during valuation rule execution, replacement cost calculation, and historical trending models |

---

## Related Resources

* [Asset Model Documentation](Asset)
* [Asset Fields Dictionary](../DataDictionary/Asset_Fields_Dictionary)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow)
