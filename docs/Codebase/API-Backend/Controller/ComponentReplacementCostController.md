# ComponentReplacementCostController

## Quick Overview

- **File Location**: `/API/Controllers/ComponentReplacementCostController.cs`
- **Purpose**: This controller handles the management of replacement cost data for components. This data is essential for performing valuation calculations using the cost approach.
- **Main Endpoints**: 
  - `GET /Get`: Retrieve replacement cost data for a component
  - `POST /Update`: Update replacement cost data
  - `POST /Delete`: Remove replacement cost data
- **Related Model**: `ReplacementCostDto`
- **Used By**:
  - Component valuation interfaces
  - Cost-based valuation calculations
  - Component detail reports
  - Replacement cost estimation modules

## Detailed Documentation

### Overview

The `ComponentReplacementCostController` provides an interface to manage replacement cost records for components. These records represent the estimated cost to replace an asset with a new one of equivalent utility and are essential for cost-based valuation methods.

The controller supports operations to:
- Retrieve specific replacement cost records
- Update existing records
- Delete obsolete or incorrect records

### Dependencies

- **Namespace**: `AVP.API.Controllers`
- **Primary Dependency**: Mediator (used for implementing the CQRS pattern)
- **Authentication**: All endpoints require authentication, inherited from the base `ApiController`.

## API Endpoints

### GET /Get

- **Description**: Retrieves the replacement cost information for a specific component.
- **Authentication**: Required
- **Request Payload**:
  - `GetComponentReplacementCostQuery` with `ComponentId`
- **Response Example**:
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
    { "description": "Removal of existing equipment", "cost": 5000 },
    { "description": "Modifications to existing infrastructure", "cost": 3000 }
  ]
}
```

### POST /Update

- **Description**: Updates a component's replacement cost data.
- **Authentication**: Required
- **Request Payload**:
  - `UpdateComponentReplacementCostCommand` containing updated cost details
- **Response**: Returns the ID of the updated record.
```json
123
```

### POST /Delete

- **Description**: Deletes the specified replacement cost record.
- **Authentication**: Required
- **Request Payload**:
  - `DeleteComponentReplacementCostCommand` with the `ReplacementCostId`
- **Response**: Returns the number of records deleted.
```json
1
```

## Cost Determination Methods

Replacement costs can be determined using one of the following methods:

1. **Unit Rate Method**  
   Cost is calculated as:
   ```
   Cost = Unit Rate × Quantity
   ```
   - Example: 500 m² of roofing at $200/m² = $100,000
   - Suitable for common, standard components

2. **Lump Sum Method**  
   - A fixed total cost for the entire component
   - Used when components are custom or specialized
   - Often based on quotations or historical cost records

3. **Cost Build-Up Method**  
   - Total cost is composed of individual parts
   - Involves detailed breakdown of materials, labor, and equipment
   - Suitable for unique or complex items

## Elements of Replacement Cost

The replacement cost may include:

- **Direct Costs**
  - Material
  - Labor
  - Equipment
  - Installation

- **Indirect Costs**
  - Professional services (e.g., design, engineering)
  - Project management
  - Contractor fees and margins
  - Temporary works

- **Adjustments**
  - Regional cost factors
  - Inflation and time-based escalation
  - Accessibility and complexity factors

## Business Use and Value

Replacement cost data plays a critical role in:

1. **Valuation**
   - Forms the base for cost approach valuations
   - Used in calculating Depreciated Replacement Cost (DRC)
   - Essential for insurance valuations

2. **Asset Management**
   - Assists in budget planning and lifecycle forecasting
   - Helps in comparing costs across similar components

3. **Financial Planning**
   - Informs depreciation schedules
   - Aids in planning future capital expenditures
   - Improves accuracy in financial forecasting