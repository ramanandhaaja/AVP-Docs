
# Asset Replacement Cost Controller

## File Info
- **Location**: `/API/Controllers/AssetReplacementCostController.cs`
- **Function**: Manages *replacement cost* data for physical assets, used primarily in **valuation** and **insurance calculations**.

---

## Quick Summary
### What This Controller Does
The `AssetReplacementCostController` provides an interface for:
- **Retrieving** replacement cost data
- **Updating** asset cost information
- **Deleting** cost records

This is crucial for financial decisions involving:
- Asset valuations
- Insurance estimations
- Budgeting and lifecycle cost planning

### Used In:
- Asset valuation modules
- Insurance and risk management
- Financial planning dashboards
- Asset detail reports

---

## Dependencies & Technical Context
- **Namespace**: `AVP.API.Controllers`
- **Architecture Pattern**: CQRS (Command-Query Responsibility Segregation) using **MediatR**
- **Authorization**: Secured – All endpoints require authentication
- **Model Used**: `ReplacementCostDto`

---

## API Endpoints

### 1. GET `/Get`
**Purpose**: Retrieve replacement cost details for a specific asset.

#### Input
| Parameter | Type                        | Required | Description                                  |
|----------|-----------------------------|----------|----------------------------------------------|
| query    | `GetAssetReplacementCostQuery` | ✅ Yes  | Must include the `AssetId` to fetch data for |

#### Sample Response
```json
{
  "id": 123,
  "assetId": 456,
  "replacementCost": 2500000,
  "quantity": 1000,
  "quantityUom": "sqm",
  "unitRate": 2500,
  "unitRateUom": "sqm",
  "costingMethod": "UnitRate",
  "sourceOfCost": "Professional Estimate",
  "lastUpdated": "2025-01-15T00:00:00Z",
  "notes": "Based on current construction costs for commercial buildings",
  "referenceLocation": "Brisbane CBD",
  "calculatedFromComponents": false,
  "componentCostsTotal": 2450000,
  "additionalCosts": [
    {
      "description": "Site preparation",
      "cost": 50000
    },
    {
      "description": "Professional fees",
      "cost": 150000
    }
  ]
}
```

---

### 2. POST `/Update`
**Purpose**: Modify or add replacement cost data for a given asset.

#### 🔸 Input
| Parameter | Type                             | Required | Description                                  |
|-----------|----------------------------------|----------|----------------------------------------------|
| command   | `UpdateAssetReplacementCostCommand` | ✅ Yes | Includes the full dataset for the asset cost |

#### 🔸 Sample Response
```json
123
```
Returns the ID of the updated record.

---

### 3. POST `/Delete`
**Purpose**: Remove replacement cost data for an asset.

#### Input
| Parameter | Type                             | Required | Description                         |
|-----------|----------------------------------|----------|-------------------------------------|
| command   | `DeleteAssetReplacementCostCommand` | ✅ Yes | Includes the `ReplacementCostId` to delete |

#### Sample Response
```json
1
```
Returns the number of records deleted (typically `1`).

---

## Understanding Asset Costing

### What is "Replacement Cost"?
The **replacement cost** represents the estimated expense to replace an asset with a new one of similar utility, considering current market conditions.

---

### How Cost Is Determined

#### 1. **Unit Rate Method**
- Simple, fast method.
- **Formula**: `Unit Rate × Quantity`
- Example: 1000 sqm at $2500/sqm = **$2.5M**

#### 2. **Cost Build-Up Method**
- More detailed, accurate for complex assets.
- Adds:
  - Component-level costs
  - Extra items (site prep, professional fees, etc.)

#### 3. **External Valuation**
- Used when professional judgment is needed.
- Based on external reports or appraisals.

---

### Asset-Level vs. Component-Level Costs

| Approach             | When to Use                          | Notes                                                  |
|----------------------|---------------------------------------|--------------------------------------------------------|
| **Direct Asset Costing** | For simple, single-unit assets         | Uses area/volume + rate (e.g., $/sqm)                  |
| **Component Aggregation** | For complex assets with many parts     | More detailed; adds up parts + extra costs             |

The field `calculatedFromComponents = true` indicates component-based costing.

---

## Business Relevance

### For Finance
- Used in **cost approach** valuation
- Determines **depreciated replacement cost**
- Supports **financial statements** and audits

### For Insurance
- Defines **coverage values**
- Helps in **premium calculations** and **claim assessments**

### For Asset Managers
- Informs **capital planning** and **budgeting**
- Supports **lifecycle costing** and replacement strategies
