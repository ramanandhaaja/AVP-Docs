# Insurance Valuation Report Documentation

## Quick Reference

| Item               | Description                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| **Report Name**    | Insurance Valuation Report                                                            |
| **Output Format**  | Excel (.xlsx)                                                                         |
| **Report Purpose** | Provides comprehensive replacement and indemnity value estimates for insurable assets |
| **Endpoint**       | `GET /api/reports/insurance-valuation`                                                |
| **Query Handler**  | `GetInsuranceValuationReportsQuery.cs`                                                |

---

## Purpose

The **Insurance Valuation Report** supports insurance planning by providing accurate estimates for both **replacement cost** and **indemnity value** per asset and component. It's used by valuers, asset managers, and finance teams to:

* Inform insurance policies and renewal discussions
* Assess coverage levels across asset classes
* Track insurance-related assumptions and methodologies

---

## Parameters & Inputs

| Parameter       | Type            | Required | Description                       |
| --------------- | --------------- | -------- | --------------------------------- |
| `jobId`         | Integer         | ✅ Yes    | The ID of the valuation job       |
| `assetClassIds` | List (optional) | ❌ No     | Filters report by asset class(es) |
| `format`        | String          | ❌ No     | Output format (Excel, PDF, CSV)   |

---

## Report Sections

### 1. **Summary Dashboard**

* Totals by asset class
* Charts of value distribution
* Key statistics on insured value

### 2. **Asset-Level Insurance Values**

* Replacement cost and indemnity value per asset
* Asset metadata (name, class, location, insurance category)
* Recommended coverage

### 3. **Component-Level Insurance Values** *(Optional)*

* Breakdowns by individual components (e.g., roof, HVAC)
* Component-specific costs and depreciation

### 4. **Insurance Assumptions**

* Methods and cost factors used in the report
* Exclusions, contingencies, escalation, and overhead details

---

## Key Data Columns (Asset-Level Sheet)

| Column                    | Description                      |
| ------------------------- | -------------------------------- |
| `Asset ID`                | Unique identifier                |
| `Asset Name`              | Descriptive label                |
| `Asset Class`             | Classification group             |
| `Location`                | Asset's physical location        |
| `Full Replacement Value`  | Total cost to rebuild or replace |
| `Indemnity Value`         | Adjusted for age/depreciation    |
| `Insurance Category`      | Building, Contents, etc.         |
| `Coverage Recommendation` | Suggested coverage type          |
| `Notes`                   | Assumptions or exceptions        |

---

## Valuation Methodologies

### Replacement Cost

| Method          | Description                                        |
| --------------- | -------------------------------------------------- |
| Direct Cost     | Includes professional fees, escalation, demolition |
| Component-Based | Aggregated component-level costs + overheads       |

### Indemnity Value

| Consideration       | Description                                 |
| ------------------- | ------------------------------------------- |
| Depreciation        | Based on age, remaining life, and condition |
| Obsolescence        | Applied to tech/specialized assets          |
| Heritage Adjustment | Alternate rules for heritage items          |

---

## Generation Workflow

### Process Stages

1. **Data Load**: Retrieve asset/component data and assumptions
2. **Filtering**: Apply job and class-based constraints
3. **Calculation**:

   * Compute replacement and indemnity values
   * Group and summarize results
4. **Excel Report Generation**:

   * Format worksheets with data and visuals
   * Insert formulas and headers
5. **Delivery**:

   * Serve via API or file container

---

## Business Use Cases

| Use Case                | Details                                        |
| ----------------------- | ---------------------------------------------- |
| Insurance Policy Review | Compare coverage with actual asset risk        |
| Renewal Planning        | Forecast replacement value inflation           |
| Audit & Compliance      | Ensure transparency in insured value estimates |

> "To protect against accidental loss, entities insure assets using either full replacement or indemnity value."

---

## Implementation Details

### Query Handler

* Loads assets/components
* Applies valuation assumptions
* Triggers Excel file builder

### Excel Builder

* Formats headers, values, and totals
* Embeds AVP branding and charts
* Streams large files to reduce memory usage

---

## Report Variants

| Variant          | Description                           |
| ---------------- | ------------------------------------- |
| Standard Report  | Full asset-level + summary dashboard  |
| Summary Report   | Totals only, visual-heavy overview    |
| Component Detail | In-depth by component, includes notes |

---

## Usage Options

### Web UI

1. Navigate to **Reports > Insurance Valuation**
2. Select job and asset filters
3. Choose format (Excel recommended)
4. Click **Generate Report**

### API

```http
GET /api/reports/insurance-valuation?jobId=123&assetClassIds=1,2,3&format=xlsx
```

### CLI

```bash
AVP.CLI.exe report insurance-valuation --job 123 --format xlsx
```

---

## Performance Considerations

| Tip               | Detail                               |
| ----------------- | ------------------------------------ |
| Use asset filters | Reduce rows and improve speed        |
| Generate off-peak | Minimize impact for large jobs       |
| Streamed output   | Avoids memory issues during download |

---

## Related Docs

* [General Valuation Report](GeneralValuationReport.md)
* [Component Model](Component.md)
* [Insurance Assumptions](../Models/Insurance.md)
* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
