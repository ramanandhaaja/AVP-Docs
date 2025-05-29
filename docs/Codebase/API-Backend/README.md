
# Asset Valuer Pro Technical Documentation

**Important Note:**  
This repository contains only the technical documentation for Asset Valuer Pro. The source code is maintained in a separate repository and is not synced to this documentation repository.

This directory provides technical documentation to support onboarding and knowledge transfer for the Asset Valuer Pro (AVP) development team.

## Documentation Structure

Documentation is organized into the following areas:

- **API/** – Backend controller and endpoint documentation
- **Models/** – Data models and database schema references
- **Services/** – Business logic and application services
- **Reports/** – Report generation and formatting documentation

## Technology Stack

Based on available documentation, AVP uses:

- **Backend** – .NET 6 with DevExpress XAF (v18.2.5)
- **Frontend** – JavaScript/Node.js (likely with a modern framework)
- **Database** – SQL Server (hosted on Azure)
- **ORM** – XPO (eXpress Persistent Objects)
- **CI/CD** – Azure DevOps

## Solution Structure

- `FairValuePro.Module` – Business domain objects (e.g., Asset.cs, ComponentInput.cs)
- `FairValuePro.Module.Web` – UI customization and API query layer
- `FairValuePro.Web` – Main API project including web config and app entry points

## Documentation Approach

This repository uses a "Quick Documentation First" format:

1. Each document begins with a **Quick Documentation** section:
   - File path
   - Purpose
   - Key methods, fields, or endpoints
   - Related models or services
   - Usage context

2. Followed by a **Detailed Documentation** section with deep explanations

## Key Business Processes

Supported business workflows include:

1. Valuation framework setup (hierarchies, profiles)
2. Job creation and management
3. Asset registration and data import
4. Valuation processing and calculations
5. Report generation and export
6. Job closure and archiving

## Documentation Navigation

- Start with the [Documentation Index](./Documentation_Index.md) for a full list of content
- Use the [Handoff Guide](./Handoff_Guide.md) for onboarding new team members

## Style and Formatting Notes

This documentation avoids emoji in official releases for clarity and professionalism. Use section headings, consistent formatting, and clean indentation for navigation and readability.
