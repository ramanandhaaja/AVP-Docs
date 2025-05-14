# 🧮 ValuationClassController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ValuationClassController.cs
- **Primary Purpose**: Manages valuation classes, which define categories of assets for valuation purposes with similar characteristics and valuation methods.
- **Key Endpoints**: 
  - ✏️ POST /List - Retrieves a dropdown list of valuation classes
  - 🔍 GET /ListSummary - Gets a detailed list of valuation classes
  - 🔍 GET /GetValuationClass - Retrieves a specific valuation class
  - 🔄 POST /UpdateValuationClass - Creates or updates a valuation class
  - 🗑️ POST /Delete - Deletes a valuation class
- **Related Models**: ValuationClassDto, DropDownDto
- **Used By**: 
  - Valuation framework configuration screens
  - Asset classification for valuation purposes
  - Valuation method assignment

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ValuationClassController manages valuation classes, which are categories used to group assets with similar valuation characteristics. Valuation classes help establish consistent valuation methodologies for similar types of assets, ensuring uniformity in the valuation process. This controller provides functionality to retrieve, create, update, and delete valuation classes in the system.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### ✏️ Get Valuation Classes (Dropdown)
- **HTTP Method**: POST
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of valuation classes for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ValuationClassDropDownsQuery | Yes | Filter parameters for valuation classes |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Buildings"
  },
  {
    "id": 2,
    "name": "Infrastructure"
  },
  {
    "id": 3,
    "name": "Land"
  }
]
```

#### 🔍 List Valuation Classes (Summary)
- **HTTP Method**: GET
- **URL Pattern**: /ListSummary
- **Authentication**: 🔒 Required
- **Description**: Retrieves a detailed list of valuation classes

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetValuationClassListQuery | Yes | Query parameters for filtering valuation classes |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Buildings",
    "description": "All building assets",
    "clientId": 456,
    "valuationMethod": "CostApproach",
    "isActive": true,
    "isGlobal": false
  },
  {
    "id": 2,
    "name": "Infrastructure",
    "description": "All infrastructure assets",
    "clientId": 456,
    "valuationMethod": "CostApproach",
    "isActive": true,
    "isGlobal": false
  }
]
```

#### 🔍 Get Valuation Class
- **HTTP Method**: GET
- **URL Pattern**: /GetValuationClass
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific valuation class by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetValuationClassQuery | Yes | Contains ValuationClassId to retrieve |

##### Response Format
```json
{
  "id": 1,
  "name": "Buildings",
  "description": "All building assets",
  "clientId": 456,
  "valuationMethod": "CostApproach",
  "isActive": true,
  "isGlobal": false,
  "assetClassIds": [1, 2, 3],
  "valuationProfileId": 123
}
```

#### 🔄 Update Valuation Class
- **HTTP Method**: POST
- **URL Pattern**: /UpdateValuationClass
- **Authentication**: 🔒 Required
- **Description**: Creates or updates a valuation class

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateValuationClassCommand | Yes | Contains valuation class data to update |

##### Response Format
```json
1
```
(Returns the valuation class ID)

#### 🗑️ Delete Valuation Class
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a valuation class and returns the updated list

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteValuationClassCommand | Yes | Contains ValuationClassId to delete |

##### Response Format
```json
[
  {
    "id": 2,
    "name": "Infrastructure",
    "description": "All infrastructure assets",
    "clientId": 456,
    "valuationMethod": "CostApproach",
    "isActive": true,
    "isGlobal": false
  },
  {
    "id": 3,
    "name": "Land",
    "description": "All land assets",
    "clientId": 456,
    "valuationMethod": "MarketApproach",
    "isActive": true,
    "isGlobal": false
  }
]
```
(Returns the remaining valuation classes after deletion)

### 🧮 Valuation Class Purpose
ℹ️ **Note:** Valuation classes serve as a key organizational element in the valuation framework:

1. **Valuation Method Assignment**
   - Associates assets with specific valuation approaches (Cost, Market, Income)
   - Determines which calculation methodology applies to assets
   - Standardizes valuation approach for similar asset types

2. **Fair Value Measurement**
   - Defines the fair value hierarchy level (Level 1, 2, or 3)
   - Specifies valuation techniques for fair value disclosure
   - Supports accounting standard disclosure requirements

3. **Asset Classification**
   - Groups assets with similar characteristics
   - Provides consistent treatment across asset types
   - Allows for bulk update of valuation parameters

### 🔗 Asset-Valuation Class Relationship
Assets are associated with valuation classes to determine their valuation approach:

- **Asset** → Links to → **Valuation Class**
- Valuation class determines calculation method
- Multiple asset types can share the same valuation class
- Valuation classes can link to valuation profiles for detailed parameters

### 🔒 Regulatory Context
Valuation classes directly support reporting requirements:

1. **IFRS 13 / AASB 13 Compliance**
   - Fair value measurement hierarchy classification
   - Valuation technique disclosures
   - Input level categorization (Level 1, 2, or 3)

2. **Financial Statement Notes**
   - Organization of fair value disclosure notes
   - Grouping of assets for note presentation
   - Valuation technique documentation

### 📝 Business Benefits
Valuation classes deliver several business advantages:

1. **Consistency**
   - Ensures uniform valuation approach for similar assets
   - Standardizes treatment across reporting periods
   - Reduces risk of inconsistent methodologies

2. **Efficiency**
   - Allows mass assignment of valuation methods
   - Simplifies configuration of valuation parameters
   - Reduces redundant configuration