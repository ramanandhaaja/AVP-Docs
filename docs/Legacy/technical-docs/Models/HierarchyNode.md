# 🏗️ HierarchyNode Model

## 📊 QUICK DOCUMENTATION
- **File Path**: `/Domain/Entities/HierarchyNode.cs`
- **Primary Purpose**: Implements a generic hierarchical structure for organizing asset and component classifications in a multi-level hierarchy
- **Key Fields**:
  - `HierarchyNodeId`: Unique identifier for the node
  - `ParentId`: Reference to the parent node (null for root nodes)
  - `Name`: Display name of the node
  - `Code`: Unique code for the node
  - `Level`: Hierarchy level (0 for root, 1 for children of root, etc.)
  - `HierarchyType`: Type of hierarchy (AssetClass, AssetType, ComponentName, etc.)
  - `SortOrder`: Order for display purposes
- **Relationships**:
  - Parent-child relationships with other `HierarchyNode` entities
  - Referenced by various entities in the asset and component hierarchies
- **Used By**:
  - AssetHierarchyController
  - ComponentHierarchyController
  - ImportHierarchyCommand
  - Asset and Component creation

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The HierarchyNode model is a cornerstone of Asset Valuer Pro's classification system, providing a flexible, recursive hierarchical structure for organizing assets and components. It implements a "composite pattern" that allows for the creation of complex hierarchies while maintaining consistency in structure. The model is used to represent both asset classification hierarchies (AssetClass → AssetType → AssetSubType) and component classification hierarchies (ComponentName → ComponentType → ComponentSubType).

### 🏗️ Model Details
- **Namespace**: `AVP.Domain.Entities`
- **Base Class**: `AuditableEntity`
- **Database Table**: `HierarchyNodes`

### 🏗️ Properties

#### Core Fields
| Property | Type | Description |
|----------|------|-------------|
| `HierarchyNodeId` | Guid | Primary key |
| `ParentId` | Guid? | Foreign key to parent HierarchyNode (null for root nodes) |
| `Name` | string | Display name of the node |
| `Code` | string | Unique code for the node (e.g., "BLD" for Buildings) |
| `Description` | string | Optional description of the node |
| `Level` | int | Hierarchy level (0=root, 1=second level, 2=third level, etc.) |
| `HierarchyType` | Enum | Type of hierarchy (AssetClass, AssetType, AssetSubType, ComponentName, ComponentType, ComponentSubType) |
| `SortOrder` | int | Position for display ordering |

#### Additional Fields
| Property | Type | Description |
|----------|------|-------------|
| `IsActive` | bool | Whether the node is active (inactive nodes are hidden but preserved) |
| `Metadata` | JSON | Optional JSON metadata associated with the node |
| `ExternalId` | string | Optional external identifier for integration purposes |
| `DefaultValuationProfileId` | Guid? | Default valuation profile for this node |

### 🏗️ Navigation Properties
- `Parent`: Reference to the parent HierarchyNode
- `Children`: Collection of child HierarchyNodes
- `DefaultValuationProfile`: Reference to the default ValuationProfile

### 📝 Business Context

The HierarchyNode model directly implements the hierarchical structure described in the legacy documentation:

> "The asset hierarchy is an essential element. It requires all assets to be described based on - Asset Class, Asset Type, Asset Sub-Type. Based on that combination we specify what the 'components' will be and for each 'component' to specify the - Component Type, Component Sub-Type."

This multilevel hierarchy is crucial for the valuation framework, as it determines how assumptions and valuation profiles are applied:

> "The types of assumptions include - Entity level assumptions (valuation profiles), Asset Class level assumptions (valuation profile rules), Asset Level assumptions (asset level unit rates, indices, apportionment), Component level assumptions (component level unit rates, short-life and long-life splits, useful life, residual value)"

The hierarchy determines which assumptions apply to each asset and component.

### 🏗️ Hierarchy Types

The HierarchyNode model supports different types of hierarchies through the HierarchyType property:

#### Asset Hierarchy
1. **AssetClass** (Level 0): Top-level classification (e.g., Buildings, Infrastructure)
2. **AssetType** (Level 1): Sub-classification within a class (e.g., Commercial Buildings, Residential Buildings)
3. **AssetSubType** (Level 2): Detailed classification (e.g., Office Buildings, Retail Buildings)

#### Component Hierarchy
1. **ComponentName** (Level 0): Top-level component category (e.g., Structure, Roof, Services)
2. **ComponentType** (Level 1): Sub-category of component (e.g., Metal Roof, Tiled Roof)
3. **ComponentSubType** (Level 2): Detailed component type (e.g., Colorbond, Zincalume)

### 🏗️ Usage in Valuation Process

The HierarchyNode model plays a critical role in the "Create the Valuation Framework" step of the valuation process:

> "Create the 'Valuation Framework' (this includes an Asset Hierarchy and relevant assumptions)"

This framework is essential for appropriate valuation calculations, as it determines:
1. Which components are expected for each asset type
2. Which valuation profiles apply to different assets and components
3. How unit rates and other assumptions are applied

### 🏗️ Implementation Details

The HierarchyNode is implemented using a recursive self-referencing structure:

1. **Parent-Child Relationships**:
   - Each node (except root nodes) has a parent reference
   - Each node can have multiple children
   - The Level property indicates the depth in the hierarchy

2. **Hierarchy Traversal**:
   - The model includes methods for traversing up and down the hierarchy
   - `GetAncestors()` retrieves all parent nodes up to the root
   - `GetDescendants()` retrieves all child nodes recursively
   - `GetRootNode()` finds the topmost parent
   - `GetSiblings()` finds nodes at the same level with the same parent

3. **Hierarchy Validation**:
   - Ensures consistent typing (e.g., AssetClass can only have AssetType children)
   - Validates level values match the actual position in the hierarchy
   - Prevents circular references
   - Enforces unique codes within the same parent

### 🏗️ Management Operations

The following operations are supported for hierarchy management:

1. **Create Node**:
   - Adds a new node to the hierarchy
   - Automatically sets the Level based on parent
   - Validates hierarchy type consistency

2. **Move Node**:
   - Relocates a node and its descendants to a new parent
   - Updates Level values for all affected nodes
   - Preserves relationships between moved nodes

3. **Copy Node**:
   - Creates a copy of a node and its descendants
   - Generates new IDs for all copied nodes
   - Preserves the structure and relationships

4. **Deactivate Node**:
   - Marks a node as inactive rather than deleting it
   - Preserves historical data while hiding the node from active use
   - Can be reactivated if needed

### ⚡ Performance Considerations

Due to the hierarchical nature and extensive use of this model:

1. **Efficient Querying**:
   - Indexed fields include ParentId, HierarchyType, and Level for efficient querying
   - Specialized queries for common hierarchy operations
   - Hierarchy paths are sometimes denormalized for faster traversal

2. **Caching Strategy**:
   - Hierarchies change infrequently and are accessed often, making them ideal for caching
   - In-memory representation for faster traversal
   - Cache invalidation on hierarchy modifications

3. **Bulk Operations**:
   - Specialized handling for bulk import and export of hierarchies
   - Batch processing for multiple node operations