# SubscriptionController

## Quick Documentation

* **File Path**: `/API/Controllers/SubscriptionController.cs`
* **Primary Purpose**: Handles operations related to subscription management including client allocation, plan details, and renewal tracking.
* **Key Endpoints**:

  1. `GET /Subscription/ByClientId` — Retrieves subscription data for a specific client.
  2. `POST /Subscription/Update` — Updates or sets a subscription for a client.
* **Related Models**: `GetSubscriptionByClientIdQuery`, `UpdateSubscriptionCommand`, `SubscriptionDto`
* **Used By**:

  * Subscription management portal
  * Billing systems
  * Admin interfaces for license and feature control

---

## A. Overview

The `SubscriptionController` provides access and control over subscription-related settings for clients. It allows admin users to allocate plans, define renewal periods, and attach usage metadata to a client's subscription lifecycle.

## B. Base Route

```
/api/Subscription
```

## C. Endpoints

### 1. GET /Subscription/ByClientId

#### Purpose

Retrieves the current subscription data for a given client.

#### Request Details

* **Method**: GET
* **Authentication**: Required
* **Query Parameters**:

  * `clientId`: int (required)

#### Sample Response

```json
{
  "clientId": 101,
  "planName": "Enterprise",
  "startDate": "2025-01-01",
  "expiryDate": "2025-12-31",
  "isActive": true
}
```

---

### 2. POST /Subscription/Update

#### Purpose

Updates or assigns a subscription plan to a client.

#### Request Details

* **Method**: POST
* **Authentication**: Required
* **Body Parameters**:

  * `clientId`: int
  * `planName`: string
  * `startDate`: date
  * `expiryDate`: date

#### Sample Request

```json
{
  "clientId": 101,
  "planName": "Standard",
  "startDate": "2025-01-01",
  "expiryDate": "2025-12-31"
}
```

#### Sample Response

```json
{
  "success": true,
  "message": "Subscription updated."
}
```

---

## D. Data Models

### SubscriptionDto

* `clientId`: int
* `planName`: string
* `startDate`: datetime
* `expiryDate`: datetime
* `isActive`: boolean

### GetSubscriptionByClientIdQuery

* `clientId`: int — to filter the subscription record

### UpdateSubscriptionCommand

* `clientId`: int
* `planName`: string
* `startDate`: datetime
* `expiryDate`: datetime

---

## E. Business Context

Subscriptions define a client's entitlements within the platform. Plans may control feature access, user counts, data limits, or SLA commitments. By managing subscriptions centrally, the platform ensures appropriate billing, provisioning, and client lifecycle management.

---

## F. Security

All endpoints require Bearer Token authentication. Ensure requests include the following header:

```
Authorization: Bearer {token}
```

---

*End of Document*
