# 🔧 SubscriptionController Documentation

## QUICK DOCUMENTATION
- **File Path**: /API/Controllers/SubscriptionController.cs
- **Primary Purpose**: Manages client subscription data, including features, limits, and expiration dates.
- **Key Endpoints**: 
  - 🔍 GET /List - Retrieves list of subscriptions
  - 🔍 GET /Get - Gets a specific subscription by ID
  - 🔄 POST /Update - Updates subscription details
- **Related Models**: SubscriptionDto, SubscriptionSummaryDto
- **Used By**: 
  - Administrative interfaces
  - Client management screens
  - License management system
  - Feature access control

## DETAILED DOCUMENTATION

### 📝 Overview
The SubscriptionController manages subscription information for clients in Asset Valuer Pro. Subscriptions define the features, limits, and validity periods for each client using the system. This controller provides functionality to list, retrieve, and update subscription information. Access to this controller is restricted to users with the Administrator role, as it deals with licensing and access control.

### 🏗️ Controller Dependencies
- **Namespace**: AVP.API.Controllers
- **Services Used**: 
  - Mediator (CQRS pattern implementation)
- **Other Dependencies**: 
  - 🔒 Authorization attribute requiring the Administrator role

### 📋 Endpoints

#### 🔍 List Subscriptions
- **HTTP Method**: GET
- **URL Pattern**: /List
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves a list of subscriptions, optionally filtered by criteria

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | SubscriptionListQuery | Yes | Query parameters for filtering subscriptions |

##### Response Format
```json
[
  {
    "id": 123,
    "clientId": 456,
    "clientName": "City Council XYZ",
    "planType": "Enterprise",
    "status": "Active",
    "startDate": "2024-01-01T00:00:00Z",
    "expiryDate": "2026-01-01T00:00:00Z",
    "maxUsers": 20,
    "currentUsers": 8
  },
  {
    "id": 124,
    "clientId": 457,
    "clientName": "ABC Corporation",
    "planType": "Professional",
    "status": "Active",
    "startDate": "2024-03-15T00:00:00Z",
    "expiryDate": "2025-03-15T00:00:00Z",
    "maxUsers": 10,
    "currentUsers": 4
  }
]
```

#### 🔍 Get Subscription
- **HTTP Method**: GET
- **URL Pattern**: /Get
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Retrieves detailed information about a specific subscription

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| query | GetSubscriptionQuery | Yes | Contains SubscriptionId to retrieve |

##### Response Format
```json
{
  "id": 123,
  "clientId": 456,
  "clientName": "City Council XYZ",
  "planType": "Enterprise",
  "status": "Active",
  "startDate": "2024-01-01T00:00:00Z",
  "expiryDate": "2026-01-01T00:00:00Z",
  "createdDate": "2023-12-15T00:00:00Z",
  "lastModifiedDate": "2024-11-20T00:00:00Z",
  "maxUsers": 20,
  "currentUsers": 8,
  "features": [
    {
      "name": "EasySAM",
      "enabled": true
    },
    {
      "name": "Multi-User",
      "enabled": true
    },
    {
      "name": "Custom Reports",
      "enabled": true
    },
    {
      "name": "API Access",
      "enabled": false
    }
  ],
  "limits": {
    "maxAssets": 10000,
    "maxJobs": 50,
    "maxStorage": 10240
  },
  "usage": {
    "currentAssets": 5430,
    "currentJobs": 12,
    "currentStorage": 4765
  },
  "billingInfo": {
    "plan": "Annual",
    "nextBillingDate": "2025-01-01T00:00:00Z",
    "amount": 10000,
    "currency": "AUD"
  }
}
```

#### 🔄 Update Subscription
- **HTTP Method**: POST
- **URL Pattern**: /Update
- **Authentication**: 🔒 Required (Administrator role only)
- **Description**: Updates subscription information or creates a new subscription

##### Request Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | UpdateSubscriptionCommand | Yes | Contains subscription data to update |

##### Response Format
```json
{
  "id": 123,
  "clientId": 456,
  "clientName": "City Council XYZ",
  "planType": "Enterprise Plus",
  "status": "Active",
  "startDate": "2024-01-01T00:00:00Z",
  "expiryDate": "2027-01-01T00:00:00Z",
  "createdDate": "2023-12-15T00:00:00Z",
  "lastModifiedDate": "2025-04-17T00:00:00Z",
  "maxUsers": 30,
  "currentUsers": 8,
  "features": [
    {
      "name": "EasySAM",
      "enabled": true
    },
    {
      "name": "Multi-User",
      "enabled": true
    },
    {
      "name": "Custom Reports",
      "enabled": true
    },
    {
      "name": "API Access",
      "enabled": true
    }
  ],
  "limits": {
    "maxAssets": 20000,
    "maxJobs": 100,
    "maxStorage": 20480
  },
  "usage": {
    "currentAssets": 5430,
    "currentJobs": 12,
    "currentStorage": 4765
  },
  "billingInfo": {
    "plan": "Annual",
    "nextBillingDate": "2026-01-01T00:00:00Z",
    "amount": 15000,
    "currency": "AUD"
  }
}
```

### 💡 Tips for Subscription Management
- ⚠️ Changing subscription plans may affect client access to features
- ℹ️ The system automatically checks subscription validity before allowing access to restricted features
- 🔒 Only system administrators can modify subscription details
- ⚡ Subscription usage statistics are updated in real-time as clients use the system