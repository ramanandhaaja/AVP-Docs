# UserController

## Quick Documentation

* **File Path**: `/API/Controllers/UserController.cs`
* **Primary Purpose**: Manages user accounts, their group relationships, role access, and personal information updates.
* **Key Endpoints**:

  1. `GET /User/List` — Retrieves a list of users.
  2. `GET /User/ById` — Retrieves user information by ID.
  3. `POST /User/UpdateProfile` — Updates a user’s profile details.
  4. `POST /User/AssignGroup` — Assigns a user to a group.
* **Related Models**: `GetUserListQuery`, `GetUserByIdQuery`, `UpdateUserProfileCommand`, `AssignUserToGroupCommand`, `UserDto`
* **Used By**:

  * Admin user management portal
  * Group configuration tools
  * Identity and role provisioning workflows

---

## A. Overview

The `UserController` provides key features to manage user identities within the platform. It handles queries to retrieve users and their metadata, as well as updates to profile information and group assignments. This functionality ensures proper access control, personalization, and organizational context for each user.

## B. Base Route

```
/api/User
```

## C. Endpoints

### 1. GET /User/List

#### Purpose

Retrieves a list of all users visible to the requester (typically scoped by client or group).

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "id": 1, "email": "admin@example.com", "name": "Admin User" },
  { "id": 2, "email": "staff@client.org", "name": "Client Staff" }
]
```

---

### 2. GET /User/ById

#### Purpose

Fetches profile details of a specific user by ID.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id`: int (required)

#### Sample Response

```json
{
  "id": 2,
  "name": "Client Staff",
  "email": "staff@client.org",
  "roles": ["ClientViewer"],
  "groups": ["Group A"]
}
```

---

### 3. POST /User/UpdateProfile

#### Purpose

Updates personal details of a user, such as name or contact information.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int
  * `name`: string
  * `email`: string

#### Sample Request

```json
{
  "id": 2,
  "name": "Updated Name",
  "email": "updated.email@example.com"
}
```

---

### 4. POST /User/AssignGroup

#### Purpose

Assigns a user to a specified group to inherit group-level permissions.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `userId`: int
  * `groupId`: int

#### Sample Request

```json
{
  "userId": 2,
  "groupId": 1
}
```

#### Sample Response

```json
{
  "success": true,
  "message": "User assigned to group."
}
```

---

## D. Data Models

### UserDto

* `id`: int
* `name`: string
* `email`: string
* `roles`: string\[]
* `groups`: string\[]

### GetUserListQuery

* No parameters

### GetUserByIdQuery

* `id`: int

### UpdateUserProfileCommand

* `id`: int
* `name`: string
* `email`: string

### AssignUserToGroupCommand

* `userId`: int
* `groupId`: int

---

## E. Business Context

User management is essential to all platform workflows. Role-based access, group-level inheritance, and profile-level settings allow the platform to control visibility, permissions, and personalization for each user type. This controller underpins administrative, security, and onboarding functionality.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
