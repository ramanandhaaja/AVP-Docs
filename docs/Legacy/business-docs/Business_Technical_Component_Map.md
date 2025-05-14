# Business-Technical Component Map

## Overview
This document maps the business processes of Asset Valuer Pro to their technical implementations in the codebase. It serves as a bridge between business functionality and technical components, helping both business and technical teams understand how business requirements are realized in the system. This version has been updated based on business process validation information.

## Confidence Indicators
- 🟢 High confidence - Clear mapping between business process and technical component
- 🟡 Medium confidence - Likely relationship based on naming and context
- 🔴 Low confidence - Requires verification from development team

## Core Process to Technical Component Mapping

### 1. File Setup & Configuration Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Client Management | `ClientController.cs` | 🟡 | Handles client CRUD operations |
| User Management | `UserController.cs` | 🟢 | Manages user accounts and roles; Sharon (administrator) sets up jobs; supports different access levels |
| Valuation Framework | `ValuationFrameworkService.cs` | 🟡 | Creates and manages valuation frameworks |
| Asset Hierarchy | `AssetHierarchyController.cs` | 🟡 | Manages asset classification structure |
| Assumptions Management | `AssumptionsService.cs` | 🟡 | Handles different levels of assumptions |
| Job Creation | `JobController.cs` | 🟢 | Creates and configures valuation jobs; valuers input frameworks and registers |
| Initial Asset Import | `ImportExportService.cs` | 🟢 | Handles data import from client systems; provides feedback on import failures |

### 2. Data Collection Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Data Export to Mobile | `MobileAppIntegrationService.cs` | 🟢 | Manages data transfer to iOS app (version 3) |
| Field Inspections | iOS App | 🟢 | Current solution for field data collection (replaced File Maker Pro) |
| Data Synchronization | `SyncService.cs` | 🟡 | Handles synchronization of field data |
| Data Import | `ImportExportService.cs` | 🟢 | Manages data import; identifies erroneous rows; supports manual asset creation |
| Data Validation | `ValidationService.cs` | 🟢 | Implements validation rules including manual percentage checks |
| Asset Register Management | `AssetController.cs` | 🟢 | Core CRUD operations for assets; supports manual creation for items not in register |
| Photo/Image Management | `MediaService.cs` | 🟡 | Handles asset photos and documentation |

### 3. Calculation & Reporting Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Calculation Engine | `CalculationService.cs` | 🟢 | Core valuation calculation algorithms; includes validation that component values must sum to 100% |
| Results Validation | `ValidationService.cs` | 🟢 | Validates calculation results; shows status (valid, error, warning) with visual indicators |
| Report Generation | `ReportingService.cs` | 🟢 | Generates templates for various report types; requires manual customization in Word |
| Financial Reporting | `FinancialReportController.cs` | 🟡 | Specialized financial reporting |
| Insurance Valuation | `InsuranceValuationService.cs` | 🟡 | Insurance-specific calculations |
| Asset Management Reports | `AssetManagementReportService.cs` | 🟡 | Asset management outputs |
| Report Storage | `ReportStorageService.cs` | 🟢 | Manages report file containers; clients given view-only access to reports |

### 4. Post-Valuation Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Job Status Management | `JobStatusService.cs` | 🟢 | Handles job workflow state changes from 'open' to 'draft' or 'finalised' |
| Audit Support | `AuditService.cs` | 🟢 | Provides audit trail; auditors receive view-only access after verification |
| Data Export | `ExportService.cs` | 🟡 | Specialized export for client systems |
| Archiving | `ArchiveService.cs` | 🟢 | Locks data but keeps it in database for future reference |
| Previous Year Records | `PreviousYearService.cs` | 🟢 | Records data for year-to-year comparison; comprehensive valuations rollover process |

## Cross-Cutting Technical Components

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Security & Authentication | `AuthenticationService.cs` | 🟢 | Identity and access management; different access levels for administrators, valuers, clients, and auditors |
| Logging | `LoggingService.cs` | 🟡 | System-wide logging |
| Configuration Management | `ConfigurationService.cs` | 🟡 | Application configuration |
| Error Handling | `ErrorHandlingService.cs` | 🟢 | Global error management; provides feedback on import failures |
| API Gateway | .NET Core Web API | 🟢 | Main entry point for client interactions |
| Database Access | Entity Framework Core | 🟢 | Data persistence layer |

## Technical Architecture Alignment

The technical components align with the business architecture in the following ways:

1. **Layered Architecture**:
   - **API Layer**: Controllers handle business process entry points
   - **Service Layer**: Core business logic implementation including validation rules
   - **Data Layer**: Entity models and repositories

2. **Business Process Implementation**:
   - Each business process spans multiple technical components
   - Service-oriented design allows process steps to be implemented as discrete services
   - Cross-cutting concerns handled by specialized services
   - Manual workarounds supplement system capabilities where needed

3. **Mobile Integration**:
   - Current implementation uses iOS app (version 3)
   - Previous version used FileMaker Pro (version 2)
   - Export/import services facilitate data exchange
   - iOS app is fully integrated with the system

4. **Manual Workarounds Support**:
   - Desktop land valuations requiring external spreadsheets
   - Report customization requiring Word processing
   - External performance metrics tracking
   - Manual percentage change checks for quality control

## Key System Validations

Based on business process validation, the following key validations are implemented:

1. **Component Value Validation**: Component values must sum to 100% or system flags an error
2. **Calculation Status Indicators**: System shows status (valid, error, warning) with visual indicators
3. **Job Status Controls**: Changes can only be made in an 'open' job
4. **Finalization Controls**: Built-in system prevents finalizing jobs with errors
5. **Access Controls**: Different access levels for administrators, valuers, clients, and auditors

## Information Gaps and Verification Needs

1. **Component Names**: Technical component names are inferred from business functionality and common naming conventions
2. **Service Boundaries**: Exact responsibilities of each service need verification
3. **Integration Points**: Specific integration between components requires technical review
4. **Database Schema**: Relationship between data models and business entities needs verification
5. **Calculation Implementation**: Formula documentation to be provided by business unit

## Next Steps

1. **Technical Review**: Verify component names and relationships with development team
2. **Documentation Enhancement**: Add specific file paths and key classes/methods
3. **Cross-Reference**: Map API endpoints to business functions
4. **Detailed Component Documentation**: Create detailed documentation for key technical components
5. **Manual Workaround Documentation**: Document how technical components interface with manual processes

## References

- Technical Assessment and Documentation Strategy (pages 6-8)
- Overview.pdf (pages 3-5)
- Business Process Validation Meeting Transcript (2025-04-24)
- Source code analysis (pending verification)