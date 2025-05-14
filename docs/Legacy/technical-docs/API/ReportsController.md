# 🔧 Reports Controller Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ReportsController.cs
- **Primary Purpose**: Handles generation and retrieval of various reports in the application
- **Key Endpoints**: 
  - 📄 POST /DetailedAnalysis - Generates a detailed analysis report
  - 📄 POST /GetMethodologyReport - Generates a methodology report
  - 📄 POST /GetSummaryReport - Generates a summary report
  - 📄 POST /GetGeneralValuationReports - Generates general valuation reports
- **Related Models**: Various query models for different report types
- **Used By**: Reporting functionality in the web application

## 📝 DETAILED DOCUMENTATION

### 🏗️ Overview
The ReportsController provides endpoints for generating and downloading various reports related to asset valuation, analysis, and financial projections. It supports a wide range of report types catering to different business needs.

### 🏗️ Controller Dependencies
- **Namespace**: APV.API.Controllers
- **Services Used**: Mediator
- **Other Dependencies**: None

### 📋 Endpoints

#### 📄 DetailedAnalysis
- **HTTP Method**: POST
- **URL Pattern**: /DetailedAnalysis
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Generates a detailed analysis report with both detail and summary sections

#### 📄 DetailedAnalysisExport
- **HTTP Method**: POST
- **URL Pattern**: /DetailedAnalysisExport
- **Authentication**: 🔒 Required
- **Description**: Exports the detailed analysis report as a downloadable file

#### 📄 GetMethodologyReport
- **HTTP Method**: POST
- **URL Pattern**: /GetMethodologyReport
- **Authentication**: 🔒 Required
- **Description**: Generates a methodology report explaining valuation approaches

#### 📄 GetSummaryReport
- **HTTP Method**: POST
- **URL Pattern**: /GetSummaryReport
- **Authentication**: 🔒 Required
- **Description**: Generates a summary report of valuation results

#### 📄 GetMethodologySubReports
- **HTTP Method**: POST
- **URL Pattern**: /GetMethodologySubReports
- **Authentication**: 🔒 Required
- **Description**: Generates sub-reports related to the methodology

#### 📄 GetGeneralValuationReports
- **HTTP Method**: POST
- **URL Pattern**: /GetGeneralValuationReports
- **Authentication**: 🔒 Required
- **Description**: Generates general valuation reports

#### 📄 GetInsuranceValuationReports
- **HTTP Method**: POST
- **URL Pattern**: /GetInsuranceValuationReports
- **Authentication**: 🔒 Required
- **Description**: Generates insurance valuation reports

#### 📄 GetChangesReport
- **HTTP Method**: POST
- **URL Pattern**: /GetChangesReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on changes in valuation

#### 📄 GetDepreciationAnalysisReport
- **HTTP Method**: POST
- **URL Pattern**: /GetDepreciationAnalysisReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on depreciation analysis

#### 📄 GetMovementsReconciliationReport
- **HTTP Method**: POST
- **URL Pattern**: /GetMovementsReconciliationReport
- **Authentication**: 🔒 Required
- **Description**: Generates reconciliation reports for asset movements

#### 📊 GetDistributionByScoreReport
- **HTTP Method**: POST
- **URL Pattern**: /GetDistributionByScoreReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on asset distribution by score

#### 📊 GetDistributionByValueReport
- **HTTP Method**: POST
- **URL Pattern**: /GetDistributionByValueReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on asset distribution by value

#### 📄 GetRenewalCostReport
- **HTTP Method**: POST
- **URL Pattern**: /GetRenewalCostReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on renewal costs

#### 📄 GetMaintenancePlanReport
- **HTTP Method**: POST
- **URL Pattern**: /GetMaintenancePlanReport
- **Authentication**: 🔒 Required
- **Description**: Generates maintenance plan reports

#### 📊 CashFlowProjections
- **HTTP Method**: POST
- **URL Pattern**: /CashFlowProjections
- **Authentication**: 🔒 Required
- **Description**: Generates cash flow projection reports

#### 📄 RenewalsSchedule
- **HTTP Method**: POST
- **URL Pattern**: /RenewalsSchedule
- **Authentication**: 🔒 Required
- **Description**: Generates renewal schedule reports

#### 📄 CostToBringToSatisfactory
- **HTTP Method**: POST
- **URL Pattern**: /GetCostToBringToSatisfactoryReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on costs required to bring assets to satisfactory condition

#### 📄 ModifiedAssumptions
- **HTTP Method**: POST
- **URL Pattern**: /ModifiedAssumptionsReport
- **Authentication**: 🔒 Required
- **Description**: Generates reports on modified assumptions

### 📝 Business Context

#### 📋 Role in Valuation Process
According to the legacy documentation, reporting is a critical final step in the valuation workflow. The ReportsController implements this key phase described as:

> "Once the refresh of calculations is completed the valuer is able to run validations to ensure there are no obvious mistakes or missing data [and] produce the various reports..."

This controller provides the technical implementation for generating all the report types mentioned in the legacy documentation.

#### 📋 Report Categories from Legacy Documentation
The endpoints in this controller directly align with the report categories described in the legacy documentation:

1. **Financial Reporting Valuation**
   - The GetGeneralValuationReports endpoint corresponds to the "Valuation spreadsheets (financial reporting)" mentioned in the documentation
   - The GetInsuranceValuationReports endpoint implements the insurance valuation reporting capability

2. **Valuation Methodology Documentation**
   - The GetMethodologyReport endpoint implements the "Valuation methodology and other textual based reports" mentioned in the documentation
   - This report type is essential for audit and compliance purposes

3. **Financial Reporting Disclosures**
   - The GetMovementsReconciliationReport and GetChangesReport endpoints support the "Financial reporting disclosures" mentioned in the documentation
   - These reports are critical for financial statement preparation

4. **Asset Management Outputs**
   - Several endpoints implement the asset management outputs described in the documentation:
     - GetRenewalCostReport → "Renewal and cost to bring to satisfactory projections"
     - GetDistributionByScoreReport → "Analysis of scores and value"
     - CostToBringToSatisfactory → "Cost to bring to satisfactory projections"
     - CashFlowProjections → "EasySAM strategic asset management planning"

#### 📋 Report Storage Mechanism
The legacy documentation mentions that "The various reports should be saved in the 'Reports File Container' so that they can be accessed at any time without having to re-run them." This controller works with the backend storage services to implement this requirement.

#### 📋 Support for Multiple Report Types
The controller supports the diverse reporting needs described in the legacy documentation:
- Valuation reports for financial reporting and insurance purposes
- Asset management reports for strategic planning
- Condition and value analysis reports
- Reconciliation reports for financial disclosures
- Methodology documentation for audit and compliance

#### 📋 Report Generation Sequence
According to the legacy documentation, reports are generated after valuation calculations have been refreshed. The controller's dependency on accurate asset valuation data reflects this sequence in the business process.

### 💡 Tips for Report Generation
- ⚡ Some reports may take time to generate for large asset portfolios
- ✅ Reports often require a completed job with validated data
- 🔍 Use the appropriate report for your specific business needs
- ℹ️ Many reports can be exported in various formats (PDF, Excel) for further analysis