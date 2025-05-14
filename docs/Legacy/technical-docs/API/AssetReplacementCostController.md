# 🧮 AssetReplacementCostController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/AssetReplacementCostController.cs
- **Primary Purpose**: Manages replacement cost data for assets, which is used in cost approach valuations and insurance calculations.
- **Key Endpoints**: 
  - 🔍 GET /Get - Retrieves replacement cost data for a specific asset
  - 🔄 POST /Update - Updates asset replacement cost information
  - 🗑️ POST /Delete - Deletes asset replacement cost data
- **Related Models**: ReplacementCostDto
- **Used By**: 
  - Asset valuation screens
  - Cost approach valuation calculations
  - Insurance value determination
  - Asset detail views

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The AssetReplacementCostController manages replacement cost data for assets, which is essential for both cost approach valuations and insurance calculations. Replacement costs represent the current cost to replace an asset with a new one of similar utility. This controller provides functionality to retrieve, update, and delete replacement cost data for assets, supporting both manual entry and calculated values.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Replacement Cost
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves replacement cost data for a specific asset

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetReplacementCostQuery | Yes | Contains AssetId to retrieve replacement cost data |

##### Response Format
```json
{
  "id": 123,
  "assetId": 456,
  "replacementCost": 2500000,
  "quantity": 1000,
  "quantityUom": "sqm",
  "unitRate": 2500,
  "unitRateUom": "sqm",
  "costingMethod": "UnitRate",
  "sourceOfCost": "Professional Estimate",
  "lastUpdated": "2025-01-15T00:00:00Z",
  "notes": "Based on current construction costs for commercial buildings",
  "referenceLocation": "Brisbane CBD",
  "calculatedFromComponents": false,
  "componentCostsTotal": 2450000,
  "additionalCosts": [
    {
      "description": "Site preparation",
      "cost": 50000
    },
    {
      "description": "Professional fees",
      "cost": 150000
    }
  ]
}
```

#### 🔄 Update Asset Replacement Cost
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates replacement cost data for an asset

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateAssetReplacementCostCommand | Yes | Contains replacement cost data to update |

##### Response Format
```json
123
```
(Returns the replacement cost record ID)

#### 🗑️ Delete Replacement Cost
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes replacement cost data for an asset

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteAssetReplacementCostCommand | Yes | Contains ReplacementCostId to delete |

##### Response Format
```json
1
```
(Returns the number of records deleted)

### 🧮 Asset vs. Component Costs
ℹ️ **Note:** Asset replacement costs can be derived through two primary methods:

1. **Direct Asset Costing**
   - Assigns replacement cost directly to the asset
   - Uses unit rates applied to asset measurements
   - Suitable for simpler assets or when component breakdown isn't needed

2. **Component Aggregation**
   - Sums the replacement costs of all components
   - Adds additional costs not captured at component level
   - Provides more detailed and defensible valuations
   - Indicated by `calculatedFromComponents = true`

The controller supports both methods, allowing flexibility based on valuation requirements.

### 🧮 Cost Determination Approaches
Asset replacement costs can be determined through several approaches:

1. **Unit Rate Method**
   - Cost = Unit Rate × Quantity
   - Example: 1000 m² building at $2,500/m² = $2,500,000
   - Most common for standardized asset types

2. **Cost Build-Up Method**
   - Sum of all component costs plus additional costs
   - Detailed breakdown of all asset elements
   - Provides transparent and auditable valuation

3. **External Valuation Method**
   - Cost based on professional valuation
   - Used for specialized or unique assets
   - Often references external valuation reports

### 📝 Business Context
Asset replacement cost data serves several critical business functions:

1. **Cost Approach Valuation**
   - Forms the basis for depreciated replacement cost calculations
   - Establishes gross replacement cost before depreciation
   - Supports financial reporting requirements

2. **Insurance Valuation**
   - Determines full replacement insurance coverage
   - Supports insurance premium calculations
   - Identifies reinstatement cost requirements

3. **Asset Management**
   - Supports capital planning and budgeting
   - Provides baseline for lifecycle cost analysis
   - Enables accurate financial forecasting