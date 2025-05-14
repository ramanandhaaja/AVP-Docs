# 🧮 ComponentReplacementCostController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ComponentReplacementCostController.cs
- **Primary Purpose**: Manages replacement cost data for components, which is critical for valuation calculations.
- **Key Endpoints**: 
  - 🔍 GET /Get - Retrieves replacement cost data for a specific component
  - 🔄 POST /Update - Updates component replacement cost information
  - 🗑️ POST /Delete - Deletes component replacement cost data
- **Related Models**: ReplacementCostDto
- **Used By**: 
  - Component valuation screens
  - Cost approach valuation calculations
  - Component detail views
  - Replacement cost estimation tools

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ComponentReplacementCostController manages replacement cost data for components, which is a key element in the cost approach to valuation. Replacement costs represent the current cost to replace a component with a new one of similar utility, and they serve as the foundation for depreciated replacement cost calculations. This controller provides functionality to retrieve, update, and delete replacement cost data for components.

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
- **Description**: Retrieves replacement cost data for a specific component

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentReplacementCostQuery | Yes | Contains ComponentId to retrieve replacement cost data |

##### Response Format
```json
{
  "id": 123,
  "componentId": 456,
  "replacementCost": 75000,
  "quantity": 1,
  "quantityUom": "ea",
  "unitRate": 75000,
  "unitRateUom": "ea",
  "costingMethod": "UnitRate",
  "sourceOfCost": "Industry Standard",
  "lastUpdated": "2025-01-15T00:00:00Z",
  "notes": "Includes installation and commissioning",
  "referenceLocation": "Sydney Metropolitan Area",
  "extraCostItems": [
    {
      "description": "Removal of existing equipment",
      "cost": 5000
    },
    {
      "description": "Modifications to existing infrastructure",
      "cost": 3000
    }
  ]
}
```

#### 🔄 Update Component Replacement Cost
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates replacement cost data for a component

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateComponentReplacementCostCommand | Yes | Contains replacement cost data to update |

##### Response Format
```json
123
```
(Returns the replacement cost record ID)

#### 🗑️ Delete Replacement Cost
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes replacement cost data for a component

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteComponentReplacementCostCommand | Yes | Contains ReplacementCostId to delete |

##### Response Format
```json
1
```
(Returns the number of records deleted)

### 🧮 Cost Determination Methods
ℹ️ **Note:** The component replacement cost can be determined through several methods:

1. **Unit Rate Method**
   - Cost = Unit Rate × Quantity
   - Example: 500 m² of roof at $200/m² = $100,000
   - Most common method for standardized components

2. **Lump Sum Method**
   - Single cost for entire component
   - Used for specialized or unique components
   - Often based on supplier quotes or historical data

3. **Cost Build-Up Method**
   - Component cost is built from sub-components
   - Detailed breakdown of materials, labor, equipment
   - Used for complex or custom components

### 🧮 Cost Elements
Replacement costs typically include:

1. **Direct Costs**
   - Materials
   - Labor
   - Equipment
   - Installation

2. **Indirect Costs**
   - Professional fees (design, engineering)
   - Project management
   - Temporary works
   - Contractor margins

3. **Specific Adjustments**
   - Location factors (regional cost variations)
   - Time-based adjustments (inflation)
   - Size/complexity factors
   - Access considerations

### 📝 Business Context
Replacement cost data serves several critical business functions:

1. **Valuation Foundation**
   - Forms the basis for cost approach valuations
   - Starting point for depreciated replacement cost (DRC) calculations
   - Essential for insurance valuation purposes

2. **Asset Management**
   - Supports capital planning and budgeting
   - Enables accurate renewal forecasting
   - Provides cost benchmarking across asset portfolio

3. **Financial Planning**
   - Informs depreciation rates and useful life parameters
   - Supports capital expenditure forecasting
   - Enables accurate financial projections for asset replacement