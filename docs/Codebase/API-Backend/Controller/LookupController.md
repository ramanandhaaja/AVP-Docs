# LookupController

## Quick Documentation

* **File Path**: `/API/Controllers/LookupController.cs`
* **Primary Purpose**: Provides access to various static lookup datasets used throughout the platform.
* **Key Endpoints**:

  1. `GET /Lookup/All` — Retrieves all lookup types.
  2. `GET /Lookup/ByType` — Retrieves lookup values filtered by a specific type.
* **Related Models**: `GetAllLookupsQuery`, `GetLookupsByTypeQuery`, `LookupDto`
* **Used By**:

  * Drop-down population in UI forms
  * Lookup type administration
  * Parameter-driven configuration screens

---

## A. Overview

The `LookupController` supports access to standardized lookup values used across the platform. These values are typically used to populate dropdowns, configure entity types, or enforce valid value lists for domain-specific parameters.

## B. Base Route

```
/api/Lookup
```

## C. Endpoints

### 1. GET /Lookup/All

#### Purpose

Returns all available lookup types and their associated values.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  {
    "type": "AssetCategory",
    "values": [
      { "id": 1, "name": "Buildings" },
      { "id": 2, "name": "Land" }
    ]
  },
  {
    "type": "Currency",
    "values": [
      { "id": 1, "name": "USD" },
      { "id": 2, "name": "AUD" }
    ]
  }
]
```

---

### 2. GET /Lookup/ByType

#### Purpose

Retrieves a list of lookup values by the specified type name.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `type`: string (required)

#### Sample Request

```
GET /Lookup/ByType?type=Currency
```

#### Sample Response

```json
[
  { "id": 1, "name": "USD" },
  { "id": 2, "name": "AUD" }
]
```

---

## D. Data Models

### LookupDto

* `id`: int — Identifier of the lookup entry
* `name`: string — Display name

### GetAllLookupsQuery

* No input parameters

### GetLookupsByTypeQuery

* `type`: string — Filter by type key

---

## E. Business Context

Lookups are critical to ensure data consistency, avoid hard-coded values, and enable dynamic configuration of forms and processes. Administrators and backend processes rely on these datasets to enforce domain rules, restrict input options, and apply correct validation paths.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
