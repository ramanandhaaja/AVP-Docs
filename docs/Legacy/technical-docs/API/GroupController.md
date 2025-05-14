# 🔧 GroupController Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/GroupController.cs
- **Primary Purpose**: Manages client groups (organizations of clients) within the system, including group information and administrator assignments.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves list of groups
  - 🔍 GET /Get - Gets a specific group by ID
  - 🔄 POST /Update - Updates group details
  - ✏️ POST /AddAdministrator - Adds a group administrator
  - 🗑️ POST /RemoveAdministrator - Removes a group administrator
  - ✏️ POST /UploadLogo - Uploads a logo for a group
- **Related Models**: GroupDto, GroupSummaryDto
- **Used By**: 
  - System administration screens
  - Multi-tenancy management
  - Client organization interfaces
  - Branding configuration

## DETAILED DOCUMENTATION

### 📝 Overview
The GroupController manages group entities in Asset Valuer Pro's multi-tenant architecture. Groups represent collections of clients, typically organized by industry, region, or other classification criteria. This controller handles group management operations, including creation, retrieval, updating, administrator assignment, and logo management. Access to this controller is restricted to users with the Administrator role.

### 🏗️ Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: 
  - 🔒 Authorization attribute requiring the Administrator role

### 📋 Endpoints

#### 🔍 List Groups
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a list of groups

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GroupListQuery | Yes | Query parameters for filtering groups |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "Government",
    "description": "Government agencies and organizations",
    "clientCount": 12,
    "status": "Active",
    "hasLogo": true
  },
  {
    "id": 124,
    "name": "Corporate",
    "description": "Private sector corporations",
    "clientCount": 8,
    "status": "Active",
    "hasLogo": false
  }
]
```

#### 🔍 Get Group
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves detailed information about a specific group

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetGroupQuery | Yes | Contains GroupId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "Government",
  "description": "Government agencies and organizations",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-03-10T00:00:00Z",
  "hasLogo": true,
  "logoUrl": "/api/groups/123/logo",
  "administrators": [
    {
      "id": "user123",
      "name": "Jane Smith",
      "email": "jsmith@admin.com"
    }
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ"
    },
    {
      "id": 457,
      "name": "State Department ABC"
    }
  ]
}
```

#### 🔄 Update Group
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Updates group information or creates a new group

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateGroupCommand | Yes | Contains group data to update |

##### Response Format
```json
{
  "id": 123,
  "name": "Government Agencies",
  "description": "Government agencies and public sector organizations",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-04-17T00:00:00Z",
  "hasLogo": true,
  "logoUrl": "/api/groups/123/logo",
  "administrators": [
    {
      "id": "user123",
      "name": "Jane Smith",
      "email": "jsmith@admin.com"
    }
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ"
    },
    {
      "id": 457,
      "name": "State Department ABC"
    }
  ]
}
```

#### ✏️ Add Administrator
- **HTTP Method**: POST
- **URL Pattern**: /AddAdministrator
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Designates a user as an administrator for a group

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | AddGroupAdministratorCommand | Yes | Contains GroupId and UserId to make administrator |

##### Response Format
```json
{
  "id": 123,
  "name": "Government",
  "description": "Government agencies and organizations",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-04-17T00:00:00Z",
  "hasLogo": true,
  "logoUrl": "/api/groups/123/logo",
  "administrators": [
    {
      "id": "user123",
      "name": "Jane Smith",
      "email": "jsmith@admin.com"
    },
    {
      "id": "user456",
      "name": "Robert Brown",
      "email": "rbrown@admin.com"
    }
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ"
    },
    {
      "id": 457,
      "name": "State Department ABC"
    }
  ]
}
```

#### 🗑️ Remove Administrator
- **HTTP Method**: POST
- **URL Pattern**: /RemoveAdministrator
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Removes administrator status from a user for a group

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RemoveGroupAdministratorCommand | Yes | Contains GroupId and UserId to remove administrator status |

##### Response Format
```json
{
  "id": 123,
  "name": "Government",
  "description": "Government agencies and organizations",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-04-17T00:00:00Z",
  "hasLogo": true,
  "logoUrl": "/api/groups/123/logo",
  "administrators": [
    {
      "id": "user123",
      "name": "Jane Smith",
      "email": "jsmith@admin.com"
    }
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ"
    },
    {
      "id": 457,
      "name": "State Department ABC"
    }
  ]
}
```

#### ✏️ Upload Logo
- **HTTP Method**: POST
- **URL Pattern**: /UploadLogo
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Uploads a logo image for a group

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | AddGroupLogoCommand | Yes | Contains GroupId and logo image file |

##### Response Format
```json
{
  "id": 123,
  "name": "Government",
  "description": "Government agencies and organizations",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-04-17T00:00:00Z",
  "hasLogo": true,
  "logoUrl": "/api/groups/123/logo",
  "administrators": [
    {
      "id": "user123",
      "name": "Jane Smith",
      "email": "jsmith@admin.com"
    }
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ"
    },
    {
      "id": 457,
      "name": "State Department ABC"
    }
  ]
}
```

### 💡 Tips for Group Management
- Group administrators can manage all clients within their assigned group
- Groups can be used to apply consistent branding across multiple clients
- Consider using descriptive group names that reflect the organization or industry type
- Upload logos in PNG or JPG format with transparent backgrounds for best results