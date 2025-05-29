# Component Model Documentation

## Quick Reference

| Item               | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/Component.cs`                                                                    |
| **Database Table** | `Components`                                                                                       |
| **Entity Role**    | Represents a part of an asset with distinct valuation, lifecycle, and depreciation characteristics |

## Key Fields

| Field                                                      | Type    | Description                                                 |
| ---------------------------------------------------------- | ------- | ----------------------------------------------------------- |
| `Id`                                                       | Integer | Unique identifier for the component                         |
| `AssetId`                                                  | Integer | Links the component to its parent asset                     |
| `ComponentNameId`, `ComponentTypeId`, `ComponentSubTypeId` | Integer | Hierarchical classification identifiers                     |
| `ConsumptionScore`                                         | Decimal | Condition rating used in valuation                          |
| `ApportionmentPct`                                         | Decimal | Proportion of asset’s total value assigned to the component |
| `ValuationType`                                            | Enum    | Defines valuation method used for the component             |

---

## Related Entities

| Related Model                                        | Relationship | Purpose                                                  |
| ---------------------------------------------------- | ------------ | -------------------------------------------------------- |
| `Asset`                                              | Many-to-One  | Parent entity containing this component                  |
| `ComponentName`, `ComponentType`, `ComponentSubType` | Hierarchical | Classification used to determine valuation logic         |
| `ComponentAssumptions`                               | One-to-One   | Provides useful life, rate, and depreciation assumptions |
| `ValuationProfile`                                   | One-to-One   | Maps condition to depreciation behavior                  |
| `ComponentReplacementCost`                           | One-to-Many  | Cost-specific details (e.g., dimensions, rates)          |

---

## Purpose & Role

The `Component` model provides a **granular valuation unit** for the asset. In the Asset Valuer Pro system, it enables:

* Valuation by **Apportionment** or **Direct Cost** method
* Lifecycle tracking for **short-life** and **long-life** elements
* More accurate condition-based depreciation
* Asset componentization for audit, maintenance, and reporting

> Components enhance precision and support hybrid valuation strategies.

---

## Component Hierarchy

| Level              | Example                    |
| ------------------ | -------------------------- |
| `ComponentName`    | Structure                  |
| `ComponentType`    | Concrete Frame             |
| `ComponentSubType` | Reinforced Concrete Column |

This hierarchy enables appropriate matching of:

* Unit rates
* Useful life tables
* Depreciation profiles

---

## Valuation Integration

### 1. **Apportionment Cost Method**

* Asset’s total cost is divided across components
* Component-specific:

  * `ApportionmentPct`
  * `ConsumptionScore`
  * Depreciation assumptions

### 2. **Direct Cost Method**

* Each component has its own measurable replacement cost
* Rates × Quantity = Gross Value
* Separate depreciation per component

### 3. **Mixed Methods**

* Assets may use hybrid strategies (e.g., cost for structure, income for systems)
* Components define their own valuation paths based on type

---

## Business Rules

* Every component must have:

  * A `ComponentAssumptions` record
  * A valid `ValuationProfile`
* `ApportionmentPct` across all components in an asset **must total 1.0** (100%)
* Supports different acquisition and decommission dates from the parent asset
* Valuation readiness checks must pass before a component is included in calculations
* Lifecycle tracking includes:

  * Short-life vs. long-life splits
  * Independent `ConsumptionScore` rating

---

## Field Data Collection

During site inspections via the mobile app, valuers collect:

* Dimensions & physical specs
* Consumption score (condition rating)
* Notes and defect descriptions
* Photos of specific components

This data informs:

* Valuation formulas
* Component-specific depreciation
* Lifecycle modeling

---

## Assumptions & Profiles

| Source                 | Purpose                                                                                |
| ---------------------- | -------------------------------------------------------------------------------------- |
| `ComponentAssumptions` | Unit rates, useful life, short/long splits, residuals                                  |
| `ValuationProfile`     | Maps `ConsumptionScore` to RSP (Remaining Service Potential) and depreciation behavior |

> These records must exist and be valid for a component to be included in valuation runs.

---

## Technical Design

| Property        | Value                                                             |
| --------------- | ----------------------------------------------------------------- |
| **Namespace**   | `AVP.Domain.Entities`                                             |
| **Inheritance** | `BaseEntity`, `IClientEntity`, `IAuditableEntity`, `IErrorEntity` |

---

## Performance Considerations

* Use projection queries when only summary fields (e.g., `Id`, `ConsumptionScore`, `ApportionmentPct`) are needed
* Avoid loading full entity graphs for read-only tasks

> **Tip:** Preload assumptions/profiles where applicable for batch valuation performance gains.

---

## Related Documentation

* [Asset Model Documentation](Asset)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Component Assumptions](../Models/ComponentAssumptions)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
