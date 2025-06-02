# Summary Report Documentation

## Quick Reference

| Attribute            | Description                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| **Report Name**      | Summary Report                                                                     |
| **Purpose**          | Provides an executive summary of asset valuations with visuals and comparison data |
| **Format**           | Word Document (.docx)                                                              |
| **Report Generator** | `GetSummaryReportQuery.cs`                                                         |
| **API Endpoint**     | `GET /api/reports/summary`                                                         |

---

## Purpose

The **Summary Report** offers a high-level overview of valuation results in a **professionally formatted Word document**. It uses tables and charts to present key insights on asset condition, valuation method distribution, inspection status, and historical comparisons.

This report is designed for senior stakeholders such as:

* Executives
* Finance managers
* Auditors

---

## Parameters & Filters

| Parameter    | Type    | Required | Default | Description                    |
| ------------ | ------- | -------- | ------- | ------------------------------ |
| `jobId`      | Integer | ✅ Yes    | –       | ID of the valuation job        |
| `assetClass` | String  | ❌ No     | "All"   | Optional filter by asset class |

---

## Data Sources

* `AssetValuations`
* `Job`
* `Client`
* `Group`
* `Subscription`

---

## Key Report Sections

| Section                               | Description                                             |
| ------------------------------------- | ------------------------------------------------------- |
| **Cover Page**                        | Includes logo, entity name, date, and job details       |
| **Introduction**                      | Overview of valuation purpose, methods, and job summary |
| **Summary by Value**                  | Totals by asset class (Gross, Current, Depreciation)    |
| **Valuation Approach Summary**        | Assets grouped by method (Cost, Market, Income)         |
| **Change in Gross/Fair/Depreciation** | Year-on-year comparison to previous valuation           |
| **Asset History**                     | Breakdown by new, old, and found assets                 |
| **Inspections**                       | Status of inspection (Pending, Complete, Incomplete)    |
| **Stratification**                    | Charts by value bands and asset type/class              |

---

## Calculations

* **Gross vs Current Value**: Change metrics
* **Depreciation Expense**: Summed across classes
* **Valuation Approach Totals**: Cost vs Market vs Income
* **Stratification Buckets**: Value ranges (e.g., \$0–\$50K)

---

## Output Format

| Format  | Description                                                         |
| ------- | ------------------------------------------------------------------- |
| `.docx` | Word document with branding, tables, charts, and watermark if draft |

Templates support:

* Table of contents
* Auto-calculated figures
* Dynamic chart embedding

---

## Delivery

| Method | Description                                               |
| ------ | --------------------------------------------------------- |
| Web UI | Download via **Reports > Summary Report** UI              |
| API    | `GET /api/reports/summary?jobId=123&assetClass=Buildings` |

---

## Business Rules

* Draft watermark appears if job is not marked as final
* Asset classes/types determine stratification groupings
* Chart styles vary by data type (bar, pie, line)
* Excludes assets with `ValuationPolicy = NotToBeValued`

---

## Business Use Cases

### 1. Executive Briefings

* Communicates results visually to senior stakeholders
* Summarizes asset values by strategy or class

### 2. Comparative Analysis

* Highlights value changes across periods
* Supports board reporting and financial disclosures

### 3. Portfolio Review

* Shows distribution and concentration of asset values
* Helps detect valuation anomalies or gaps

---

## Customization Options

| Option               | Description                                              |
| -------------------- | -------------------------------------------------------- |
| Chart Types          | Modify style (bar, pie, line) based on client preference |
| Classification Level | Toggle between class, type, or both                      |
| Metrics              | Add custom KPIs or business-specific fields              |
| Branding             | Adjust logo, colors, and header formats per client       |

---

## Related Docs

* [General Valuation Report](GeneralValuationReport)
* [Asset Valuation Model](../Models/AssetValuation)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Methodology Report](MethodologyReport)
* [Reports Inventory](Reports_Inventory)
