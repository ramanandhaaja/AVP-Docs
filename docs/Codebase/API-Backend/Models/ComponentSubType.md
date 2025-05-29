# Component SubType Documentation

## Quick Reference

| Item               | Description                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/ComponentSubType.cs`                                                    |
| **Database Table** | `ComponentSubTypes`                                                                       |
| **Entity Role**    | Represents the most specific classification of a component within the component hierarchy |

## Key Fields

| Field             | Type    | Description                                     |
| ----------------- | ------- | ----------------------------------------------- |
| `Id`              | Integer | Unique identifier                               |
| `Name`            | String  | Descriptive name (e.g., “Colorbond”, “Copper”)  |
| `ComponentTypeId` | Integer | Link to the parent component type               |
| `LookupType`      | Enum    | Identifies this as a subtype-level lookup value |

---

## Related Entities

| Entity                 | Relationship | Purpose                                                                     |
| ---------------------- | ------------ | --------------------------------------------------------------------------- |
| `ComponentType`        | Many-to-One  | Categorizes this subtype under a broader component type                     |
| `Component`            | Indirect     | Components assigned to this subtype via hierarchy                           |
| `ComponentAssumptions` | One-to-One   | Stores valuation parameters (unit rates, lifecycles, depreciation policies) |
| `BaselineAssumptions`  | One-to-One   | Strategic asset planning inputs (forecasting, risk)                         |

---

## Purpose & Role

`ComponentSubType` is the **final tier** in the classification of components. It enables:

* Highly specific cost modeling (e.g., zinc vs copper)
* Tailored lifecycle and depreciation rules
* Material-specific renewal forecasting

> A detailed subtype helps drive valuation precision and long-term planning accuracy.

---

## Component Hierarchy Structure

| Level              | Example                        |
| ------------------ | ------------------------------ |
| `ComponentName`    | Roof Structure                 |
| `ComponentType`    | Metal Roof                     |
| `ComponentSubType` | Zincalume / Colorbond / Copper |

This hierarchy ensures materials and construction variations are properly accounted for in:

* Unit cost modeling
* Useful life assumptions
* Strategic asset plans

---

## Valuation Parameters

ComponentSubType connects directly to valuation settings through `ComponentAssumptions`, enabling:

### 1. **Cost Estimation**

* Unit rates are typically assigned at this level
* Captures cost variability across materials or designs

### 2. **Lifecycle Modeling**

* Useful life varies by material durability
* Residual values and condition scoring differ by subtype
* Material deterioration patterns influence asset performance

### 3. **Strategic Planning**

* `BaselineAssumptions` use subtypes to model:

  * Renewal timelines
  * Capital forecasting
  * Risk or service impact scoring

---

## Business Rules

* Every `ComponentSubType` **must belong** to a valid `ComponentType`
* Subtypes are **client-specific**, supporting tailored classification schemes
* Must be linked to `ComponentAssumptions` to be usable in valuation
* May link to `BaselineAssumptions` for planning tools

---

## Business Context

Component subtypes enable more detailed reporting and planning by:

* Supporting industry-specific or custom classification standards
* Allowing different materials to drive different cost/lifecycle expectations
* Enabling refined indexation and lifecycle segmentation in capital plans

---

## Technical Design

| Property        | Description               |
| --------------- | ------------------------- |
| **Namespace**   | `AVP.Domain.Entities`     |
| **Inheritance** | `Lookup`, `IClientEntity` |

---

## Performance Considerations

* For detailed reports and calculation-heavy views, eager-load `ComponentSubType`
* In bulk or read-only views, limit queries to fields such as `Id`, `Name`, `ComponentTypeId`

> **Tip:** Indexing `ComponentTypeId` can improve performance in joins and filtered lookups.

---

## Related Documentation

* [Component Type Documentation](ComponentType)
* [Component Assumptions Documentation](ComponentAssumptions)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
