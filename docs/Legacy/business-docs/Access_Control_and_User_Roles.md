# Access Control and User Roles

## Overview

This document outlines the access control structure and user role hierarchy within Asset Valuer Pro (AVP). It defines the various roles, their permissions, and responsibilities based on information gathered during the business process validation meeting. Understanding these roles and permissions is essential for proper system administration and security management.

## Role Hierarchy

AVP implements a hierarchical access control model with the following roles (in order of decreasing permissions):

1. **Support Login** - Highest level of system access
2. **Super Admin** (e.g., Michelle Cross) - Access to all jobs and user management
3. **Administrator** (e.g., Sharon) - Client setup and job creation
4. **Valuer** - Access to assigned jobs only
5. **Client** - View-only access to their reports
6. **Auditor** - View-only access after verification

## Role Descriptions and Permissions

### Support Login

- **Description**: Technical support role with full system access
- **Permissions**:
  - Complete system administration access
  - Ability to troubleshoot all aspects of the system
  - Can impersonate other user roles when needed
  - Can modify system configuration
- **Responsibilities**: Technical support, system maintenance

### Super Admin

- **Description**: Highest-level business user with administrative privileges (e.g., Michelle Cross)
- **Permissions**:
  - Access to all jobs in the system
  - User management capabilities
  - Can assign jobs to valuers
  - Full reporting access
  - Can modify system settings
- **Responsibilities**: Overall system administration, user management, cross-job reporting and analysis

### Administrator

- **Description**: User responsible for initial system setup (e.g., Sharon)
- **Permissions**:
  - Create and configure clients
  - Set up initial jobs
  - Create users and assign roles
  - Manage license types (Multi, Single, or 3rd party)
- **Responsibilities**: Client setup, job creation, initial configuration

### Valuer

- **Description**: Core operational user who performs valuations
- **Permissions**:
  - Access only to specifically assigned jobs
  - Create valuation frameworks and asset hierarchies
  - Import and validate data
  - Run calculations
  - Generate reports
  - Modify jobs in 'open' status
- **Responsibilities**: Data collection, valuation, reporting, client interaction

### Client

- **Description**: External client with limited view access
- **Permissions**:
  - View-only access to their reports via the system
  - Cannot modify data or calculations
  - Can review results and provide feedback
- **Responsibilities**: Report review, feedback provision

### Auditor

- **Description**: External auditor with limited view access
- **Permissions**:
  - View-only access to documentation after verification
  - Access to asset-level drilldowns for verification
  - Access to methodology review
  - May perform spot checks on calculations and data splitting
  - Cannot modify data or calculations
- **Responsibilities**: Audit verification, compliance checks, methodology review

## Access Control Rules

1. **Job Access Control**:
   - Valuers can only access specific jobs they are assigned to
   - Super admins can access all jobs
   - Clients can only access their own reports

2. **Status-Based Controls**:
   - Changes can only be made to jobs in 'open' status
   - Once a job is changed to 'draft' or 'finalised', modifications are restricted

3. **Data Modification Restrictions**:
   - Archived jobs are locked but remain in the database for reference
   - View-only access prevents data modification by clients and auditors

4. **Audit Access Control**:
   - Auditors receive view-only access after verification
   - Large firms' requests for access to the valuation team are denied
   - Access is limited to documentation and verification only

## Key Access Control Decisions

1. **Client Access**: Clients are given view-only access to their reports via the system, preventing unauthorized modifications.

2. **Auditor Access**: Auditors receive view-only access after verification, with access to methodology documentation and asset-level drilldowns for spot-checks.

3. **Valuer Access Limitations**: Valuers can only access jobs they are specifically assigned to, ensuring data segregation.

4. **Super Admin Oversight**: Super admins like Michelle Cross have access to all jobs for oversight and management purposes.

5. **Support Access**: Support login has the highest level of access, enabling technical troubleshooting.

## Implementation Notes

1. The access control hierarchy is implemented through the `UserController.cs` component.

2. Role assignments are managed during the File Setup & Configuration Process.

3. The security model enforces strict boundaries between clients while allowing appropriate administrative oversight.

4. The system does not currently implement a formal approval workflow, but does include validation steps that prevent finalization until errors are resolved.

## Future Considerations

1. **Role-Based Report Customization**: Consider implementing role-specific report views.

2. **Delegated Administration**: Evaluate the need for delegated administrative capabilities for large clients.

3. **Enhanced Audit Tools**: Develop specialized audit-focused interfaces for more efficient verification.

4. **Two-Factor Authentication**: Consider implementing for higher-security roles.

## Change History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-04-30 | 1.0 | Documentation Team | Initial documentation based on business process validation meeting |