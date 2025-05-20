
# ClientController

## File Location
- **Path**: `/API/Controllers/ClientController.cs`
- **Purpose**: Manages client entities including their users, administrators, documents, and general information in a multi-tenant system.

## Overview
The `ClientController` supports management of organizations (clients) using the application. Each client can have:
- Users (both regular and administrator roles)
- Associated documents (e.g., agreements)
- Metadata such as address, contact info, and status

The controller includes functionality for CRUD operations on clients, user assignments, and document handling. Only users with Administrator roles have access to these endpoints.

## Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**:
  - `Mediator` (CQRS pattern)
- **Security**:
  - Role-based authorization (Administrator required)

---

## Available Endpoints

### GET /List

**Description**: Retrieves a list of clients. Optionally filtered by group ID.

**Request Parameters**:
- `GetClientListQuery` — *Required*

**Response Example**:
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

---

### GET /ListByUserId

**Description**: Retrieves clients associated with a specific user.

**Request Parameters**:
- `GetClientListByUserIdQuery` — *Required*

**Response Example**: (same as above)

---

### GET /GetDetail

**Description**: Retrieves full details of a client including users and documents.

**Request Parameters**:
- `GetClientDetailQuery` — *Required*

**Response Example**:
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "subscriptionDetails": {
    "planType": "Enterprise",
    "startDate": "2024-01-01T00:00:00Z",
    "expiryDate": "2026-01-01T00:00:00Z",
    "features": ["EasySAM", "Multi-User", "Custom Reports"]
  },
  "users": [
    { "id": "user123", "name": "Sarah Johnson", "role": "User" }
  ],
  "documents": [
    { "id": "doc123", "fileName": "Service Agreement.pdf" }
  ]
}
```

---

### GET /Get

**Description**: Retrieves basic client information by ID.

**Request Parameters**:
- `GetClientQuery` — *Required*

**Response Example**:
```json
{
  "id": 123,
  "name": "City Council XYZ",
  "groupId": 456,
  "address": "123 Main St, City XYZ"
}
```

---

### POST /Update

**Description**: Updates existing client or creates new one.

**Request Parameters**:
- `UpdateClientCommand` — *Required*

**Response**: Updated client object.

---

### POST /SearchClients

**Description**: Search for clients based on custom criteria.

**Request Parameters**:
- `SearchClientsQuery` — *Required*

**Response**: List of matching clients.

---

### POST /AddUser

**Description**: Assigns a user to a client.

**Request Parameters**:
- `AddUserCommand` — *Required*

**Response**: Updated client object.

---

### POST /RemoveUser

**Description**: Removes a user from a client.

**Request Parameters**:
- `RemoveUserCommand` — *Required*

**Response**: Updated client object.

---

### POST /AddAdministrator

**Description**: Assigns administrator role to a user for a client.

**Request Parameters**:
- `AddClientAdministratorCommand` — *Required*

**Response**: Updated client object.

---

### POST /RemoveAdministrator

**Description**: Removes administrator role from a user.

**Request Parameters**:
- `RemoveClientAdministratorCommand` — *Required*

**Response**: Updated client object.

---

### POST /AddDocument

**Description**: Adds a document to a client.

**Request Parameters**:
- `AddDocumentCommand` — *Required*

**Response**:
```json
{ "message": "Document successfully uploaded" }
```

---

### POST /RemoveDocument

**Description**: Removes a document from a client.

**Request Parameters**:
- `RemoveDocumentCommand` — *Required*

**Response**:
```json
{ "message": "Document successfully removed" }
```

---

### POST /GetDocument

**Description**: Retrieves a document file associated with a client.

**Request Parameters**:
- `GetDocumentQuery` — *Required*

**Response**: File stream

---

## Multi-Tenant Architecture Considerations

1. **Client Isolation**: Each client’s data is separated and secured.
2. **User Management**: Users can be tied to one or more clients.
3. **Admin Roles**: System admins manage all clients, client admins manage only their assigned clients.
4. **Documents**: Each client may store files (agreements, service docs) with audit tracking.

---

## Security Features

1. **Access Control**: Endpoints require Administrator role.
2. **Audit Trail**: All changes (updates, user/doc management) are logged.
3. **Data Segregation**: Client-specific filtering and enforcement ensure isolation.

---

## Related Models
- `ClientDto`, `ClientSummaryDto`, `ClientDetailDto`

## Consumers
- Admin portals
- Client dashboards
- User management systems
- Document repositories
