# 🔧 JobController Documentation

## 🔧 QUICK DOCUMENTATION
- **File Path**: API/Controllers/JobController.cs
- **Primary Purpose**: Manages valuation job lifecycle including creation, retrieval, updates, archiving, and data refresh operations.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves list of valuation jobs
  - 🔍 GET /Get - Gets a specific job by ID
  - ✏️ POST /Update - Updates job details
  - ✏️ POST /Archive - Archives a completed job
  - 🔍 GET /RefreshReportData - Recalculates valuation data for reports
- **Related Models**: JobDto, JobAssetSummaryDto, DropDownDto
- **Used By**: 
  - Job creation and management screens
  - Valuation process workflow
  - Reporting system

## 📋 DETAILED DOCUMENTATION

### 🏗️ Overview
The JobController handles all aspects of valuation job management, which is a core concept in the Asset Valuer Pro application. A "job" represents a specific valuation assignment with defined parameters, assets, and effective dates. This controller enables creating, retrieving, updating, and archiving jobs, as well as managing associated data such as images and documents.

### 🏗️ Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
  - BusRegistry (for V2 import functionality)
- **Other Dependencies**: Rate limiting for resource-intensive operations

### 🔧 Endpoints

#### 🔍 List Jobs
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: Required (inherited from ApiController)
- **Description**: Retrieves a list of jobs based on query parameters

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | JobListQuery | Yes | Query parameters for filtering jobs |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Example Job",
    "clientId": 456,
    "status": "Open",
    "effectiveDate": "2025-01-15T00:00:00Z"
  }
]
```

#### 🔍 Get Job By ID
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: Required
- **Description**: Retrieves a specific job by its ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetJobQuery | Yes | Contains JobId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "Example Job",
  "clientId": 456,
  "status": "Open",
  "effectiveDate": "2025-01-15T00:00:00Z",
  "description": "Annual valuation for Client X",
  "assetClassIds": [1, 2, 3]
}
```

#### ✏️ Update Job
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: Required
- **Description**: Updates job properties

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateJobCommand | Yes | Contains updated job data |

##### Response Format
```json
123
```
(Returns the job ID)

#### ✏️ Archive Job
- **HTTP Method**: POST
- **URL Pattern**: /Archive
- **Authentication**: Required
- **Description**: Archives a completed job, generating snapshot reports for future reference

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ArchiveJobCommand | Yes | Contains JobId and optional parameters |

##### Response Format
```json
{
  "message": "Job successfully archived"
}
```

#### 🔍 Refresh Report Data
- **HTTP Method**: GET
- **URL Pattern**: /RefreshReportData
- **Authentication**: Required
- **Description**: Recalculates all valuation data for a job, typically run after data changes

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RefreshJobDataCommand | Yes | Contains JobId to refresh |

##### Response Format
```json
"Refresh completed successfully"
```

### 📝 Business Context

#### 📋 Centrality to Valuation Process
According to the legacy documentation, the "Job" concept is a foundational element in Asset Valuer Pro. The JobController implements several key business requirements:

1. **Valuation Isolation**
   - The legacy documentation emphasizes that "the valuation process must be undertaken external to any live data held in an entity's ERP or finance system"
   - Jobs provide this isolation by creating a contained environment for the valuation process
   - The controller ensures this separation through its job creation and management endpoints

2. **Point-in-Time Valuation**
   - The legacy documentation states that "a valuation is undertaken at a point in time"
   - The controller manages the "EffectiveDateOfValuation" which is described as "usually the first or last day of the financial year"
   - This ensures all valuations within a job reference the same effective date

3. **Asset Class Selection**
   - The legacy documentation mentions "creating a valuation 'Job' (requires allocating 'asset classes' to the 'job')"
   - The Update endpoint supports this business requirement by allowing asset classes to be associated with a job

#### 📋 Job Status Lifecycle
The JobController implements the job status lifecycle described in the legacy documentation:

1. **Open** - Active job where changes can be made
   - This is the initial state when created through the controller
   - Allows data collection and modification

2. **Draft** - Pending client feedback with possible changes
   - The controller supports transitioning to this state when the valuation is ready for client review

3. **Finalised** - Client has accepted results
   - The controller enables finalizing a job when client approval is received

4. **Archived** - Job is completed and preserved for historical reference
   - The Archive endpoint implements this state transition
   - The legacy documentation notes that archiving "access the final figures and raw data and records them as the 'previous years' figures"

#### 📋 Data Refresh Functionality
The RefreshReportData endpoint is particularly important to the business process. The legacy documentation states:

> "Once all data is populated the valuer refreshes all the calculations. This process reads the raw data (such as asset hierarchy), accesses relevant information (based on the hierarchy) from the assumptions table and populates relevant fields..."

This calculation refresh is essential to generate accurate valuation results and must be performed whenever significant data changes occur.

### 🔒 Security Considerations
ℹ️ **Note:** All endpoints in this controller require authentication. The RefreshReportData endpoint is also rate-limited due to its resource-intensive nature.

### ⚡ Performance Considerations
💡 **Tip:** The RefreshReportData endpoint can be resource-intensive for large jobs. Consider implementing a background processing approach for very large datasets.