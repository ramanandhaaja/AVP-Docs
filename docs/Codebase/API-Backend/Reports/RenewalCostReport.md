# Renewal Cost Report Documentation

## Quick Reference

| Attribute         | Description                                                                             |
| ----------------- | --------------------------------------------------------------------------------------- |
| **Report Name**   | Renewal Cost Report                                                                     |
| **Purpose**       | Projects future renewal costs based on asset condition, useful life, and valuation data |
| **Format**        | Excel (.xlsx)                                                                           |
| **Query Handler** | `GetRenewalCostReportQuery.cs`                                                          |
| **API Endpoint**  | `GET /api/reports/renewal-cost`                                                         |

---

## Purpose

The **Renewal Cost Report** is a forward-looking asset planning tool that forecasts capital renewal costs over a defined period (default 20 years). It helps organizations:

* Predict future renewal and replacement costs
* Optimize capital expenditure planning
* Prioritize assets based on risk and remaining service potential

This report is especially useful for strategic planning, budget justification, and aligning renewal needs with funding availability.

---

## Report Inputs

| Parameter        | Type    | Required | Description                     |
| ---------------- | ------- | -------- | ------------------------------- |
| `jobId`          | Integer | ✅ Yes    | The valuation job ID            |
| `assetClassIds`  | List    | ❌ No     | Filters by asset class          |
| `yearsToProject` | Integer | ❌ No     | Default is 20 years             |
| `format`         | String  | ❌ No     | Output format (Excel, PDF, CSV) |

---

## Data Sources

* `Asset`
* `Component`
* `AssetValuation`
* `ComponentValuation`
* `ValuationProfile`

---

## Report Sections

### 1. **Executive Summary**

* Total projected renewal costs
* Year-by-year breakdown
* Renewal priority categorization
* Charts summarizing trends

### 2. **Renewal Projections**

* Year-by-year renewal costs
* Categorized by asset class/type
* Includes inflation adjustment (if configured)

### 3. **Asset Details**

* Per-asset condition, useful life, and renewal year
* Cost projection per renewal event

### 4. **Component Details** (if component-based)

* Detailed renewal forecasts for components
* Suggested bundling of components

---

## Key Fields (Projection Sheet)

| Column                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `Asset ID`               | Unique asset identifier                         |
| `Asset Name`             | Descriptive title                               |
| `Asset Class`            | Classification group                            |
| `Current Condition`      | Numerical condition score                       |
| `Remaining Useful Life`  | Calculated RUL in years                         |
| `Replacement Cost`       | Present-day cost to replace                     |
| `Projected Renewal Year` | Year asset will need replacement                |
| `Renewal Cost`           | Projected cost at renewal date                  |
| `Renewal Priority`       | Assigned priority (Critical, High, Medium, Low) |

---

## Methodology

### Renewal Timing

* **Condition-Based**: Uses condition score + profile mapping to estimate remaining life
* **Age-Based**: Uses acquisition date + standard useful life
* **Manual Override**: Allows planners to specify known renewal years

### Renewal Cost

* Based on **Replacement Cost** from current valuation
* Optional inflation/contingency adjustments
* Allows technology uplift/upgrade cost factors

---

## Business Context

The report aligns with strategic asset planning needs such as:

* Long-term infrastructure planning (10–50 years)
* 10-year maintenance forecasting (legacy feature extension)
* Capital budget modeling by class or portfolio

> "Projected renewals report" — as referenced in legacy documentation — is a key output of this tool.

---

## Report Generation Workflow

1. **Load Data**: Asset + valuation + component + profile data
2. **Calculate Renewals**: Estimate year, cost, and group by priority
3. **Aggregate**: Summarize by year and asset class
4. **Build Excel File**:

   * Multi-tab workbook
   * Charts and pivot tables
   * Styled sheets for export and printing

---

## Report Variants

| Variant             | Description                                    |
| ------------------- | ---------------------------------------------- |
| **Standard**        | 20-year projection, class/type summary         |
| **Long-Range**      | 30–50 year planning horizon                    |
| **Short-Term**      | 1–5 year detailed forecast for budgeting       |
| **Component-Based** | Breakout of component renewals (if applicable) |

---

## Usage Options

### Web UI

1. Navigate to **Reports > Asset Management > Renewal Cost**
2. Select job, timeframe, asset class filters
3. Click **Generate Report**

### API

```http
GET /api/reports/renewal-cost?jobId=123&yearsToProject=20&assetClassIds=1,2&format=xlsx
```

### CLI

```bash
AVP.CLI.exe report renewal-cost --job 123 --years 20 --format xlsx
```

---

## Performance Tips

| Tip                     | Benefit                                    |
| ----------------------- | ------------------------------------------ |
| Use asset class filters | Reduce data size for faster generation     |
| Generate off-peak       | Avoid server timeouts in large portfolios  |
| Skip charts for drafts  | Disable visual elements to speed up builds |

---

## Related Docs

* [General Valuation Report](GeneralValuationReport.md)
* [Asset Valuation Model](../Models/AssetValuation.md)
* [Valuation Profiles](Valuation_Fields_Dictionary.md)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
