# 📋 LookupController Documentation

## 📋 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/LookupController.cs
- **Primary Purpose**: Provides centralized lookup endpoints for dropdown lists of various entities in the system, including asset classes, types, subtypes, component types, and financial classes.
- **Key Endpoints**: 
  - 🔍 GET /AssetClass - Retrieves list of asset classes
  - 🔍 GET /AssetType - Retrieves asset types for dropdown lists
  - 🔍 GET /AssetSubType - Retrieves asset subtypes
  - 🔍 GET /ComponentType - Retrieves component types
  - 🔍 GET /ComponentSubType - Retrieves component subtypes
  - ✏️ POST /FinancialAssetClass - Retrieves financial asset classes
- **Related Models**: DropDownDto
- **Used By**: 
  - Dropdown components throughout the user interface
  - Form selection fields
  - Asset and component creation/editing screens
  - Filtering components

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The LookupController serves as a central provider of dropdown list data throughout the Asset Valuer Pro application. It handles requests for various entities that need to be presented in dropdown lists, such as asset classes, asset types, component types, and financial categories. This controller simplifies the retrieval of standard selection lists, ensuring consistent data presentation across the application.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Asset Class List
- **HTTP Method**: GET
- **URL Pattern**: /AssetClass
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of asset classes for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetClassListQuery | Yes | Filter parameters for asset classes |

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

#### 🔍 Get Asset Type List
- **HTTP Method**: GET
- **URL Pattern**: /AssetType
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of asset types for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | AssetTypeListQuery | Yes | Contains AssetClassId to filter types |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "Commercial"
  },
  {
    "id": 102,
    "name": "Residential"
  },
  {
    "id": 103,
    "name": "Industrial"
  }
]
```

#### 🔍 Get Asset SubType List
- **HTTP Method**: GET
- **URL Pattern**: /AssetSubType
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of asset subtypes for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | AssetSubTypeListQuery | Yes | Contains AssetTypeId to filter subtypes |

##### Response Format
```json
[
  {
    "id": 201,
    "name": "Office"
  },
  {
    "id": 202,
    "name": "Retail"
  },
  {
    "id": 203,
    "name": "Mixed Use"
  }
]
```

#### 🔍 Get Component Type List
- **HTTP Method**: GET
- **URL Pattern**: /ComponentType
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of component types for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ComponentTypeListQuery | Yes | Filter parameters for component types |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Structural"
  },
  {
    "id": 2,
    "name": "Mechanical"
  },
  {
    "id": 3,
    "name": "Electrical"
  }
]
```

#### 🔍 Get Component SubType List
- **HTTP Method**: GET
- **URL Pattern**: /ComponentSubType
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of component subtypes for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ComponentSubTypeListQuery | Yes | Contains ComponentTypeId to filter subtypes |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "External Walls"
  },
  {
    "id": 102,
    "name": "Internal Walls"
  },
  {
    "id": 103,
    "name": "Roof Structure"
  }
]
```

#### ✏️ Get Financial Asset Class List
- **HTTP Method**: POST
- **URL Pattern**: /FinancialAssetClass
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of financial asset classes for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | FinancialAssetClassListQuery | Yes | Filter parameters for financial asset classes |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Land"
  },
  {
    "id": 2,
    "name": "Buildings & Improvements"
  },
  {
    "id": 3,
    "name": "Plant & Equipment"
  }
]
```

#### 🔍 Get Financial Asset SubClass List
- **HTTP Method**: GET
- **URL Pattern**: /FinancialAssetSubClass
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of financial asset subclasses for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | FinancialAssetSubClassListQuery | Yes | Contains FinancialAssetClassId to filter subclasses |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "Operational Land"
  },
  {
    "id": 102,
    "name": "Community Land"
  },
  {
    "id": 103,
    "name": "Land Under Roads"
  }
]
```

#### ✏️ Get Valuation Profile List
- **HTTP Method**: POST
- **URL Pattern**: /ValuationProfile
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of valuation profiles for dropdown selection

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ValuationProfileListQuery | Yes | Filter parameters for valuation profiles |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Standard Building Valuation"
  },
  {
    "id": 2,
    "name": "Infrastructure Valuation"
  },
  {
    "id": 3,
    "name": "Land Valuation"
  }
]
```

### 🔗 Lookup Type Categories
ℹ️ **Note:** The LookupController manages several categories of lookup data:

1. **Asset Hierarchy**
   - Asset Classes, Types, SubTypes
   - Provides the core classification structure

2. **Component Hierarchy**
   - Component Types and SubTypes
   - Provides component classification options

3. **Financial Classification**
   - Financial Asset Classes and SubClasses
   - Used for financial reporting categorization

4. **Valuation Parameters**
   - Valuation Profiles
   - Used for setting valuation calculation rules

### 📋 Response Format
All endpoints return a standardized DropDownDto format with:
- `id`: The unique identifier for the lookup item
- `name`: The display name for dropdown selection
- Optional additional fields depending on the lookup type

### 📝 Business Context
The lookup system provides important business benefits:

1. **Standardization**
   - Ensures consistent naming and classification
   - Centralizes the management of lookup options
   - Maintains referential integrity in selections

2. **User Interface Support**
   - Powers dropdown selection components
   - Enables dynamic filtering of related options
   - Simplifies form data entry

3. **Data Quality**
   - Prevents free-text entry errors
   - Enforces valid selection options
   - Maintains data consistency across the application

### ⚡ Performance Considerations
💡 **Tip:** Lookup results are frequently accessed during user interaction. Consider:
- Client-side caching of common lookup data
- Using the most specific endpoint for filtered results
- Implementing cascading dropdowns to limit result sizes