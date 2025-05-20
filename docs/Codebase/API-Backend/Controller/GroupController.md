# GroupController

## Quick Documentation

* **File Path**: `/API/Controllers/GroupController.cs`
* **Primary Purpose**: Manages group entities, their administrators, logos, and related queries.
* **Key Endpoints**:

  1. `GET /Group` — Retrieves a group by ID.
  2. `GET /Group/List` — Retrieves a list of all groups.
  3. `POST /Group/AddAdministrator` — Assigns a user as an administrator to a group.
  4. `POST /Group/RemoveAdministrator` — Removes a user from the administrator list.
  5. `POST /Group/Update` — Updates basic group details.
  6. `POST /Group/UploadLogo` — Uploads or updates a group logo.
* **Related Models**: `GroupDto`, `UpdateGroupCommand`, `AddGroupAdministratorCommand`, `RemoveGroupAdministratorCommand`, `AddGroupLogoCommand`
* **Used By**:

  * User/group management interface
  * Role and access configuration tools
  * Group-based reporting and administration

---

## A. Overview

The `GroupController` enables CRUD operations and administrative control over groups. A group in this context may represent an organizational unit, client group, or access control domain. Administrators can be assigned or removed from groups, and branding such as logos can be managed.

## B. Base Route

```
/api/Group
```

## C. Endpoints

### 1. GET /Group

#### Purpose

Retrieves a group by its unique identifier.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `id` (int, required): The group ID

#### Sample Response

```json
{
  "id": 1,
  "name": "Group A",
  "logoUrl": "https://cdn.domain.com/logos/group-a.png",
  "administrators": [
    { "userId": 42, "userName": "admin@example.com" }
  ]
}
```

---

### 2. GET /Group/List

#### Purpose

Returns a list of all groups accessible to the current user.

#### Request Details

* **Method**: GET
* **Authentication**: Required

#### Sample Response

```json
[
  { "id": 1, "name": "Group A" },
  { "id": 2, "name": "Group B" }
]
```

---

### 3. POST /Group/AddAdministrator

#### Purpose

Adds a user as an administrator of a specific group.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `groupId` (int): ID of the target group
  * `userId` (int): ID of the user to assign

#### Sample Request

```json
{
  "groupId": 1,
  "userId": 42
}
```

#### Response

HTTP 200 OK on success

---

### 4. POST /Group/RemoveAdministrator

#### Purpose

Removes a user from a group’s list of administrators.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `groupId`: int
  * `userId`: int

#### Sample Request

```json
{
  "groupId": 1,
  "userId": 42
}
```

---

### 5. POST /Group/Update

#### Purpose

Updates group metadata such as name and settings.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `id`: int
  * `name`: string
  * Other editable fields (based on `UpdateGroupCommand`)

#### Sample Request

```json
{
  "id": 1,
  "name": "Group Alpha"
}
```

---

### 6. POST /Group/UploadLogo

#### Purpose

Uploads or replaces the logo associated with a group.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `groupId`: int
  * `logoData`: string (base64 encoded image)

#### Sample Request

```json
{
  "groupId": 1,
  "logoData": "iVBORw0KGgoAAAANS..."
}
```

---

## D. Data Models

### GroupDto

* `id`: int — Group ID
* `name`: string — Group name
* `logoUrl`: string — Public link to logo image
* `administrators`: list — Users assigned as admins

### UpdateGroupCommand

* `id`: int
* `name`: string

### AddGroupAdministratorCommand / RemoveGroupAdministratorCommand

* `groupId`: int
* `userId`: int

### AddGroupLogoCommand

* `groupId`: int
* `logoData`: string (base64)

---

## E. Business Context

Groups define logical boundaries for data visibility, administration, and user management. Assigning administrators allows distributed control across organizations or clients. Logo branding supports visual recognition in multi-tenant platforms.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---
