# 📋 Asset Valuer Pro Handoff Guide

## 📋 Introduction

This document serves as an onboarding and handoff guide for developers, business analysts, and stakeholders who are new to the Asset Valuer Pro (AVP) system. It provides a structured approach to understanding the system's documentation, architecture, and key business processes.

## 📋 Getting Started

### Documentation Overview

The AVP technical documentation is organized into several key areas:

1. **System Architecture**: Overall structure and components
2. **Business Technical Map**: Business processes mapped to technical components
3. **Component Documentation**: Detailed API, models, and service documentation
4. **Process Workflows**: End-to-end workflows for key business processes
5. **Data Dictionaries**: Field-level reference for core entities

Start by reviewing the [Documentation Index](Documentation_Index.md) for a complete map of available documentation.

### Environment Setup

> **⚠️ Important Note:**  
> The source code is maintained in a separate repository and is not synced to this documentation GitHub repository. You will need to request access to the source code repository separately.

For development environment setup:

1. Refer to the [Technology Stack](Technology_Stack.md) document for required tools and versions
2. The codebase is located in the `source-code` directory (note: this is separate from the documentation repository)
3. Main solution file: `AVP.sln` in the source-code directory
4. The system consists of several projects:
   - `API` - Web API and React frontend
   - `Application` - Business logic and application layer
   - `Domain` - Core domain models and business rules
   - `Infrastructure` - Data access and third-party integrations
   - `BackgroundTasks` - Background processing services

## 📋 Understanding the System

### Core Business Context

Asset Valuer Pro is a specialized application for asset valuation that supports:

1. **Financial Reporting Valuation**: Fair value calculations for financial statements
2. **Insurance Valuation**: Replacement and indemnity value calculations
3. **Asset Management**: Lifecycle planning and condition assessment
4. **Field Data Collection**: Mobile data capture for physical attributes and condition

The system implements several valuation methodologies:
- Direct Cost
- Apportionment Cost
- Market Approach
- Income Approach

These align with accounting standards such as IFRS (International Financial Reporting Standards) and IPSAS (International Public Sector Accounting Standards).

### Key Technical Architecture

The system follows a clean architecture pattern with:

1. **Web Layer**: React frontend and ASP.NET Core API
2. **Application Layer**: CQRS pattern with MediatR for commands and queries
3. **Domain Layer**: Rich domain model with business logic
4. **Infrastructure Layer**: Data access with Entity Framework Core

The application is deployed to Azure Cloud in the Sydney region with:
- Web application (.NET Core and React)
- iOS capture application
- Supporting infrastructure including logging and database systems
- Point-in-time recovery capability

### Version Considerations

The system exists in multiple versions:
- **Version 2**: Original implementation, using File Maker Pro for mobile data collection
- **Version 3**: Current implementation, with custom iOS app and enhanced features

Important differences are noted in the [Version Notes Guidelines](Version_Notes_Guidelines.md).

## 📋 Key Business Processes

### Valuation Process

The end-to-end valuation process includes:

1. Client and Job setup
2. Valuation Framework creation (asset hierarchy and assumptions)
3. Asset Registration (import or manual)
4. Data Collection (field app or direct entry)
5. Calculation processing
6. Report generation
7. Job archiving

For detailed information, see the [Valuation Process Workflow](Workflows/Valuation_Process_Workflow.md).

### Field Data Collection

The field data collection process includes:

1. Exporting data to mobile app
2. Field inspection and data capture
3. Photograph collection
4. Data synchronization
5. Integration with valuation process

For detailed information, see the [Field Data Collection Workflow](Workflows/Field_Data_Collection_Workflow.md).

### Reporting

The reporting process includes:

1. Data validation
2. Report selection and configuration
3. Report generation
4. Export and storage

For detailed information, see the [Reporting Process Workflow](Workflows/Reporting_Process_Workflow.md).

## 📋 Key Components Reference

### Core Domain Models

| Model | Description | Documentation |
|-------|-------------|---------------|
| Asset | Core asset entity | [Asset](Models/Asset.md) |
| Component | Asset component | [Component](Models/Component.md) |
| Job | Valuation job | [Job](Models/Job.md) |
| ValuationProfile | Valuation methodology | [ValuationProfile](Models/ValuationProfile.md) |

### Main API Controllers

| Controller | Purpose | Documentation |
|------------|---------|---------------|
| AssetController | Asset management | [AssetController](API/AssetController.md) |
| ComponentController | Component management | [ComponentController](API/ComponentController.md) |
| ImportController | Data import/export | [ImportController](API/ImportController.md) |
| JobController | Job management | [JobController](API/JobController.md) |
| ReportsController | Report generation | [ReportsController](API/ReportsController.md) |

### Business Logic Services

| Service | Purpose | Documentation |
|---------|---------|---------------|
| ValuationService | Valuation calculations | [ValuationServices](Services/ValuationServices.md) |
| ReportCalculationService | Report generation | [ReportingServices](Services/ReportingServices.md) |
| ImportExportService | Data import/export | [ImportExportServices](Services/ImportExportServices.md) |

## 📋 Development Guidelines

### Accessing and Using Documentation

1. **Finding Information**:
   - Use the [Documentation Index](Documentation_Index.md) as your starting point
   - Refer to data dictionaries for field-level details
   - Consult process workflows for end-to-end understanding

2. **Contributing to Documentation**:
   - Follow the emoji usage guidelines in [Emoji Reference](Emoji_Reference.md)
   - Maintain consistent formatting with existing documents
   - Cross-reference related documentation where appropriate
   - Update inventory documents when adding new components

### Development Approach

1. **Understanding Changes**:
   - Begin with the [Business Technical Map](Business_Technical_Map.md) to understand how business processes map to components
   - Review the relevant workflow documentation
   - Understand the domain models involved
   - Check relevant API controllers and services

2. **Making Changes**:
   - Ensure changes align with existing architectural patterns
   - Follow domain-driven design principles
   - Maintain separation of concerns between layers
   - Implement validation at appropriate levels
   - Update documentation when making significant changes

### Testing Guidance

1. **Testing Approach**:
   - Domain logic has unit tests in the `AVP.Test` project
   - Integration tests cover key workflows
   - Manual testing focuses on UI/UX and report generation

2. **Testing Considerations**:
   - Valuation calculations have complex business rules
   - Reports must meet specific formatting requirements
   - Data import/export formats must be exactly correct
   - Mobile synchronization requires special testing

## 📋 Common Tasks and Workflows

### Adding a New Asset Type

1. Update the asset hierarchy in the database
2. Configure valuation assumptions
3. Update related valuation profiles if needed
4. Test with sample assets of the new type

See: [Asset Hierarchy Management](Models/HierarchyNode.md)

### Creating a New Report

1. Create a new query handler in the `Application/Reports/Queries` directory
2. Implement the report generation logic
3. Add a new endpoint in `ReportsController.cs`
4. Update the UI to include the new report option

See: [Reporting Process Workflow](Workflows/Reporting_Process_Workflow.md)

### Modifying Valuation Calculations

1. Understand the current calculation in relevant valuation method
2. Modify the calculation logic
3. Update unit tests
4. Test with representative sample data

See: [Valuation Fields Dictionary](Data_Dictionary/Valuation_Fields_Dictionary.md)

## 📋 Known Issues and Limitations

1. **Performance Considerations**:
   - Large asset imports can be memory-intensive
   - Report generation for extensive portfolios may be slow
   - Calculation refresh is resource-intensive for large data sets

2. **Version-Specific Issues**:
   - Version 2 to Version 3 migration has data format differences
   - Mobile app integration points differ between versions
   - Report templates may need version-specific handling

## 📋 Support and Resources

### Internal Support

- Documentation repository: Available in this GitHub repository
- Technical knowledge base: Referenced in documentation
- Source code: Located in the separate source code repository (not included in this documentation repository)

### External Resources

- .NET Core documentation: [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/core/)
- React documentation: [React Docs](https://reactjs.org/docs/getting-started.html)
- Entity Framework Core: [EF Core](https://docs.microsoft.com/en-us/ef/core/)
- MediatR documentation: [MediatR GitHub](https://github.com/jbogard/MediatR/wiki)

## 📋 Additional Documentation (Requires Legacy Developer Input)

These documentation areas are critical to capture while the current developer is available. Items are split into two categories: one for **application & database handoff to the new dev team**, and the other for **DevOps-specific items for Tom**.

---

### 🧑‍💻 Application & Database – For New Dev Team

| # | Area | Description |
|----|------|-------------|
| 1 | **Mobile App Sync Architecture** | How data syncs between the iOS app and backend, including retry logic, offline mode, and known issues. |
| 2 | **Performance Optimization Notes** | Optimizations implemented (e.g., for large asset imports or reports) and known bottlenecks. |
| 3 | **Data Migration History (V2 → V3)** | Key changes, pain points, and handling differences in data structure or behavior. |
| 4 | **Third-Party Dependencies** | APIs, SDKs, libraries in use—including those with special integration or licensing concerns. |
| 5 | **Support Runbooks** | Step-by-step resolution playbooks for common production issues (e.g., sync errors, report failures). |
| 6 | **Glossary of Domain Terms** | Definitions of key business and technical terms (e.g., valuation profile, component hierarchy). |
| 7 | **Sample Data Packs** | Dummy or anonymized datasets for dev/test environments that reflect common edge cases. |
| 8 | **Database ERD** | Visual or written description of table relationships (e.g., Asset → Component → Job). |
| 9 | **Schema Change Log** | Record of structural database changes and reasoning behind them. |
| 10 | **Indexing & Query Tuning Notes** | Indexed fields and any important performance tuning details or slow query workarounds. |
| 11 | **DB Init & Seeding Scripts** | How to set up a working local database environment, including base seed data. |
| 12 | **Data Validation Rules** | Business rules, constraints, and field-level checks not enforced at code level. |
| 13 | **Complete Data Dictionary** | Field-level definitions and intended usage, especially for reporting fields. |
| 14 | **ETL / Reporting Data Flows** | How reporting data is transformed or pre-aggregated, including staging logic. |

---

### ⚙️ DevOps & Infrastructure – For Tom

| # | Area | Description |
|----|------|-------------|
| 1 | **CI/CD Pipeline Overview** | How builds, tests, and deployments work (e.g., GitHub Actions, staging vs production, secrets). |
| 2 | **Feature Flags / Configuration Matrix** | Runtime toggles and environment-specific settings that influence behavior. |
| 3 | **Error Handling & Logging Strategy** | Where logs go (e.g., Azure), how errors are handled, and how to trace/debug key flows. |
| 4 | **Backup & Recovery Procedures** | Where backups are stored, retention policies, and how to restore the system. |
| 5 | **Azure Infrastructure Overview** | Overview of cloud services (e.g., App Services, DB, storage, logging) and key settings. |

## 📋 Immediate Handover Activities

To ensure smooth transition, the following activities should be prioritized while the existing developer is available:

1. **Knowledge Transfer Sessions**:
   - Schedule 3-5 focused sessions (2 hours each) covering:
     - Core architecture and design decisions
     - Known issues and workarounds
     - Common support scenarios
     - Mobile sync architecture
     - Deployment process walkthrough

2. **Pair Programming**:
   - Implement 1-2 small features together
   - Work through a typical bug fix process
   - Perform a deployment to staging environment

3. **Documentation Expansion**:
   - Create screen recording walkthroughs of critical processes
   - Document 5 most common support issues and resolutions
   - Review and annotate any complex code sections

4. **Environment Access**:
   - Set up developer environments with all necessary access
   - Verify database connections and permissions
   - Ensure code repository access is in place
   - Complete Azure portal permissions transfers

## 📋 First 30 Days Plan

After handover, the new development team should focus on these activities:

1. **Week 1-2: Orientation**
   - Review all documentation
   - Set up development environments
   - Run the system locally
   - Trace key workflows end-to-end

2. **Week 3-4: Controlled Changes**
   - Fix 2-3 minor bugs
   - Implement a small non-critical feature
   - Run test deployments to staging
   - Update documentation based on new understanding

3. **Throughout: Documentation Enhancement**
   - Add to the data dictionary as knowledge improves
   - Document any discovered undocumented features
   - Create additional diagrams for complex processes
   - Update any incorrect documentation

## 📋 Conclusion

This guide provides a starting point for understanding the Asset Valuer Pro system. Remember to leverage the comprehensive documentation available, especially the process workflows and data dictionaries, to gain a deeper understanding of the system.

The additional documentation areas outlined above should be prioritized to ensure a smooth transition from the current development team to the new team. By systematically working through these items, the new team will more quickly become self-sufficient.

For any questions or clarifications, refer to the documentation first, and then reach out to the development team if needed.

Happy developing!