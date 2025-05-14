# 📊 Renewal Cost Report

## 📋 QUICK DOCUMENTATION
- **Report Name**: Renewal Cost Report
- **Primary Purpose**: Projects future renewal costs for assets over time based on condition, useful life, and valuation data
- **File Format**: Excel (.xlsx)
- **Query Handler**: `/Application/Reports/Queries/GetRenewalCostReport/GetRenewalCostReportQuery.cs`
- **Controller Endpoint**: `GET /api/reports/renewal-cost` in `ReportsController.cs`
- **Key Inputs**:
  - `jobId`: The job ID for which to generate the report
  - `assetClassIds`: Optional filter for specific asset classes
  - `yearsToProject`: Number of years to include in the projection (default 20)
  - `format`: Output format (Excel/PDF/CSV)
- **Related Models**:
  - `Asset`
  - `Component`
  - `AssetValuation`
  - `ComponentValuation`
  - `ValuationProfile`

## 📊 DETAILED DOCUMENTATION

### 📊 Overview
The Renewal Cost Report provides a projection of future renewal costs for assets based on their current condition, useful life, and valuation data. This strategic planning tool helps organizations forecast capital expenditure requirements for asset replacements over a specified time horizon (typically 10-20 years). It supports long-term financial planning, budget allocation, and asset management decision-making.

### 📊 Report Structure

#### Main Sections
1. **Executive Summary**:
   - Overview of total projected renewal costs
   - Year-by-year breakdown of renewal expenditure
   - Key statistics and graphical representation of renewal profiles
   - Categorization of renewals by priority

2. **Renewal Cost Projections**:
   - Detailed year-by-year projection of renewal costs
   - Categorized by asset class and type
   - Projected renewal dates based on condition and remaining useful life
   - Estimated renewal cost (adjusted for inflation if specified)

3. **Asset Detail**:
   - Individual asset renewal projections
   - Current condition scores and remaining useful life
   - Projected year of renewal
   - Estimated renewal cost at time of renewal

4. **Component Detail** (for component-based assets):
   - Component-level renewal projections
   - Separate timelines for different components
   - Optimized component grouping recommendations

#### Key Columns in Renewal Projection Sheet
| Column | Description |
|--------|-------------|
| Asset ID | Unique identifier for the asset |
| Asset Name | Descriptive name of the asset |
| Asset Class | Classification of the asset |
| Current Condition | Current condition score of the asset |
| Remaining Useful Life | Estimated years of useful life remaining |
| Replacement Cost | Current cost to replace the asset |
| Projected Renewal Year | Year when renewal is projected |
| Renewal Cost | Projected cost at time of renewal |
| Renewal Priority | Priority categorization (Critical, High, Medium, Low) |

### 📊 Calculation Methodology

#### Renewal Timing Calculation
The projected renewal year is determined based on:

1. **Condition-Based Projection**:
   - Uses current condition score
   - Applies valuation profile to convert condition to remaining service potential
   - Calculates remaining useful life using deterioration models
   - Projects renewal year based on when the asset reaches end of useful life

2. **Age-Based Projection** (alternative method):
   - Uses installation date and standard useful life
   - Applies any life adjustments based on usage and environment
   - Calculates projected end of life

3. **Manual Override**:
   - Honors any manually specified renewal dates
   - Used for planned renewals or known replacement schedules

#### Renewal Cost Calculation
The projected renewal cost is calculated using:

1. **Standard Replacement Cost**:
   - Based on current replacement cost from valuation data
   - Optionally adjusted for inflation using configurable rates
   - May include contingency allowances

2. **Enhanced Replacement**:
   - Allows for technological advancement factor
   - Considers modern equivalent replacements
   - May include upgrade provisions

### 📋 Business Context

The Renewal Cost Report addresses a core asset management need described in the legacy documentation:

> "A range of asset management outputs including - Projected renewals report, Cost to bring to satisfactory report, Analysis of the portfolio by condition or value"

Specifically, it implements the "Projected renewals report" functionality, which is critical for long-term financial planning.

The report aligns with the strategic asset management capability mentioned:

> "While not currently in version 2 of the software it will also be able to deliver - 10 Year maintenance plan"

The Renewal Cost Report extends this concept to capital renewal planning over longer timeframes.

### 📊 Report Generation Process

The report is generated through the following steps:

1. **Data Collection**:
   - Asset and component data is retrieved from the database
   - Valuation data is loaded to determine replacement costs
   - Condition data is retrieved for remaining life calculations

2. **Projection Processing**:
   - Each asset's renewal timeline is calculated
   - Costs are aggregated by year and category
   - Statistical analysis is performed to identify patterns and peaks

3. **Excel Generation**:
   - Data is structured into worksheets
   - Formatting and styling is applied
   - Charts and graphs are generated for visual representation
   - Pivot tables are created for interactive analysis

4. **Delivery**:
   - File is returned to client via API
   - Report can be saved to the Reports File Container

### 📊 Report Variants

The Renewal Cost Report supports several variants:

1. **Standard Renewal Report**:
   - Projects renewals over 20-year horizon
   - Detailed breakdown by asset class and type
   - Includes executive summary and detailed data

2. **Long-Range Planning Report**:
   - Extended projection (30-50 years)
   - More emphasis on long-term trends
   - Used for infrastructure master planning

3. **Short-Term Capital Planning Report**:
   - Focused on 1-5 year horizon
   - More detailed cost breakdowns
   - Designed to inform annual budgeting

4. **Component-Based Renewal Report**:
   - Detailed component-level projections
   - Used for complex assets with multiple components
   - Helps optimize component replacement scheduling

### 📊 Usage Instructions

The Renewal Cost Report can be generated through:

1. **User Interface**:
   - Navigate to Reports > Asset Management > Renewal Cost
   - Select the job and asset classes to include
   - Choose projection timeframe and other parameters
   - Click "Generate Report"

2. **API Endpoint**:
   ```
   GET /api/reports/renewal-cost?jobId={jobId}&yearsToProject={years}&assetClassIds={assetClassIds}&format={format}
   ```

3. **Command Line**:
   ```
   AVP.CLI.exe report renewal-cost --job {jobId} --years 20 --format xlsx
   ```

### 📊 Technical Implementation

#### Query Handler
The `GetRenewalCostReportQuery` handler:
1. Retrieves asset and valuation data for the specified job
2. Applies filters specified in the query
3. Processes each asset to determine renewal timing and cost
4. Aggregates data by year and category
5. Uses the Excel builder to generate the report file

#### Projection Algorithms
The report uses specialized algorithms for projecting renewals:
1. Condition deterioration modeling based on valuation profiles
2. Multiple methods for estimating remaining useful life
3. Statistical analysis to identify renewal patterns
4. Cost forecasting with optional inflation adjustments

#### Excel Builder
The renewal report uses a specialized Excel builder that:
1. Creates the multi-sheet workbook structure
2. Generates dynamic charts showing renewal profiles
3. Implements conditional formatting to highlight key information
4. Creates interactive pivot tables for analysis

### ⚡ Performance Considerations

For large asset portfolios:
1. The renewal projections use batch processing to handle large data sets
2. Year-based aggregation is optimized to minimize calculation overhead
3. Graphics generation is limited to key charts to avoid excessive processing
4. Very long-term projections (>30 years) use statistical sampling methods for efficiency