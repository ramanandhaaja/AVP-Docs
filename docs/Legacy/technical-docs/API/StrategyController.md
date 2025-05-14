# 📋 StrategyController Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/StrategyController.cs
- **Primary Purpose**: Manages EasySAM strategic asset management strategies, including baseline and alternate strategies, enabling lifecycle optimization and scenario planning.
- **Key Endpoints**: 
  - 🔍 GET /GetBaselineStrategies - Retrieves baseline asset management strategies
  - 🔍 GET /GetAlternateStrategies - Retrieves alternate asset management strategies
  - ✏️ POST /CreateBaseline - Creates a new baseline strategy
  - 🔄 POST /CopyStrategy - Creates a copy of an existing strategy
  - ✏️ POST /Export - Exports strategy data to a file
  - ✏️ POST /Import - Imports strategy data from a file
- **Related Models**: BaselineStrategySummary, AlternateStrategySummary, DropDownDto
- **Used By**: 
  - EasySAM strategic asset management module
  - Lifecycle planning and optimization tools
  - Capital works program development
  - Scenario planning interfaces

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The StrategyController manages asset management strategies within the EasySAM (Easy Strategic Asset Management) module of Asset Valuer Pro. EasySAM allows users to create and compare different asset management strategies, including baseline scenarios (typically representing current practice) and alternate scenarios that explore different intervention approaches, funding levels, or maintenance regimes. This controller provides functionality for creating, retrieving, copying, exporting, and importing these strategies.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Baseline Strategies
- **HTTP Method**: GET
- **URL Pattern**: /GetBaselineStrategies
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of baseline strategies (current practice scenarios)

##### Request Parameters
None

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Current Practice - Buildings",
    "description": "Baseline scenario representing current maintenance practices for buildings",
    "assetClassId": 1,
    "assetClassName": "Buildings",
    "createdDate": "2025-01-15T00:00:00Z",
    "createdBy": "John Smith",
    "status": "Active",
    "baseYear": 2025,
    "forecastYears": 10
  },
  {
    "id": 124,
    "name": "Current Practice - Infrastructure",
    "description": "Baseline scenario for infrastructure assets",
    "assetClassId": 2,
    "assetClassName": "Infrastructure",
    "createdDate": "2025-01-20T00:00:00Z",
    "createdBy": "Sarah Johnson",
    "status": "Active",
    "baseYear": 2025,
    "forecastYears": 15
  }
]
```

#### 🔍 Get Alternate Strategies
- **HTTP Method**: GET
- **URL Pattern**: /GetAlternateStrategies
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of alternate strategies (improved or modified scenarios)

##### Request Parameters
None

##### Response Format
```json
[
  {
    "id": 201,
    "name": "Increased Maintenance - Buildings",
    "description": "Scenario with increased preventive maintenance funding",
    "baselineStrategyId": 123,
    "assetClassId": 1,
    "assetClassName": "Buildings",
    "createdDate": "2025-01-16T00:00:00Z",
    "createdBy": "John Smith",
    "status": "Active",
    "baseYear": 2025,
    "forecastYears": 10,
    "comparisonMetrics": {
      "netPresentValue": 15000000,
      "averageCondition": 3.8,
      "totalCost": 25000000
    }
  },
  {
    "id": 202,
    "name": "Deferred Renewals - Buildings",
    "description": "Scenario with deferred capital renewal",
    "baselineStrategyId": 123,
    "assetClassId": 1,
    "assetClassName": "Buildings",
    "createdDate": "2025-01-17T00:00:00Z",
    "createdBy": "John Smith",
    "status": "Active",
    "baseYear": 2025,
    "forecastYears": 10,
    "comparisonMetrics": {
      "netPresentValue": 12000000,
      "averageCondition": 3.2,
      "totalCost": 18000000
    }
  }
]
```

#### ✏️ Get Strategies By Asset Class
- **HTTP Method**: POST
- **URL Pattern**: /GetStrategiesByAssetClass
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of strategies for a specific asset class as dropdown options

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetStrategiesByAssetClassQuery | Yes | Contains AssetClassId to filter strategies |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Current Practice - Buildings"
  },
  {
    "id": 201,
    "name": "Increased Maintenance - Buildings"
  },
  {
    "id": 202,
    "name": "Deferred Renewals - Buildings"
  }
]
```

#### 🔍 Get Strategy
- **HTTP Method**: GET
- **URL Pattern**: /GetStrategy
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific strategy by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetStrategyQuery | Yes | Contains StrategyId to retrieve |

##### Response Format
```json
{
  "id": 201,
  "name": "Increased Maintenance - Buildings",
  "description": "Scenario with increased preventive maintenance funding",
  "baselineStrategyId": 123,
  "assetClassId": 1,
  "assetClassName": "Buildings",
  "createdDate": "2025-01-16T00:00:00Z",
  "createdBy": "John Smith",
  "status": "Active",
  "baseYear": 2025,
  "forecastYears": 10,
  "comparisonMetrics": {
    "netPresentValue": 15000000,
    "averageCondition": 3.8,
    "totalCost": 25000000
  },
  "interventions": [
    {
      "id": 301,
      "name": "Preventive Maintenance",
      "description": "Regular maintenance activities",
      "cost": 500000,
      "frequency": "Annual",
      "conditionImpact": 0.2
    },
    {
      "id": 302,
      "name": "Rehabilitation",
      "description": "Major rehabilitation work",
      "cost": 2000000,
      "frequency": "10 Years",
      "conditionImpact": 1.5
    }
  ]
}
```

#### ✏️ Create Baseline Strategy
- **HTTP Method**: POST
- **URL Pattern**: /CreateBaseline
- **Authentication**: 🔒 Required
- **Description**: Creates a new baseline strategy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | CreateBaselineStrategyCommand | Yes | Contains baseline strategy data to create |

##### Response Format
```json
{
  "message": "Baseline strategy created successfully",
  "baselineStrategies": [
    {
      "id": 123,
      "name": "Current Practice - Buildings",
      "description": "Baseline scenario representing current maintenance practices for buildings",
      "assetClassId": 1,
      "assetClassName": "Buildings",
      "createdDate": "2025-01-15T00:00:00Z",
      "createdBy": "John Smith",
      "status": "Active",
      "baseYear": 2025,
      "forecastYears": 10
    },
    {
      "id": 125,
      "name": "Current Practice - Plant & Equipment",
      "description": "New baseline strategy for plant and equipment",
      "assetClassId": 3,
      "assetClassName": "Plant & Equipment",
      "createdDate": "2025-04-17T00:00:00Z",
      "createdBy": "Robert Brown",
      "status": "Active",
      "baseYear": 2025,
      "forecastYears": 10
    }
  ]
}
```

#### 🔄 Copy Strategy
- **HTTP Method**: POST
- **URL Pattern**: /CopyStrategy
- **Authentication**: 🔒 Required
- **Description**: Creates a copy of an existing strategy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | CopyStrategyCommand | Yes | Contains StrategyId to copy and new name/description |

##### Response Format
```json
{
  "strategy": {
    "id": 203,
    "name": "Increased Maintenance - Buildings (Copy)",
    "description": "Copy of scenario with increased preventive maintenance funding",
    "baselineStrategyId": 123,
    "assetClassId": 1,
    "assetClassName": "Buildings",
    "createdDate": "2025-04-17T00:00:00Z",
    "createdBy": "Robert Brown",
    "status": "Active",
    "baseYear": 2025,
    "forecastYears": 10,
    "comparisonMetrics": {
      "netPresentValue": 15000000,
      "averageCondition": 3.8,
      "totalCost": 25000000
    }
  }
}
```

#### 🗑️ Delete Strategy
- **HTTP Method**: POST
- **URL Pattern**: /DeleteStrategy
- **Authentication**: 🔒 Required
- **Description**: Deletes a strategy by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteStrategyCommand | Yes | Contains StrategyId to delete |

##### Response Format
```json
true
```
(Returns success status)

#### ✏️ Export Strategy
- **HTTP Method**: POST
- **URL Pattern**: /Export
- **Authentication**: 🔒 Required
- **Description**: Exports strategy data to a downloadable file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportStrategyQuery | Yes | Contains StrategyId and export options |

##### Response Format
File download (binary content)

#### ✏️ Import Strategy
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required
- **Description**: Imports strategy data from an uploaded file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportStrategyCommand | Yes | Contains file and import options |

##### Response Format
```json
{
  "message": "Strategy imported successfully"
}
```

### 📋 Strategy Types
ℹ️ **Note:** The EasySAM module supports two main types of strategies:

1. **Baseline Strategies**
   - Represent current practice or "do nothing" scenarios
   - Serve as reference points for comparing alternatives
   - Typically one baseline per asset class
   - Project asset performance with existing practices

2. **Alternate Strategies**
   - Explore different intervention approaches
   - Link back to a baseline for comparison
   - Multiple alternates can be created from the same baseline
   - Support cost-benefit analysis of different approaches

### 🧮 Optimization Model
The strategic asset management strategies use an optimization model that considers:

1. **Intervention Types**
   - Maintenance actions (preventive, corrective)
   - Rehabilitation treatments
   - Replacement options
   - Each with defined costs and condition impacts

2. **Performance Metrics**
   - Net Present Value (NPV) of lifecycle costs
   - Average condition score projection
   - Total cost over planning horizon
   - Risk exposure and service levels

3. **Constraints**
   - Budget limitations
   - Minimum condition thresholds
   - Resource availability
   - Timing restrictions

### 📝 Business Context
The EasySAM module provides critical asset management capabilities:

1. **Strategic Planning**
   - Long-term capital works planning
   - Budget optimization across asset portfolio
   - Scenario testing for different funding levels
   - Evidence-based decision support

2. **Financial Forecasting**
   - Projection of future capital and maintenance costs
   - Budget forecasting and prioritization
   - Funding needs assessment
   - Financial sustainability analysis

3. **Risk Management**
   - Identification of critical renewal timings
   - Consequences of deferred maintenance
   - Service level impacts of different strategies
   - Optimization of intervention timing