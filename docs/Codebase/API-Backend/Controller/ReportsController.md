# ReportsController

## Quick Documentation

* **File Path**: `/API/Controllers/ReportsController.cs`
* **Primary Purpose**: Generates and retrieves valuation reports based on job, asset, and profile inputs.
* **Key Endpoints**:

  1. `GET /Reports/GenerateByJob` — Initiates report generation for a specific job.
  2. `GET /Reports/Download` — Downloads a previously generated report file.
  3. `GET /Reports/Status` — Checks the generation status of a report.
* **Related Models**: `GenerateReportByJobQuery`, `GetReportDownloadQuery`, `GetReportStatusQuery`
* **Used By**:

  * Report generation dashboards
  * Job output management
  * Export pipelines for regulatory filings or board reports

---

## A. Overview

The `ReportsController` facilitates generation, download, and monitoring of financial and asset reports produced by the system. It enables stakeholders to initiate report workflows and manage access to output files, ensuring traceability and document control.

## B. Base Route

```
/api/Reports
```

## C. Endpoints

### 1. GET /Reports/GenerateByJob

#### Purpose

Triggers report generation for a given job ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `jobId`: int (required)

#### Sample Response

```json
{
  "status": "Queued",
  "reportId": "a91e7d4e-0c2b-42a1-8a8e-f21c4f6101b7"
}
```

---

### 2. GET /Reports/Download

#### Purpose

Returns a generated report file by its unique report ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `reportId`: Guid (required)

#### Sample Response

Binary file download (e.g., PDF, XLSX)

---

### 3. GET /Reports/Status

#### Purpose

Checks the processing status of a requested report.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `reportId`: Guid (required)

#### Sample Response

```json
{
  "reportId": "a91e7d4e-0c2b-42a1-8a8e-f21c4f6101b7",
  "status": "Completed",
  "generatedAt": "2025-05-20T10:00:00Z"
}
```

---

## D. Data Models

### GenerateReportByJobQuery

* `jobId`: int — ID of the job to report on

### GetReportDownloadQuery

* `reportId`: Guid — ID of the generated report file

### GetReportStatusQuery

* `reportId`: Guid — Unique identifier to track report processing

---

## E. Business Context

The reporting module enables formal documentation and analysis of asset and financial data captured during job processing. Reports may fulfill internal requirements, client deliverables, or external compliance submissions. Having visibility into generation status and audit-friendly identifiers enhances operational transparency and accountability.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
