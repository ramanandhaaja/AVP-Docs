# 🔧 Import Controller Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ImportController.cs
- **Primary Purpose**: Handles data import operations for the application
- **Key Endpoints**: 
  - ✏️ POST /Import - Imports job data into the system
- **Related Models**: ImportJobCommand
- **Used By**: Data import functionality in the web application

## 📝 DETAILED DOCUMENTATION

### 🏗️ Overview
The ImportController provides a single endpoint that handles the importing of data to the system. It uses the Mediator pattern to send import commands to the appropriate handlers.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: Mediator
- **Other Dependencies**: None

### 📋 Endpoints

#### ✏️ Import
- **HTTP Method**: POST
- **URL Pattern**: /Import
- **Authentication**: Anonymous (AllowAnonymous attribute)
- **Description**: Imports job data into the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | ImportJobCommand | Yes | Import job parameters and data to be processed |

##### Response Format
Returns the result of the import operation as processed by the Mediator handler.

### 📝 Business Context

#### 📋 Role in the Valuation Process
According to the legacy documentation, data import is a critical part of the Asset Valuer Pro workflow. The ImportController implements several key business requirements:

1. **Initial Asset Register Creation**
   - The legacy documentation states that assets are "usually done by importing existing asset register via Excel"
   - This controller enables this essential first step in the valuation process, allowing users to import existing asset data rather than manually creating each asset

2. **Data Isolation Requirements**
   - The legacy documentation emphasizes that "the valuation process must be undertaken external to any live data held in an entity's ERP or finance system"
   - The import functionality provides the mechanism to extract data from client systems while maintaining this required isolation

3. **Infrastructure Data Processing**
   - According to the legacy documentation, "for infrastructure, the data is normally provided by the client in Excel files"
   - The controller supports import of large datasets typically required for infrastructure asset valuation

#### 📋 Data Quality Management
The legacy documentation describes a data validation process that occurs after import:

- "The valuers will then clean up and sort the Excel files and import the data into Asset Valuer Pro"
- "They then adopt a sampling approach in the field to validate the data"

This validates that the import functionality must maintain data integrity while supporting subsequent validation processes.

#### 📋 Integration with Import Log
The import process creates log entries that are essential for:

- Confirming successful imports
- Identifying and resolving failed imports
- Ensuring data completeness

The legacy documentation mentions that "the process is controlled via a log file which provides confirmation of whether or not the import was successful and if it failed, the reasons and row numbers of the data that failed."

#### 📋 Support for Multiple File Formats
Although the legacy documentation primarily mentions Excel files, it also notes that "All textual data can be imported and exported via Excel (version 2) or CSV file (version 3)," indicating support for different file formats.

### 💡 Tips for Data Import
- ℹ️ Import operations are processed asynchronously
- ⚠️ Large datasets may take time to process completely
- ✅ Input validation is performed before data is committed to the database
- 🔍 Check the ImportLogController for details about import job status and results