# Methodology Report Documentation

## Quick Reference

| Item                | Description                                                                           |
| ------------------- | ------------------------------------------------------------------------------------- |
| **Report Name**     | Methodology Report                                                                    |
| **Format**          | Word Document (.docx)                                                                 |
| **Templates Used**  | `Methodology Report - Asset Class`, `Methodology Report - Asset Class Draft`          |
| **Primary Purpose** | Documents all valuation methodologies, rules, and assumptions applied per asset class |
| **Endpoint**        | `GET /api/reports/methodology`                                                        |
| **Query Handler**   | `GetMethodologyReportQuery.cs`                                                        |

---

## Purpose

The **Methodology Report** is a regulatory-compliant, audit-ready document that transparently outlines the valuation process, inputs, and logic used for asset valuations within a specific job. It’s tailored to each asset class and includes assumptions, profiles, indices, and other governing parameters.

---

## Parameters

| Parameter    | Type    | Required | Default | Description                                         |
| ------------ | ------- | -------- | ------- | --------------------------------------------------- |
| `JobId`      | Integer | ✅ Yes    | –       | ID of the valuation job                             |
| `AssetClass` | String  | ❌ No     | All     | If provided, report focuses on one asset class only |

---

## Primary Data Sources

* `AssetAssumptions`
* `ComponentAssumptions`
* `ValuationProfiles` & `ValuationProfileScores`
* `ValuationProfileRules`
* `InsuranceAssumptions`
* `AssetValuations`
* `Job`, `Client`, `Subscription`

---

## Report Structure

| Section                       | Description                                         |
| ----------------------------- | --------------------------------------------------- |
| **Cover Page**                | Includes job title, entity, date, and report status |
| **Portfolio Summary**         | Overview of asset count and valuation by type       |
| **Valuation Class Breakdown** | Financial valuation class summaries                 |
| **Apportionment Unit Rates**  | Unit costs for cost-apportionment method            |
| **Direct Cost Unit Rates**    | Per-component unit rates for direct valuation       |
| **Indices**                   | Historical cost indexation multipliers              |
| **Valuation Profiles**        | Lists profiles linked via rules to asset types      |
| **Profile Scores**            | Maps consumption scores to RSP and RUL values       |
| **Investment Assets**         | Documents treatment of investment-class assets      |
| **Held-for-Sale Assets**      | Special handling and exclusion logic                |
| **Not Highest & Best Use**    | Lists assets with valuation caveats                 |
| **Component Assumptions**     | Detailed assumptions by component subtype           |
| **Insurance Assumptions**     | Escalation, professional fees, and coverage rules   |

---

## Business Rules & Logic

| Rule            | Description                                          |
| --------------- | ---------------------------------------------------- |
| Draft vs Final  | Drafts include watermark, header difference          |
| IFRS/IPSAS      | Template varies based on accounting regime           |
| Valuation Scope | Only includes assumptions tied to assets in job      |
| Profile Linking | AssetTypes link to ValuationProfiles via rules       |
| Disclosure      | Special sections for Investment, Held-for-Sale, etc. |

---

## Output Format & Delivery

| Output         | Description                                              |
| -------------- | -------------------------------------------------------- |
| `.docx` (Word) | Default format, includes branding, tables, and sections  |
| `.zip` archive | If `AssetClass = All`, multiple class reports are zipped |

* Templates apply consistent branding, headers, and watermarking.
* Client logos are embedded in headers or cover page.

---

## Implementation Details

| Component                   | Function                                     |
| --------------------------- | -------------------------------------------- |
| `IDocumentBuilderService`   | Template engine to populate report structure |
| `ReportsController.cs`      | Endpoint handler for Word file generation    |
| `GetMethodologyReportQuery` | Core query and data assembler                |

---

## Business Value

| Use Case            | Impact                                               |
| ------------------- | ---------------------------------------------------- |
| Audit Evidence      | Meets audit standards for input transparency         |
| Disclosure Support  | Aligns with IFRS 13, IPSAS 16, and other disclosures |
| Valuation Review    | Allows peer reviewers to inspect methodology         |
| Stakeholder Reports | Provides context for non-technical executives        |

---

## Usage Instructions

### From Web UI

1. Navigate to **Reports > Methodology Report**
2. Select Job and Asset Class
3. Click **Generate Report**
4. Download `.docx` or `.zip`

### From API

```http
GET /api/reports/methodology?jobId=456&assetClass=Buildings
```

---

## Related Documentation

* [Asset Assumptions](AssetAssumptions.md)
* [Component Assumptions](ComponentAssumptions.md)
* [Valuation Profiles](Valuation_Fields_Dictionary.md)
* [Insurance Assumptions](Insurance.md)
* [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow.md)
