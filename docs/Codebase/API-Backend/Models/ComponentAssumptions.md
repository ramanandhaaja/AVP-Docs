# Component Assumptions Documentation

## Quick Reference

| Item               | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/ComponentAssumptions.cs`                                             |
| **Database Table** | `ComponentAssumptions`                                                                 |
| **Entity Role**    | Stores valuation parameters for component-level lifecycle modeling and cost estimation |

## Key Fields

| Field                                | Type    | Description                                                     |
| ------------------------------------ | ------- | --------------------------------------------------------------- |
| `Id`                                 | Integer | Unique identifier for the record                                |
| `ComponentSubTypeId`                 | Integer | Links to the component subtype this applies to                  |
| `UnitRate`                           | Decimal | Base cost per unit of measurement (e.g., m², m³)                |
| `LongLifePct`                        | Decimal | Portion (%) of the component with extended useful life          |
| `ULLong`, `ULShortMin`, `ULShortMax` | Decimal | Useful life values (in years) for long- and short-life portions |
| `RVPctLong`, `RVPctShort`            | Decimal | Residual value percentages                                      |
| `DepreciationPolicy`                 | Enum    | Specifies the depreciation method (e.g., Straight Line)         |
| `ObsolescenceProfileId`              | Integer | Links to a `ValuationProfile` for obsolescence modeling         |

---

## Related Entities

| Related Model      | Relationship | Purpose                                                          |
| ------------------ | ------------ | ---------------------------------------------------------------- |
| `ComponentSubType` | Many-to-One  | Defines the group of components to which this assumption applies |
| `Component`        | One-to-Many  | Components using these parameters                                |
| `ValuationProfile` | One-to-One   | Obsolescence profile for component degradation modeling          |

---

## Purpose & Role

The `ComponentAssumptions` entity provides detailed parameters that influence how components are valued, depreciated, and analyzed over time. It supports:

* Split lifecycle modeling (short-life vs. long-life)
* Accurate cost estimation through unit rates
* Consistent application of depreciation and residual value policies

> These assumptions ensure standardized, accurate component valuations across projects and clients.

---

## Split Lifecycle Modeling

Many components contain both fast-deteriorating and durable subparts. `ComponentAssumptions` supports this via:

* **LongLifePct**: % of component with longer lifespan (e.g., structure)
* **ULLong**: Useful life in years for long-life portion
* **ULShortMin / ULShortMax**: Range for useful life of short-life portion (e.g., finishes)

### Example Use Case

> A building roof may include structural trusses (long-life) and membrane coverings (short-life).

---

## Valuation Formulas

### 1. **Weighted Useful Life**

```
WeightedUL = (ULLong × LongLifePct) + (ULShort × (1 - LongLifePct))
```

### 2. **Remaining Useful Life**

```
RemainingUL = UL × (1 - ConditionConsumption%)
```

### 3. **Depreciated Value Using Split Lifecycle**

```
ComponentValue = (RC × LLPct × (1 - DepLong)) + (RC × (1 - LLPct) × (1 - DepShort))
```

Where:

* RC = Replacement Cost
* LLPct = LongLifePct
* DepLong = Depreciation for long-life portion
* DepShort = Depreciation for short-life portion

---

## Business Rules

* Assumptions must be tied to a `ComponentSubType`
* `ULShortMin` and `ULShortMax` define a valid range for short-life modeling
* All records are **client-specific**, supporting customized valuation logic
* Must have a defined `DepreciationPolicy`
* Optional linkage to an `ObsolescenceProfile` via `ValuationProfile`

---

## Business Context

### Financial Reporting

* Aligns with accounting standards for componentized assets
* Improves depreciation accuracy
* Supports fair value reporting and revaluation reserves

### Asset Management

* Enables differentiated renewal planning
* Useful for partial replacement budgeting
* Supports decision-making between maintenance and capital investment

### Lifecycle Forecasting

* Tracks condition vs. expected life
* Informs performance and service potential analytics

---

## Technical Design

| Property        | Description           |
| --------------- | --------------------- |
| **Namespace**   | `AVP.Domain.Entities` |
| **Inheritance** | `IClientEntity`       |

---

## Performance Considerations

* Frequently queried during component valuation runs
* Recommended: **cache per `ComponentSubTypeId`** to reduce repetitive queries

> **Tip:** Load assumptions in bulk before looping over components for batch performance.

---

## Related Documentation

* [Component Model](Component.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
* [Asset Assumptions](AssetAssumptions.md)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
