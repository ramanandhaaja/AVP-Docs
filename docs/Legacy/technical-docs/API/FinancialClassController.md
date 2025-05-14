# 📊 FinancialClassController Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/FinancialClassController.cs
- **Primary Purpose**: Manages financial asset classification hierarchy, which categorizes assets according to accounting and financial reporting requirements.
- **Key Endpoints**: 
  - 🔍 GET /FinancialAssetClassHierarchy - Retrieves the financial asset class hierarchy
  - 🔄 POST /UpdateFinancialClass - Updates a financial class node
  - 🗑️ POST /Delete - Deletes a financial hierarchy node
- **Related Models**: FinancialAssetClassNodeDto
- **Used By**: 
  - Financial reporting configuration screens
  - Asset classification for accounting purposes
  - Financial disclosure generation
  - Financial statement preparation

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The FinancialClassController manages the financial classification of assets, which is distinct from the physical asset hierarchy. Financial classifications align with accounting standards and financial reporting requirements, organizing assets into categories like "Land," "Buildings & Improvements," or "Plant & Equipment." This controller allows for retrieving, updating, and deleting nodes in the financial asset class hierarchy.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### 📋 Endpoints

#### 🔍 Get Financial Asset Class Hierarchy
- **HTTP Method**: GET
- **URL Pattern**: /FinancialAssetClassHierarchy
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves the hierarchy of financial asset classes for a job or client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetFinancialAssetClassHierarchyQuery | Yes | Contains JobId or ClientId to filter the hierarchy |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Land",
    "description": "All land assets",
    "clientId": 456,
    "jobId": 123,
    "hasChildren": true,
    "children": [
      {
        "id": 101,
        "name": "Operational Land",
        "description": "Land used for operations",
        "parentId": 1,
        "hasChildren": false
      },
      {
        "id": 102,
        "name": "Community Land",
        "description": "Land used by community",
        "parentId": 1,
        "hasChildren": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Buildings & Improvements",
    "description": "All building assets",
    "clientId": 456,
    "jobId": 123,
    "hasChildren": true,
    "children": [
      {
        "id": 201,
        "name": "Office Buildings",
        "description": "Administrative buildings",
        "parentId": 2,
        "hasChildren": false
      }
    ]
  }
]
```

#### 🔄 Update Financial Class
- **HTTP Method**: POST
- **URL Pattern**: /UpdateFinancialClass
- **Authentication**: 🔒 Required
- **Description**: Creates or updates a financial asset class node in the hierarchy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateFinancialHierarchyItemCommand | Yes | Contains financial class data to update |

##### Response Format
```json
123
```
(Returns the financial class node ID)

#### 🗑️ Delete Financial Hierarchy Node
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a node from the financial asset class hierarchy

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteFinancialHierarchyNodeCommand | Yes | Contains NodeId to delete |

##### Response Format
```json
1
```
(Returns number of nodes deleted)

### 📊 Financial Classification Structure
ℹ️ **Note:** The financial asset classification follows a two-level hierarchy:

1. **Financial Asset Class** (Level 1)
   - Top-level categorization (e.g., Land, Buildings & Improvements, Plant & Equipment)
   - Aligns with major balance sheet categories

2. **Financial Asset SubClass** (Level 2)
   - Sub-categorization within classes (e.g., Operational Land, Community Land)
   - Provides more detailed classification for financial reporting

This hierarchy is separate from the physical asset hierarchy (Asset Class → Asset Type → Asset SubType) and serves specifically financial reporting purposes.

### 🔗 Asset-Financial Relationship
Each physical asset in the system can be assigned to a financial classification:

- **Physical Asset** → Links to → **Financial Asset Class**/**SubClass**
- This relationship determines how assets are grouped in financial statements
- Multiple physical asset types may map to the same financial class

### 🔒 Regulatory Framework
The financial classification directly supports financial reporting requirements:

1. **Accounting Standards**
   - IFRS/AASB classifications for Property, Plant & Equipment
   - Disclosure note organization and structure
   - Asset categorization for depreciation policies

2. **Financial Reporting**
   - Balance sheet presentation categories
   - Financial statement disclosure requirements
   - Fixed asset register organization

### 📝 Business Context
Financial classification provides critical business benefits:

1. **Financial Reporting**
   - Automates preparation of asset-related financial disclosures
   - Ensures consistent categorization across reporting periods
   - Aligns physical assets with accounting requirements

2. **Audit Compliance**
   - Provides clear audit trail for asset classification
   - Supports demonstration of compliance with standards
   - Enables reconciliation between operational and financial data

3. **Disclosure Generation**
   - Powers automation of movement reconciliation reports
   - Supports fair value hierarchy disclosure reports
   - Enables financial ratio analysis by asset category