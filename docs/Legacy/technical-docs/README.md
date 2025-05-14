# 🏗️ Asset Valuer Pro Technical Documentation

> **⚠️ Important Note:**  
> This repository contains only the technical documentation for Asset Valuer Pro. The source code is maintained in a separate repository and is not synced to this documentation repository.

This directory contains technical documentation for the Asset Valuer Pro (AVP) application, created to facilitate onboarding new development team members.

## 📋 Documentation Structure

The documentation is organized into the following directories:

- **🔧 API/**: Documentation for API controllers and endpoints
- **📊 Models/**: Documentation for data models and database entities
- **🧮 Services/**: Documentation for business logic services
- **📄 Reports/**: Documentation for report generation

## 🏗️ Technology Stack

Based on the available documentation, Asset Valuer Pro is built with:

- **Backend**: .NET 6 with DevExpress XAF (eXpressApp Framework) version 18.2.5
- **Frontend**: JavaScript/Node.js (likely with a modern framework)
- **Database**: SQL Server on Azure (me5cd2w04s.database.windows.net)
- **ORM**: XPO (eXpress Persistent Objects)
- **CI/CD**: Azure DevOps

## 🏗️ Solution Structure

- **FairValuePro.Module**: Contains business objects (Asset.cs, ComponentInput.cs, etc.)
- **FairValuePro.Module.Web**: Handles UI customization and API queries
- **FairValuePro.Web**: Main API project with Web.config

## 📋 Documentation Approach

This documentation follows a "Quick Documentation First" approach:

1. Each component has a "QUICK DOCUMENTATION" section that captures essential information:
   - File path
   - Primary purpose
   - Key endpoints/fields/methods
   - Related components
   - Usage context

2. The "DETAILED DOCUMENTATION" sections provide comprehensive information about each component.

## 📝 Key Business Processes

The main business processes supported by the application include:

1. Setting up a valuation framework (asset hierarchy, financial reporting hierarchy, valuation profiles)
2. Creating and managing jobs
3. Collecting and importing asset data
4. Running valuation calculations
5. Generating reports
6. Archiving completed valuations

## 📋 Documentation Navigation

For a complete index of all documentation, please refer to the [Documentation Index](./Documentation_Index.md). 

The [Handoff Guide](./Handoff_Guide.md) provides a structured approach for onboarding new team members.

## 💡 Emoji Usage

Throughout the documentation, emojis are used to provide visual cues and improve navigation:
- 🏗️ Architecture and structure information
- 📋 Process workflows and procedures
- 🔧 Technical components and implementations
- 📊 Data models and schemas
- 📝 Business context and requirements

For a complete guide to emoji usage, see the [Emoji Reference](./Emoji_Reference.md).