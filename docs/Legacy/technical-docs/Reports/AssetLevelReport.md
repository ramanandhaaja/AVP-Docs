# 📄 Asset Level Report Documentation

## 📄 QUICK DOCUMENTATION
- **File Path**: `/Application/Reports/Queries/GetGeneralValuationReport/`
- **Report Type**: Excel (part of GeneralValuationReports)
- **Primary Purpose**: Provides detailed valuation information for assets at the asset level
- **Key Data Sources**: Asset, AssetValuations, Component, ValuationProfile, Job
- **Who Uses This Report**: Valuers, Financial Analysts, Clients
- **Parameters**: 
  - JobId (required)
  - AssetClass (optional, filters by specific asset class)
- **Key Methods**:
  - `GetGeneralValuationReportsQueryHandler.Handle()`: Generates comprehensive valuation reports including asset level data
- **Used By**:
  - `ReportsController.GetGeneralValuationReports` endpoint
  - Financial reporting process

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The Asset Level Report provides detailed valuation information for assets at the asset level. It includes information about each asset's attributes, condition, location, valuation parameters, and financial values. It's part of the GeneralValuationReports which includes multiple report worksheets in a single Excel file.

### 🔧 Report Details
- **File Path**: `/Application/Reports/Queries/GetGeneralValuationReport/GetGeneralValuationReportsQuery.cs`
- **Generation Method**: Uses IExcelFileBuilder to build an Excel file containing multiple DataTable objects

### 📋 Report Parameters
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| JobId | int | Yes | - | The ID of the job to generate the report for |
| AssetClass | string | No | null | When specified, filters report to a specific asset class |

### 🔗 Data Sources
- **Primary Data Source**: AssetValuations table
- **Additional Data Sources**: 
  - Jobs table
  - ComponentValuations table
  - InsuranceValuation table
  - MarketApproachValuation table
  - IncomeApproachValuation table
  - AssetReplacementCostValuations table
  - ComponentReplacementCostValuations table

### 🧮 Calculations/Formulas
The report includes various calculated fields:
- Accumulated Depreciation = Gross - CurrentValue
- Variance percentages between current and previous values
- Weighted average useful life and remaining useful life

### 📊 Report Sections
The Asset Level Report is one worksheet in a multi-sheet Excel file that includes:

| Section Name | Description | Data Source | 
|--------------|-------------|-------------|
| Asset Class Report | Summary by asset class | AssetValuations grouped by AssetClass |
| Asset Level Report | Detailed asset information | AssetValuations |
| Component Level Report | Component details | ComponentValuations |
| Cost Apportionment Report | Asset replacement cost details | AssetReplacementCostValuations |
| Cost Direct Cost Report | Component replacement cost details | ComponentReplacementCostValuations |
| Insurance Valuation Report | Insurance valuation details | InsuranceValuation |
| Market Approach Report | Market valuation details | MarketApproachValuation |
| Income Approach Report | Income valuation details | IncomeApproachValuation |

### 📊 Asset Level Report Fields
The Asset Level worksheet includes the following fields:
- Asset identification (AssetId, EntityId, AssetName)
- Asset hierarchy (AssetClass, AssetType, AssetSubType)
- Facility information (Facility, SubFacility)
- Asset custodian and valuation policy
- Financial values (GrossOrMV, AccumulatedDepreciation, CurrentValue, DepreciationExpense)
- Previous values (PreviousGrossOrMV, PreviousCurrentValue, PreviousDepreciation)
- Useful life calculations (WeightedAverageUsefulLife, WeightedAverageRUL)
- Location data (StreetAddress, Suburb, Town, PostCode, Latitude, Longitude)
- Classification data (FinancialAssetClass, FinancialSubClass, FVMClass, FVMTechnique, FVMHierarchy)
- Status flags (HeldForSale, HighestAndBestUse, Investment, etc.)

### 📄 Output Format
- Excel (.xlsx) file with multiple worksheets
- Each report section is a separate worksheet in the file
- Report includes AVP logo and formatting

### 📋 Delivery Methods
- **Default Delivery**: HTTP Response (File Download)
- **Available Formats**: Excel

### 📝 Business Rules Applied
- Assets with IsControlledForFinancialPurpose=false show 0 for financial values
- Some reports only include assets with specific valuation policies (e.g., "Above Revaluation Threshold")
- Insurance report only includes assets with "Full" or "Indemnity" coverage

### 💡 Usage Instructions
1. Access the Reports section in Asset Valuer Pro
2. Select "General Valuation Report"
3. Enter the JobId for the valuation job
4. Optionally select a specific asset class
5. Generate and download the report

### ⚠️ Known Issues/Limitations
- Large reports with many assets may take time to generate
- Client-specific customization might be required for some reporting needs

### 📝 Business Context
The Asset Level Report is a critical component of the financial reporting process in Asset Valuer Pro. It provides a comprehensive view of all assets being valued, with detailed information about their financial values, attributes, and status. This report supports the valuation workflow described in the Overview document, specifically in the "Finalise Valuation and Produce Reports" phase.

### ⚡ Performance Considerations
💡 **Tip:** For large datasets, consider exporting by asset class rather than all assets at once. This can significantly reduce generation time and file size.

### 🔒 Regulatory Compliance
This report supports financial reporting requirements including:
- IFRS 13/AASB 13 Fair Value disclosures
- IFRS 16/AASB 16 Leases disclosures
- Local government asset reporting requirements
- Insurance valuation substantiation