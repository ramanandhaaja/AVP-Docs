# 📊 Insurance Valuation Report

## 📋 QUICK DOCUMENTATION
- **Report Name**: Insurance Valuation Report
- **Primary Purpose**: Provides comprehensive insurance valuation data including replacement cost and indemnity values for assets
- **File Format**: Excel (.xlsx)
- **Query Handler**: `/Application/Reports/Queries/GetInsuranceValuationReports/GetInsuranceValuationReportsQuery.cs`
- **Controller Endpoint**: `GET /api/reports/insurance-valuation` in `ReportsController.cs`
- **Key Inputs**:
  - `jobId`: The job ID for which to generate the report
  - `assetClassIds`: Optional filter for specific asset classes
  - `format`: Output format (Excel/PDF/CSV)
- **Related Models**:
  - `Asset`
  - `Component`
  - `AssetValuation`
  - `ComponentValuation`
  - `InsuranceAssumptions`

## 📊 DETAILED DOCUMENTATION

### 📊 Overview
The Insurance Valuation Report provides comprehensive insurance valuation data for assets, including both replacement cost and indemnity values. This report is used by clients to determine appropriate insurance coverage levels and supports insurance policy negotiations and renewals. It covers all insurable assets within a valuation job, with options to filter by asset class or other criteria.

### 📊 Report Structure

#### Main Sections
1. **Summary Dashboard**:
   - Overview of total replacement and indemnity values
   - Breakdown by asset class
   - Key statistics and graphs showing value distribution

2. **Asset-Level Insurance Values**:
   - Detailed listing of all assets with their insurance values
   - Both replacement cost and indemnity values
   - Categorization by insurance class

3. **Component-Level Insurance Values** (optional):
   - Breakdown of insurance values by component
   - Useful for assets with significant component variation

4. **Insurance Assumptions**:
   - Documentation of key assumptions used in calculations
   - Includes costing methodology, exclusions, and specific factors

#### Key Columns in Asset-Level Sheet
| Column | Description |
|--------|-------------|
| Asset ID | Unique identifier for the asset |
| Asset Name | Descriptive name of the asset |
| Asset Class | Classification of the asset |
| Location | Physical location of the asset |
| Full Replacement Value | Cost to completely replace the asset at current prices |
| Indemnity Value | Current value of the asset accounting for depreciation |
| Insurance Category | Category for insurance purposes (Building, Contents, etc.) |
| Coverage Recommendation | Recommended insurance coverage type |
| Notes | Relevant notes about insurance considerations |

### 📊 Calculation Methodology

#### Replacement Value Calculation
The replacement value represents the cost to replace the asset with a new equivalent, calculated using:

1. **Direct Cost Method**:
   - Based on current construction/purchase costs
   - Includes professional fees and contingencies
   - Adjusted for location and complexity factors

2. **Component-Based Method**:
   - Sum of all component replacement costs
   - Includes allowances for installation and project overhead
   - Includes demolition/removal costs where applicable

#### Indemnity Value Calculation
The indemnity value represents the current value of the asset accounting for depreciation:

1. **Asset-Level Calculation**:
   - Based on replacement cost less depreciation
   - Uses condition-based assessment of remaining value
   - Considers age and remaining useful life

2. **Special Cases**:
   - Heritage assets: Special valuation considerations
   - Technological assets: Considers obsolescence
   - Specialized assets: Considers continued use value

### 📋 Business Context

The Insurance Valuation Report directly fulfills a core business requirement described in the legacy documentation:

> "To protect against accidental loss entities will choose to insure some assets. Usually they insure for full replacement value but sometimes they only insure for indemnity value."

The report implements this requirement by providing both values:

> "Asset Valuer Pro uses the replacement cost of the assets to determine the full insurance value and the current value to determine the indemnity value."

### 📊 Report Generation Process

The report is generated through the following steps:

1. **Data Collection**:
   - Asset and component data is retrieved from the database
   - Insurance-specific assumptions are loaded
   - Filters are applied based on user parameters

2. **Calculation Processing**:
   - Replacement costs are calculated for each asset
   - Indemnity values are derived using depreciation factors
   - Summary statistics are aggregated

3. **Excel Generation**:
   - Data is structured into worksheets
   - Formatting and styling is applied
   - Charts and graphs are generated
   - Formulas are embedded for interactive analysis

4. **Delivery**:
   - File is returned to client via API
   - Report can be saved to the Reports File Container

### 📊 Report Variants

The Insurance Valuation Report supports several variants:

1. **Standard Insurance Report**:
   - Most commonly used format
   - Comprehensive coverage of all assets
   - Both replacement and indemnity values

2. **Summary Insurance Report**:
   - Condensed version showing only totals by category
   - Suitable for executive presentation
   - Emphasizes graphical presentation

3. **Detailed Component Report**:
   - Expanded version with full component breakdown
   - Used for complex assets with many components
   - Includes detailed insurance notes by component

### 📊 Usage Instructions

The Insurance Valuation Report can be generated through:

1. **User Interface**:
   - Navigate to Reports > Insurance Valuation
   - Select the job and asset classes to include
   - Choose the report variant
   - Click "Generate Report"

2. **API Endpoint**:
   ```
   GET /api/reports/insurance-valuation?jobId={jobId}&assetClassIds={assetClassIds}&format={format}
   ```

3. **Command Line**:
   ```
   AVP.CLI.exe report insurance-valuation --job {jobId} --format xlsx
   ```

### 📊 Technical Implementation

#### Query Handler
The `GetInsuranceValuationReportsQuery` handler:
1. Retrieves asset and valuation data for the specified job
2. Applies any filters specified in the query
3. Processes the data to calculate insurance values
4. Uses the Excel builder to generate the report file

#### Excel Builder
The insurance report uses a specialized Excel builder that:
1. Creates the multi-sheet workbook structure
2. Applies consistent formatting and styling
3. Generates charts and graphs for the dashboard
4. Includes formatted headers and footers with job information

#### Data Processing
The report processing involves:
1. Grouping assets by class, location, and type
2. Calculating summary statistics for each grouping
3. Applying insurance-specific business rules
4. Formatting currency values and percentages consistently

### ⚡ Performance Considerations

For large asset portfolios:
1. The report uses batch processing to handle large data sets
2. Summary calculations are optimized for performance
3. Chart generation is limited to key metrics to avoid excessive processing
4. Streaming approach is used for Excel file generation to minimize memory usage