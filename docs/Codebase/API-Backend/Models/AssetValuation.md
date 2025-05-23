# Asset Valuation Model Documentation

## Quick Reference

| Item               | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| **File Path**      | `/Domain/Entities/AssetValuation.cs`                                  |
| **Database Table** | `AssetValuations`                                                     |
| **Entity Role**    | Stores calculated valuation outputs for an asset under a specific job |

## Key Fields

| Field              | Type     | Description                                 |
| ------------------ | -------- | ------------------------------------------- |
| `AssetValuationId` | Guid     | Unique identifier for this valuation record |
| `AssetId`          | Guid     | Links to the associated asset               |
| `JobId`            | Guid     | Links to the valuation job context          |
| `EffectiveDate`    | DateTime | The valuation's effective reporting date    |
| `ValuationMethod`  | Enum     | Approach used (Cost, Market, Income)        |

---

## Financial Metrics

These fields capture the asset's financial performance and valuation result.

| Field                     | Type    | Description                            |
| ------------------------- | ------- | -------------------------------------- |
| `CurrentValue`            | Decimal | Present fair value of the asset        |
| `AccumulatedDepreciation` | Decimal | Total depreciation applied to date     |
| `ReplacementCost`         | Decimal | Estimated full replacement cost        |
| `ResidualValue`           | Decimal | Value expected at end of asset life    |
| `CarryingAmount`          | Decimal | Net book value for financial reporting |
| `DepreciableAmount`       | Decimal | Portion subject to depreciation        |
| `AnnualDepreciation`      | Decimal | Yearly depreciation charge             |
| `RevaluationReserve`      | Decimal | Revaluation surplus (if applicable)    |
| `RemainingUsefulLife`     | Decimal | Remaining lifespan in years            |

---

## Insurance Metrics

| Field               | Type    | Description                                 |
| ------------------- | ------- | ------------------------------------------- |
| `InsuranceValue`    | Decimal | Total insured value                         |
| `IndemnityValue`    | Decimal | Current value for indemnity-based insurance |
| `InsuranceCategory` | Enum    | Type of insurance applied                   |

---

## Asset Management Metrics

| Field                       | Type      | Description                                        |
| --------------------------- | --------- | -------------------------------------------------- |
| `ConditionScore`            | Decimal   | Physical condition rating (e.g., 1–5)              |
| `RemainingServicePotential` | Decimal   | Estimated service life remaining (%)               |
| `ProjectedRenewalDate`      | DateTime? | Expected renewal or replacement date               |
| `CostToBringToSatisfactory` | Decimal   | Estimated remediation cost to acceptable condition |

---

## Relationships

| Related Entity        | Type        | Description                                 |
| --------------------- | ----------- | ------------------------------------------- |
| `Asset`               | Many-to-One | The asset being valued                      |
| `Job`                 | Many-to-One | Valuation engagement this record belongs to |
| `ComponentValuations` | One-to-Many | Breakdown valuations by component           |

---

## Usage in the Valuation Lifecycle

### 1. **Calculation Phase**

AssetValuation records are created/updated when the valuer initiates calculation processes in a valuation job.

> "Once all data is populated the valuer refreshes all the calculations..."

### 2. **Reporting Phase**

Values stored in AssetValuation are used in:

* Financial reports (e.g., balance sheet)
* Insurance summaries
* Depreciation schedules

> "...used to produce various reports covering financial reporting and insurance."

### 3. **Archiving & Audit Trail**

Completed valuations are preserved with historical context when the job is archived.

> "Job status is changed to 'archived'... data recorded as 'previous years' figures."

---

## Valuation Methodologies

| Method           | Description                                         |
| ---------------- | --------------------------------------------------- |
| `CostApproach`   | Based on replacement cost adjusted for depreciation |
| `MarketApproach` | Based on recent comparable sales data               |
| `IncomeApproach` | Based on capitalized future income streams          |

The selected method governs how financial fields like `CurrentValue` and `DepreciableAmount` are calculated.

---

## Business Context

The `AssetValuation` model provides core values required for:

* IFRS & IPSAS compliance
* Asset management planning
* Insurance benchmarking
* Capital budgeting & lifecycle cost tracking

It is referenced by:

* `AssetController` for recalculation workflows
* `ReportsController` for generating output
* Valuation Job workflows for structured processing

---

## Technical Design

| Property       | Value                 |
| -------------- | --------------------- |
| **Namespace**  | `AVP.Domain.Entities` |
| **Base Class** | `AuditableEntity`     |

---

## Performance Considerations

* AssetValuation records are only created when calculations are explicitly run
* Recommended query filters: `JobId`, `AssetId`, `EffectiveDate`
* Ensure proper indexing on `AssetId`, `JobId`, `EffectiveDate`

> **Tip:** Batch querying by job and projecting only key financial fields improves report generation efficiency.

---

## Related Documentation

* [Asset Model](Asset.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
* [Job Lifecycle Documentation](../Workflows/Valuation_Process_Workflow.md)
* [Insurance Assumptions](../Models/Insurance.md)
