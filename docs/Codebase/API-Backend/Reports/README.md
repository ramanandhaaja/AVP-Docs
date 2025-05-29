# Asset Valuer Pro – Reports Documentation

> **Important Note:**
> This directory provides documentation for report generators within the Asset Valuer Pro system. It does not contain the actual report generation source code, which is maintained in a separate internal repository.

---

## What’s in This Directory?

This documentation set describes how various reports are produced and used in Asset Valuer Pro. These reports are critical for:

* Financial reporting (IFRS, IPSAS compliance)
* Asset lifecycle and renewal planning
* Valuation documentation and audit evidence
* Insurance valuation and coverage support

Each report has its own Markdown file explaining:

* Purpose and business use
* Data sources
* Output formats
* Key fields or sections
* Generation workflow

---

## Key Reports Documented

| Report Name                                               | Description                                                                                      |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [General Valuation Report](GeneralValuationReport.md)     | Main valuation output including asset-level, class-level, and method-specific breakdowns         |
| [Methodology Report](MethodologyReport.md)                | Detailed explanation of valuation assumptions, unit rates, indices, and profiles per asset class |
| [Summary Report](SummaryReport.md)                        | High-level summary for executives, stakeholders, and dashboards                                  |
| [Asset Level Report](AssetLevelReport.md)                 | Detailed report of every asset’s valuation and classification data                               |
| [Insurance Valuation Report](InsuranceValuationReport.md) | Focused on replacement and indemnity values for insurance purposes                               |

For a full inventory of reports, visit the [Reports Inventory](Reports_Inventory.md).

---

## Report Categories

Reports are grouped into logical categories based on their business focus:

### Financial Reporting

* General Valuation Report
* Valuation Class Summary
* Movements Reconciliation

### Asset Management

* Distribution by Score
* Renewal Cost Forecast
* Cost to Bring to Satisfactory Condition

### Insurance Valuation

* Full Replacement Value Report
* Indemnity Value Report

### Documentation

* Methodology Report
* Summary Report
* Assumption Documentation (Asset/Component Assumptions)

---

## Where to Start?

If you're new to the system or unsure which report fits your need:

* Start with the **[General Valuation Report](GeneralValuationReport.md)** for full context
* Refer to **[Methodology Report](MethodologyReport.md)** to understand valuation logic
* Use **[Summary Report](SummaryReport.md)** for executive-level overviews

> Tip: These reports are often consumed together as part of the final deliverable to clients, auditors, or executive teams.

---

## Need Help?

* For technical implementation details, contact the engineering team.
* For report interpretation and business rules, reach out to the valuation or finance documentation teams.

---

## Related Docs

* [Asset Valuation Model](../Models/AssetValuation)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow)
* [Valuation Process Overview](../Workflows/Valuation_Process_Workflow)
