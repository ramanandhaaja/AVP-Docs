# 🧮 ValuationProfileController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ValuationProfileController.cs
- **Primary Purpose**: Manages valuation profiles, which define the parameters and rules for calculating asset values.
- **Key Endpoints**: 
  - ✏️ POST /List - Retrieves list of valuation profiles
  - ✏️ POST /Get - Gets a specific valuation profile with its scores
  - 🔄 POST /Update - Updates a valuation profile
  - 🗑️ POST /Delete - Deletes a valuation profile
- **Related Models**: ValuationProfileDto, ValuationProfileWithScoresDto
- **Used By**: 
  - Valuation framework configuration screens
  - Job setup process
  - Valuation calculation engine

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ValuationProfileController handles the management of valuation profiles, which are core components of the valuation framework in Asset Valuer Pro. Valuation profiles define how assets are valued based on various parameters, factors, and scoring methods. They serve as templates that can be applied to different asset classes within a valuation job.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 List Valuation Profiles
- **HTTP Method**: POST
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of valuation profiles based on query parameters

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ListValuationProfilesQuery | Yes | Query parameters for filtering profiles |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Standard Building Valuation",
    "description": "Profile for standard building valuation",
    "clientId": 456,
    "isGlobal": true,
    "isActive": true,
    "valuationMethod": "CostApproach"
  }
]
```

#### 🔍 Get Valuation Profile
- **HTTP Method**: POST
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific valuation profile with its associated scores

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetValuationProfileQuery | Yes | Contains ProfileId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "Standard Building Valuation",
  "description": "Profile for standard building valuation",
  "clientId": 456,
  "isGlobal": true,
  "isActive": true,
  "valuationMethod": "CostApproach",
  "scores": [
    {
      "id": 789,
      "name": "Condition",
      "description": "Physical condition score",
      "weight": 0.4,
      "valueRangeMin": 1,
      "valueRangeMax": 5
    },
    {
      "id": 790,
      "name": "Functionality",
      "description": "Functional utility score",
      "weight": 0.3,
      "valueRangeMin": 1,
      "valueRangeMax": 5
    }
  ]
}
```

#### 🔄 Update Valuation Profile
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates an existing valuation profile or creates a new one

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateValuationProfileCommand | Yes | Contains profile data to update |

##### Response Format
```json
123
```
(Returns the profile ID)

#### 🗑️ Delete Valuation Profile
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a valuation profile

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteValuationProfileCommand | Yes | Contains ProfileId to delete |

##### Response Format
```json
true
```
(Returns success status)

### 📝 Business Context
Valuation profiles are a critical part of the APV system as they define:

1. The scoring methodology for evaluating asset conditions
2. Weights applied to different scoring factors
3. The mapping between condition scores and depreciation percentages
4. How different valuation approaches are applied to assets

💡 **Tip:** Valuation profiles can be global (accessible to all clients) or client-specific, allowing customized valuation methodologies per organization.

### 🔒 Security Notes
ℹ️ **Note:** Only users with specific permissions can create or modify global valuation profiles, while client administrators can manage their own client-specific profiles.

### 🧮 Calculation Impact
⚠️ **Warning:** Changes to valuation profiles directly affect valuation calculations. When updating existing profiles, consider refreshing affected jobs to ensure consistency.