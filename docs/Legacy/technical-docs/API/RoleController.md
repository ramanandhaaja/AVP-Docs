# 🔧 RoleController Documentation

## QUICK DOCUMENTATION
- **File Path**: `/API/Controllers/RoleController.cs`
- **Primary Purpose**: Manages user roles and role assignments in the APV system
- **Key Endpoints**: 
  - 🔍 `GET /api/Role/List`: Retrieves all application roles
- **Related Models**: 
  - `ApplicationRoleDto`: Represents a user role with its permissions
- **Used By**: 
  - Admin section for user management
  - Client and user administration functionality

## 📝 Business Context
The RoleController is part of the security infrastructure in APV, supporting the administrative functions needed to manage user permissions. This aligns with the client management functionality described in the Technical Audit, enabling proper access control for different types of users.

## DETAILED DOCUMENTATION

### 📝 Overview
RoleController provides endpoints for administrators to view and manage roles in the Asset Valuer Pro system. Roles define the permissions users have within the system, controlling access to features and data.

### 🏗️ Controller Dependencies
- **Namespace**: `AVP.API.Controllers`
- **Services Used**: 
  - `Mediator`: For handling commands and queries
- **Other Dependencies**: 
  - 🔒 `Authorize` attribute restricting access to Administrator role only

### 📋 Endpoints

#### 🔍 Get All Roles
- **HTTP Method**: GET
- **URL Pattern**: `/api/Role/List`
- **Authentication**: 🔒 Required, Administrator role only
- **Description**: Retrieves a list of all application roles

##### Request Parameters
None

##### Response Format
```json
[
  {
    "id": "string",
    "name": "string",
    "normalizedName": "string",
    "description": "string",
    "permissions": ["string"]
  }
]
```

### 💡 Implementation Notes
- ℹ️ The controller contains commented-out code for additional endpoints that appear to be under development:
  - GetRole: For retrieving a specific role
  - UpdateRole: For updating role details
- 🔒 Only administrators can access role management functionality
- ✅ Role permissions control access to specific features throughout the application