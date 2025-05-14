# 📚 Asset Valuer Pro Technical Documentation Index

> **⚠️ Important Note:**  
> This repository contains only the technical documentation for Asset Valuer Pro. The source code is maintained in a separate repository and is not included in this documentation repository.

## 🏗️ Overview
This index serves as a central navigation point for all technical documentation related to the Asset Valuer Pro (AVP) system. Documentation is organized by category to help developers, business analysts, and project stakeholders quickly find relevant information.

## 📋 Getting Started

- [README](README.md) - Introduction to the documentation repository
- [Business Technical Overview](Business_Technical_Overview.md) - High-level overview of the system
- [Technology Stack](Technology_Stack.md) - Technical components and frameworks used
- [Repository Structure](Repository_Structure.md) - Organization of the source code
- [Handoff Guide](Handoff_Guide.md) - Guide for new team members

## 🏗️ System Architecture

### Core Architecture
- [Repository Structure](Repository_Structure.md) - Source code organization
- [Business Technical Map](Business_Technical_Map.md) - Business processes to technical components mapping

### Specialized Components
- [Mobile Data Collection](Mobile_Data_Collection.md) - Mobile data collection implementation
- [Report Business Technical Map](Report_Business_Technical_Map.md) - Reporting system components

## 🔧 Component Documentation

### API Controllers
- [API Controllers Inventory](API/Controllers_Inventory.md) - List of all API controllers
- [AssetController](API/AssetController.md) - Asset management endpoints
- [ComponentController](API/ComponentController.md) - Component management endpoints
- [ImportController](API/ImportController.md) - Data import/export endpoints
- [JobController](API/JobController.md) - Job management endpoints
- [ReportsController](API/ReportsController.md) - Report generation endpoints

### Data Models
- [Models Inventory](Models/Models_Inventory.md) - List of all data models
- [Asset](Models/Asset.md) - Asset model documentation
- [Component](Models/Component.md) - Component model documentation
- [Job](Models/Job.md) - Job model documentation
- [ValuationProfile](Models/ValuationProfile.md) - Valuation profile model documentation

### Business Logic Services
- [Services Inventory](Services/Services_Inventory.md) - List of all business logic services
- [ReportingServices](Services/ReportingServices.md) - Report generation services
- [ValuationServices](Services/ValuationServices.md) - Valuation calculation services
- [ImportExportServices](Services/ImportExportServices.md) - Data import/export services

### Report Generators
- [Reports Inventory](Reports/Reports_Inventory.md) - List of all report generators
- [GeneralValuationReport](Reports/GeneralValuationReport.md) - General valuation report documentation
- [InsuranceValuationReport](Reports/InsuranceValuationReport.md) - Insurance valuation report documentation
- [RenewalCostReport](Reports/RenewalCostReport.md) - Renewal cost report documentation

## 📋 Process Workflows

- [Valuation Process Workflow](Workflows/Valuation_Process_Workflow.md) - End-to-end valuation process
- [Field Data Collection Workflow](Workflows/Field_Data_Collection_Workflow.md) - Field data collection process
- [Reporting Process Workflow](Workflows/Reporting_Process_Workflow.md) - Report generation process

## 📊 Data Dictionaries

- [Asset Fields Dictionary](Data_Dictionary/Asset_Fields_Dictionary.md) - Asset field definitions and usage
- [Valuation Fields Dictionary](Data_Dictionary/Valuation_Fields_Dictionary.md) - Valuation field definitions and usage

## 🔧 Developer Guidelines

- [Emoji Reference](Emoji_Reference.md) - Emoji usage guidance in documentation
- [Version Notes Guidelines](Version_Notes_Guidelines.md) - Version differences documentation

## 📝 Enhancement Plans

- [Documentation Enhancement Plan](Documentation_Enhancement_Plan.md) - Ongoing documentation improvements

## 📋 Quick Reference Guides

### Version Differences
- [V2 to V3 Migration](Version_Notes_Guidelines.md) - Key differences between Version 2 and Version 3

### Common Workflows
| Workflow | Documentation | Related API | Models | 
|----------|---------------|-------------|--------|
| Create New Asset | [Valuation Process](Workflows/Valuation_Process_Workflow.md) | [AssetController](API/AssetController.md) | [Asset](Models/Asset.md) |
| Import Asset Register | [Valuation Process](Workflows/Valuation_Process_Workflow.md) | [ImportController](API/ImportController.md) | [Asset](Models/Asset.md) |
| Run Field Collection | [Field Data Collection](Workflows/Field_Data_Collection_Workflow.md) | [ContentController](API/ContentController.md) | [Asset](Models/Asset.md), [Note](Models/Note.md) |
| Generate Reports | [Reporting Process](Workflows/Reporting_Process_Workflow.md) | [ReportsController](API/ReportsController.md) | [AssetValuation](Models/AssetValuation.md) |

## 📋 Documentation Standards

All documentation in this repository follows these standards:
- Uses Markdown format with standardized emoji prefixes
- Includes both technical implementation details and business context
- Cross-references related documentation for easier navigation
- Distinguishes between Version 2 and Version 3 features where applicable
- Provides code examples for key technical concepts

## 📋 Maintenance and Updates

This documentation is a living resource that requires regular updates:
- New components should be added to relevant inventory documents
- Process changes should be reflected in workflow documentation
- Version differences should be clearly noted in affected documents
- The [Documentation Enhancement Plan](Documentation_Enhancement_Plan.md) tracks documentation improvement tasks

## 📋 Contributing

To contribute to this documentation:
1. Follow the emoji usage guidelines in [Emoji Reference](Emoji_Reference.md)
2. Maintain consistent formatting with existing documents
3. Cross-reference related documentation where appropriate
4. Update the relevant inventory documents for new components
5. Keep the [Documentation Index](Documentation_Index.md) updated with new documents
