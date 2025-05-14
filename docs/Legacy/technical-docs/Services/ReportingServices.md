# 📊 Reporting Services Documentation

## 📋 Overview
This document provides comprehensive documentation for Asset Valuer Pro's reporting services, which generate various types of valuation and asset management reports to support financial reporting, insurance valuation, and asset management decision-making.

## 📋 QUICK DOCUMENTATION
- **File Path**: `/Infrastructure/Services/ReportCalculationService.cs` and `/Infrastructure/Services/ReportGenerationService.cs`
- **Primary Purpose**: Provides report generation and calculation services to transform asset valuation data into structured reports for financial, insurance, and asset management purposes
- **Key Methods**:
  - `GenerateValuationReport`: Creates financial valuation reports
  - `GenerateInsuranceReport`: Creates insurance valuation reports
  - `GenerateAssetManagementReport`: Creates asset management reports
  - `GetSummaryByValueReport`: Generates valuation summaries by asset class
  - `GetStratificationOfValueSummaryReportChartData`: Creates chart data for stratification reports
- **Used By**:
  - Report Query handlers for various report types
  - ReportsController endpoints
- **Related Models**:
  - AssetValuation
  - ComponentValuation
  - InsuranceAssumptions
  - AssetAssumptions
  - ValuationProfileRule

### 🔧 ReportCalculationService
**File Path:** `/Infrastructure/Services/ReportCalculationService.cs`

**Primary Purpose:** Provides calculation methods for all report types by processing asset valuation data and transforming it into structured report formats.

**Key Methods:**
- `GetApportionmentUnitRateReport`: Calculates unit rates for assets valued using apportionment method
- `GetDirectCostUnitRateReport`: Calculates unit rates for assets valued using direct cost method
- `GetPortfolioReport`: Generates portfolio-wide valuation summaries
- `GetHighestAndBestUseReport`: Generates reports for assets designated as highest and best use
- `GetIndicesReport`: Creates reports related to indexation adjustments
- `GetInsuranceAssumptionReport`: Generates insurance-related valuation reports
- `GetValuationProfileReport`: Creates reports related to valuation profiles and scoring
- `GetSummaryByValueReport`: Generates valuation summaries by asset class
- `GetStratificationOfValueSummaryReportChartData`: Creates chart data for stratification reports

**Related Models:**
- AssetValuation
- ComponentValuation
- InsuranceAssumptions
- AssetAssumptions
- ValuationProfileRule

**Used By:**
- Report Query handlers for various report types
- ReportsController endpoints

### 📝 Business Context
The reporting services implement the valuation report generation described in the legacy documentation, specifically:
- Financial reporting valuation reports align with IFRS/IPSAS requirements
- Insurance valuation reports calculate both full replacement and indemnity values
- Asset management reports support lifecycle optimization, projected renewals, and condition analysis
- Reports can be exported to various formats and saved for future access

## 📊 Report Types and Business Purpose

### Financial Reporting Valuation Reports
The reporting services generate financial reporting outputs that align with accounting standards (IFRS and IPSAS) including:

| Report Type | Business Purpose | Implementation Method |
|-------------|------------------|------------------------|
| General Valuation | Provides comprehensive valuation data for financial statements | `GetGeneralValuationReportsQuery` |
| Movements Reconciliation | Tracks changes in asset values between reporting periods | `GetMovementsReconciliationReportQuery` |
| Valuation Disclosures | Generates required financial statement disclosures | Multiple calculation methods in `ReportCalculationService` |

### Insurance Valuation Reports
Insurance valuation reports calculate both replacement and indemnity values:

| Report Type | Business Purpose | Implementation Method |
|-------------|------------------|------------------------|
| Full Replacement | Calculates the cost to replace assets at current prices | `GetInsuranceValuationReportsQuery` |
| Indemnity Value | Calculates the current value for insurance purposes | `GetInsuranceValuationReportsQuery` with different parameters |

### Asset Management Reports
Asset management reports provide insights for operational decision-making:

| Report Type | Business Purpose | Implementation Method |
|-------------|------------------|------------------------|
| EasySAM Lifecycle Optimization | Strategic asset management planning tool | Multiple calculation methods |
| Projected Renewals | Forecasts when assets will need replacement | `GetRenewalCostReportQuery` |
| Cost to Bring to Satisfactory | Calculates costs to restore assets to acceptable condition | `GetCostToBringToSatisfactoryQuery` |
| Distribution by Score | Analyzes portfolio by condition scores | `GetDistributionByScoreReportQuery` |

## 📊 Report Generation Process

The report generation workflow in the code follows the business process outlined in the legacy documentation:

1. **Data Collection and Validation**
   - User completes data collection and runs validation checks
   - Implemented through pre-report validation services

2. **Report Generation**
   - User selects specific report type through UI
   - Request sent to ReportsController endpoint
   - Report query handler retrieves data from database
   - ReportCalculationService processes data into report format
   - Excel file builder converts data to spreadsheet format

3. **Report Storage**
   - Generated reports returned to client as files
   - Can be saved locally or in the system's blob storage

4. **Report Formats**
   - Excel spreadsheets (.xlsx) - Primary format
   - PDF documents - For methodology and text-based reports
   - CSV exports - For data interchange

## 📊 Technical Details

### Report Generation Architecture

```
┌───────────────┐    ┌─────────────────┐    ┌────────────────────┐    ┌──────────────┐
│ Report Request│───>│ReportsController│───>│Report Query Handler│───>│Database Query│
└───────────────┘    └─────────────────┘    └────────────────────┘    └──────────────┘
                                                      │
                                                      ▼
┌───────────────┐    ┌─────────────────┐    ┌────────────────────┐
│ Report File   │<───│Excel File Builder│<───│ReportCalculation   │
└───────────────┘    └─────────────────┘    │Service             │
                                            └────────────────────┘
```

### Key Components

1. **ReportsController** (`/API/Controllers/ReportsController.cs`)
   - Handles HTTP requests for report generation
   - Routes requests to appropriate query handlers
   - Returns file results to client

2. **Report Query Handlers** (`/Application/Reports/Queries/...`)
   - Retrieves data from database
   - Passes data to ReportCalculationService
   - Converts results to file format

3. **ReportCalculationService** (`/Infrastructure/Services/ReportCalculationService.cs`)
   - Performs calculations on asset data
   - Transforms data into report structure
   - Generates chart data when needed

4. **ExcelFileBuilder** (Implementation varies)
   - Converts structured data to Excel format
   - Applies formatting and templates
   - Returns byte array for file download

## 📚 Report Templates

The system uses pre-defined templates for consistent reporting:

- Located in `/API/wwwroot/Templates/`
- Includes templates for methodology reports, summary reports, and other specialized reports
- Templates maintain consistent branding and formatting

## 🔧 Version Considerations

Some reporting features have different implementations between versions:

| Feature | Version 2 | Version 3 |
|---------|-----------|-----------|
| Report Templates | Word templates converted to PDF | Direct PDF generation |
| Chart Generation | Excel-based | Both Excel and web-based visualizations |
| Export Format | Excel files | Excel, PDF, and CSV options |

## 📋 Integration Points

The reporting services integrate with several other system components:

- **Asset Valuation System**: Sources valuation data
- **Field Data Collection**: Incorporates condition scores and inspection data
- **Document Storage**: Stores generated reports for future access
- **Client Configuration**: Customizes reports based on client settings
- **User Authentication**: Controls access to reports based on permissions

## 📝 Business Value

The reporting services deliver significant business value:

1. **Compliance**: Ensures financial reporting meets accounting standards
2. **Decision Support**: Provides data for asset management decisions
3. **Risk Management**: Supports insurance valuation and risk assessment
4. **Auditability**: Creates traceable and consistent valuation documentation
5. **Efficiency**: Automates complex reporting processes
