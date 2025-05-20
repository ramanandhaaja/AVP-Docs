# LeaseController

## Quick Documentation

* **File Path**: `/API/Controllers/LeaseController.cs`
* **Primary Purpose**: Manages lease-related operations for valuation jobs, including uploading, checking, and retrieving lease records.
* **Key Endpoints**:

  1. `POST /Lease/Upload` — Uploads lease data files.
  2. `GET /Lease/ByJob` — Retrieves lease entries for a specific job.
  3. `POST /Lease/Validate` — Performs a validation on lease data before confirmation.
* **Related Models**: `UploadLeaseCommand`, `GetLeasesByJobQuery`, `ValidateLeaseCommand`
* **Used By**:

  * Lease management workflows
  * Job valuation and financial reporting
  * Operational import validation routines

---

## A. Overview

The `LeaseController` supports the integration and validation of lease data within a valuation context. Users can upload lease files, validate them prior to submission, and retrieve lease details tied to a specific job for review or downstream processes.

## B. Base Route

```
/api/Lease
```

## C. Endpoints

### 1. POST /Lease/Upload

#### Purpose

Allows uploading lease-related documents or datasets.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Form Data**:

  * `file`: binary (CSV or Excel format)

#### Sample Response

```json
{
  "message": "Lease file processed successfully.",
  "recordCount": 125
}
```

---

### 2. GET /Lease/ByJob

#### Purpose

Retrieves all lease records associated with a given job ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `jobId`: int (required)

#### Sample Response

```json
[
  {
    "leaseId": 5001,
    "assetName": "Retail Complex",
    "startDate": "2022-01-01",
    "endDate": "2026-12-31",
    "annualRent": 120000.0
  }
]
```

---

### 3. POST /Lease/Validate

#### Purpose

Validates uploaded lease data for format and business rule compliance.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `jobId`: int
  * `fileId`: Guid (identifier of uploaded file to validate)

#### Sample Request

```json
{
  "jobId": 200,
  "fileId": "a17f289d-faa4-4c5b-8fa5-e2a41740b94a"
}
```

#### Sample Response

```json
{
  "isValid": true,
  "warnings": [],
  "errors": []
}
```

---

## D. Data Models

### UploadLeaseCommand

* `file`: IFormFile — lease file for processing

### GetLeasesByJobQuery

* `jobId`: int — job context to filter leases

### ValidateLeaseCommand

* `jobId`: int
* `fileId`: Guid

---

## E. Business Context

Lease data forms a critical input for asset-based financial reporting and compliance. By facilitating streamlined uploads and structured validations, this controller ensures that leases are correctly categorized, time-bound, and aligned with reporting cycles. Validating lease data before use reduces downstream reconciliation errors.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
