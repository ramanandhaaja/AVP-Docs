# AssetClassController

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/AssetClassController.cs
- **Primary Purpose**: Manages asset classes and their relationships with jobs, providing lookups and filtering options.
- **Key Endpoints**: 
  - 🔍 GET /ListByJob - Retrieves asset classes for a specific job
  - 🔍 GET /ListWithNoJobs - Gets asset classes not assigned to any job
  - 🔍 GET /JobByAssetClassId - Retrieves job information by asset class ID
- **Related Models**: DropDownDto, JobDto
- **Used By**: 
  - Job setup and configuration screens
  - Asset hierarchy management
  - Asset classification system

## DETAILED DOCUMENTATION

### Overview
The AssetClassController handles the management of asset classes, which are a fundamental part of the asset hierarchy in Asset Valuer Pro. Asset classes define the highest level of categorization for assets (e.g., Buildings, Infrastructure, Land) and are associated with valuation jobs. This controller enables retrieving asset classes in different contexts, particularly in relation to jobs.

### Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: None specified

### Endpoints

#### List Asset Classes By Job
- **HTTP Method**: GET
- **URL Pattern**: /ListByJob
- **Authentication**: Required (inherited from ApiController)
- **Description**: Retrieves a list of asset classes associated with a specific job

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetAssetClassListQuery | Yes | Contains JobId to filter asset classes |

##### Response Format
```json
[
  {
    "id": 1,
    "name": "Buildings"
  },
  {
    "id": 2,
    "name": "Infrastructure"
  },
  {
    "id": 3,
    "name": "Land"
  }
]
```

#### List Asset Classes With No Jobs
- **HTTP Method**: GET
- **URL Pattern**: /ListWithNoJobs
- **Authentication**: Required
- **Description**: Retrieves asset classes that are not associated with any jobs

##### Request Parameters
None

##### Response Format
```json
[
  {
    "id": 4,
    "name": "Furniture & Fittings"
  },
  {
    "id": 5,
    "name": "Plant & Equipment"
  }
]
```

#### Get Job By Asset Class ID
- **HTTP Method**: GET
- **URL Pattern**: /JobByAssetClassId
- **Authentication**: Required
- **Description**: Retrieves job information based on asset class ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetJobByAssetClassIdQuery | Yes | Contains AssetClassId to find associated job |

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

### Business Context
Asset classes form the foundation of the valuation methodology in APV:

- Different asset classes may require different valuation approaches (cost, market, income)
- Asset classes determine which valuation profiles apply to which assets
- Financial reporting requires aggregation of valuation results by asset class
- Asset classes are essential for structuring the data imported from client systems

### Relationships
ℹ️ **Note:** Asset classes are central to the asset hierarchy:
- An asset class contains multiple asset types
- Asset types contain multiple asset subtypes
- This hierarchy allows for granular control of valuation parameters at each level