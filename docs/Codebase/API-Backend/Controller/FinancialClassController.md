# FinancialClassController

## Quick Documentation

* **File Path**: `/API/Controllers/FinancialClassController.cs`
* **Primary Purpose**: Manages financial classification hierarchy of assets used for reporting and disclosure.
* **Key Endpoints**:

  1. `GET /FinancialAssetClassHierarchy` — Retrieves the financial asset class and subclass hierarchy.
  2. `POST /UpdateFinancialClass` — Creates or updates a classification node.
  3. `POST /Delete` — Deletes a classification node.
* **Related Models**: `FinancialAssetClassNodeDto`, `UpdateFinancialHierarchyItemCommand`, `DeleteFinancialHierarchyNodeCommand`
* **Used By**:

  * Financial reporting and disclosure generation
  * Audit compliance
  * Asset classification setup and automation

---

## A. Overview

The `FinancialClassController` manages the classification of financial asset hierarchies, distinct from physical asset structures. This classification aligns with accounting standards and supports accurate financial reporting, disclosure, and asset grouping.

## B. Base Route

```
/api/FinancialClass
```

## C. Endpoints

### 1. GET /FinancialAssetClassHierarchy

#### Purpose

Retrieves the full hierarchy of financial asset classes and their related subclasses.

#### Request Details

* **Method**: GET
* **Authentication**: Required (Bearer Token)
* **Query Parameters**:

  * `clientId` (optional): Filter results by client
  * `jobId` (optional): Filter results by job

#### Sample Request

```
GET /FinancialAssetClassHierarchy?clientId=123&jobId=456
Authorization: Bearer {token}
```

#### Response Example

```json
[
  {
    "key": 1,
    "label": "Land",
    "type": "Financial Asset Class",
    "nodes": [
      {
        "key": 11,
        "label": "Operational Land",
        "type": "Financial Asset Sub Class",
        "nodes": [],
        "assetsCount": 3
      }
    ],
    "assetsCount": 3
  }
]
```

### 2. POST /UpdateFinancialClass

#### Purpose

Creates or updates a node in the financial asset hierarchy.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: integer (0 for new entry)
  * `name`: string
  * `type`: "Financial Asset Class" or "Financial Asset Sub Class"
  * `financialAssetClassId`: integer (required for subclasses)

#### Sample Request

```json
{
  "id": 0,
  "name": "Heavy Equipment",
  "type": "Financial Asset Sub Class",
  "financialAssetClassId": 5
}
```

#### Response Example

```json
12
```

(ID of the updated or newly created node)

### 3. POST /Delete

#### Purpose

Deletes a node from the financial asset classification hierarchy.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: integer
  * `name`: string
  * `type`: string ("Financial Asset Class" or "Financial Asset Sub Class")

#### Sample Request

```json
{
  "id": 12,
  "name": "Heavy Equipment",
  "type": "Financial Asset Sub Class"
}
```

#### Response Example

```json
12
```

(ID of the deleted node)

## D. Data Models

### 1. FinancialAssetClassNodeDto

* `key`: Unique identifier
* `label`: Display name
* `type`: Classification level (class/subclass)
* `nodes`: Child subclass nodes
* `assetsCount`: Total linked assets

### 2. UpdateFinancialHierarchyItemCommand

* `id`: Target ID (0 to create new)
* `name`: Name of the node
* `type`: Either "Financial Asset Class" or "Financial Asset Sub Class"
* `financialAssetClassId`: Required if type is subclass

### 3. DeleteFinancialHierarchyNodeCommand

* `id`: Target ID
* `name`: Node name
* `type`: "Financial Asset Class" or "Financial Asset Sub Class"

## E. Business Context

Financial asset classification enables structured reporting, simplifies disclosure generation, and supports compliance with IFRS/AASB requirements. It provides standardized categorization across valuation cycles and enables automated mapping of physical assets to appropriate financial categories.

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---