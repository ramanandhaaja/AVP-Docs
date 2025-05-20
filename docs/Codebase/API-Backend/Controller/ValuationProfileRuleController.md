# ValuationProfileRuleController

## Quick Documentation

* **File Path**: `/API/Controllers/ValuationProfileRuleController.cs`
* **Primary Purpose**: Manages rules and conditions associated with valuation profiles, such as category mappings or lifecycle logic.
* **Key Endpoints**:

  1. `GET /ValuationProfileRule/List` — Retrieves all rules tied to a valuation profile.
  2. `POST /ValuationProfileRule/CreateOrUpdate` — Creates or updates a valuation rule entry.
  3. `POST /ValuationProfileRule/Delete` — Deletes a specific valuation rule.
* **Related Models**: `GetValuationProfileRuleListQuery`, `CreateOrUpdateValuationProfileRuleCommand`, `DeleteValuationProfileRuleCommand`, `ValuationProfileRuleDto`
* **Used By**:

  * Valuation rule engines
  * Profile-driven calculation logic
  * Mapping layers in bulk valuation scenarios

---

## A. Overview

The `ValuationProfileRuleController` manages rule-based conditions that define how specific assets or parameters behave within a valuation profile. These rules allow customization of treatment logic such as different depreciation paths, asset class handling, or override mechanisms.

## B. Base Route

```
/api/ValuationProfileRule
```

## C. Endpoints

### 1. GET /ValuationProfileRule/List

#### Purpose

Fetches all rules linked to a particular valuation profile.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `profileId`: int (required)

#### Sample Response

```json
[
  {
    "id": 201,
    "profileId": 10,
    "condition": "AssetType == 'Road'",
    "overrideLife": 25,
    "notes": "Custom rule for civil infrastructure."
  }
]
```

---

### 2. POST /ValuationProfileRule/CreateOrUpdate

#### Purpose

Creates a new rule or updates an existing one tied to a valuation profile.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int (0 for new rule)
  * `profileId`: int
  * `condition`: string
  * `overrideLife`: int
  * `notes`: string (optional)

#### Sample Request

```json
{
  "id": 0,
  "profileId": 10,
  "condition": "AssetType == 'Structure'",
  "overrideLife": 40,
  "notes": "Structures require extended useful life"
}
```

---

### 3. POST /ValuationProfileRule/Delete

#### Purpose

Deletes a valuation profile rule by ID.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int (required)

#### Sample Request

```json
{
  "id": 201
}
```

---

## D. Data Models

### ValuationProfileRuleDto

* `id`: int
* `profileId`: int
* `condition`: string
* `overrideLife`: int
* `notes`: string

### GetValuationProfileRuleListQuery

* `profileId`: int — the owning profile

### CreateOrUpdateValuationProfileRuleCommand

* `id`: int
* `profileId`: int
* `condition`: string
* `overrideLife`: int
* `notes`: string

### DeleteValuationProfileRuleCommand

* `id`: int

---

## E. Business Context

Valuation profile rules bring flexibility and automation to complex asset categories. By defining rule-based overrides, finance teams can enforce policy-driven lifecycle adjustments, scenario testing, or exception handling — all while maintaining clean separation from core data.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
