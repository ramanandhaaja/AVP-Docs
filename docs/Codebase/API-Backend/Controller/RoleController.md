# RoleController

## Quick Documentation

* **File Path**: `/API/Controllers/RoleController.cs`
* **Primary Purpose**: Manages system roles, including retrieval and updates for permission-based access.
* **Key Endpoints**:

  1. `GET /Role/List` — Retrieves all roles in the system.
  2. `GET /Role` — Retrieves a specific role by ID.
  3. `POST /Role/Update` — Updates or assigns permissions to a role.
* **Related Models**: `GetRoleListQuery`, `GetRoleQuery`, `UpdateRoleCommand`, `RoleDto`
* **Used By**:

  * Permission management tools
  * User administration interfaces
  * Access control configuration

---

## A. Overview

The `RoleController` provides mechanisms for querying and managing roles within the system. It supports operations such as listing all available roles, retrieving specific role configurations, and assigning access control permissions. Roles are used to determine what actions a user or service account can perform.

## B. Base Route

```
/api/Role
```

## C. Endpoints

### 1. GET /Role/List

#### Purpose

Retrieves a list of all available system roles.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "id": 1, "name": "Administrator" },
  { "id": 2, "name": "Valuer" },
  { "id": 3, "name": "ClientViewer" }
]
```

---

### 2. GET /Role

#### Purpose

Retrieves detailed information for a specific role by its ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 2,
  "name": "Valuer",
  "permissions": [
    "viewJobs",
    "editAssets",
    "generateReports"
  ]
}
```

---

### 3. POST /Role/Update

#### Purpose

Updates a role or assigns a set of permissions.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int
  * `name`: string (optional)
  * `permissions`: array of string

#### Sample Request

```json
{
  "id": 2,
  "name": "Valuer",
  "permissions": ["viewJobs", "editAssets"]
}
```

#### Sample Response

```json
{
  "success": true,
  "message": "Role updated."
}
```

---

## D. Data Models

### RoleDto

* `id`: int
* `name`: string
* `permissions`: array of string

### GetRoleListQuery

* No parameters

### GetRoleQuery

* `id`: int — identifier of the role to retrieve

### UpdateRoleCommand

* `id`: int
* `name`: string (optional)
* `permissions`: string\[]

---

## E. Business Context

Roles define what operations a user can perform in the system. By isolating permissions into named roles, administrators can consistently apply access rules across users and environments. This controller supports configuration for both platform-wide access control and client-specific customization.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
