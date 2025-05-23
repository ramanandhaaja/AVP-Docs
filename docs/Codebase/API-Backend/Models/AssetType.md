# Asset Type Documentation

## Quick Reference

| Item               | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/AssetType.cs`                                   |
| **Database Table** | `AssetTypes`                                                      |
| **Entity Role**    | Represents the second level in the asset classification hierarchy |

## Key Fields

| Field          | Type    | Description                                        |
| -------------- | ------- | -------------------------------------------------- |
| `Id`           | Integer | Unique identifier                                  |
| `Name`         | String  | Descriptive name of the asset type (e.g., "Roads") |
| `AssetClassId` | Integer | Reference to the parent asset class                |
| `LookupType`   | Enum    | Designates this entity as an asset type lookup     |

---

## Related Entities

| Related Model  | Relationship | Purpose                                                |
| -------------- | ------------ | ------------------------------------------------------ |
| `AssetClass`   | Many-to-One  | Defines the broader category this type belongs to      |
| `AssetSubType` | One-to-Many  | Enables further refinement and detail within this type |
| `Asset`        | One-to-Many  | Assets that fall under this type category              |

---

## Purpose & Role

The `AssetType` entity is the **intermediate tier** in the asset classification system. It enables:

* More granular categorization within an `AssetClass`
* Tailored valuation and depreciation logic
* Flexible mapping for different asset management needs per client

> It is a crucial link between high-level classifications and detailed subtypes.

---

## Classification Hierarchy

| Level          | Example                      |
| -------------- | ---------------------------- |
| `AssetClass`   | Infrastructure               |
| `AssetType`    | Roads                        |
| `AssetSubType` | Sealed Roads, Unsealed Roads |

This layered classification ensures assets can be grouped and managed with increasing specificity.

---

## Business Context & Usage

### 1. Valuation Profiles

* Types can influence the depreciation pattern selected (e.g., straight-line, consumption-based)
* May affect default useful life assumptions

### 2. Cost Models

* Replacement cost assumptions may be defined at the type level
* Different unit rates can apply per type even within the same class

### 3. Financial Reporting

* Regulatory frameworks may require reporting at the asset type level
* Types help segment data in valuation summaries, ledgers, and disclosures

---

## Business Rules

* Every `AssetType` **must belong** to a valid `AssetClass`
* Types are **client-specific**, allowing for flexible classification schemes per organization
* `AssetType` links to multiple `AssetSubTypes` for additional granularity
* Used in valuation profile rules to map expected patterns or approaches

---

## Technical Design

| Property        | Description                                           |
| --------------- | ----------------------------------------------------- |
| **Namespace**   | `AVP.Domain.Entities`                                 |
| **Inheritance** | `Lookup`, `IClientEntity`                             |
| **Behavior**    | Provides client-level customization of asset taxonomy |

---

## Performance Considerations

* When retrieving asset data in bulk, avoid eager-loading this relationship unless explicitly needed
* For display or filtering purposes, selectively include `AssetType` to reduce overhead

> **Optimization Tip:** Use projection queries if only `AssetType.Name` or ID is needed.

---

## Related Documentation

* [Asset Class Documentation](AssetClass.md)
* [Asset SubType Documentation](AssetSubType.md)
* [Asset Assumptions Documentation](AssetAssumptions.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
