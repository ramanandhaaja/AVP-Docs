# General Valuation Report Documentation

## Quick Reference

| Item                | Description                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **File Path**       | `/Application/Reports/Queries/GetGeneralValuationReport/`                                                                 |
| **Report Type**     | Excel (multi-tab workbook)                                                                                                |
| **Primary Purpose** | Consolidated report containing all valuation data for a job, including summaries, components, and approach-specific views |

---

## Purpose

The **General Valuation Report** provides a unified, multi-dimensional valuation overview for all assets included in a valuation job. This Excel-based report is designed to support internal reviews, regulatory reporting, financial disclosures, and asset lifecycle planning.

---

## Key Attributes

| Attribute             | Description                                    |
| --------------------- | ---------------------------------------------- |
| **Report Generator**  | `GetGeneralValuationReportsQueryHandler`       |
| **Download Endpoint** | `ReportsController.GetGeneralValuationReports` |
| **Output Format**     | `.xlsx` Excel file                             |
| **Branding**          | Includes client logo and formatting            |

---

## Report Parameters

| Parameter    | Type    | Required   | Default | Description                        |
| ------------ | ------- | ---------- | ------- | ---------------------------------- |
| `JobId`      | Integer | ✅ Yes      | –       | Valuation job ID                   |
| `AssetClass` | String  | ❌ Optional | "All"   | Filters report output to one class |

---

## Primary Data Sources

* `AssetValuations`
* `ComponentValuations`
* `InsuranceValuations`
* `MarketApproachValuations`
* `IncomeApproachValuations`
* `AssetReplacementCostValuations`
* `ComponentReplacementCostValuations`

### Supporting Context:

* `Job`, `Client`, `Subscription`, `Assets`, `Component`

---

## Excel Worksheet Sections

| Worksheet Name                        | Description                 | Data Source                        |
| ------------------------------------- | --------------------------- | ---------------------------------- |
| **Asset Class Report**                | Summary totals by class     | AssetValuations (grouped)          |
| **Asset Level Report**                | Valuation details per asset | AssetValuations                    |
| **Component Level Report**            | Per-component breakdown     | ComponentValuations                |
| **Cost Apportionment Report**         | Replacement cost by asset   | AssetReplacementCostValuations     |
| **Cost Direct Cost Report**           | Direct cost per component   | ComponentReplacementCostValuations |
| **Insurance Valuation Report**        | Insurance values summary    | InsuranceValuations                |
| **Contents Insurance Summary Report** | Total contents insurance    | Asset.Contents                     |
| **Contents Insurance Detail Report**  | Line-by-line contents       | Asset.Contents items               |
| **Market Approach Report**            | Market-based valuations     | MarketApproachValuations           |
| **Income Approach Report**            | Income-based valuations     | IncomeApproachValuations           |
| **Income Approach Items**             | Income streams detail       | IncomeApproachItemValuations       |

---

## Calculations & Business Logic

* **Accumulated Depreciation** = `Gross - CurrentValue`
* **Depreciation Rate** = `DepreciationExpense / Gross`
* **Previous vs Current Comparisons** for:

  * Gross Value
  * Current Value
  * Depreciation
* **Insurance Adjustments**: Fees, debris removal, escalation
* **Market & Income Variants**: Adjust based on selected method type

---

## Business Rules & Filters

* Only assets with `IsControlledForFinancialPurpose = true` are included in most reports
* Insurance report filters by `Coverage` (e.g., `Full`, `Indemnity`)
* Valuation policy filters may exclude "NotToBeValued" or "Undefined" policies

---

## Business Use Cases

### Financial Reporting

* IFRS/AASB 13: Fair Value
* IFRS/AASB 116: Property, Plant & Equipment
* Local council reporting frameworks

### Asset Management

* Asset replacement planning
* Lifecycle cost forecasting
* Portfolio renewal prioritization

### Audit & Compliance

* Audit trail of current and prior valuations
* Transparent assumptions and calculations

---

## Usage Instructions

1. Go to **Reports** in Asset Valuer Pro
2. Select **General Valuation Report**
3. Input `JobId` and optionally filter by `AssetClass`
4. Click **Generate** and download Excel output

---

## Performance Considerations

| Tip                  | Description                               |
| -------------------- | ----------------------------------------- |
| Generate in off-peak | Reduces load when job has 10k+ assets     |
| Use filters          | Limit by asset class to manage size       |
| Server timeout       | Adjust if report takes longer to generate |

---

## Related Documentation

* [Asset Level Report](AssetLevelReport)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Asset Model](../Models/Asset)
* [Income & Market Valuation Workflows](../Workflows/Valuation_Process_Workflow)
