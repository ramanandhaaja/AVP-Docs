
# Reporting Services Documentation

## Overview
This document provides comprehensive documentation for Asset Valuer Pro's reporting services, which generate various types of valuation and asset management reports to support financial reporting, insurance valuation, and asset management decision-making.

## QUICK DOCUMENTATION
- **File Path**: 
  - `/Infrastructure/Services/ReportCalculationService.cs` 
  - `/Infrastructure/Services/ReportGenerationService.cs`
- **Primary Purpose**: Transforms asset valuation data into structured reports for financial, insurance, and asset management use
- **Key Methods**:
  - `GenerateValuationReport`
  - `GenerateInsuranceReport`
  - `GenerateAssetManagementReport`
  - `GetSummaryByValueReport`
  - `GetStratificationOfValueSummaryReportChartData`
- **Used By**:
  - Report Query Handlers
  - ReportsController endpoints
- **Related Models**:
  - AssetValuation
  - ComponentValuation
  - InsuranceAssumptions
  - AssetAssumptions
  - ValuationProfileRule

## ReportCalculationService
- **Purpose**: Provides calculation logic for generating structured reports
- **Key Methods**:
  - `GetApportionmentUnitRateReport`
  - `GetDirectCostUnitRateReport`
  - `GetPortfolioReport`
  - `GetHighestAndBestUseReport`
  - `GetIndicesReport`
  - `GetInsuranceAssumptionReport`
  - `GetValuationProfileReport`
  - `GetSummaryByValueReport`
  - `GetStratificationOfValueSummaryReportChartData`

## Business Context
- Aligns reports with IFRS/IPSAS standards
- Provides insurance replacement and indemnity valuations
- Supports asset lifecycle planning, renewals, and condition analysis
- Reports are exportable and reusable

## Report Types and Business Purpose

### Financial Reporting Valuation Reports

| Report Type             | Purpose                                  | Method                         |
|-------------------------|------------------------------------------|--------------------------------|
| General Valuation       | Supports financial statements            | `GetGeneralValuationReportsQuery` |
| Movements Reconciliation| Tracks asset value changes               | `GetMovementsReconciliationReportQuery` |
| Valuation Disclosures   | Produces required financial disclosures  | Internal methods in service    |

### Insurance Valuation Reports

| Report Type        | Purpose                             | Method                         |
|--------------------|-------------------------------------|--------------------------------|
| Full Replacement   | Full asset replacement cost         | `GetInsuranceValuationReportsQuery` |
| Indemnity Value    | Depreciated asset value             | With adjusted query parameters |

### Asset Management Reports

| Report Type                   | Purpose                                         | Method                        |
|-------------------------------|-------------------------------------------------|-------------------------------|
| Lifecycle Optimization        | Strategic asset planning                        | Multiple calculations         |
| Projected Renewals            | Forecast asset replacement                      | `GetRenewalCostReportQuery`   |
| Cost to Bring to Satisfactory| Estimate restoration costs                      | `GetCostToBringToSatisfactoryQuery` |
| Distribution by Score         | Analyze condition score distribution            | `GetDistributionByScoreReportQuery` |

## Report Generation Process

1. **Data Collection & Validation**  
   Data must be validated prior to report generation.

2. **Report Generation**
   - Initiated via ReportsController
   - Uses query handlers and calculation service
   - Excel builder formats results

3. **Report Storage**
   - Reports can be saved locally or to cloud storage

4. **Report Formats**
   - Excel (.xlsx), PDF, CSV

## Technical Architecture

```
Report Request -> ReportsController -> Query Handler -> Database Query
                                            |
                                            V
         ExcelFileBuilder <- ReportCalculationService -> Structured Data
```

## Components

- **ReportsController**: API controller that exposes reporting endpoints
- **Query Handlers**: Aggregate and filter data
- **Calculation Service**: Processes data into report structures
- **Excel File Builder**: Converts structured data to downloadable Excel format

## Report Templates

- Stored in: `/API/wwwroot/Templates/`
- Maintains consistent layout, formatting, and branding

## Version Differences

| Feature             | Version 2              | Version 3                  |
|---------------------|------------------------|----------------------------|
| Report Templates    | Word to PDF conversion | Native PDF generation      |
| Chart Generation    | Excel-based only       | Also supports web charts   |
| Export Formats      | Excel only             | Excel, PDF, CSV            |

## Integration Points

- **Valuation System**: Source of all data
- **Field Inspection App**: Provides condition score data
- **Blob Storage**: Archive reports
- **Client Settings**: Controls report variations
- **Authentication**: Governs access

## Business Value

1. Ensures financial reporting compliance
2. Enables strategic asset decisions
3. Provides audit-ready documentation
4. Automates repeatable reporting processes
