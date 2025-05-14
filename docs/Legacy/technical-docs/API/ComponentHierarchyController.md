# 📊 ComponentHierarchyController Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ComponentHierarchyController.cs
- **Primary Purpose**: Manages component hierarchy information, providing lookups for component types, subtypes, and names within the asset structure.
- **Key Endpoints**: 
  - 🔍 GET /GetComponentNames - Retrieves component names based on filters
  - 🔍 GET /GetComponentTypes - Retrieves component types list
  - 🔍 GET /GetComponentSubTypes - Retrieves component subtypes for a given type
  - 🔍 GET /GetComponentNamesByAsset - Retrieves components for a specific asset
  - 🔍 GET /GetComponentHierarchyList - Retrieves the complete component hierarchy
- **Related Models**: DropDownDto, ComponentHierarchyList
- **Used By**: 
  - Asset management screens
  - Component configuration
  - Component selection dropdowns
  - Data capture interfaces

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ComponentHierarchyController manages the component hierarchy, which is a key part of the asset structure in Asset Valuer Pro. Components are the building blocks that make up assets (e.g., a building asset might have components like structure, roof, HVAC, etc.). This controller provides lookups and filtering capabilities for component types, subtypes, and names, supporting the component selection and hierarchy navigation throughout the application.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
  - ICurrentUserService (for user context)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Component Names By Asset
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentNamesByAsset
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves component names for a specific asset

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentNamesByAssetQuery | Yes | Contains AssetId to retrieve component names |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "Structure"
  },
  {
    "id": 102,
    "name": "Roof"
  },
  {
    "id": 103,
    "name": "HVAC"
  }
]
```

#### 🔍 Get Component Names
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentNames
- **Authentication**: 🔒 Required
- **Description**: Retrieves component names based on filter criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentNamesQuery | Yes | Filter criteria for component names |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "Structure"
  },
  {
    "id": 102,
    "name": "Roof"
  }
]
```

#### 🔍 Get Component Hierarchy List
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentHierarchyList
- **Authentication**: 🔒 Required
- **Description**: Retrieves the complete component hierarchy structure

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentHierarchyListQuery | Yes | Filter parameters for hierarchy |

##### Response Format
```json
[
  {
    "componentNameId": 101,
    "componentName": "Structure",
    "componentTypeId": 1,
    "componentType": "Structural",
    "componentSubTypeId": 10,
    "componentSubType": "External Walls",
    "assetClassId": 1,
    "assetTypeName": "Building",
    "assetType": "Commercial",
    "assetSubType": "Office"
  },
  {
    "componentNameId": 102,
    "componentName": "Roof",
    "componentTypeId": 1,
    "componentType": "Structural",
    "componentSubTypeId": 11,
    "componentSubType": "Roof Structure",
    "assetClassId": 1,
    "assetTypeName": "Building",
    "assetType": "Commercial",
    "assetSubType": "Office"
  }
]
```

#### 🔍 Get Component Types
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentTypes
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of component types

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentTypesQuery | Yes | Filter parameters for component types |

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

#### 🔍 Get Component SubTypes
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentSubTypes
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of component subtypes for a specific component type

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentSubTypesQuery | Yes | Contains ComponentTypeId and other filters |

##### Response Format
```json
[
  {
    "id": 10,
    "name": "External Walls"
  },
  {
    "id": 11,
    "name": "Roof Structure"
  },
  {
    "id": 12,
    "name": "Internal Walls"
  }
]
```

### 🔗 Component Hierarchy Structure
ℹ️ **Note:** The component hierarchy follows this structure:

1. **Component Name** (Level 1)
   - Top-level categorization (e.g., Structure, Roof, HVAC)
   - Defines major building blocks of an asset

2. **Component Type** (Level 2)
   - Sub-categorization of component names (e.g., Metal Roof, Tiled Roof)
   - Defines material or construction type variations

3. **Component SubType** (Level 3)
   - Detailed specification (e.g., Colorbond, Terracotta)
   - Defines specific implementations for costing and lifecycle modeling

This hierarchy provides a standardized framework for component classification across the system.

### 📝 Asset-Component Relationship
The component hierarchy has a direct relationship with the asset hierarchy:

- **Asset Class** → Can have specific component configurations
- **Asset Type** → Refines available components
- **Asset SubType** → Defines the exact component template

When an asset is created, the component structure is often determined by its classification in the asset hierarchy. The ComponentHierarchyController helps manage these relationships and provides the necessary lookups to maintain consistent component classification.

### 📝 Business Context
Component hierarchy provides important business benefits:

1. **Standardization**
   - Ensures consistent component naming and classification
   - Supports componentized valuation approaches
   - Enables consistent lifecycle modeling

2. **Valuation Framework**
   - Allows different valuation parameters by component type
   - Supports detailed cost breakdowns
   - Enables component-level condition assessment

3. **Strategic Asset Management**
   - Facilitates component-level renewal planning
   - Supports maintenance scheduling by component
   - Enables accurate component lifecycle forecasting