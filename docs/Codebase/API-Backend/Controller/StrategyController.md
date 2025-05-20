# StrategyController

## Quick Documentation

* **File Path**: `/API/Controllers/StrategyController.cs`
* **Primary Purpose**: Provides access to strategies for asset management and maintenance planning.
* **Key Endpoints**:

  1. `GET /Strategy/List` — Retrieves all available strategies.
  2. `GET /Strategy/ById` — Retrieves strategy detail by ID.
* **Related Models**: `GetStrategyListQuery`, `GetStrategyByIdQuery`, `StrategyDto`
* **Used By**:

  * Maintenance and replacement planning modules
  * Strategy lookup for valuation configuration
  * Lifecycle modeling features

---

## A. Overview

The `StrategyController` exposes predefined strategies used across various planning tools. These strategies define how assets are managed over time, including options such as replacement intervals, refurbishment rules, and cost planning assumptions.

## B. Base Route

```
/api/Strategy
```

## C. Endpoints

### 1. GET /Strategy/List

#### Purpose

Fetches all strategy entries defined in the system.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  {
    "id": 1,
    "name": "Annual Review"
  },
  {
    "id": 2,
    "name": "Refurbish Every 10 Years"
  }
]
```

---

### 2. GET /Strategy/ById

#### Purpose

Retrieves full details of a strategy by its ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 2,
  "name": "Refurbish Every 10 Years",
  "description": "Applies refurbishment every decade with intermediate reviews.",
  "frequencyYears": 10
}
```

---

## D. Data Models

### StrategyDto

* `id`: int
* `name`: string
* `description`: string (optional)
* `frequencyYears`: int (optional)

### GetStrategyListQuery

* No parameters

### GetStrategyByIdQuery

* `id`: int — Strategy identifier

---

## E. Business Context

Strategies form the backbone of long-term asset planning, especially in sectors that require predictive maintenance and capital expenditure forecasting. Standardizing strategy data improves consistency across valuations and decision-making scenarios.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
