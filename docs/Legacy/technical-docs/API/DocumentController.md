# 🔧 Document Controller Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/DocumentController.cs
- **Primary Purpose**: Manages document operations including import and listing
- **Key Endpoints**: 
  - ✏️ POST /Import - Imports a document into the system
  - 🔍 GET /ListByJob - Retrieves a list of documents associated with a job
- **Related Models**: ImportDocumentCommand, GetJobDocumentListQuery, JobDocument
- **Used By**: Document management functionality in the web application

## DETAILED DOCUMENTATION

### 📝 Overview
The DocumentController provides functionality for importing documents into the system and retrieving lists of documents associated with specific jobs. It serves as the primary interface for document management operations.

### 🏗️ Controller Dependencies
- **Namespace**: APV.API.Controllers
- **Services Used**: Mediator
- **Other Dependencies**: None

### 📋 Endpoints

#### ✏️ ImportDocument
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Imports a document into the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ImportDocumentCommand | Yes | Command containing the document to be imported |

##### Response Format
Returns a string response indicating the result of the import operation.

#### 🔍 ListByJobId
- **HTTP Method**: GET
- **URL Pattern**: /ListByJob
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of documents associated with a specific job

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetJobDocumentListQuery | Yes | Query containing the job ID to retrieve documents for |

##### Response Format
Returns a List of `JobDocument` objects containing the documents associated with the specified job.

### 💡 Tips for Document Management
- ✅ Supported document formats include PDF, DOC, DOCX, XLS, XLSX, and other common formats
- ℹ️ Documents are associated with specific jobs for better organization
- 🔒 Access to documents is controlled by job permissions
- ⚡ Large documents may require additional processing time