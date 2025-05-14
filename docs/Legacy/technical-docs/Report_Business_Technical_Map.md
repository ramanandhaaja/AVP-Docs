# 📄 Report Business-Technical Mapping

> **⚠️ Important Note:**  
> This documentation maps business reports to their technical implementations, but the actual source code is maintained in a separate repository and is not included in this documentation repository.

## 📋 Overview
This document maps the business reports described in the legacy documentation to their technical implementations in the Asset Valuer Pro codebase. It serves as a reference for developers working on report-related features.

## 📊 Financial Reporting Valuation Reports

| Business Report | Technical Implementation | Description |
|-----------------|--------------------------|-------------|
| Financial reporting valuation | `GeneralValuationReport.cs` | Comprehensive valuation data matching IFRS/IPSAS requirements |
| Movements reconciliation | `MovementsReconciliationReport.cs` | Tracks changes in asset values between valuation periods |
| Valuation measurement disclosures | `ValuationDisclosureReport.cs` | Generates required financial statement disclosures |

## 📊 Insurance Valuation Reports

| Business Report | Technical Implementation | Description |
|-----------------|--------------------------|-------------|
| Full replacement value | `InsuranceValuationReport.cs` | Calculates replacement cost for insurance purposes |
| Indemnity value | `IndemnityValuationReport.cs` | Calculates current value for indemnity insurance |

## 📊 Asset Management Reports

| Business Report | Technical Implementation | Description |
|-----------------|--------------------------|-------------|
| Lifecycle optimization (EasySAM) | `LifecycleOptimizationReport.cs` | Strategic asset management planning tool |
| Projected renewals | `RenewalCostReport.cs` | Projects when assets will need replacement based on condition |
| Cost to bring to satisfactory | `CostToBringToSatisfactoryReport.cs` | Calculates costs to restore assets to satisfactory condition |
| Portfolio condition analysis | `DistributionByScoreReport.cs` | Analyzes asset portfolio by condition scores |

## 📊 Field Data Collection Reports

| Business Report | Technical Implementation | Description |
|-----------------|--------------------------|-------------|
| Inspection progress | `InspectionProgressReport.cs` | Tracks status of field data collection |
| Missing data | `MissingDataReport.cs` | Identifies assets with incomplete information |

## 📊 Report Generation Process

According to the legacy documentation, the report generation process follows these steps:

1. User completes data collection and runs the calculation refresh
2. User runs validations to identify any mistakes or missing data
3. User generates specific reports based on client requirements
4. Generated reports are saved in the 'Reports File Container' for future access

This process is implemented technically through:
- `ReportsController.cs` - Handles report generation requests
- `ReportValidationService.cs` - Pre-checks data quality before report generation
- `BlobStorageService.cs` - Stores generated report files

## 📋 Technical Implementation Details

### 📊 Report Generation Architecture

Reports in Asset Valuer Pro follow a common architecture pattern:

1. **Report Controllers** (`ReportsController.cs`) - Handle HTTP requests for reports
2. **Report Commands/Queries** (`GenerateReportCommand.cs`) - Define parameters for report generation
3. **Report Generators** (`ReportGenerator.cs`) - Core logic to generate reports
4. **Report Templates** - Excel templates used for output formatting
5. **Storage Services** - Save generated reports in blob storage

### 📊 Report Format Types

The system supports multiple report formats:
- Excel spreadsheets (.xlsx)
- PDF documents
- CSV exports
- Text-based reports

### 📋 Integration with Business Processes

The reports directly support these business processes from the legacy documentation:
- Financial reporting and audit requirements
- Asset management planning
- Insurance coverage determination
- Valuation methodology documentation

### 📋 Output Examples

Example of financial valuation report structure:
```
1. Executive Summary
2. Valuation Methodology
3. Valuation Results
   - By Asset Class
   - By Asset Type
   - Detailed Asset Listing
4. Assumptions Applied
5. Significant Changes from Prior Valuations
```

Example of renewal cost projection report structure:
```
1. Summary of Projected Costs
2. Renewal Timeline
   - Short-term (1-5 years)
   - Medium-term (6-10 years)
   - Long-term (11+ years)
3. Cost Breakdown by Asset Class
4. Critical Assets Requiring Attention
```
