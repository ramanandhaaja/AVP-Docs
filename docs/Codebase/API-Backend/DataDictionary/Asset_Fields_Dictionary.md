# Asset Fields Data Dictionary

## Purpose

This document serves as a comprehensive and user-friendly data dictionary for asset-related data fields within the **Asset Valuer Pro** system. It bridges the gap between technical users (developers, data analysts) and non-technical stakeholders (finance teams, auditors, asset managers), providing clarity on each data point's meaning, usage, and importance.

---

## Core Identification Fields

Key fields used to uniquely identify and categorize assets in the system.

| Field Name                                      | Type         | Required | Description                                                    | Example                        | Notes                                              |
| ----------------------------------------------- | ------------ | -------- | -------------------------------------------------------------- | ------------------------------ | -------------------------------------------------- |
| `Id`                                            | Integer      | Yes      | Unique system-generated ID for the asset.                      | `12345`                        | Primary key.                                       |
| `Name`                                          | String       | Yes      | Descriptive title of the asset, easy for users to understand.  | `Main Administration Building` | Should be human-readable.                          |
| `Reference`                                     | String       | Yes      | Unique identifier used within the client organization.         | `BLDG-001`                     | Must be unique per client.                         |
| `CustomerReference`                             | String       | No       | Optional reference code from the client's own systems.         | `FA-1234`                      | Can assist in mapping with external systems.       |
| `AssetClassId`, `AssetTypeId`, `AssetSubTypeId` | Integer (FK) | Yes      | Links to hierarchical classification (Class → Type → Subtype). | `5`, `12`, `23`                | Used for reporting, grouping, and valuation logic. |

---

## Valuation Classification Fields

Fields that define how an asset is valued, reported, and disclosed.

| Field                                               | Type         | Required | Description                                               | Example                       |
| --------------------------------------------------- | ------------ | -------- | --------------------------------------------------------- | ----------------------------- |
| `ValuationPolicy`                                   | Enum         | Yes      | Strategy used for valuation.                              | `Above Revaluation Threshold` |
| `ValuationType`                                     | Enum         | Yes      | Specific valuation method applied.                        | `Direct Cost`                 |
| `ValuationClassId`                                  | Integer (FK) | Yes      | Classification for reporting purposes.                    | `7`                           |
| `FinancialAssetClassId`, `FinancialAssetSubClassId` | Integer (FK) | No       | Optional categorization for financial statements.         | `3`, `8`                      |
| `IsControlledForFinancialPurpose`                   | Boolean      | Yes      | Indicates if the asset is relevant for financial reports. | `true`                        |

---

## Physical Location & Description

Where the asset is and how it can be physically identified.

| Field                     | Type    | Required | Description                          | Example                      |
| ------------------------- | ------- | -------- | ------------------------------------ | ---------------------------- |
| `Address`                 | Object  | No       | Detailed structured address.         | `Address object`             |
| `Facility`, `SubFacility` | String  | No       | The named location and sub-location. | `North Campus`, `Building C` |
| `Latitude`, `Longitude`   | Decimal | No       | GPS coordinates.                     | `-33.865143`, `151.209900`   |

---

## Lifecycle & Status Fields

Track lifecycle events and current condition.

| Field                                 | Type     | Required | Description                                           | Example                    |
| ------------------------------------- | -------- | -------- | ----------------------------------------------------- | -------------------------- |
| `AcquisitionDate`, `DecommissionDate` | DateTime | No       | Dates asset was acquired and retired (if applicable). | `2020-06-15`, `2045-12-31` |
| `IndexedFromDate`                     | DateTime | No       | Start of financial indexation.                        | `2022-01-01`               |
| `Status`                              | Enum     | Yes      | Inspection status.                                    | `Inspected`                |
| `InspectionDate`                      | DateTime | No       | Last inspection date.                                 | `2023-09-22`               |
| `InspectorName`                       | String   | No       | Inspector’s full name.                                | `John Smith`               |
| `AssetHistory`                        | Enum     | Yes      | Provenance of the asset.                              | `Found`                    |

---

## Valuation Attributes

Detailed valuation considerations.

| Field                                                                     | Type         | Required | Description                                           | Example         |
| ------------------------------------------------------------------------- | ------------ | -------- | ----------------------------------------------------- | --------------- |
| `AssetAssumptionsId`                                                      | Integer (FK) | Yes      | Refers to valuation assumptions.                      | `45`            |
| `OptimisationAdjustmentPct`                                               | Decimal      | No       | Percent adjustment for optimization.                  | `0.05`          |
| `Valuer`                                                                  | String       | No       | Name of person who valued the asset.                  | `Sarah Johnson` |
| `IsHeritageAsset`, `IsHeldForSale`, `IsInvestment`, `IsHighestAndBestUse` | Boolean      | No       | Flags indicating special valuation or legal statuses. | `true/false`    |

---

## Financial History

Previous financial values related to the asset.

| Field                         | Type    | Description                             | Example     |
| ----------------------------- | ------- | --------------------------------------- | ----------- |
| `PreviousGross`               | Decimal | Last recorded gross replacement value.  | `450000.00` |
| `PreviousCurrentValue`        | Decimal | Prior fair market value.                | `350000.00` |
| `PreviousDepreciationExpense` | Decimal | Depreciation amount previously applied. | `15000.00`  |

---

## Related Asset Collections

Linked details or sub-structures of the asset.

| Field                                      | Type | Description                          |
| ------------------------------------------ | ---- | ------------------------------------ |
| `Components`                               | List | Elements that make up the asset.     |
| `ReplacementCosts`                         | List | Cost breakdowns for replacements.    |
| `Contents`, `Notes`, `Images`, `Documents` | List | Additional related items or records. |

---

## Specialized Valuation Objects

Complex objects that support detailed valuation.

| Field                                           | Type   | Required    | Description                          | Example                       |
| ----------------------------------------------- | ------ | ----------- | ------------------------------------ | ----------------------------- |
| `Insurance`, `MarketApproach`, `IncomeApproach` | Object | Conditional | Specific valuation technique inputs. | `Insurance object`            |
| `ValuationMethod`                               | Object | Yes         | Final results of valuation logic.    | `AssetValuationMethod object` |

---

## Customization & Error Tracking

Custom fields and validation feedback.

| Field                | Type       | Description                                  | Example                                  |
| -------------------- | ---------- | -------------------------------------------- | ---------------------------------------- |
| `CustomFields`       | Dictionary | Client-specific extensions to the data.      | `{ "ProjectCode": "P123" }`              |
| `Errors`, `Warnings` | Dictionary | Validation messages generated by the system. | `{ "Reference": "Duplicate reference" }` |

---

## Entity Relationships

How assets connect to other entities in the system.

| Related Entity                                         | Relationship | Description                               |
| ------------------------------------------------------ | ------------ | ----------------------------------------- |
| `AssetClass`, `AssetType`, `AssetSubType`              | Many-to-One  | Define the classification hierarchy.      |
| `Components`                                           | One-to-Many  | Breakdown into smaller parts.             |
| `Client`, `Lease`, `ValuationClass`, `MaintenancePlan` | Mixed        | Links to business context and operations. |

---

## Business Rules

Built-in validation and logic for ensuring asset data quality.

* **Reference must be unique** within a client.
* Asset must be classified (Class → Type → Subtype).
* Valuation policies must not be set to `Undefined` or `NotToBeValued` if asset is to be valued.

**Valuation Readiness (in logic):**

```csharp
AssetClassId != null &&
ValuationPolicy not in [Undefined, NotToBeValued] &&
IsControlledForFinancialPurpose &&
AssetClass.Job != null &&
AssetAssumptions != null &&
(DecommissionDate == null || DecommissionDate > AssetClass.Job.EffectiveDateOfValuation)
```

---

## Business Usage

### Financial Reporting

Supports:

* Calculation of gross replacement costs
* Fair value tracking
* Disclosure and compliance reporting

### Asset Management

Enables:

* Lifecycle monitoring
* Maintenance planning
* Condition assessment

### Insurance Valuation

Supports:

* Insurance replacement cost
* Debris removal
* Professional services cost estimation

---

## Data Collection Methods

| Method         | Description                                       |
| -------------- | ------------------------------------------------- |
| Manual Entry   | Via web UI for small sets or ad hoc updates.      |
| Bulk Import    | CSV/Excel template upload for mass updates.       |
| Mobile Capture | App-based entry from field inspection teams.      |
| System Derived | Calculations and lookups based on business logic. |

---

## Versioning Notes

| Version | Enhancements                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| v3      | - Enhanced GPS support<br />- Custom fields flexibility<br />- Better validation error tracking<br />- More detailed MaintenancePlans |

---

## Related Docs

* [Asset Model Documentation](../Models/Asset.md)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow.md)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
* [AssetController API Reference](../API/AssetController.md)
