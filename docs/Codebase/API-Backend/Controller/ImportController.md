# ImportController

## Quick Documentation

* **File Path**: `/API/Controllers/ImportController.cs`
* **Primary Purpose**: Facilitates the import of asset and framework data, including uploading templates and initiating import processes.
* **Key Endpoints**:

  1. `POST /Import/StartFrameworkImport` — Starts a framework data import.
  2. `POST /Import/StartJobImport` — Starts a job-specific import process.
  3. `POST /Import/UploadTemplate` — Uploads an import template file.
  4. `GET /Import/ImportableJobs` — Retrieves a list of jobs eligible for import.
* **Related Models**: `StartFrameworkImportCommand`, `StartJobImportCommand`, `UploadImportTemplateCommand`
* **Used By**:

  * Import configuration screens
  * Asset and framework data onboarding tools
  * Job-specific data loading workflows

---

## A. Overview

The `ImportController` handles importing structured data into the system, either as part of framework-level definitions or for specific valuation jobs. It enables uploading templates, validating file contents, and initiating import workflows aligned to job and client configurations.

## B. Base Route

```
/api/Import
```

## C. Endpoints

### 1. POST /Import/StartFrameworkImport

#### Purpose

Initiates an import process that applies to framework-level data (non-job specific).

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `clientId`: int (target client)
  * `templateId`: int (selected template)
  * `data`: object (imported data payload)

#### Sample Request

```json
{
  "clientId": 101,
  "templateId": 12,
  "data": {
    "rows": [
      { "code": "B001", "name": "Bridge Structure" },
      { "code": "B002", "name": "Rail Structure" }
    ]
  }
}
```

#### Response

HTTP 200 OK with import tracking ID

---

### 2. POST /Import/StartJobImport

#### Purpose

Triggers an import process related to a specific job’s data.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `jobId`: int
  * `templateId`: int
  * `data`: object

#### Sample Request

```json
{
  "jobId": 555,
  "templateId": 8,
  "data": {
    "rows": [
      { "assetCode": "A1001", "location": "Warehouse 1" }
    ]
  }
}
```

---

### 3. POST /Import/UploadTemplate

#### Purpose

Uploads an Excel/CSV template file for use in import processes.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Form Data**:

  * `file`: binary

#### Sample Response

```json
{
  "templateId": 12,
  "templateName": "Job Import Template v2"
}
```

---

### 4. GET /Import/ImportableJobs

#### Purpose

Returns jobs that are currently eligible for data import (e.g., open status, assigned templates).

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "jobId": 101, "jobName": "Client A - 2025" },
  { "jobId": 102, "jobName": "Client B - Infrastructure" }
]
```

---

## D. Data Models

### StartFrameworkImportCommand

* `clientId`: int
* `templateId`: int
* `data`: JSON object containing import data

### StartJobImportCommand

* `jobId`: int
* `templateId`: int
* `data`: JSON object containing import data

### UploadImportTemplateCommand

* `file`: binary/form-data attachment

---

## E. Business Context

The import process plays a central role in onboarding asset and valuation data from client-provided formats. Supporting both framework and job-level imports enables flexible configuration, bulk data entry, and integration with external client systems. Import validation, template tracking, and job-scoped segmentation help ensure data integrity.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
