# DocumentController

## Quick Overview

### File Location: /API/Controllers/DocumentController.cs

### Purpose: Manages importing and retrieving documents associated with valuation jobs.

### Key Endpoints:

- POST /Import: Upload a document into the system
- GET /ListByJob: Retrieve documents associated with a specific job
- Related Models: ImportDocumentCommand, GetJobDocumentListQuery, JobDocument
- Used In: Document management section of the web application

## Detailed Documentation
### Overview
The DocumentController enables document management functionality within the Asset Valuer Pro application. It provides endpoints for importing documents into the system and retrieving them based on job associations. This functionality is essential for organizing files that support valuation, audit, and reporting processes.

### Controller Dependencies
- Namespace: APV.API.Controllers
- Services Used: IMediator for request/command handling (CQRS)
- Authentication: Required for all endpoints (inherited from the base ApiController)

## API Endpoints

### POST /Import

- Description: Uploads a new document to the system.
- Authentication: Required
- Request Body: ImportDocumentCommand containing metadata and document content
- Response: A confirmation string indicating success or failure.

### Request Example

```json
{
  "fileName": "valuation-summary.pdf",
  "jobId": 202,
  "uploadedBy": "analyst1",
  "documentContent": "<Base64EncodedFileContent>"
}
```

### Response Example

```json
"Document imported successfully"
```

### GET /ListByJob
Description: Retrieves all documents linked to a specific job.

- Authentication: Required
- Request Query:
- GetJobDocumentListQuery with jobId
- Response: A list of JobDocument objects representing the documents found.

### Request Example

```json
{
  "jobId": 202
}
```
### Response Example

```json
[
  {
    "id": 1,
    "fileName": "valuation-summary.pdf",
    "uploadedBy": "analyst1",
    "uploadedAt": "2025-04-20T15:32:00Z"
  },
  {
    "id": 2,
    "fileName": "asset-register.xlsx",
    "uploadedBy": "admin",
    "uploadedAt": "2025-04-19T10:45:00Z"
  }
]
```
## Best Practices for Document Management
- Supported Formats: PDF, DOC, DOCX, XLS, XLSX, and commonly used file types
- Organized by Job: Documents are tied to specific valuation jobs for context and easy retrieval
- Access Control: Document access is governed by job-based permissions
- Performance Note: Uploading large files may take longer to process