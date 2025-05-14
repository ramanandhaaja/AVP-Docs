# 📊 AssetHierarchyController Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/AssetHierarchyController.cs
- **Primary Purpose**: Manages the asset hierarchy structure, including asset classes, types, subtypes, component types, and their relationships.
- **Key Endpoints**: 
  - 🔍 GET /GetAssetClassNodes - Retrieves asset class hierarchy nodes
  - 🔍 GET /GetAssetTypeNodes - Retrieves asset type nodes for a specific class
  - 🔄 POST /UpdateHierarchyNode - Updates a node in the asset hierarchy
  - 🗑️ POST /DeleteHierarchyNode - Deletes a node from the hierarchy
  - ✏️ POST /Export - Exports the full asset hierarchy to a file
  - ✏️ POST /Import - Imports an asset hierarchy from a file
- **Related Models**: HierarchyDto, AssetClassNodeDto, AssetTypeNodeDto, AssetSubTypeNodeDto, ComponentTypeNodeDto, ComponentSubTypeNodeDto, ComponentNameNodeDto
- **Used By**: 
  - Asset hierarchy management screens
  - Valuation framework configuration
  - Asset classification system
  - Mobile data capture application

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The AssetHierarchyController is responsible for managing the asset hierarchy, which is a fundamental structure in Asset Valuer Pro that defines how assets are classified and organized. The hierarchy follows a tree structure with asset classes at the top level, followed by asset types, subtypes, and finally component types and subtypes. This controller provides functionality to view, create, update, delete, and manage nodes at all levels of the hierarchy, as well as import/export capabilities.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
  - ICurrentUserService (for user context)
  - BusRegistry (for V2 import functionality)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Asset Class Nodes
- **HTTP Method**: GET
- **URL Pattern**: /GetAssetClassNodes
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves the top level of the asset hierarchy (asset classes)

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetClassNodeQuery | Yes | Filter parameters for asset classes |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Buildings",
    "description": "Building assets",
    "clientId": 456,
    "hasChildren": true
  },
  {
    "id": 2,
    "name": "Infrastructure",
    "description": "Infrastructure assets",
    "clientId": 456,
    "hasChildren": true
  }
]
```

#### 🔍 Get Asset Type Nodes
- **HTTP Method**: GET
- **URL Pattern**: /GetAssetTypeNodes
- **Authentication**: 🔒 Required
- **Description**: Retrieves asset types for a specific asset class

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetTypeNodeQuery | Yes | Contains AssetClassId to retrieve types |

##### Response Format
```json
[
  {
    "id": 101,
    "name": "Commercial",
    "description": "Commercial buildings",
    "assetClassId": 1,
    "hasChildren": true
  },
  {
    "id": 102,
    "name": "Residential",
    "description": "Residential buildings",
    "assetClassId": 1,
    "hasChildren": true
  }
]
```

#### 🔍 Get Asset SubType Nodes
- **HTTP Method**: GET
- **URL Pattern**: /GetAssetSubTypeNodes
- **Authentication**: 🔒 Required
- **Description**: Retrieves asset subtypes for a specific asset type

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetSubTypeNodeQuery | Yes | Contains AssetTypeId to retrieve subtypes |

##### Response Format
```json
[
  {
    "id": 201,
    "name": "Office",
    "description": "Office buildings",
    "assetTypeId": 101,
    "hasChildren": true
  },
  {
    "id": 202,
    "name": "Retail",
    "description": "Retail buildings",
    "assetTypeId": 101,
    "hasChildren": true
  }
]
```

#### 🔄 Update Hierarchy Node
- **HTTP Method**: POST
- **URL Pattern**: /UpdateHierarchyNode
- **Authentication**: 🔒 Required
- **Description**: Creates or updates a node in the asset hierarchy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateHierarchyNodeCommand | Yes | Contains node data to update |

##### Response Format
```json
123
```
(Returns the node ID)

#### 🗑️ Delete Hierarchy Node
- **HTTP Method**: POST
- **URL Pattern**: /DeleteHierarchyNode
- **Authentication**: 🔒 Required
- **Description**: Deletes a node from the asset hierarchy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteHierarchyNodeCommand | Yes | Contains NodeId and NodeType to delete |

##### Response Format
```json
1
```
(Returns number of nodes deleted)

#### ✏️ Export Hierarchy
- **HTTP Method**: POST
- **URL Pattern**: /Export
- **Authentication**: 🔒 Required
- **Description**: Exports the asset hierarchy to a downloadable file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ExportAssetHierarchyQuery | Yes | Export options including which parts of hierarchy to export |

##### Response Format
File download (binary content)

#### ✏️ Import Hierarchy
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required
- **Description**: Imports an asset hierarchy from a file

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportHierarchyCommand | Yes | Contains file and import options |

##### Response Format
```json
{
  "importedCount": 15,
  "failedCount": 0,
  "messages": ["Import completed successfully"]
}
```

#### 🔄 Copy Hierarchy Node
- **HTTP Method**: POST
- **URL Pattern**: /CopyHierarchyNode
- **Authentication**: 🔒 Required
- **Description**: Makes a copy of a hierarchy node and its children

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | CopyHierarchyNodeCommand | Yes | Contains NodeId, NodeType, and destination information |

##### Response Format
```json
456
```
(Returns the new node ID)

### 📋 Hierarchy Structure
ℹ️ **Note:** The asset hierarchy in Asset Valuer Pro follows this structure:

1. **Asset Hierarchy**
   - Asset Class (Buildings, Infrastructure, etc.)
   - → Asset Type (Commercial, Residential, etc.)
   - → → Asset SubType (Office, Retail, etc.)

2. **Component Hierarchy**
   - Component Name (Structure, Roof, etc.)
   - → Component Type (Concrete, Metal, etc.)
   - → → Component SubType (Reinforced, Precast, etc.)

This controller manages both hierarchies through a common set of endpoints with the NodeType parameter indicating which hierarchy is being accessed.

### 📝 Business Context
The asset hierarchy provides critical organizational structure:

1. **Classification System**
   - Standardized asset categorization
   - Consistent naming conventions
   - Hierarchical reporting capabilities

2. **Valuation Framework**
   - Associates valuation methodologies with asset types
   - Applies appropriate parameters by classification
   - Ensures consistent valuation approach for similar assets

3. **Data Capture Templates**
   - Drives mobile app data collection forms
   - Ensures appropriate component collection based on asset type
   - Standardizes data capture across inspectors

### ⚠️ Important Considerations
When working with the asset hierarchy, be aware of these constraints:

1. **Dependency Management**
   - Nodes with children cannot be deleted directly
   - Asset subtypes may have associated component configurations
   - Hierarchy changes may affect valuation profiles

2. **Import/Export Format**
   - Hierarchies are exported in a structured Excel format
   - Import requires specific column headers and relationships
   - Validation occurs before import to ensure data integrity