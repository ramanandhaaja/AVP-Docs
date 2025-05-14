# Report Generators Inventory

This document provides an inventory of all report generators in the Asset Valuer Pro application. The report generators are implemented as query handlers following the CQRS pattern.

## Valuation Reports

Reports related to asset valuation results.

| Report Generator | Path | Primary Purpose |
|------------------|------|----------------|
| GetSummaryReportQuery | `/Application/Reports/Queries/GetSummaryReport/GetSummaryReportQuery.cs` | Generates the main summary valuation report |
| GetMethodologyReportQuery | `/Application/Reports/Queries/GetMethodologyReport/GetMethodologyReportQuery.cs` | Generates methodology documentation explaining valuation approach |
| GetGeneralValuationReportQuery | `/Application/Reports/Queries/GetGeneralValuationReport/GetGeneralValuationReportQuery.cs` | Provides detailed valuation results |
| GetInsuranceValuationReportQuery | `/Application/Reports/Queries/GetInsuranceValuationReport/GetInsuranceValuationReportQuery.cs` | Produces insurance valuation report |
| GetChangesReportQuery | `/Application/Reports/Queries/GetChangesReport/GetChangesReportQuery.cs` | Shows changes between valuations |
| GetMovementsReconciliationReportQuery | `/Application/Reports/Queries/GetMovementsReconciliationReport/GetMovementsReconciliationReportQuery.cs` | Reconciles movements between valuations |

## Analysis Reports

Reports that provide analytical data about assets.

| Report Generator | Path | Primary Purpose |
|------------------|------|----------------|
| GetDetailedAnalysisReportQuery | `/Application/Reports/Queries/GetDetailedAnalysisReport/GetDetailedAnalysisReportQuery.cs` | Provides detailed analysis of assets |
| GetStratificationSummaryReportQuery | `/Application/Reports/Queries/GetStratificationSummaryReport/GetStratificationSummaryReportQuery.cs` | Stratifies assets by various criteria |
| GetDistributionByValueReportQuery | `/Application/Reports/Queries/GetDistributionByValueReport/GetDistributionByValueReportQuery.cs` | Distributes assets by value ranges |
| GetDistributionByScoreReportQuery | `/Application/Reports/Queries/GetDistributionByScoreReport/GetDistributionByScoreReportQuery.cs` | Distributes assets by condition scores |
| GetDepreciationAnalysisReportQuery | `/Application/Reports/Queries/GetDepreciationAnalysisReport/GetDepreciationAnalysisReportQuery.cs` | Analyzes depreciation patterns |
| GetModifiedAssumptionsReportQuery | `/Application/Reports/Queries/GetModifiedAssumptionsReport/GetModifiedAssumptionsReportQuery.cs` | Shows modified assumptions and their impact |

## Asset Management Reports

Reports related to asset management and planning.

| Report Generator | Path | Primary Purpose |
|------------------|------|----------------|
| GetMaintenancePlanReportQuery | `/Application/Reports/Queries/GetMaintenancePlanReport/GetMaintenancePlanReportQuery.cs` | Generates maintenance planning report |
| GetRenewalCostReportQuery | `/Application/Reports/Queries/GetRenewalCostReport/GetRenewalCostReportQuery.cs` | Projects future renewal costs |
| GetRenewalsScheduleQuery | `/Application/Reports/Queries/GetRenewalsSchedule/GetRenewalsScheduleQuery.cs` | Schedules asset renewals |
| GetCostToBringToSatisfactoryQuery | `/Application/Reports/Queries/GetCostToBringToSatisfactory/GetCostToBringToSatisfactoryQuery.cs` | Estimates cost to bring assets to satisfactory condition |
| GetCashFlowProjectionsQuery | `/Application/Reports/Queries/GetCashFlowProjections/GetCashFlowProjectionsQuery.cs` | Projects cash flow for asset maintenance and renewal |

## Report Components

Sub-reports and components used in building the main reports.

| Component | Path | Primary Purpose |
|-----------|------|----------------|
| GetMethodologySubReportsQuery | `/Application/Reports/Queries/GetMethodologySubReports/GetMethodologySubReportsQuery.cs` | Generates sub-reports for methodology documentation |

## Report Output Formats

Reports can be generated in various formats:

1. **Excel Spreadsheets** - Detailed data for analysis
2. **PDF Documents** - Formatted reports for presentation
3. **Word Documents** - Editable reports from templates
4. **CSV Files** - Raw data export

## Priority Reports

Based on business requirements and core functionality, the following reports should be prioritized for detailed documentation:

1. **Summary Valuation Report** - Main output of the valuation process
2. **Methodology Report** - Documents valuation methodology
3. **Changes Report** - Shows changes between valuations
4. **Renewal Cost Report** - Critical for asset management planning
5. **Stratification Summary Report** - Important for asset portfolio analysis
