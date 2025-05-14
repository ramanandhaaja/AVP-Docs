# 🧮 ValuationProfileRuleController Documentation

## 🧮 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ValuationProfileRuleController.cs
- **Primary Purpose**: Manages valuation profile rules, which define specific criteria and parameters for applying valuation profiles to assets.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves valuation profile rules for a valuation profile
  - 🔍 GET /Get - Gets a specific valuation profile rule
  - 🔄 POST /Update - Creates or updates a valuation profile rule
  - 🗑️ POST /Delete - Deletes a valuation profile rule
  - ✅ POST /Revalidate - Revalidates a valuation profile rule
- **Related Models**: ValuationProfileRuleDto
- **Used By**: 
  - Valuation framework configuration screens
  - Asset valuation calculation engine
  - Valuation profile setup process

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ValuationProfileRuleController manages valuation profile rules, which are specific criteria and parameters that define how valuation profiles are applied to assets. These rules establish the connection between valuation profiles and asset classes, types, or individual assets, allowing for granular control over the valuation process. Rules can include specific multipliers, factors, or configuration settings that adapt the general valuation profile to specific asset scenarios.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 List Valuation Profile Rules
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves a list of valuation profile rules for a specific valuation profile

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ListValuationProfileRulesQuery | Yes | Contains ValuationProfileId and other filter parameters |

##### Response Format
```json
[
  {
    "id": 123,
    "valuationProfileId": 456,
    "assetClassId": 1,
    "assetTypeId": 2,
    "assetSubTypeId": 3,
    "ruleType": "Default",
    "valuationMethod": "CostApproach",
    "multiplier": 1.0,
    "isActive": true
  }
]
```

#### 🔍 Get Valuation Profile Rule
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required
- **Description**: Retrieves a specific valuation profile rule by ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetValuationProfileRuleQuery | Yes | Contains RuleId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "valuationProfileId": 456,
  "assetClassId": 1,
  "assetTypeId": 2,
  "assetSubTypeId": 3,
  "ruleType": "Default",
  "valuationMethod": "CostApproach",
  "multiplier": 1.0,
  "isActive": true,
  "description": "Standard rule for commercial buildings"
}
```

#### 🔄 Update Valuation Profile Rule
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Creates a new valuation profile rule or updates an existing one

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateValuationProfileRuleCommand | Yes | Contains rule data to create/update |

##### Response Format
```json
123
```
(Returns the rule ID)

#### 🗑️ Delete Valuation Profile Rule
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a valuation profile rule

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteValuationProfileRuleCommand | Yes | Contains RuleId to delete |

##### Response Format
```json
true
```
(Returns success status)

#### ✅ Revalidate Valuation Profile Rule
- **HTTP Method**: POST
- **URL Pattern**: /Revalidate
- **Authentication**: 🔒 Required
- **Description**: Revalidates a valuation profile rule, typically after changes to ensure integrity

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RevalidateValuationProfileRuleCommand | Yes | Contains RuleId to revalidate |

##### Response Format
```json
"Revalidation completed successfully"
```
(Returns status message)

### 🔗 Rule Hierarchy
ℹ️ **Note:** Valuation profile rules follow a hierarchy of application:

1. The most specific rule takes precedence (AssetClass + AssetType + AssetSubType)
2. Less specific rules are applied if no more specific rule exists
3. This allows for general rules with specific exceptions

The hierarchy follows this pattern of specificity:
- AssetClass + AssetType + AssetSubType (most specific)
- AssetClass + AssetType
- AssetClass
- Default (least specific)

### 🧮 Multiplier Application
Rules can include multipliers that modify valuation parameters:

- Multipliers adjust the standard valuation profile behavior
- Typically used to account for special circumstances or asset characteristics
- Can increase or decrease value calculations
- Applied during the valuation calculation process

### 📝 Business Context
Valuation profile rules serve important business purposes:

1. **Flexible Valuation Framework**
   - Enables different valuation approaches for different asset categories
   - Allows exception handling without duplicating profiles
   - Supports complex organizations with diverse asset portfolios

2. **Asset-Specific Customization**
   - Adjusts standard profiles for special asset characteristics
   - Enables efficient mass valuation with targeted overrides
   - Maintains consistency while allowing appropriate variations

3. **Process Control**
   - Ensures valuation approaches align with accounting policies
   - Creates audit trail for valuation decisions
   - Allows structured approach to valuation exceptions