
# Report Business-Technical Mapping

**Important Note:**  
This documentation maps business reports to their technical implementations. The source code itself is maintained in a separate repository and is not included here.

## Overview

This document maps the business reports described in the legacy documentation to their technical implementations in the Asset Valuer Pro system. It serves as a reference for developers working on report-related features and support analysts validating outputs.

## Financial Reporting Valuation Reports

| Business Report                 | Technical Implementation         | Description                                                          |
|--------------------------------|----------------------------------|----------------------------------------------------------------------|
| Financial Reporting Valuation  | `GeneralValuationReport.cs`      | Comprehensive valuation data compliant with IFRS/IPSAS               |
| Movements Reconciliation       | `MovementsReconciliationReport.cs`| Tracks value changes between periods                                |
| Valuation Measurement Disclosures | `ValuationDisclosureReport.cs` | Supports required disclosures in financial statements                |

## Insurance Valuation Reports

| Business Report        | Technical Implementation        | Description                                                  |
|------------------------|---------------------------------|--------------------------------------------------------------|
| Full Replacement Value | `InsuranceValuationReport.cs`   | Calculates full replacement cost for insurance               |
| Indemnity Value        | `IndemnityValuationReport.cs`   | Calculates depreciated value for indemnity insurance         |

## Asset Management Reports

| Business Report                 | Technical Implementation            | Description                                                          |
|--------------------------------|-------------------------------------|----------------------------------------------------------------------|
| Lifecycle Optimization (EasySAM)| `LifecycleOptimizationReport.cs`   | Strategic asset management planning                                  |
| Projected Renewals             | `RenewalCostReport.cs`              | Forecasts asset replacements based on condition                      |
| Cost to Bring to Satisfactory  | `CostToBringToSatisfactoryReport.cs`| Estimates cost to restore assets to standard condition               |
| Portfolio Condition Analysis   | `DistributionByScoreReport.cs`      | Provides analysis of portfolio by asset condition score              |

## Field Data Collection Reports

| Business Report     | Technical Implementation       | Description                                           |
|---------------------|--------------------------------|-------------------------------------------------------|
| Inspection Progress | `InspectionProgressReport.cs`  | Tracks status of field inspections                   |
| Missing Data        | `MissingDataReport.cs`         | Highlights missing or incomplete asset data          |

## Report Generation Process

The end-to-end process for generating reports includes:

1. Completion of data entry and calculation refresh
2. Validation to identify missing or inconsistent data
3. Selection and configuration of report output
4. Report generation and file storage

**Technical Components:**
- `ReportsController.cs` – Manages report request routing
- `ReportValidationService.cs` – Performs pre-generation checks
- `BlobStorageService.cs` – Persists generated files

## Technical Implementation Details

### Report Generation Architecture

Reports follow a modular architecture:

1. **Controller Layer** – `ReportsController.cs`
2. **Command/Query Layer** – e.g., `GenerateReportCommand.cs`
3. **Report Generator** – Encapsulated logic to compile results
4. **Templates** – Excel-based for structured outputs
5. **Storage** – Blob storage used for saving outputs

### Report Format Types

Reports can be exported in multiple formats:
- Excel (.xlsx)
- PDF
- CSV
- Text (for raw data or logs)

## Integration with Business Processes

Reporting in AVP supports several key functions:
- Financial statement preparation
- Insurance risk assessment
- Lifecycle renewal planning
- Valuation audit and disclosure

## Output Structure Examples

**Financial Valuation Report:**
```
1. Executive Summary
2. Valuation Methodology
3. Valuation Results
   - By Asset Class
   - By Asset Type
   - Detailed Listings
4. Assumptions and Inputs
5. Year-on-Year Comparison
```

**Renewal Cost Projection Report:**
```
1. Summary of Projected Costs
2. Renewal Timeline
   - 1–5 Years
   - 6–10 Years
   - 11+ Years
3. Cost Breakdown by Asset Type
4. Critical Items Needing Replacement
```
