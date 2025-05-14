# 🔧 UserController Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/UserController.cs
- **Primary Purpose**: Manages users within the system, including user information, permissions, and client associations.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves list of users
  - 🔍 GET /Get - Gets a specific user by ID
  - 🔄 POST /Update - Updates user details
  - ✏️ POST /Invite - Invites a new user to the system
  - 🗑️ POST /Delete - Deletes a user from the system
  - 🔄 POST /ChangeClient - Changes a user's active client
  - 🔄 POST /ToggleValuerMode - Toggles valuer mode for a user
- **Related Models**: ApplicationUserDto
- **Used By**: 
  - User administration screens
  - Client user management
  - Account management
  - Access control functionality

## DETAILED DOCUMENTATION

### 📝 Overview
The UserController manages user accounts within Asset Valuer Pro. Users represent individuals who have access to the system, each with specific permissions, roles, and client associations. This controller handles all aspects of user management, including listing, retrieval, updating, invitation, deletion, and client association. Access to this controller is restricted to users with the Administrator role.

### 🏗️ Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: 
  - 🔒 Authorization attribute requiring the Administrator role

### 📋 Endpoints

#### 🔍 List Users
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a list of users, optionally filtered by criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetUserListQuery | Yes | Query parameters for filtering users |

##### Response Format
```json
[
  {
    "id": "user123",
    "email": "john.smith@example.com",
    "firstName": "John",
    "lastName": "Smith",
    "clientId": 456,
    "clientName": "City Council XYZ",
    "role": "User",
    "isActive": true,
    "lastLogin": "2025-04-10T14:30:00Z",
    "isValuerMode": false
  },
  {
    "id": "user456",
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "clientId": 456,
    "clientName": "City Council XYZ",
    "role": "Administrator",
    "isActive": true,
    "lastLogin": "2025-04-15T09:45:00Z",
    "isValuerMode": true
  }
]
```

#### 🔍 Get User
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves detailed information about a specific user

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetUserQuery | Yes | Contains UserId to retrieve |

##### Response Format
```json
{
  "id": "user123",
  "email": "john.smith@example.com",
  "firstName": "John",
  "lastName": "Smith",
  "clientId": 456,
  "clientName": "City Council XYZ",
  "role": "User",
  "isActive": true,
  "createdDate": "2024-05-10T00:00:00Z",
  "lastLogin": "2025-04-10T14:30:00Z",
  "isValuerMode": false,
  "permissions": [
    "ViewAssets",
    "EditAssets",
    "ViewReports",
    "RunValuations"
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ",
      "role": "User"
    },
    {
      "id": 457,
      "name": "State Department ABC",
      "role": "ReadOnly"
    }
  ]
}
```

#### 🔄 Update User
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Updates user information

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateUserCommand | Yes | Contains user data to update |

##### Response Format
```json
{
  "id": "user123",
  "email": "john.smith@example.com",
  "firstName": "John",
  "lastName": "Smith-Johnson",
  "clientId": 456,
  "clientName": "City Council XYZ",
  "role": "Administrator",
  "isActive": true,
  "createdDate": "2024-05-10T00:00:00Z",
  "lastLogin": "2025-04-10T14:30:00Z",
  "isValuerMode": false,
  "permissions": [
    "ViewAssets",
    "EditAssets",
    "ViewReports",
    "RunValuations",
    "ManageUsers"
  ],
  "clients": [
    {
      "id": 456,
      "name": "City Council XYZ",
      "role": "Administrator"
    },
    {
      "id": 457,
      "name": "State Department ABC",
      "role": "ReadOnly"
    }
  ]
}
```

#### 🔄 Change Client
- **HTTP Method**: POST
- **URL Pattern**: /ChangeClient
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Changes a user's active client

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ChangeClientCommand | Yes | Contains UserId and ClientId to set as active |

##### Response Format
```json
"Successfully changed client for user"
```

#### ✏️ Invite User
- **HTTP Method**: POST
- **URL Pattern**: /Invite
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Invites a new user to the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | InviteUserCommand | Yes | Contains user information for invitation |

##### Response Format
```json
{
  "success": true,
  "message": "Invitation sent successfully",
  "invitationId": "inv123"
}
```

#### ✏️ Reinvite User
- **HTTP Method**: POST
- **URL Pattern**: /Reinvite
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Resends an invitation to a user who has not yet accepted

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ReinviteUserCommand | Yes | Contains UserId to reinvite |

##### Response Format
```json
{
  "success": true,
  "message": "Invitation resent successfully",
  "invitationId": "inv456"
}
```

#### 🗑️ Delete User
- **HTTP Method**: POST
- **URL Pattern**: /Delete
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Deletes a user from the system

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | DeleteUserCommand | Yes | Contains UserId to delete |

##### Response Format
```json
[
  {
    "id": "user456",
    "email": "jane.doe@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "clientId": 456,
    "clientName": "City Council XYZ",
    "role": "Administrator",
    "isActive": true,
    "lastLogin": "2025-04-15T09:45:00Z",
    "isValuerMode": true
  },
  {
    "id": "user789",
    "email": "robert.brown@example.com",
    "firstName": "Robert",
    "lastName": "Brown",
    "clientId": 456,
    "clientName": "City Council XYZ",
    "role": "User",
    "isActive": true,
    "lastLogin": "2025-04-12T11:15:00Z",
    "isValuerMode": false
  }
]
```
(Returns the remaining users after deletion)

#### 🔄 Toggle Valuer Mode
- **HTTP Method**: POST
- **URL Pattern**: /ToggleValuerMode
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Toggles valuer mode for a user, which changes the user interface and available features

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | ToggleValuerMode | Yes | Contains UserId to toggle valuer mode |

##### Response Format
```json
1
```
(Returns success flag)

### 💡 Tips for User Management
- ⚠️ Deleting a user cannot be undone - consider deactivating users instead of deleting them
- ℹ️ Valuer mode provides specialized interfaces for field valuers with simplified workflows
- 🔒 User permissions are determined by their role and client association
- ✅ New users must accept their invitation before they can access the system