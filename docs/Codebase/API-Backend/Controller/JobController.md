# JobController

## Quick Documentation

* **File Path**: `/API/Controllers/JobController.cs`
* **Primary Purpose**: Manages valuation jobs including their creation, metadata updates, and retrieval.
* **Key Endpoints**:

  1. `GET /Job` — Retrieves a specific job by ID.
  2. `GET /Job/List` — Lists all jobs for the current user or context.
  3. `POST /Job/Create` — Creates a new job with client and job information.
  4. `POST /Job/Update` — Updates job metadata such as name, status, or effective date.
* **Related Models**: `JobDto`, `CreateJobCommand`, `UpdateJobCommand`, `GetJobQuery`, `GetJobListQuery`
* **Used By**:

  * Valuation and setup teams
  * Project planning interfaces
  * Import and reporting modules linked to job structure

---

## A. Overview

The `JobController` enables operations related to asset valuation jobs, which are central objects in the platform. A job represents a valuation task for a specific client, time period, and scope. Jobs serve as entry points for importing assets, configuring profiles, generating reports, and tracking changes over time.

## B. Base Route

```
/api/Job
```

## C. Endpoints

### 1. GET /Job

#### Purpose

Fetches job details by ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 101,
  "name": "Annual Valuation - Client A",
  "clientId": 15,
  "status": "Open",
  "effectiveDate": "2025-03-01",
  "description": "Q1 Real Estate Portfolio"
}
```

---

### 2. GET /Job/List

#### Purpose

Lists all jobs for the authenticated user or selected client context.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  {
    "id": 101,
    "name": "Annual Valuation - Client A"
  },
  {
    "id": 102,
    "name": "Midyear Check - Client B"
  }
]
```

---

### 3. POST /Job/Create

#### Purpose

Creates a new valuation job for a specified client.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `name`: string
  * `clientId`: int
  * `effectiveDate`: date
  * `description`: string (optional)

#### Sample Request

```json
{
  "name": "Client C - FY25 Setup",
  "clientId": 31,
  "effectiveDate": "2025-07-01",
  "description": "Initial configuration"
}
```

---

### 4. POST /Job/Update

#### Purpose

Modifies the metadata of an existing job.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int
  * `name`: string (optional)
  * `status`: string (e.g., "Open", "Closed")
  * `effectiveDate`: date (optional)
  * `description`: string (optional)

#### Sample Request

```json
{
  "id": 101,
  "name": "Client A - Q2 Update",
  "status": "Open",
  "description": "Scope extension for new assets"
}
```

---

## D. Data Models

### JobDto

* `id`: int
* `name`: string
* `clientId`: int
* `status`: string
* `effectiveDate`: datetime
* `description`: string

### CreateJobCommand

* `name`: string
* `clientId`: int
* `effectiveDate`: datetime
* `description`: string (optional)

### UpdateJobCommand

* `id`: int
* `name`: string (optional)
* `status`: string (optional)
* `effectiveDate`: datetime (optional)
* `description`: string (optional)

---

## E. Business Context

Jobs form the structural core of the valuation platform. Every import, profile, or report is tied to a specific job context. Clear tracking of job metadata enables clients to separate projects by time, purpose, or reporting line. Job lifecycle management is also critical for annual compliance and client onboarding workflows.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
