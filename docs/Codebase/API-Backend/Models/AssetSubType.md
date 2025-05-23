# Asset SubType Documentation

## Quick Reference

| Item               | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **File Path**      | `/Domain/Entities/AssetSubType.cs`                                       |
| **Database Table** | `AssetSubTypes`                                                          |
| **Entity Role**    | Represents the most specific level in the asset classification hierarchy |

## Key Fields

| Field         | Type    | Description                                                  |
| ------------- | ------- | ------------------------------------------------------------ |
| `Id`          | Integer | Unique identifier                                            |
| `Name`        | String  | Descriptive name of the asset subtype (e.g., "Sealed Roads") |
| `AssetTypeId` | Integer | Reference to the parent asset type                           |
| `LookupType`  | Enum    | Identifies this lookup as a subtype category                 |

---

## Related Entities

| Related Model          | Relationship | Purpose                                                         |
| ---------------------- | ------------ | --------------------------------------------------------------- |
| `AssetType`            | Many-to-One  | Defines the type grouping this subtype belongs to               |
| `Asset`                | Indirect     | Assets inherit this classification via type and class           |
| `AssetAssumptions`     | One-to-One   | Provides default valuation parameters for the subtype           |
| `InsuranceAssumptions` | One-to-One   | Supplies insurance-related assumptions specific to this subtype |
| `ComponentName`        | One-to-Many  | Templates for expected components by subtype                    |

---

## Purpose & Role

The `AssetSubType` entity is the **most granular level** of classification in the APV asset hierarchy. It ensures:

* Specific valuation logic based on asset subtype
* Tailored component templates and condition scoring rules
* Default assumption sets for cost, quality, and longevity calculations

> The more detailed the classification, the more accurate and relevant the valuation outcomes.

---

## Asset Classification Hierarchy

| Level          | Example                              |
| -------------- | ------------------------------------ |
| `AssetClass`   | Infrastructure                       |
| `AssetType`    | Roads                                |
| `AssetSubType` | Sealed Roads / Footpaths / Cycleways |

This structure allows targeted rule application and precise report groupings.

---

## Business Context & Impact

### 1. Default Valuation Assumptions

* Default **useful life**, **unit rates**, and **residual values** can be set per subtype
* Ensures consistency across similar asset records

### 2. Component Templates

* Each subtype can define expected components (e.g., structure, surface, guardrails)
* Enhances inspection guidance and standardizes component breakdowns

### 3. Valuation Methodology

* Subtypes may be mapped to different valuation strategies:

  * Cost-based for infrastructure
  * Market-based for property
* Subtype also influences expected consumption or depreciation patterns

### 4. Validation Rules

* Some subtypes enforce additional rules:

  * Required fields
  * Acceptable value ranges
  * Logical consistency with assumptions

---

## Business Rules

* Must be linked to a valid `AssetType`
* Forms the **final level** in the asset classification hierarchy
* Supports client-specific subtype schemes to reflect organizational variations
* Each `AssetSubType` can optionally link to one set of:

  * `AssetAssumptions`
  * `InsuranceAssumptions`

---

## Technical Design

| Property        | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| **Namespace**   | `AVP.Domain.Entities`                                              |
| **Inheritance** | `Lookup`, `IClientEntity`                                          |
| **Behavior**    | Implements client-specific classification and relationship mapping |

---

## Performance Considerations

* Subtypes are often queried in batch processes
* Caching subtype metadata can reduce join complexity in valuation loops

> **Tip:** Preload subtypes when building asset hierarchies or reports to avoid repetitive database access.

---

## Related Documentation

* [Asset Type Documentation](AssetType.md)
* [Asset Assumptions Documentation](AssetAssumptions.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
* [Component Templates & Rules](../Workflows/Field_Data_Collection_Workflow.md)
