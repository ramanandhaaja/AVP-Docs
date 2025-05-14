# Business-Technical Component Map

## Overview
This document maps the business processes of Asset Valuer Pro to their technical implementations in the codebase. It serves as a bridge between business functionality and technical components, helping both business and technical teams understand how business requirements are realized in the system.

## Confidence Indicators
- 🟢 High confidence - Clear mapping between business process and technical component
- 🟡 Medium confidence - Likely relationship based on naming and context
- 🔴 Low confidence - Requires verification from development team

## Core Process to Technical Component Mapping

### 1. File Setup & Configuration Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Client Management | `ClientController.cs` | 🟡 | Handles client CRUD operations |
| User Management | `UserController.cs` | 🟡 | Manages user accounts and roles |
| Valuation Framework | `ValuationFrameworkService.cs` | 🟡 | Creates and manages valuation frameworks |
| Asset Hierarchy | `AssetHierarchyController.cs` | 🟡 | Manages asset classification structure |
| Assumptions Management | `AssumptionsService.cs` | 🟡 | Handles different levels of assumptions |
| Job Creation | `JobController.cs` | 🟡 | Creates and configures valuation jobs |
| Initial Asset Import | `ImportExportService.cs` | 🟡 | Handles data import from client systems |

### 2. Data Collection Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Data Export to Mobile | `MobileAppIntegrationService.cs` | 🟡 | Manages data transfer to mobile app |
| Field Inspections | iOS App | 🟢 | Current solution for field data collection |
| Data Synchronization | `SyncService.cs` | 🟡 | Handles synchronization of field data |
| Data Import | `ImportExportService.cs` | 🟡 | Manages data import from various sources |
| Data Validation | `ValidationService.cs` | 🟡 | Implements validation rules for collected data |
| Asset Register Management | `AssetController.cs` | 🟡 | Core CRUD operations for assets |
| Photo/Image Management | `MediaService.cs` | 🟡 | Handles asset photos and documentation |

### 3. Calculation & Reporting Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Calculation Engine | `CalculationService.cs` | 🟡 | Core valuation calculation algorithms |
| Results Validation | `ValidationService.cs` | 🟡 | Validates calculation results |
| Report Generation | `ReportingService.cs` | 🟡 | Generates various report types |
| Financial Reporting | `FinancialReportController.cs` | 🟡 | Specialized financial reporting |
| Insurance Valuation | `InsuranceValuationService.cs` | 🟡 | Insurance-specific calculations |
| Asset Management Reports | `AssetManagementReportService.cs` | 🟡 | Asset management outputs |
| Report Storage | `ReportStorageService.cs` | 🟡 | Manages report file containers |

### 4. Post-Valuation Process

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Job Status Management | `JobStatusService.cs` | 🟡 | Handles job workflow state changes |
| Audit Support | `AuditService.cs` | 🟡 | Provides audit trail and documentation |
| Data Export | `ExportService.cs` | 🟡 | Specialized export for client systems |
| Archiving | `ArchiveService.cs` | 🟡 | Manages job archiving and history |
| Previous Year Records | `PreviousYearService.cs` | 🟡 | Records data for year-to-year comparison |

## Cross-Cutting Technical Components

| Business Function | Technical Component | Confidence | Notes |
|-------------------|---------------------|------------|-------|
| Security & Authentication | `AuthenticationService.cs` | 🟡 | Identity and access management |
| Logging | `LoggingService.cs` | 🟡 | System-wide logging |
| Configuration Management | `ConfigurationService.cs` | 🟡 | Application configuration |
| Error Handling | `ErrorHandlingService.cs` | 🟡 | Global error management |
| API Gateway | .NET Core Web API | 🟢 | Main entry point for client interactions |
| Database Access | Entity Framework Core | 🟢 | Data persistence layer |

## Technical Architecture Alignment

The technical components align with the business architecture in the following ways:

1. **Layered Architecture**:
   - **API Layer**: Controllers handle business process entry points
   - **Service Layer**: Core business logic implementation
   - **Data Layer**: Entity models and repositories

2. **Business Process Implementation**:
   - Each business process spans multiple technical components
   - Service-oriented design allows process steps to be implemented as discrete services
   - Cross-cutting concerns handled by specialized services

3. **Mobile Integration**:
   - Current implementation uses iOS app
   - Export/import services facilitate data exchange
   - iOS app is fully integrated with the system

## Information Gaps and Verification Needs

1. **Component Names**: Technical component names are inferred from business functionality and common naming conventions
2. **Service Boundaries**: Exact responsibilities of each service need verification
3. **Integration Points**: Specific integration between components requires technical review
4. **Database Schema**: Relationship between data models and business entities needs verification
5. **Calculation Implementation**: Specific algorithms and methodologies implementation details

## Next Steps

1. **Technical Review**: Verify component names and relationships with development team
2. **Documentation Enhancement**: Add specific file paths and key classes/methods
3. **Cross-Reference**: Map API endpoints to business functions
4. **Detailed Component Documentation**: Create detailed documentation for key technical components

## References

- Technical Assessment and Documentation Strategy (pages 6-8)
- Overview.pdf (pages 3-5)
- Source code analysis (pending verification)
