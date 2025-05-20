# MaintenancePlanController

## Quick Documentation

* **File Path**: `/API/Controllers/MaintenancePlanController.cs`
* **Primary Purpose**: Manages maintenance plan configurations tied to jobs, including retrieval and updates.
* **Key Endpoints**:

  1. `GET /MaintenancePlan/ByJob` — Retrieves a maintenance plan associated with a job.
  2. `POST /MaintenancePlan/Update` — Updates or creates a maintenance plan record for a job.
* **Related Models**: `GetMaintenancePlanByJobQuery`, `UpdateMaintenancePlanCommand`, `MaintenancePlanDto`
* **Used By**:

  * Maintenance configuration modules
  * Job setup and planning tools
  * Long-term asset scheduling and projection features

---

## A. Overview

The `MaintenancePlanController` facilitates the retrieval and configuration of maintenance plans for valuation jobs. These plans are used to define future maintenance expectations, align with budgeting cycles, and support long-term valuation analysis.

## B. Base Route

```
/api/MaintenancePlan
```

## C. Endpoints

### 1. GET /MaintenancePlan/ByJob

#### Purpose

Retrieves the maintenance plan data associated with a specified job ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `jobId`: int (required)

#### Sample Response

```json
{
  "jobId": 1001,
  "hasMaintenance": true,
  "strategy": "Annually Reviewed",
  "plannedYears": [2025, 2026, 2027]
}
```

---

### 2. POST /MaintenancePlan/Update

#### Purpose

Creates or updates a job’s maintenance plan based on user input.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `jobId`: int
  * `hasMaintenance`: boolean
  * `strategy`: string
  * `plannedYears`: array of int

#### Sample Request

```json
{
  "jobId": 1001,
  "hasMaintenance": true,
  "strategy": "Every 5 Years",
  "plannedYears": [2025, 2030, 2035]
}
```

#### Sample Response

```json
{
  "success": true,
  "message": "Maintenance plan updated successfully."
}
```

---

## D. Data Models

### MaintenancePlanDto

* `jobId`: int
* `hasMaintenance`: boolean
* `strategy`: string
* `plannedYears`: int\[]

### GetMaintenancePlanByJobQuery

* `jobId`: int — Job identifier to retrieve the plan

### UpdateMaintenancePlanCommand

* `jobId`: int
* `hasMaintenance`: boolean
* `strategy`: string
* `plannedYears`: array of int

---

## E. Business Context

Maintenance plans are instrumental in long-range capital planning, asset lifecycle forecasting, and operational budgeting. This module allows stakeholders to document expected work programs, frequency of review, and future investment intervals based on the job’s characteristics and scope.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
