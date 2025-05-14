# 🔧 ClientController Documentation

## 🔧 QUICK DOCUMENTATION
- **File Path**: /API/Controllers/ClientController.cs
- **Primary Purpose**: Manages client entities within the system, including client information, associated users, administrators, and documents.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves list of clients
  - 🔍 GET /Get - Gets a specific client by ID
  - 🔄 POST /Update - Updates client details
  - ✏️ POST /AddUser - Associates a user with a client
  - 🗑️ POST /RemoveUser - Removes a user from a client
  - ✏️ POST /SearchClients - Searches for clients based on criteria
  - ✏️ POST /AddDocument - Adds a document to a client
- **Related Models**: ClientDto, ClientSummaryDto, ClientDetailDto
- **Used By**: 
  - Administration screens
  - User management interfaces
  - Client management dashboards
  - Multi-tenancy functionality

## 🏗️ DETAILED DOCUMENTATION

### 🏗️ Overview
The ClientController manages client entities in Asset Valuer Pro's multi-tenant architecture. Clients represent organizations using the system, each with their own set of users, administrators, documents, and associated data. This controller handles all aspects of client management, including creation, retrieval, updating, user assignment, and document management. Access to this controller is restricted to users with the Administrator role.

### 🔧 Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: 
  - Authorization attribute requiring the Administrator role

### 📋 Endpoints

#### 🔍 List Clients By Group
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a list of clients, optionally filtered by group ID

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetClientListQuery | Yes | Optional GroupId to filter clients |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "City Council XYZ",
    "groupId": 456,
    "groupName": "Government",
    "contactPerson": "John Smith",
    "email": "jsmith@cityxyz.gov",
    "phone": "555-123-4567",
    "status": "Active",
    "numberOfJobs": 5,
    "numberOfUsers": 8
  },
  {
    "id": 124,
    "name": "ABC Corporation",
    "groupId": 789,
    "groupName": "Corporate",
    "contactPerson": "Jane Doe",
    "email": "jdoe@abccorp.com",
    "phone": "555-987-6543",
    "status": "Active",
    "numberOfJobs": 3,
    "numberOfUsers": 4
  }
]
```

#### 🔍 List Clients By User ID
- **HTTP Method**: GET
- **URL Pattern**: /ListByUserId
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a list of clients associated with a specific user

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetClientListByUserIdQuery | Yes | Contains UserId to filter clients |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "City Council XYZ",
    "groupId": 456,
    "groupName": "Government",
    "contactPerson": "John Smith",
    "email": "jsmith@cityxyz.gov",
    "phone": "555-123-4567",
    "status": "Active",
    "numberOfJobs": 5,
    "numberOfUsers": 8
  }
]
```

#### 🔍 Get Client Detail
- **HTTP Method**: GET
- **URL Pattern**: /GetDetail
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves detailed information about a specific client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetClientDetailQuery | Yes | Contains ClientId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "groupName": "Government",
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active",
  "createdDate": "2024-01-15T00:00:00Z",
  "lastModifiedDate": "2025-03-10T00:00:00Z",
  "numberOfJobs": 5,
  "numberOfUsers": 8,
  "subscriptionDetails": {
    "planType": "Enterprise",
    "startDate": "2024-01-01T00:00:00Z",
    "expiryDate": "2026-01-01T00:00:00Z",
    "features": ["EasySAM", "Multi-User", "Custom Reports"]
  },
  "users": [
    {
      "id": "user123",
      "name": "Sarah Johnson",
      "email": "sjohnson@cityxyz.gov",
      "role": "User"
    },
    {
      "id": "user456",
      "name": "Mike Brown",
      "email": "mbrown@cityxyz.gov",
      "role": "Administrator"
    }
  ],
  "documents": [
    {
      "id": "doc123",
      "fileName": "Service Agreement.pdf",
      "uploadDate": "2024-02-15T00:00:00Z",
      "uploadedBy": "Admin User"
    }
  ]
}
```

#### 🔍 Get Client
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves basic information about a specific client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetClientQuery | Yes | Contains ClientId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### 🔄 Update Client
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Updates client information or creates a new client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateClientCommand | Yes | Contains client data to update |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ (Updated)",
  "groupId": 456,
  "address": "456 New St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### ✏️ Search Clients
- **HTTP Method**: POST
- **URL Pattern**: /SearchClients
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Searches for clients based on various criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | SearchClientsQuery | Yes | Search criteria for clients |

##### Response Format
```json
[
  {
    "id": 123,
    "name": "City Council XYZ",
    "groupId": 456,
    "groupName": "Government",
    "contactPerson": "John Smith",
    "email": "jsmith@cityxyz.gov",
    "phone": "555-123-4567",
    "status": "Active",
    "numberOfJobs": 5,
    "numberOfUsers": 8
  }
]
```

#### ✏️ Add User
- **HTTP Method**: POST
- **URL Pattern**: /AddUser
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Associates a user with a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | AddUserCommand | Yes | Contains ClientId and UserId to associate |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### 🗑️ Remove User
- **HTTP Method**: POST
- **URL Pattern**: /RemoveUser
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Removes a user from a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RemoveUserCommand | Yes | Contains ClientId and UserId to disassociate |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### ✏️ Add Administrator
- **HTTP Method**: POST
- **URL Pattern**: /AddAdministrator
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Designates a user as an administrator for a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | AddClientAdministratorCommand | Yes | Contains ClientId and UserId to make administrator |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### 🗑️ Remove Administrator
- **HTTP Method**: POST
- **URL Pattern**: /RemoveAdministrator
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Removes administrator status from a user for a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RemoveClientAdministratorCommand | Yes | Contains ClientId and UserId to remove administrator status |

##### Response Format
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ",
  "contactPerson": "John Smith",
  "email": "jsmith@cityxyz.gov",
  "phone": "555-123-4567",
  "status": "Active"
}
```

#### ✏️ Add Document
- **HTTP Method**: POST
- **URL Pattern**: /AddDocument
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Adds a document to a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | AddDocumentCommand | Yes | Contains ClientId and document file to upload |

##### Response Format
```json
{
  "message": "Document successfully uploaded"
}
```

#### 🗑️ Remove Document
- **HTTP Method**: POST
- **URL Pattern**: /RemoveDocument
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Removes a document from a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | RemoveDocumentCommand | Yes | Contains ClientId and DocumentId to remove |

##### Response Format
```json
{
  "message": "Document successfully removed"
}
```

#### 🔍 Get Document
- **HTTP Method**: POST
- **URL Pattern**: /GetDocument
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a document associated with a client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetDocumentQuery | Yes | Contains ClientId and DocumentId to retrieve |

##### Response Format
File download (binary content)

### 🏗️ Multi-Tenant Architecture
ℹ️ **Note:** The ClientController is central to AVP's multi-tenant architecture:

1. **Client Isolation**
   - Each client's data is logically separated
   - Users are associated with specific clients
   - Assets, jobs, and related data belong to clients
   - Ensures data privacy and security

2. **User Assignment**
   - Users can be assigned to one or more clients
   - Client administrators can manage their users
   - System administrators can manage all clients
   - Role-based permissions within each client context

3. **Document Management**
   - Client-specific document storage
   - Contract and agreement management
   - Service documentation
   - Audit and compliance evidence

### 🔒 Security Considerations
The ClientController implements several security measures:

1. **Role-Based Access**
   - Only users with Administrator role can access endpoints
   - Client-specific administrators have limited access to their client
   - System administrators have access to all clients

2. **Data Isolation**
   - Queries automatically filter by client context
   - Cross-client data access is prevented
   - User-client relationships enforce data boundaries

3. **Audit Trails**
   - All client modifications are logged
   - User-client assignments are tracked
   - Document uploads and removals are recorded