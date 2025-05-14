# 🔧 Import Log Controller Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ImportLogController.cs
- **Primary Purpose**: Manages import logs and provides various import/export operations
- **Key Endpoints**: 
  - 🔍 GET /GetJobLog - Retrieves import log details for a specific job
  - 🔍 GET /GetFrameworkLog - Retrieves import log details for a framework import
  - 🔄 GET /RefreshReportData - Refreshes the data for reports
  - 🔄 POST /Archive - Archives a job and generates export reports
- **Related Models**: ImportLogDetailDto, ImportLogDto, various command/query models
- **Used By**: Import/export functionality, job management, and reporting systems

## DETAILED DOCUMENTATION

### 📝 Overview
The ImportLogController provides comprehensive functionality for managing import operations, viewing logs, and performing various job-related actions including archiving, updating, and exporting/importing data. It serves as a central hub for many data transfer operations.

### 🏗️ Controller Dependencies
- **Namespace**: APV.API.Controllers
- **Services Used**: Mediator, BusRegistry
- **Other Dependencies**: ⚡ RateLimiting for certain operations

### 📋 Endpoints

#### 🔍 GetImportJobLogById
- **HTTP Method**: GET
- **URL Pattern**: /GetJobLog
- **Authentication**: 🔒 Required (inherited from ApiController)
- **Description**: Retrieves import log details for a specific job

#### 🔍 GetImportFrameworkLogById
- **HTTP Method**: GET
- **URL Pattern**: /GetFrameworkLog
- **Authentication**: 🔒 Required
- **Description**: Retrieves import log details for a framework import

#### 🔍 GetFrameworkImportLogs
- **HTTP Method**: GET
- **URL Pattern**: /ListFrameworkLogs
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of all framework import logs

#### 🔍 GetJobImportLogs
- **HTTP Method**: GET
- **URL Pattern**: /ListJobLogs
- **Authentication**: 🔒 Required
- **Description**: Retrieves a list of all job import logs

#### 🔄 RefreshReportData
- **HTTP Method**: GET
- **URL Pattern**: /RefreshReportData
- **Authentication**: 🔒 Required
- **Description**: Refreshes the data for reports with rate limiting applied

#### 🔄 UpdateJob
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required
- **Description**: Updates job details

#### 🔄 ArchiveJob
- **HTTP Method**: POST
- **URL Pattern**: /Archive
- **Authentication**: 🔒 Required
- **Description**: Archives a job and generates several export reports during the process

#### 🗑️ DeleteJob
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required
- **Description**: Deletes a job from the system

#### ✅ Revalidate
- **HTTP Method**: POST
- **URL Pattern**: /Revalidate
- **Authentication**: 🔒 Required
- **Description**: Revalidates data for a job

#### 🔄 ExportImages
- **HTTP Method**: POST
- **URL Pattern**: /ExportImages
- **Authentication**: 🔒 Required
- **Description**: Exports images for a job

#### ✏️ ImportImages
- **HTTP Method**: POST
- **URL Pattern**: /ImportImages
- **Authentication**: 🔒 Required
- **Description**: Imports images for a job

#### ✏️ ImportDocuments
- **HTTP Method**: POST
- **URL Pattern**: /ImportDocuments
- **Authentication**: 🔒 Required
- **Description**: Imports documents for assets in a job

#### ✏️ ImportFramework
- **HTTP Method**: GET
- **URL Pattern**: /V2Import
- **Authentication**: 🔒 Required
- **Description**: Queues a request to import job data from Version 2 of the application

### 💡 Tips for Import Log Management
- ⚠️ Some operations like RefreshReportData have rate limiting to prevent system overload
- ✅ Always check import logs after import operations to verify data integrity
- ℹ️ Archiving a job is a complex operation that generates multiple reports
- ⚡ Large import operations may take significant time to complete