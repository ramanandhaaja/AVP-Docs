
# Assumptions Controller

## File Info
- **Location**: `/API/Controllers/AssumptionsController.cs`
- **Function**: Manages core *assumptions* that influence how assets, components, and insurance values are calculated.

---

## Quick Summary
### What This Controller Does
The `AssumptionsController` manages standardized inputs used during:
- Asset and component valuation
- Insurance value calculation
- Job-specific valuation configurations

Assumptions include:
- Useful life
- Residual values
- Cost rates
- Depreciation methods
- Insurance-related factors

### Used In:
- Valuation frameworks
- Calculation engines
- Reporting systems
- Insurance assessments

---

## Dependencies & Technical Context
- **Namespace**: `AVP.API.Controllers`
- **Architecture**: CQRS via **MediatR**
- **Authentication**: Required for all endpoints
- **Models Used**:
  - `AssetAssumptionsDetailDto`
  - `ComponentAssumptionsDetailDto`
  - `InsuranceAssumptionsDto`
  - `ComponentAssumptionsWithHierarchyDto`

---

## API Endpoints

### Asset Assumptions

#### POST `/ListAssetAssumptions`
Returns a list of asset assumptions based on filter criteria.

##### Input
| Parameter | Type                        | Required | Description                          |
|----------|-----------------------------|----------|--------------------------------------|
| query    | `GetAssetAssumptionsListQuery` | ✅ Yes  | Filtering options                    |

##### Output (Sample)
```json
[
  {
    "id": 123,
    "jobId": 456,
    "assetClassId": 1,
    "assetTypeId": 2,
    "assetSubTypeId": 3,
    "assumptionName": "Standard Building Assumptions",
    "usefulLife": 60,
    "residualValuePercent": 0.1,
    "unitRate": 2500,
    "unitRateUom": "sqm"
  }
]
```

---

#### 🔍 GET `/GetAssetAssumptions`
Returns detailed assumptions for a specific asset configuration.

##### Input
| Parameter | Type                    | Required | Description            |
|----------|-------------------------|----------|------------------------|
| query    | `GetAssetAssumptionsQuery` | ✅ Yes  | Must include `AssumptionId` |

##### Output (Sample)
```json
{
  "id": 123,
  "jobId": 456,
  "assetClassId": 1,
  "assetTypeId": 2,
  "assetSubTypeId": 3,
  "assumptionName": "Standard Building Assumptions",
  "usefulLife": 60,
  "residualValuePercent": 0.1,
  "unitRate": 2500,
  "unitRateUom": "sqm",
  "depreciationMethod": "StraightLine",
  "obsolescenceFactor": 0
}
```

---

#### POST `/UpdateAssetAssumptions`
Creates or updates asset assumptions.

##### Input
| Parameter | Type                        | Required | Description           |
|----------|-----------------------------|----------|-----------------------|
| command  | `UpdateAssetAssumptionsCommand` | ✅ Yes | Assumption data       |

##### Output
```json
123
```

---

### Component Assumptions

#### POST `/ListComponentAssumptions`
Returns component assumptions including hierarchy metadata.

##### Input
| Parameter | Type                          | Required | Description             |
|----------|-------------------------------|----------|-------------------------|
| query    | `GetComponentAssumptionsListQuery` | ✅ Yes | Filtering criteria      |

##### Output (Sample)
```json
[
  {
    "id": 789,
    "jobId": 456,
    "componentTypeId": 101,
    "componentSubTypeId": 201,
    "shortLifePercent": 0.3,
    "longLifePercent": 0.7,
    "shortLifeUsefulLife": 15,
    "longLifeUsefulLife": 60,
    "unitRate": 750,
    "unitRateUom": "sqm",
    "hierarchyInformation": {
      "componentTypeName": "Structure",
      "componentSubTypeName": "External Walls"
    }
  }
]
```

---

#### GET `/GetComponentAssumptions`
Returns detailed assumptions for a specific component.

##### Input
| Parameter | Type                         | Required | Description          |
|----------|------------------------------|----------|----------------------|
| query    | `GetComponentAssumptionsQuery` | ✅ Yes | Must include ID      |

##### Output
```json
{
  "id": 789,
  "jobId": 456,
  "componentTypeId": 101,
  "componentSubTypeId": 201,
  "shortLifePercent": 0.3,
  "longLifePercent": 0.7,
  "shortLifeUsefulLife": 15,
  "longLifeUsefulLife": 60,
  "unitRate": 750,
  "unitRateUom": "sqm",
  "residualValuePercent": 0.05
}
```

---

#### POST `/UpdateComponentAssumptions`
Creates or updates component assumptions.

##### Input
| Parameter | Type                            | Required | Description         |
|----------|----------------------------------|----------|---------------------|
| command  | `UpdateComponentAssumptionsCommand` | ✅ Yes | Component data      |

##### Output
```json
789
```

---

### Insurance Assumptions

#### POST `/ListInsuranceAssumptions`
Lists insurance assumptions.

##### Input
| Parameter | Type                          | Required | Description             |
|----------|-------------------------------|----------|-------------------------|
| query    | `GetInsuranceAssumptionsListQuery` | ✅ Yes | Filtering criteria      |

##### Output (Sample)
```json
[
  {
    "id": 456,
    "jobId": 123,
    "assetClassId": 1,
    "assetTypeId": 2,
    "assetSubTypeId": 3,
    "additionalCosts": 0.15,
    "professionalFees": 0.1,
    "demolitionCosts": 0.05,
    "escalationFactor": 0.03,
    "indemnityFactor": 0.7
  }
]
```

---

#### GET `/GetInsuranceAssumptions`
Gets specific insurance assumptions and related asset details.

##### Output
```json
{
  "id": 456,
  "jobId": 123,
  "assetClassId": 1,
  "assetTypeId": 2,
  "assetSubTypeId": 3,
  "additionalCosts": 0.15,
  "professionalFees": 0.1,
  "demolitionCosts": 0.05,
  "escalationFactor": 0.03,
  "indemnityFactor": 0.7,
  "assetInsurance": [
    {
      "assetId": 789,
      "replacementCost": 2500000,
      "indemnityValue": 1750000
    }
  ]
}
```

---

#### POST `/UpdateInsuranceAssumptions`
Creates or updates insurance-related assumptions.

##### Input
| Parameter | Type                             | Required | Description        |
|----------|----------------------------------|----------|--------------------|
| command  | `UpdateInsuranceAssumptionsCommand` | ✅ Yes | Insurance details  |

##### Output
```json
456
```

---

## Understanding Assumptions

### Types of Assumptions

#### Asset Assumptions
- Useful life of the whole asset
- Residual value (% of initial value)
- Depreciation method (e.g., straight-line)
- Unit rate & unit of measure
- Obsolescence factors

#### Component Assumptions
- Split between short and long-life components
- Separate useful life and percentage allocations
- Component-specific rates and residuals

#### Insurance Assumptions
- Additional, professional, and demolition costs
- Escalation (inflation) & indemnity factors
- Asset-level insurance coverage breakdowns

---

### Application Logic

#### Matching Logic
1. Most specific (sub-type) assumptions apply first.
2. Falls back through type, class, and default as needed.
3. Global defaults can be overridden per job/asset/component.

#### Business Use
- Standardization for repeatable valuations
- Efficiency in bulk processing
- What-if analysis for strategic decision-making

