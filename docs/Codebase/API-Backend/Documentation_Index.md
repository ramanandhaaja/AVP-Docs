# Asset Valuer Pro Technical Documentation Index

> **Important Note:**  
> This repository contains only the technical documentation for **Asset Valuer Pro (AVP)**. The source code is maintained in a separate repository and is **not included here**.

---

## Overview
This index is the **central navigation hub** for AVP technical documentation. It provides a structured and easy-to-navigate reference for developers, analysts, and stakeholders, ensuring they can quickly find relevant materials.

---

## Getting Started
- [README](README.md) - Overview of the documentation repository
- [Business Technical Overview](Business_Technical_Overview.md) - High-level business and technical summary
- [Technology Stack](Technology_Stack.md) - Frameworks and technologies used
- [Repository Structure](Repository_Structure.md) - Code organization
- [Handoff Guide](Handoff_Guide.md) - Onboarding guide for new team members

---

## System Architecture
### Core Architecture
- [Repository Structure](Repository_Structure.md) - Source code structure
- [Business Technical Map](Business_Technical_Map.md) - Mapping business processes to technical components

### Specialized Components
- [Mobile Data Collection](Mobile_Data_Collection.md) - Field data capture processes
- [Report Business Technical Map](Report_Business_Technical_Map.md) - Reporting system architecture

---

## Component Documentation
### API Controllers
- [API Controllers Inventory](API/Controllers_Inventory.md) - Comprehensive controller list
- [AssetController](API/AssetController.md) - Asset management endpoints
- [ComponentController](API/ComponentController.md) - Component management endpoints
- [ImportController](API/ImportController.md) - Data import/export endpoints
- [JobController](API/JobController.md) - Job management endpoints
- [ReportsController](API/ReportsController.md) - Report generation endpoints

### Data Models
- [Models Inventory](Models/Models_Inventory.md) - All data models overview
- [Asset](Models/Asset.md) - Asset model details
- [Component](Models/Component.md) - Component model details
- [Job](Models/Job.md) - Job model details
- [ValuationProfile](Models/ValuationProfile.md) - Valuation profile model details

### Business Logic Services
- [Services Inventory](Services/Services_Inventory.md) - List of services
- [ReportingServices](Services/ReportingServices.md) - Report generation services
- [ValuationServices](Services/ValuationServices.md) - Valuation calculation services
- [ImportExportServices](Services/ImportExportServices.md) - Data import/export services

### Report Generators
- [Reports Inventory](Reports/Reports_Inventory.md) - List of reports
- [GeneralValuationReport](Reports/GeneralValuationReport.md) - General valuation report
- [InsuranceValuationReport](Reports/InsuranceValuationReport.md) - Insurance valuation report
- [RenewalCostReport](Reports/RenewalCostReport.md) - Renewal cost report

---

## Process Workflows
- [Valuation Process Workflow](Workflows/Valuation_Process_Workflow.md) - End-to-end valuation process
- [Field Data Collection Workflow](Workflows/Field_Data_Collection_Workflow.md) - Field data collection steps
- [Reporting Process Workflow](Workflows/Reporting_Process_Workflow.md) - Report generation process

---

## Data Dictionaries
- [Asset Fields Dictionary](Data_Dictionary/Asset_Fields_Dictionary.md) - Asset data definitions
- [Valuation Fields Dictionary](Data_Dictionary/Valuation_Fields_Dictionary.md) - Valuation data definitions

---

## Developer Guidelines
- [Emoji Reference](Emoji_Reference.md) - Guidelines for emoji usage
- [Version Notes Guidelines](Version_Notes_Guidelines.md) - Version differences documentation standards

---

## Documentation Enhancement Plans
- [Documentation Enhancement Plan](Documentation_Enhancement_Plan.md) - Planned improvements roadmap

---

## Quick Reference Guides
### Version Differences
- [V2 to V3 Migration](Version_Notes_Guidelines.md) - Key version differences

### Common Workflows
| Workflow | Documentation | Related API | Models |
|----------|---------------|-------------|--------|
| Create New Asset | [Valuation Process](Workflows/Valuation_Process_Workflow.md) | [AssetController](API/AssetController.md) | [Asset](Models/Asset.md) |
| Import Asset Register | [Valuation Process](Workflows/Valuation_Process_Workflow.md) | [ImportController](API/ImportController.md) | [Asset](Models/Asset.md) |
| Run Field Collection | [Field Data Collection](Workflows/Field_Data_Collection_Workflow.md) | [ContentController](API/ContentController.md) | [Asset](Models/Asset.md), [Note](Models/Note.md) |
| Generate Reports | [Reporting Process](Workflows/Reporting_Process_Workflow.md) | [ReportsController](API/ReportsController.md) | [AssetValuation](Models/AssetValuation.md) |

---

## Documentation Standards
- Markdown format with standardized emoji prefixes for readability
- Clear technical and business context explanations
- Cross-references to related documentation for better navigation
- Differentiation of Version 2 and Version 3 features where applicable
- Code examples included for key technical concepts

---

## Maintenance and Updates
- Regularly update documentation with new components and workflows
- Reflect process changes in workflow documents
- Clearly document version differences
- Use the [Documentation Enhancement Plan](Documentation_Enhancement_Plan.md) to track improvements

---

## Contributing
To contribute effectively:
1. Maintain consistent formatting across documents
2. Cross-reference related materials
3. Update inventories when adding new components
4. Keep this index updated with new documents

