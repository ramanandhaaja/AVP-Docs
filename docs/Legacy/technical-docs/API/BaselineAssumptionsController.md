# 📋 BaselineAssumptionsController Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/BaselineAssumptionsController.cs
- **Primary Purpose**: Manages baseline assumptions for EasySAM strategic asset management, including the import/export of baseline parameters used in strategy modeling.
- **Key Endpoints**: 
  - 🔍 GET /GetList - Retrieves a list of asset classes for baseline assumptions
  - ✏️ POST /Export - Exports baseline assumptions to a file
  - ✏️ POST /Import - Imports baseline assumptions from a file
- **Related Models**: AssetClassDto
- **Used By**: 
  - EasySAM strategic asset management module
  - Strategic planning tools
  - Baseline assumption configuration
  - Data exchange with external systems

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The BaselineAssumptionsController manages baseline assumptions used in EasySAM (Easy Strategic Asset Management) strategic modeling. Baseline assumptions define the parameters that reflect current practices, conditions, and costs associated with asset management. These assumptions serve as the foundation for scenario modeling and strategy comparison in EasySAM. This controller provides functionality for retrieving, exporting, and importing baseline assumptions data.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Asset Class List
- **HTTP Method**: GET
- **URL Pattern**: /GetList
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of asset classes for which baseline assumptions can be configured

##### Request Parameters
None

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Buildings",
    "description": "Building assets",
    "hasBaselineAssumptions": true
  },
  {
    "id": 2,
    "name": "Infrastructure",
    "description": "Infrastructure assets",
    "hasBaselineAssumptions": true
  },
  {
    "id": 3,
    "name": "Plant & Equipment",
    "description": "Plant and equipment assets",
    "hasBaselineAssumptions": false
  }
]
```

#### ✏️ Export Baseline Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /Export
- **Authentication**: 🔒 Required
- **Description**: Exports baseline assumptions to a downloadable file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportBaselineAssumptionsQuery | Yes | Contains AssetClassId and export options |

##### Response Format
File download (binary content)

The exported file typically contains:
- Condition thresholds and intervention triggers
- Standard maintenance costs and frequencies
- Expected deterioration rates
- Rehabilitation and renewal parameters
- Useful life assumptions
- Performance expectations
- Financial parameters (discount rates, inflation)

#### ✏️ Import Baseline Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required
- **Description**: Imports baseline assumptions from an uploaded file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportBaselineAssumptionsCommand | Yes | Contains file and import options |

##### Response Format
```json
{
  "message": "Baseline assumptions imported successfully"
}
```

### 📋 Baseline Assumption Types
ℹ️ **Note:** Baseline assumptions include several categories of parameters:

1. **Deterioration Parameters**
   - Condition decay rates over time
   - Age-based deterioration models
   - Environmental factor adjustments
   - Use-based degradation factors

2. **Intervention Parameters**
   - Maintenance activities and frequencies
   - Condition-based intervention triggers
   - Cost estimates for standard activities
   - Treatment effectiveness factors

3. **Financial Parameters**
   - Discount rates for NPV calculations
   - Inflation rates for future cost projections
   - Budget constraints and limitations
   - Unit rate escalation factors

### 🧮 Modeling Applications
Baseline assumptions support asset modeling in several ways:

1. **Lifecycle Prediction**
   - Projects future condition based on deterioration models
   - Forecasts remaining useful life
   - Estimates timing of intervention needs
   - Models performance under different scenarios

2. **Cost Forecasting**
   - Estimates maintenance and renewal costs
   - Projects capital expenditure requirements
   - Calculates lifecycle cost implications
   - Compares cost-effectiveness of strategies

3. **Risk Assessment**
   - Evaluates failure probability based on condition
   - Assesses consequence of failures
   - Quantifies risk exposure over time
   - Prioritizes interventions based on risk

### 📝 Business Context
Baseline assumptions provide critical inputs for strategic planning:

1. **Evidence-Based Planning**
   - Grounds future projections in historical data
   - Provides realistic parameters for modeling
   - Ensures strategies reflect operational reality
   - Supports defensible decision-making

2. **Scenario Testing**
   - Establishes a consistent baseline for comparisons
   - Enables "what-if" analysis with changed parameters
   - Facilitates quantitative strategy evaluation
   - Supports optimization of maintenance approaches

### ⚠️ Implementation Notes
The controller contains a commented-out endpoint (`Refresh`), which suggests that there was previously a mechanism to refresh existing practices data that may have been deprecated or is being refactored. This endpoint would likely have been used to update baseline assumptions based on current practices data in the system.