# ImportLogController

## Quick Documentation

* **File Path**: `/API/Controllers/ImportLogController.cs`
* **Primary Purpose**: Provides access to import history logs for framework and job-based data imports.
* **Key Endpoints**:

  1. `GET /ImportLog/Framework` — Retrieves framework import logs.
  2. `GET /ImportLog/Job` — Retrieves job import logs.
  3. `GET /ImportLog/FrameworkList` — Lists all framework import logs.
  4. `GET /ImportLog/JobList` — Lists all job import logs.
* **Related Models**: `GetFrameworkImportLogQuery`, `GetJobImportLogQuery`, `GetFrameworkImportLogListQuery`, `GetJobImportLogListQuery`
* **Used By**:

  * Monitoring tools for data import activity
  * Historical analysis of data onboarding
  * Validation of template-driven data submissions

---

## A. Overview

The `ImportLogController` enables querying the history of imports into the system. It provides insights into both framework-wide imports and job-specific import activities. Logs include metadata such as timestamps, source templates, data volumes, and result statuses.

## B. Base Route

```
/api/ImportLog
```

## C. Endpoints

### 1. GET /ImportLog/Framework

#### Purpose

Returns a detailed log entry for a specific framework-level import process.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `importId`: int (required)

#### Sample Response

```json
{
  "importId": 101,
  "templateName": "Structure Template",
  "importedBy": "admin@example.com",
  "timestamp": "2025-04-01T10:00:00Z",
  "recordCount": 342,
  "status": "Completed"
}
```

---

### 2. GET /ImportLog/Job

#### Purpose

Returns a detailed log entry for a specific job-based import process.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `importId`: int (required)

#### Sample Response

```json
{
  "importId": 202,
  "jobName": "Client A - Q1 Assets",
  "importedBy": "uploader@domain.com",
  "timestamp": "2025-04-15T14:30:00Z",
  "errors": 0,
  "recordCount": 120,
  "status": "Completed"
}
```

---

### 3. GET /ImportLog/FrameworkList

#### Purpose

Retrieves a paginated list of past framework imports.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "importId": 101, "template": "Bridge Import", "date": "2025-03-28" },
  { "importId": 102, "template": "Road Import", "date": "2025-03-30" }
]
```

---

### 4. GET /ImportLog/JobList

#### Purpose

Retrieves a paginated list of job-specific imports performed in the system.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "importId": 201, "jobName": "Job X", "date": "2025-04-01" },
  { "importId": 202, "jobName": "Job Y", "date": "2025-04-10" }
]
```

---

## D. Data Models

### GetFrameworkImportLogQuery

* `importId`: int — ID of the import process to view

### GetJobImportLogQuery

* `importId`: int — ID of the job import log

### GetFrameworkImportLogListQuery

* Filters or pagination properties (if implemented)

### GetJobImportLogListQuery

* Filters or pagination properties (if implemented)

---

## E. Business Context

Keeping track of import history is essential for audit purposes, data integrity validation, and rollback planning. These logs help stakeholders verify the origin and accuracy of large data onboarding activities. This controller also supports operations teams in quickly identifying failed imports or anomalies.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
