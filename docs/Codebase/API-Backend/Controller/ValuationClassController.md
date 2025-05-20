# ValuationClassController

## Quick Documentation

* **File Path**: `/API/Controllers/ValuationClassController.cs`
* **Primary Purpose**: Provides access to valuation class data for mapping and financial classification.
* **Key Endpoints**:

  1. `GET /ValuationClass/List` — Retrieves all valuation classes.
  2. `GET /ValuationClass/ById` — Retrieves a specific valuation class by ID.
* **Related Models**: `GetValuationClassListQuery`, `GetValuationClassByIdQuery`, `ValuationClassDto`
* **Used By**:

  * Asset assumption and valuation model setup
  * Reporting and depreciation planning tools
  * Data normalization during import or processing

---

## A. Overview

The `ValuationClassController` exposes a set of financial valuation classes used for grouping assets in accordance with accounting or regulatory categories. These are typically mapped against physical or functional asset classes to align reporting with finance department expectations.

## B. Base Route

```
/api/ValuationClass
```

## C. Endpoints

### 1. GET /ValuationClass/List

#### Purpose

Returns all defined valuation classes in the system.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "id": 1, "name": "Property, Plant & Equipment" },
  { "id": 2, "name": "Infrastructure" }
]
```

---

### 2. GET /ValuationClass/ById

#### Purpose

Returns valuation class details for a given identifier.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 2,
  "name": "Infrastructure",
  "description": "Covers roads, bridges, tunnels, and related systems."
}
```

---

## D. Data Models

### ValuationClassDto

* `id`: int
* `name`: string
* `description`: string (optional)

### GetValuationClassListQuery

* No parameters

### GetValuationClassByIdQuery

* `id`: int

---

## E. Business Context

Valuation classes enable consistent categorization of asset groups for reporting and accounting purposes. By standardizing how assets are grouped and valued, the system supports compliance with IFRS, AASB, and internal accounting policies.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
