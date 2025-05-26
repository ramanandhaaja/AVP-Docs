
# Asset Valuer Pro Handoff Guide

## Introduction

This document serves as an onboarding and handoff guide for developers, business analysts, and stakeholders who are new to the Asset Valuer Pro (AVP) system. It provides a structured approach to understanding the system's documentation, architecture, and key business processes.

## Getting Started

### Documentation Overview

The AVP technical documentation is organized into several key areas:

1. System Architecture
2. Business Technical Map
3. Component Documentation
4. Process Workflows
5. Data Dictionaries

Start by reviewing the [Documentation Index](Documentation_Index.md) for a complete map of available documentation.

### Environment Setup

**Important Note:**  
The source code is maintained in a separate repository and is not synced to this documentation GitHub repository. You will need to request access to the source code repository separately.

To set up your environment:

1. Refer to the [Technology Stack](Technology_Stack.md) for required tools and versions
2. Locate the source code under the `source-code` directory
3. Main solution file: `AVP.sln`
4. Core projects:
   - `API` – Web API and React frontend
   - `Application` – Business logic layer
   - `Domain` – Domain models and rules
   - `Infrastructure` – Data access and integrations
   - `BackgroundTasks` – Background job services

## Understanding the System

### Business Context

AVP is designed for asset valuation, including:

1. Financial Reporting Valuation
2. Insurance Valuation
3. Asset Management
4. Field Data Collection

Supported valuation methodologies:

- Direct Cost
- Apportionment Cost
- Market Approach
- Income Approach

Aligned with standards: IFRS, IPSAS

### Architecture Summary

The architecture uses clean architecture with:

- Web Layer: React + ASP.NET Core
- Application Layer: CQRS + MediatR
- Domain Layer: Entity-rich modeling
- Infrastructure: EF Core + Azure

### Deployment Environment

- Azure-hosted (Sydney)
- Includes:
  - Web + iOS apps
  - Logging & monitoring
  - Database with PITR

### Versioning Notes

- Version 2: File Maker Pro integration
- Version 3: Current iOS app with full-stack implementation

See [Version Notes Guidelines](Version_Notes_Guidelines.md).

## Key Business Processes

### Valuation Process

1. Setup Job and Client
2. Create Valuation Framework
3. Import/Register Assets
4. Collect Field Data
5. Refresh Calculations
6. Generate Reports
7. Archive Job

See [Valuation Process Workflow](Workflows/Valuation_Process_Workflow.md)

### Field Data Collection

1. Export to mobile
2. Perform inspection
3. Take photos
4. Sync data
5. Proceed to valuation

See [Field Data Collection Workflow](Workflows/Field_Data_Collection_Workflow.md)

### Reporting

1. Validate data
2. Select report
3. Generate report
4. Export to file

See [Reporting Process Workflow](Workflows/Reporting_Process_Workflow.md)

## Core References

### Domain Models

| Model | Description | Link |
|-------|-------------|------|
| Asset | Base entity | [Asset](Models/Asset.md) |
| Component | Asset component | [Component](Models/Component.md) |
| Job | Valuation job | [Job](Models/Job.md) |
| ValuationProfile | Methodology config | [ValuationProfile](Models/ValuationProfile.md) |

### API Controllers

| Controller | Purpose | Link |
|------------|---------|------|
| AssetController | Asset ops | [AssetController](API/AssetController.md) |
| ComponentController | Component ops | [ComponentController](API/ComponentController.md) |
| ImportController | Data ops | [ImportController](API/ImportController.md) |
| JobController | Job ops | [JobController](API/JobController.md) |
| ReportsController | Report ops | [ReportsController](API/ReportsController.md) |

### Key Services

| Service | Role | Link |
|---------|------|------|
| ValuationService | Valuation logic | [ValuationServices](Services/ValuationServices.md) |
| ReportCalculationService | Report logic | [ReportingServices](Services/ReportingServices.md) |
| ImportExportService | Data I/O | [ImportExportServices](Services/ImportExportServices.md) |

## Development Guidelines

### Using Documentation

- Start with [Documentation Index](Documentation_Index.md)
- Use data dictionaries for fields
- Use workflows for understanding flows

### Writing Documentation

- Match formatting conventions
- Use cross-references
- Update inventories when adding content

### Making Changes

- Follow the Business Technical Map
- Trace workflows and domain models
- Validate with DDD and existing structure

### Testing

- Unit tests in `AVP.Test`
- Integration for workflows
- Manual for UI and reports

### Testing Focus

- Valuation accuracy
- Report formatting
- Data compatibility
- Sync reliability

## Common Workflows

### Add Asset Type

1. Update hierarchy
2. Configure assumptions
3. Update profiles
4. Test with sample asset

See [Asset Hierarchy](Models/HierarchyNode.md)

### New Report

1. Add query in `Reports/Queries`
2. Build logic
3. Add endpoint
4. Update UI

See [Reporting Workflow](Workflows/Reporting_Process_Workflow.md)

### Modify Valuation Logic

1. Analyze current logic
2. Apply change
3. Update test
4. Validate results

See [Valuation Fields Dictionary](Data_Dictionary/Valuation_Fields_Dictionary.md)

## Known Limitations

- Large imports may slow
- Report performance degrades with volume
- Valuation refresh is resource-intensive

## Support Resources

- Docs: this repo
- Code: separate repo (access required)

### External References

- [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/)
- [React](https://reactjs.org/docs/getting-started.html)
- [EF Core](https://docs.microsoft.com/en-us/ef/core/)
- [MediatR](https://github.com/jbogard/MediatR/wiki)

## Documentation Gaps

### Dev Team Focus

- Sync architecture
- Optimization notes
- Migration notes
- External APIs
- Runbooks
- Glossary
- Sample datasets
- ERD
- Schema changelog
- Indexing guidance
- DB seed instructions
- Validation logic
- Data dictionary
- ETL flow

### DevOps Focus

- CI/CD details
- Feature flags
- Logging/errors
- Backup/restore
- Azure services

## Handover Tasks

1. Knowledge sessions (3–5)
2. Pair programming
3. Document walkthroughs
4. Environment access and setup

## First 30 Days

### Week 1–2
- Review
- Setup
- Local run
- Trace flows

### Week 3–4
- Fix small bugs
- Add minor feature
- Test deployment
- Refine docs

Ongoing: improve documentation accuracy

## Conclusion

This guide is the foundation for a successful handover. Work through documentation, use workflows and data dictionaries, and clarify with the outgoing dev as needed.
