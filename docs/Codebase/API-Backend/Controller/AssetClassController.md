# AssetClassController

## Purpose

The `AssetClassController` helps manage **asset classes** within the Asset Valuer Pro (AVP) system. An asset class is a **high-level category** used to group similar assets—such as Buildings, Land, or Infrastructure. This controller allows the system to look up asset classes, see which ones are connected to specific jobs, and check which ones are still unassigned.

This functionality is essential for setting up asset hierarchies, configuring jobs, and ensuring valuation data is organized properly for reporting and analysis.

---

## Business Context

In AVP, asset classes are the **foundation** of how assets are structured. Each valuation job is typically tied to one or more asset classes, and the type of asset class can affect how it's valued (e.g., using cost, market, or income-based methods).

For example:

- A building may use a cost-based method.
- Land might use a market value approach.
- Infrastructure may have its own unique model.

This controller is used during:

- **Job setup and configuration**
- **Asset classification and mapping**
- **Importing structured data from clients**

---

## Overview

The `AssetClassController` is built on top of the `ApiController`, meaning it automatically inherits behaviors like:

- Requiring users to be logged in
- Following consistent URL structure (`/api/AssetClass`)
- Using the **CQRS** pattern for managing requests and responses

It contains three key endpoints that allow users or systems to retrieve asset class information in different ways.

---

## Technical Structure (Simplified)

| Component | Description |
|-----------|-------------|
| **Namespace** | `AVP.API.Controllers` |
| **Base Class** | Inherits from `ApiController` |
| **Dependency** | Uses `Mediator` from the CQRS pattern |
| **Security** | Requires users to be authenticated for all endpoints |

---

## Endpoints & What They Do

### 1. List Asset Classes By Job

| Feature | Description |
|--------|-------------|
| **HTTP Method** | GET |
| **URL** | `/api/AssetClass/ListByJob` |
| **What It Does** | Returns a list of asset classes linked to a specific job |
| **Requires Login** | ✅ Yes |
| **Input** | `JobId` passed through a query object |
| **Output Example** |

```json
[
  { "id": 1, "name": "Buildings" },
  { "id": 2, "name": "Infrastructure" },
  { "id": 3, "name": "Land" }
]
```

This helps users see which asset classes have been assigned to a valuation job.

### 2. List Asset Classes With No Jobs
| Feature | Description |
|---------|-------------|
| **HTTP** | Method	GET
| **URL** | /api/AssetClass/ListWithNoJobs
| **What It Does** | Lists asset classes that are not linked to any job
| **Requires Login** | ✅ Yes
| **Input** | None
| **Output** | Example

```json
[
  { "id": 4, "name": "Furniture & Fittings" },
  { "id": 5, "name": "Plant & Equipment" }
]
```
This is useful for identifying asset classes that are available to be assigned to new jobs.

### 3. Get Job By Asset Class ID
Feature	Description
HTTP Method	GET
URL	/api/AssetClass/JobByAssetClassId
What It Does	Finds a job associated with a specific asset class
Requires Login	✅ Yes
Input	AssetClassId passed through a query object
Output Example	

```json
{
  "id": 123,
  "name": "Example Job",
  "clientId": 456,
  "status": "Open",
  "effectiveDate": "2025-01-15T00:00:00Z",
  "description": "Annual valuation for Client X",
  "assetClassIds": [1, 2, 3]
}
```
Helps users understand where an asset class is already in use.

### 4. Related Models
This controller works with the following simplified data structures (models):

| Model Name | Description |
|------------|-------------|
| **DropDownDto** | A simple object with id and name used for dropdowns and lists |
| **JobDto** | Contains detailed information about a job such as status, client, and associated asset classes |

### 5. Relationships in the Data Structure
Asset classes are part of a three-level hierarchy used for organizing assets:
1. Asset Class – the broad category (e.g., "Land")
2. Asset Type – a more specific category under an asset class
3. Asset Subtype – even more specific details under a type

This setup allows AVP to apply the right valuation approach and reporting rules at each level.

### 6. Summary
| Topic | Details |
|-------|---------|
| **File Path** | /API/Controllers/AssetClassController.cs |
| **Inherits From** |ApiController |
| **Security** | All endpoints require authentication |
| **Uses CQRS?** | ✅ Yes, via MediatR |
| **Used In** |	Job setup screens, asset classification, asset hierarchy tools |
| **Related Models** | DropDownDto, JobDto |
| **Main Endpoints** | /ListByJob, /ListWithNoJobs, /JobByAssetClassId |