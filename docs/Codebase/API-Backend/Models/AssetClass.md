# Asset Class Documentation

## Quick Reference

| Item               | Description                                             |
| ------------------ | ------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/AssetClass.cs`                        |
| **Database Table** | `AssetClasses`                                          |
| **Entity Role**    | Represents the top-level grouping of assets by category |

## Key Fields

| Field        | Type    | Description                                             |
| ------------ | ------- | ------------------------------------------------------- |
| `Id`         | Integer | Unique identifier for the asset class                   |
| `Name`       | String  | Descriptive name of the asset class (e.g., "Buildings") |
| `JobId`      | Integer | Links the class to a specific valuation job             |
| `LookupType` | Enum    | Identifies this entity as an `AssetClass` lookup        |

---

## Related Entities

| Related Model          | Relationship | Purpose                                                   |
| ---------------------- | ------------ | --------------------------------------------------------- |
| `Job`                  | Many-to-One  | Associates the asset class with a valuation cycle         |
| `AssetType`            | One-to-Many  | Lists the asset types under this class                    |
| `Asset`                | One-to-Many  | Assets grouped within this class                          |
| `ValuationProfileRule` | One-to-Many  | Defines valuation rules applicable to assets in the class |
| `AssetAssumptions`     | One-to-Many  | Default valuation parameters for this class               |

---

## Purpose & Role

The `AssetClass` entity is the **foundational tier** in the asset classification hierarchy. It enables:

* Grouping of assets by macro category (e.g., Buildings, Roads, Parks)
* Standardization of valuation rules and expectations at the class level
* Association with a specific valuation job (`JobId`) for data isolation and snapshotting

> This hierarchy supports structured valuation workflows and reporting.

---

## Classification Hierarchy

The full asset structure hierarchy is:

1. **AssetClass** – e.g., Buildings
2. **AssetType** – e.g., Commercial Buildings
3. **AssetSubType** – e.g., Office Space, Warehouse

This system allows:

* Logical organization of all assets
* Application of tailored valuation logic per group
* Aggregation in financial reporting by class

---

## Business Context

### Why It Matters

* Financial regulations often require disclosures by asset class
* Different asset classes require different valuation methods (e.g., cost vs. market approach)
* Components expected for an asset often depend on its class (e.g., roofs for buildings, pavements for roads)

### Use in Valuation

* When a `Job` is linked to an `AssetClass`, it triggers asset valuation logic
* `ValuationProfileRules` define how to evaluate asset types within this class
* Classes provide a default grouping mechanism for clients with unique taxonomies

---

## Business Rules

* Every `AssetClass` **must be linked** to a `Job` for it to be included in a valuation cycle
* Valuation events are initiated automatically when a `Job` is assigned
* Client-specific logic allows for tailored classification schemes per organization

---

## Technical Design

| Property          | Description                                                       |
| ----------------- | ----------------------------------------------------------------- |
| **Namespace**     | `AVP.Domain.Entities`                                             |
| **Inheritance**   | `Lookup`, `IClientEntity`                                         |
| **Core Behavior** | Supports client-level lookup flexibility and classification reuse |

---

## Performance Considerations

Asset classes are frequently referenced in:

* Filtering assets for valuation
* Aggregating totals by class in reports

> **Optimization Tip:** Index the `AssetClassId` and `JobId` columns for high-performance querying, especially in large portfolios.

---

## Related Documentation

* [Asset Model Documentation](Asset.md)
* [AssetAssumptions Documentation](AssetAssumptions.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow.md)
