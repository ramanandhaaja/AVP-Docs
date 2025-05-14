# 🧮 AssumptionsController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/AssumptionsController.cs
- **Primary Purpose**: Manages assumptions for assets, components, and insurance calculations, which define parameters used in valuation calculations.
- **Key Endpoints**: 
  - 🔍 GET /GetAssetAssumptions - Retrieves asset assumptions for a specific configuration
  - 🔄 POST /UpdateAssetAssumptions - Updates asset assumptions
  - 🔍 GET /GetComponentAssumptions - Retrieves component assumptions
  - 🔄 POST /UpdateComponentAssumptions - Updates component assumptions
  - 🔍 GET /GetInsuranceAssumptions - Retrieves insurance assumptions
- **Related Models**: AssetAssumptionsDetailDto, ComponentAssumptionsDetailDto, InsuranceAssumptionsDto, ComponentAssumptionsWithHierarchyDto
- **Used By**: 
  - Valuation framework configuration screens
  - Calculation engine for valuations
  - Asset and component value determination
  - Insurance value calculations

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The AssumptionsController manages the various assumptions used throughout the Asset Valuer Pro system for calculating valuations. Assumptions are key parameters that define how assets and components are valued, including useful life, residual values, replacement costs, and more. This controller handles three main types of assumptions: asset assumptions, component assumptions, and insurance assumptions, all of which are critical to the valuation process.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 List Asset Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /ListAssetAssumptions
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of asset assumptions based on query parameters

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetAssumptionsListQuery | Yes | Query parameters for filtering asset assumptions |

##### Response Format
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

#### 🔍 Get Asset Assumptions
- **HTTP Method**: GET
- **URL Pattern**: /GetAssetAssumptions
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific asset assumption by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetAssumptionsQuery | Yes | Contains AssumptionId to retrieve |

##### Response Format
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

#### 🔄 Update Asset Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /UpdateAssetAssumptions
- **Authentication**: 🔒 Required
- **Description**: Creates or updates asset assumptions

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateAssetAssumptionsCommand | Yes | Contains assumption data to update |

##### Response Format
```json
123
```
(Returns the assumption ID)

#### 🔍 List Component Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /ListComponentAssumptions
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of component assumptions with hierarchy information

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentAssumptionsListQuery | Yes | Query parameters for filtering component assumptions |

##### Response Format
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

#### 🔍 Get Component Assumptions
- **HTTP Method**: GET
- **URL Pattern**: /GetComponentAssumptions
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific component assumption by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetComponentAssumptionsQuery | Yes | Contains AssumptionId to retrieve |

##### Response Format
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

#### 🔄 Update Component Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /UpdateComponentAssumptions
- **Authentication**: 🔒 Required
- **Description**: Creates or updates component assumptions

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateComponentAssumptionsCommand | Yes | Contains assumption data to update |

##### Response Format
```json
789
```
(Returns the assumption ID)

#### 🔍 List Insurance Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /ListInsuranceAssumptions
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of insurance assumptions

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetInsuranceAssumptionsListQuery | Yes | Query parameters for filtering insurance assumptions |

##### Response Format
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

#### 🔍 Get Insurance Assumptions
- **HTTP Method**: GET
- **URL Pattern**: /GetInsuranceAssumptions
- **Authentication**: 🔒 Required
- **Description**: Retrieves specific insurance assumptions with asset insurance details

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetInsuranceAssumptionsQuery | Yes | Contains AssumptionId to retrieve |

##### Response Format
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

#### 🔄 Update Insurance Assumptions
- **HTTP Method**: POST
- **URL Pattern**: /UpdateInsuranceAssumptions
- **Authentication**: 🔒 Required
- **Description**: Creates or updates insurance assumptions

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateInsuranceAssumptionsCommand | Yes | Contains assumption data to update |

##### Response Format
```json
456
```
(Returns the assumption ID)

### 🧮 Types of Assumptions

The AssumptionsController manages three key types of valuation parameters:

#### 📊 Asset Assumptions
Asset assumptions define parameters for entire assets:
- Useful life (total expected lifespan)
- Residual value percentage (value at end of life)
- Unit rates (base cost per measurement unit)
- Depreciation methods (straight-line, reducing balance)
- Obsolescence factors (for functional/economic obsolescence)

#### 📊 Component Assumptions
Component assumptions define parameters for asset components:
- Split lifecycle parameters (short-life vs. long-life portions)
- Separate useful lives for different lifecycle portions
- Component-specific unit rates
- Residual value percentages
- Installation factors

#### 🔒 Insurance Assumptions
Insurance assumptions define parameters for insurance valuations:
- Additional costs percentage (contingency)
- Professional fees percentage (design, management)
- Demolition costs percentage
- Escalation factor (inflation adjustment)
- Indemnity factor (depreciation adjustment)

### 🧮 Assumption Application

Assumptions are applied to assets and components based on a hierarchical matching system:

1. **Specificity Hierarchy**
   - Most specific match takes precedence (AssetSubType)
   - Falls back to broader matches (AssetType → AssetClass → Default)

2. **Override System**
   - Default assumptions can be overridden at any level
   - Individual assets/components can have specific overrides
   - Job-specific overrides take precedence over global settings

3. **Calculation Impact**
   - Unit rates directly affect replacement cost calculations
   - Useful life parameters drive depreciation calculations
   - Insurance factors are applied to determine insurance values

### 📝 Business Context
Assumptions are critical to the valuation process:

1. **Standardization**
   - Ensures consistent application of valuation parameters
   - Aligns with industry standards and best practices
   - Supports defensible valuation outcomes

2. **Efficiency**
   - Enables mass valuation of similar assets
   - Reduces data entry by applying standard parameters
   - Provides templated approach to valuation

3. **Scenario Analysis**
   - Facilitates what-if scenarios by adjusting key parameters
   - Enables sensitivity analysis of valuation results
   - Supports strategic asset management decisions