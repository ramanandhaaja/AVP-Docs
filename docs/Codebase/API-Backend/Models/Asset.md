# Asset Model Documentation

## Quick Summary

| **Item**          | **Details**                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| **File Location** | `Domain/Entities/Asset.cs`                                                    |
| **DB Table**      | `Assets`                                                                      |
| **Primary Role**  | Represents a physical asset to be valued in the Asset Valuer Pro (APV) system |
| **Entity Type**   | Core domain model                                                             |

## Key Fields

| Field                                           | Type         | Description                                         |
| ----------------------------------------------- | ------------ | --------------------------------------------------- |
| `Id`                                            | Integer      | System-generated primary key                        |
| `Name`                                          | String       | Descriptive label or title for the asset            |
| `AssetClassId`, `AssetTypeId`, `AssetSubTypeId` | Integer (FK) | Define the asset's classification hierarchy         |
| `ValuationType`                                 | Enum         | Specifies the approach used for valuation           |
| `ValuationPolicy`                               | Enum         | Indicates the policy guiding the valuation decision |
| `Status`                                        | Enum         | Indicates the inspection and processing state       |

---

## Relationships to Other Models

| Related Model                             | Relationship | Description                                               |
| ----------------------------------------- | ------------ | --------------------------------------------------------- |
| `AssetClass`, `AssetType`, `AssetSubType` | Many-to-One  | Define the hierarchical classification of the asset       |
| `Component`                               | One-to-Many  | Sub-elements or parts comprising the asset                |
| `AssetReplacementCost`                    | One-to-Many  | Cost estimations for replacement scenarios                |
| `Job` (via AssetClass)                    | Many-to-One  | Contextualizes the asset in a specific valuation cycle    |
| `ValuationClass`                          | Many-to-One  | Categorization used for financial reporting               |
| Assumption-related models                 | Various      | Influence calculations like depreciation, life span, etc. |

---

## Overview

The `Asset` class is a **central model** representing all tangible assets undergoing valuation in the APV system. It acts as the container for metadata, classification, location, and financial information. The model also enables multiple valuation approaches through polymorphic extensions.

---

## Business Context

### Primary Role

Assets serve as the foundation of all valuation operations. Their classification and field attributes drive both **valuation calculations** and **financial reporting**.

### Valuation Strategy

APV supports the following methods in line with global valuation standards:

| Approach | Use Case                                                           |
| -------- | ------------------------------------------------------------------ |
| Market   | Active market exists for similar assets (e.g. houses)              |
| Income   | Value depends on earnings potential (e.g. rental properties)       |
| Cost     | Used for infrastructure or non-market assets (e.g. schools, roads) |

The `ValuationType` property determines which path is followed for a given asset.

---

## Data Isolation During Valuation

* During active valuation cycles, asset data is **decoupled from live ERP/finance systems**.
* The `JobId` association allows grouping of assets under a specific valuation engagement.
* This ensures consistent snapshotting and eliminates mid-cycle discrepancies.

> Valuation jobs can span months, so isolation is crucial for audit and compliance.

---

## Field Data Collection

* When data is incomplete or outdated, **mobile inspections via iOS** are triggered.
* The `Status` field tracks inspection and data readiness:

  * `Pending`
  * `Inspected`
  * `Incomplete`
* Collected data populates fields related to physical condition, location, and usage.

---

## Technical Model Design

| Feature          | Implementation                                                                         |
| ---------------- | -------------------------------------------------------------------------------------- |
| **Namespace**    | `AVP.Domain.Entities`                                                                  |
| **Base Classes** | `BaseEntity`, `IExtensibleEntity`, `IClientEntity`, `IErrorEntity`, `IAuditableEntity` |

These interfaces and base classes provide foundational features such as audit logging, extensibility, error handling, and multi-tenancy support.

---

## Business Rules & Validation

To ensure accurate and compliant valuations:

* An asset **must be financially controlled** to be included in valuation.
* Required fields: `AssetClass`, `ValuationPolicy`, and `AssetAssumptions`.
* Assets decommissioned **before** a valuation job’s `EffectiveDateOfValuation` are excluded.
* Method-specific data rules:

  * **Market Approach** ➝ requires `MarketApproach` object
  * **Income Approach** ➝ requires `IncomeApproach` object
  * **Apportionment/Direct Cost** ➝ require `Component` data with proper `ApportionmentPct`

---

## Performance & Scalability

* Asset data is often retrieved **in bulk** for mass valuation calculations.
* For better performance:

  * Use **projection queries** to limit payload size.
  * Avoid loading the entire object graph when unnecessary.

> Example: Use `.Select(a => new { a.Id, a.Name, a.ValuationType })` instead of loading the full entity if you only need summary data.

---

## Version Note

> Earlier versions of the model supported only a limited set of valuation approaches.

Recent enhancements include:

* Support for `HistoricalCost` and advanced valuation profiles.
* Better separation of concerns between asset, component, and assumption layers.
* Improved support for mobile-based inspections and condition scoring.

---

## Related Documentation

* [Asset Fields Dictionary](Asset)
* [Valuation Fields Dictionary](ValuationClass)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
