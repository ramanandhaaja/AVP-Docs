# 🔧 FilterController Documentation

## QUICK DOCUMENTATION
- **File Path**: `/API/Controllers/FilterController.cs`
- **Primary Purpose**: Provides filtering options for various asset hierarchy elements
- **Key Endpoints**: 
  - 🔍 `POST /api/Filter/AssetType`: Returns available asset types based on filter criteria
  - 🔍 `POST /api/Filter/ComponentType`: Returns available component types based on filter criteria
  - 🔍 `POST /api/Filter/AssetId`: Returns available asset IDs based on filter criteria
- **Related Models**: 
  - Various filter query DTOs for different asset hierarchy levels
- **Used By**: 
  - UI components for filtering data in reports and asset views
  - Search functionality across the application

## 📝 Business Context
The FilterController supports the asset hierarchy structure described in the Overview document, where assets are organized by Asset Class, Asset Type, and Asset Sub-Type, and components are organized by Component Type and Component Sub-Type. This controller enables users to filter assets and components according to this hierarchy.

## DETAILED DOCUMENTATION

### 📝 Overview
FilterController provides endpoints that return filtered lists of options for various asset hierarchy elements. These endpoints are primarily used by dropdown menus and filter controls in the user interface, enabling users to narrow down data based on asset hierarchy criteria.

### 🏗️ Controller Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**: 
  - `Mediator`: For handling filter queries
- **Other Dependencies**: 
  - Inherits from `ApiController`

### 📋 Endpoints

#### 🔍 Get Asset Types
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/AssetType`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available asset types based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | AssetTypeOptionListQuery | Yes | Filter criteria for asset types |

##### Response Format
```json
[
  "Asset Type 1",
  "Asset Type 2",
  "Asset Type 3"
]
```

#### 🔍 Get Asset Sub-Types
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/AssetSubType`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available asset sub-types based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | AssetSubTypeOptionListQuery | Yes | Filter criteria for asset sub-types |

##### Response Format
```json
[
  "Asset Sub-Type 1",
  "Asset Sub-Type 2",
  "Asset Sub-Type 3"
]
```

#### 🔍 Get Components
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/Component`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available components based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ComponentOptionListQuery | Yes | Filter criteria for components |

##### Response Format
```json
[
  "Component 1",
  "Component 2",
  "Component 3"
]
```

#### 🔍 Get Component Types
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/ComponentType`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available component types based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ComponentTypeOptionListQuery | Yes | Filter criteria for component types |

##### Response Format
```json
[
  "Component Type 1",
  "Component Type 2",
  "Component Type 3"
]
```

#### 🔍 Get Component Sub-Types
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/ComponentSubType`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available component sub-types based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ComponentSubTypeOptionListQuery | Yes | Filter criteria for component sub-types |

##### Response Format
```json
[
  "Component Sub-Type 1",
  "Component Sub-Type 2",
  "Component Sub-Type 3"
]
```

#### 🔍 Get Asset IDs
- **HTTP Method**: POST
- **URL Pattern**: `/api/Filter/AssetId`
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Returns a list of available asset IDs based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | AssetIdOptionListQuery | Yes | Filter criteria for asset IDs |

##### Response Format
```json
[
  "Asset-001",
  "Asset-002",
  "Asset-003"
]
```

### 💡 Implementation Notes
- ℹ️ All endpoints follow the same pattern of accepting a query object and returning a filtered list of string values
- 🔗 The query objects typically contain criteria such as job ID, asset class, or other contextual filters
- 🌐 These endpoints are primarily used to populate dropdown lists in the UI for interactive filtering
- ⚡ Responses are optimized to return only the necessary string values, making them fast and lightweight