# ValuationProfileController

## Quick Documentation

* **File Path**: `/API/Controllers/ValuationProfileController.cs`
* **Primary Purpose**: Manages valuation profiles, including their creation, retrieval, and associated settings.
* **Key Endpoints**:

  1. `GET /ValuationProfile/List` — Retrieves all valuation profiles.
  2. `GET /ValuationProfile/ById` — Retrieves a valuation profile by ID.
  3. `POST /ValuationProfile/CreateOrUpdate` — Creates or updates a valuation profile.
* **Related Models**: `GetValuationProfileListQuery`, `GetValuationProfileByIdQuery`, `CreateOrUpdateValuationProfileCommand`, `ValuationProfileDto`
* **Used By**:

  * Valuation configuration and rule engines
  * Asset assessment workflows
  * Job-based reporting logic

---

## A. Overview

The `ValuationProfileController` handles operations related to valuation profiles, which define the calculation logic, parameters, and rules applied to asset valuations. Profiles are reusable and help maintain consistency in valuation methodologies across jobs and clients.

## B. Base Route

```
/api/ValuationProfile
```

## C. Endpoints

### 1. GET /ValuationProfile/List

#### Purpose

Fetches a list of all available valuation profiles.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "id": 1, "name": "Default Profile" },
  { "id": 2, "name": "Road Assets 2025" }
]
```

---

### 2. GET /ValuationProfile/ById

#### Purpose

Returns the full details of a valuation profile for a given identifier.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 2,
  "name": "Road Assets 2025",
  "description": "Profile tailored for road infrastructure.",
  "parameters": {
    "depreciationMethod": "Straight Line",
    "economicLife": 20
  }
}
```

---

### 3. POST /ValuationProfile/CreateOrUpdate

#### Purpose

Creates a new or updates an existing valuation profile.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int (0 for new profile)
  * `name`: string
  * `description`: string
  * `parameters`: object

#### Sample Request

```json
{
  "id": 0,
  "name": "New Linear Assets Profile",
  "description": "Used for pipelines and cables",
  "parameters": {
    "depreciationMethod": "Diminishing Value",
    "economicLife": 25
  }
}
```

#### Sample Response

```json
{
  "success": true,
  "message": "Profile saved successfully."
}
```

---

## D. Data Models

### ValuationProfileDto

* `id`: int
* `name`: string
* `description`: string
* `parameters`: object (key-value pairs for configuration)

### GetValuationProfileListQuery

* No parameters

### GetValuationProfileByIdQuery

* `id`: int

### CreateOrUpdateValuationProfileCommand

* `id`: int
* `name`: string
* `description`: string
* `parameters`: dictionary

---

## E. Business Context

Valuation profiles are reusable configuration units that define how valuations should be executed for different asset types or job contexts. They enable rapid setup, enforce methodological consistency, and support updates without altering individual asset or job records.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
