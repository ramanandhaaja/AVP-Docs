
# ComponentController

## File Location
- **Path**: `/API/Controllers/ComponentController.cs`
- **Purpose**: Handles operations related to asset components such as searching, retrieval, editing, updating, importing, exporting, and calculating condition/consumption scores.

## Overview
The `ComponentController` manages components, which are the sub-elements that make up an asset (e.g., structure, roof, HVAC). Each component may have specific attributes such as condition, replacement cost, and expected lifespan. This controller supports comprehensive operations for creating, updating, retrieving, importing, and exporting component information.

## Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**:
  - `Mediator` (for CQRS pattern)

---

## Available Endpoints

### POST /SearchComponents

**Description**: Search components using filters such as asset ID, name, or condition.

**Request Parameters**:
- `SearchComponentsQuery` — *Required*

**Response Example**:
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
  }
]
```

---

### GET /Get

**Description**: Get a specific component by ID.

**Request Parameters**:
- `GetComponentQuery` — *Required*

**Response Example**:
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

---

### GET /GetEdit

**Description**: Retrieve a component's data for editing, including allowed values.

**Request Parameters**:
- `GetComponentEditQuery` — *Required*

**Response Example**:
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

---

### POST /Update

**Description**: Update or create a new component.

**Request Parameters**:
- `UpdateComponentCommand` — *Required*

**Response**:
Returns component ID as an integer.

---

### POST /CalculateConsumptionScore

**Description**: Calculate the consumption score based on condition and age.

**Request Parameters**:
- `CalculateConsumptionScoreQuery` — *Required*

**Response Example**:
```json
0.35
```

---

### POST /Delete

**Description**: Delete a component by ID.

**Request Parameters**:
- `DeleteComponentCommand` — *Required*

**Response Example**:
```json
1
```
(Indicates 1 record deleted)

---

### POST /Import

**Description**: Import component data from a spreadsheet (e.g. CSV or Excel).

**Request Parameters**:
- `ImportComponentsCommand` — *Required*

**Response Example**:
```json
{
  "message": "Successfully imported 15 components"
}
```

---

### POST /Export

**Description**: Export components to a file.

**Request Parameters**:
- `ExportComponentsQuery` — *Required*

**Response**:
File download (CSV/Excel format)

---

## Component Model & Business Context

### Structure
- Components are individual elements of an asset.
- Each has its own condition, cost, and lifecycle.
- Valuation depends on component condition and usage.

### Condition & Consumption
- **Condition Score**: Scale from 1 (Poor) to 5 (Excellent)
- **Consumption Score**: Measures how much useful life has been consumed
  - Formula: `Consumption = (1 - ConditionFactor) + AgeFactor × ConditionFactor`

### Benefits
- **Detailed Valuation**: Component-level cost tracking
- **Maintenance Planning**: Identify aging or degraded components
- **Regulatory Compliance**: Asset componentization for financial reporting

---

## Related Models
- `ComponentDto`, `ComponentSummaryDto`, `ComponentEditDto`

## Consumers
- Asset detail views
- Import/export interfaces
- Condition inspection modules
