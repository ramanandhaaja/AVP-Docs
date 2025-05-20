
# ComponentHierarchyController

## File Location
- **Path**: `/API/Controllers/ComponentHierarchyController.cs`
- **Purpose**: This controller handles the hierarchy of components that define an asset's structure, such as types, subtypes, and names of components used across different assets.

## Overview
The `ComponentHierarchyController` is responsible for managing and retrieving hierarchical information about asset components. Components can be grouped into:
- **Component Names** (e.g., Structure, Roof),
- **Component Types** (e.g., Structural, Mechanical),
- **Component SubTypes** (e.g., External Walls, Roof Structure).

This controller supports various application modules such as:
- Asset configuration screens
- Dropdowns for component selections
- Valuation and lifecycle modeling tools

It ensures consistency in component naming, classification, and data retrieval across the application.

## Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**:
  - `Mediator` (for CQRS pattern)
  - `ICurrentUserService` (for accessing user context)

---

## Available Endpoints

### GET /GetComponentNamesByAsset

**Description**: Retrieves a list of component names related to a specific asset.

**Request Parameters**:
- `AssetId` (inside `GetComponentNamesByAssetQuery`) — *Required*

**Response Example**:
```json
[
  { "id": 101, "name": "Structure" },
  { "id": 102, "name": "Roof" },
  { "id": 103, "name": "HVAC" }
]
```

---

### GET /GetComponentNames

**Description**: Retrieves a list of component names based on filtering criteria.

**Request Parameters**:
- `GetComponentNamesQuery` — *Required*

**Response Example**:
```json
[
  { "id": 101, "name": "Structure" },
  { "id": 102, "name": "Roof" }
]
```

---

### GET /GetComponentHierarchyList

**Description**: Returns the complete hierarchy of component names, types, and subtypes.

**Request Parameters**:
- `GetComponentHierarchyListQuery` — *Required*

**Response Example**:
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
  }
]
```

---

### GET /GetComponentTypes

**Description**: Returns a list of all available component types.

**Request Parameters**:
- `GetComponentTypesQuery` — *Required*

**Response Example**:
```json
[
  { "id": 1, "name": "Structural" },
  { "id": 2, "name": "Mechanical" },
  { "id": 3, "name": "Electrical" }
]
```

---

### GET /GetComponentSubTypes

**Description**: Returns subtypes for a given component type.

**Request Parameters**:
- `ComponentTypeId` (inside `GetComponentSubTypesQuery`) — *Required*

**Response Example**:
```json
[
  { "id": 10, "name": "External Walls" },
  { "id": 11, "name": "Roof Structure" },
  { "id": 12, "name": "Internal Walls" }
]
```

---

## Component Hierarchy Explained

The component hierarchy is structured as follows:

1. **Component Name**: Top-level categorization (e.g., Roof, Structure)
2. **Component Type**: Sub-categorization based on material or function (e.g., Structural, Mechanical)
3. **Component SubType**: Detailed specifications (e.g., External Walls, Roof Structure)

---

## Business Use Cases

1. **Standardization**: Ensures uniform naming and classification of components across different teams and systems.
2. **Valuation Framework**: Supports detailed breakdowns for cost estimation and lifecycle planning.
3. **Strategic Asset Management**: Enables renewal planning, maintenance scheduling, and long-term asset forecasting.

---

## Related Data Models
- `DropDownDto`
- `ComponentHierarchyList`

---

## Consumers
- Asset management interfaces
- Component configuration screens
- Dropdown UI elements
- Lifecycle and costing tools
