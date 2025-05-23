# Report Generators Inventory

## Purpose

This document provides a comprehensive inventory of all **report generators** in the Asset Valuer Pro (AVP) system. These generators follow the **CQRS (Command Query Responsibility Segregation)** pattern and are implemented as query handlers.

The goal is to:

* Help developers navigate and maintain report logic
* Support documentation and testing efforts
* Aid in understanding how reports are structured and where they reside

---

## Valuation Reports

Reports that summarize or detail valuation results.

| Report Generator                        | Path                                                             | Description                                              |
| --------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------- |
| `GetSummaryReportQuery`                 | `/Application/Reports/Queries/GetSummaryReport/`                 | Produces a concise summary of valuation outputs          |
| `GetMethodologyReportQuery`             | `/Application/Reports/Queries/GetMethodologyReport/`             | Documents the valuation methodology and assumptions used |
| `GetGeneralValuationReportQuery`        | `/Application/Reports/Queries/GetGeneralValuationReport/`        | Comprehensive valuation output (multi-tab Excel)         |
| `GetInsuranceValuationReportQuery`      | `/Application/Reports/Queries/GetInsuranceValuationReport/`      | Focuses on replacement/indemnity values for insurance    |
| `GetChangesReportQuery`                 | `/Application/Reports/Queries/GetChangesReport/`                 | Compares changes between two valuation jobs              |
| `GetMovementsReconciliationReportQuery` | `/Application/Reports/Queries/GetMovementsReconciliationReport/` | Tracks movements across reporting periods                |

---

## Analysis Reports

Used for analytical slicing of valuation and asset data.

| Report Generator                      | Path                                                           | Description                                       |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------- |
| `GetDetailedAnalysisReportQuery`      | `/Application/Reports/Queries/GetDetailedAnalysisReport/`      | Deep-dive into asset groups and conditions        |
| `GetStratificationSummaryReportQuery` | `/Application/Reports/Queries/GetStratificationSummaryReport/` | Groups assets by category (e.g., type, location)  |
| `GetDistributionByValueReportQuery`   | `/Application/Reports/Queries/GetDistributionByValueReport/`   | Distribution of assets by financial value         |
| `GetDistributionByScoreReportQuery`   | `/Application/Reports/Queries/GetDistributionByScoreReport/`   | Distribution of assets by condition score         |
| `GetDepreciationAnalysisReportQuery`  | `/Application/Reports/Queries/GetDepreciationAnalysisReport/`  | Patterns and trends in depreciation data          |
| `GetModifiedAssumptionsReportQuery`   | `/Application/Reports/Queries/GetModifiedAssumptionsReport/`   | Shows assets with changed assumptions and impacts |

---

## Asset Management Reports

Forecasting and planning tools for infrastructure and renewal management.

| Report Generator                    | Path                                                         | Description                                          |
| ----------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| `GetMaintenancePlanReportQuery`     | `/Application/Reports/Queries/GetMaintenancePlanReport/`     | Builds multi-year maintenance plans                  |
| `GetRenewalCostReportQuery`         | `/Application/Reports/Queries/GetRenewalCostReport/`         | Projects renewal costs over time                     |
| `GetRenewalsScheduleQuery`          | `/Application/Reports/Queries/GetRenewalsSchedule/`          | Timeline of expected asset renewals                  |
| `GetCostToBringToSatisfactoryQuery` | `/Application/Reports/Queries/GetCostToBringToSatisfactory/` | Cost to bring each asset/component to a usable state |
| `GetCashFlowProjectionsQuery`       | `/Application/Reports/Queries/GetCashFlowProjections/`       | Projects future financial commitments                |

---

## Report Components (Sub-Reports)

Reusable components for larger composite reports.

| Component                       | Path                                                     | Purpose                                                    |
| ------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------- |
| `GetMethodologySubReportsQuery` | `/Application/Reports/Queries/GetMethodologySubReports/` | Fetches assumptions, indices, and profiles for methodology |

---

## Output Formats Supported

Asset Valuer Pro reports can be delivered in various formats based on user needs:

1. **Excel (.xlsx)** — Most common, supports multi-tab, formulas, charts
2. **PDF (.pdf)** — Print-ready, consistent formatting
3. **Word (.docx)** — Editable, template-driven documents (e.g., methodology)
4. **CSV (.csv)** — Raw export for downstream data ingestion

---

## Priority Reports (For Documentation & Development Focus)

Based on business value and system complexity, the following reports should be prioritized for documentation, testing, and customization:

1. **Summary Valuation Report** – Core output used by clients and executives
2. **Methodology Report** – Audit-critical explanation of valuation logic
3. **Changes Report** – Comparison of valuations across timeframes
4. **Renewal Cost Report** – Strategic for capital planning
5. **Stratification Summary Report** – Used for high-level asset group analysis

---

## Related Documentation

* [General Valuation Report](GeneralValuationReport.md)
* [Methodology Report](MethodologyReport.md)
* [Insurance Valuation Report](InsuranceValuationReport.md)
* [Renewal Cost Report](RenewalCostReport.md)
* [Valuation Fields Dictionary](../Dictionaries/Valuation_Fields_Dictionary.md)
