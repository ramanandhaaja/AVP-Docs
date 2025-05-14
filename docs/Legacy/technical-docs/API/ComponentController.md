# 📊 ComponentController Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ComponentController.cs
- **Primary Purpose**: Manages components, which are the sub-elements that make up assets, including their creation, retrieval, update, deletion, and import/export functionality.
- **Key Endpoints**: 
  - ✏️ POST /SearchComponents - Searches for components based on criteria
  - 🔍 GET /Get - Retrieves a specific component by ID
  - 🔄 POST /Update - Updates component details
  - ✏️ POST /Import - Imports components from a file
  - ✏️ POST /Export - Exports components to a file
  - 🧮 POST /CalculateConsumptionScore - Calculates consumption score for a component
- **Related Models**: ComponentDto, ComponentSummaryDto, ComponentEditDto
- **Used By**: 
  - Asset detail screens for component management
  - Component data capture interfaces
  - Component valuation processes
  - Data import/export features

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ComponentController manages components, which are the building blocks that make up assets in Asset Valuer Pro. For example, a building asset might have components like structure, roof, HVAC, plumbing, and electrical systems. Each component has its own attributes, valuation parameters, and replacement costs. This controller provides functionality for searching, retrieving, updating, deleting, and importing/exporting components.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### ✏️ Search Components
- **HTTP Method**: POST
- **URL Pattern**: /SearchComponents
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Searches for components based on various criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | SearchComponentsQuery | Yes | Search criteria for components |

##### Response Format
```json
[
  {
    "id": 123,
    "assetId": 456,
    "name": "Roof",
    "componentType": "Structural",
    "componentSubType": "Roof Structure",
    "condition": "Good",
    "replacementCost": 150000
  },
  {
    "id": 124,
    "assetId": 456,
    "name": "HVAC",
    "componentType": "Mechanical",
    "componentSubType": "Heating/Cooling",
    "condition": "Fair",
    "replacementCost": 75000
  }
]
```

#### 🔍 Get Component By ID
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific component by its ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentQuery | Yes | Contains ComponentId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "assetId": 456,
  "name": "Roof",
  "componentType": "Structural",
  "componentSubType": "Roof Structure",
  "componentTypeId": 1,
  "componentSubTypeId": 10,
  "description": "Main roof structure with composite shingles",
  "condition": "Good",
  "conditionDate": "2025-01-15T00:00:00Z",
  "inspector": "John Smith",
  "replacementCost": 150000,
  "quantity": 500,
  "quantityUom": "sqm",
  "installDate": "2015-06-01T00:00:00Z",
  "expectedLifeYears": 25,
  "remainingLifeYears": 15,
  "notes": [
    {
      "id": 201,
      "text": "Replaced shingles in west section in 2022",
      "author": "Sarah Johnson",
      "date": "2022-08-10T00:00:00Z"
    }
  ]
}
```

#### 🔍 Get Component for Editing
- **HTTP Method**: GET
- **URL Pattern**: /GetEdit
- **Authentication**: 🔒 Required
- **Description**: Retrieves a component with data specifically formatted for editing

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentEditQuery | Yes | Contains ComponentId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "assetId": 456,
  "name": "Roof",
  "componentTypeId": 1,
  "componentSubTypeId": 10,
  "description": "Main roof structure with composite shingles",
  "condition": "Good",
  "conditionScore": 4,
  "conditionDate": "2025-01-15T00:00:00Z",
  "inspector": "John Smith",
  "editable": true,
  "allowedValues": {
    "conditionScores": [1, 2, 3, 4, 5],
    "componentTypes": [
      {"id": 1, "name": "Structural"},
      {"id": 2, "name": "Mechanical"}
    ]
  }
}
```

#### 🔄 Update Component
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates an existing component or creates a new one

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateComponentCommand | Yes | Contains component data to update |

##### Response Format
```json
123
```
(Returns the component ID)

#### 🧮 Calculate Consumption Score
- **HTTP Method**: POST
- **URL Pattern**: /CalculateConsumptionScore
- **Authentication**: 🔒 Required
- **Description**: Calculates the consumption score for a component based on its condition and age

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | CalculateConsumptionScoreQuery | Yes | Contains parameters for calculating consumption |

##### Response Format
```json
0.35
```
(Returns the calculated consumption score as a decimal)

#### 🗑️ Delete Component
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a component by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteComponentCommand | Yes | Contains ComponentId to delete |

##### Response Format
```json
1
```
(Returns the number of components deleted)

#### ✏️ Import Components
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required
- **Description**: Imports components from a spreadsheet or CSV file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportComponentsCommand | Yes | Contains file and import parameters |

##### Response Format
```json
{
  "message": "Successfully imported 15 components"
}
```

#### ✏️ Export Components
- **HTTP Method**: POST
- **URL Pattern**: /Export
- **Authentication**: 🔒 Required
- **Description**: Exports components to a downloadable file (CSV or Excel)

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportComponentsQuery | Yes | Contains export parameters and filters |

##### Response Format
File download (binary content)

### 📊 Component Model
ℹ️ **Note:** Components are the building blocks of assets:

1. **Component Composition**
   - Assets are composed of multiple components
   - Each component has its own lifecycle characteristics
   - Components can be valued independently

2. **Component Hierarchy**
   - Components belong to specific component types and subtypes
   - This classification determines valuation parameters
   - Hierarchy affects useful life and replacement costs

### 🧮 Condition Assessment
A key aspect of component management is condition assessment:

1. **Condition Score**
   - Components are rated on a scale (typically 1-5)
   - Scores represent physical condition (1=Poor, 5=Excellent)
   - Scores are captured during field inspections

2. **Consumption Score**
   - Calculated from condition score and age factors
   - Represents percentage of useful life consumed
   - Used in depreciation calculations
   - Formula: `Consumption = (1 - ConditionFactor) + AgeFactor × ConditionFactor`

### 📝 Business Context
Component-level management provides important benefits:

1. **Detailed Valuation**
   - Enables component-level depreciation
   - Accounts for different lifecycle characteristics
   - Improves valuation accuracy

2. **Asset Management**
   - Supports component renewal planning
   - Enables targeted maintenance programs
   - Facilitates condition monitoring

3. **Financial Reporting**
   - Supports componentization requirements in accounting standards
   - Provides detailed support for depreciation policies
   - Enables more precise fair value measurements