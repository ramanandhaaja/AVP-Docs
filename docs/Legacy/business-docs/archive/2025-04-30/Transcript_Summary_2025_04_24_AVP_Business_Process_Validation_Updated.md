# AVP Business Process Validation - Meeting Summary
**Date:** April 24, 2025

## Introduction

This document summarizes a business process validation meeting for Asset Valuer Pro (AVP) software. The meeting involved Michelle Cross (APV Valuers & Asset Management), Victor Hong (GetCimple), and Rahavan Yoganathan (Quintet Partners). The primary objective was to review and refine business process documentation for the valuation software, ensuring alignment between technical documentation and actual user experiences. The meeting specifically focused on addressing areas marked with yellow and red dots in the documentation, which indicated items needing clarification or additional input.

## Key Points Discussed

### Core Business Processes
- **Job Creation Process**: Sharon (administrator) sets up valuation jobs; valuers input frameworks and registers
- **Data Migration**: Process of moving from version 2 (FileMaker Pro) to version 3 (iOS app) for existing clients
- **Data Import/Export**: System provides feedback on import failures, identifying specific erroneous rows
- **Calculations and Validation**: Includes both system validation and manual verification processes
- **Reporting and Access Control**: Details on who can access specific data and how access is managed
- **Performance Metrics**: Currently tracked externally rather than within the AVP software

### System Functions and Features
- **Calculation Refresh**: Process shows status (valid, error, warning) with visual indicators
- **Validation Rules**: Component values must sum to 100%; otherwise, an error is flagged
- **Report Generation**: Utilizes templates with manual tailoring in Word before PDF conversion
- **User Access Levels**: Different permissions for administrators, valuers, clients, and auditors

## Information Gaps Addressed

This section specifically identifies how the meeting addressed "red items" (information gaps marked in red) from the business documentation.

### Priority Information Gaps

1. **Performance Metrics** *(Information_Gaps_Summary.md - High Priority Gap #5)*
   - **Gap Addressed**: The meeting revealed that performance metrics like job completion times are tracked externally, not within the AVP software.
   - **Details Provided**: These metrics are used for internal reporting and quality management.
   - **Status**: Fully addressed, though identified as a potential area for future system integration.

2. **Decision Criteria** *(Information_Gaps_Summary.md - High Priority Gap #2)*
   - **Gap Addressed**: Several decision criteria were clarified during the meeting.
   - **Details Provided**: 
     - Component values must sum to 100% to avoid error flagging
     - Manual percentage change checks are used to identify outliers
     - Comprehensive vs. desktop valuation criteria explained
   - **Status**: Partially addressed, with specific thresholds documented.

### File Setup Process Gaps

1. **User Roles and Permissions** *(File_Setup_Process.md - Step 2)*
   - **Gap Addressed**: Clarified specific roles in the system and their permissions.
   - **Details Provided**:
     - Sharon (administrator) handles client setup and job creation
     - The "support" login has the highest level of access
     - Different access levels exist for valuers, clients, and auditors
   - **Status**: Substantially addressed, providing clarity on role hierarchy.

2. **Initial Asset Register Import** *(File_Setup_Process.md - Step 7)*
   - **Gap Addressed**: Data mapping and cleansing approach for initial register import.
   - **Details Provided**:
     - Import typically uses Excel spreadsheets, though they can adapt to other formats
     - Large datasets managed through multiple Excel files or manual data adjustments
     - Data requirements clarified in tenders to manage extra work and associated charges
     - Data cleansing involves applying assumptions to fill gaps during import preparation
   - **Status**: Fully addressed, with clear workflow established.

### Calculation and Reporting Process Gaps

1. **Report Customization** *(Information_Gaps_Summary.md - Calculation and Reporting Process #2)*
   - **Gap Addressed**: Details on report customization options and process.
   - **Details Provided**:
     - Report generation utilizes templates from the AVP system
     - Manual tailoring (deleting irrelevant sections) done in Word before PDF conversion
     - The team expressed desire for more built-in customization options in future iterations
   - **Status**: Fully addressed, with current limitations and future needs documented.

2. **Calculation Rules** *(Information_Gaps_Summary.md - Calculation and Reporting Process #1)*
   - **Gap Addressed**: Validation of calculations for accuracy.
   - **Details Provided**:
     - Manual percentage change check to identify outliers is a key quality control process
     - System includes validation steps preventing finalization until errors are resolved
     - Calculation refresh process shows status with visual indicators
   - **Status**: Partially addressed, with validation process documented but specific algorithms not detailed.

### Post-Valuation Process Gaps

1. **Audit Support Procedures** *(Post_Valuation_Process.md - Step 2)*
   - **Gap Addressed**: Specific procedures for supporting the audit process.
   - **Details Provided**:
     - Auditors receive view-only access to the system after verification
     - Large firms have requested access to the valuation team, but this was denied
     - Auditors only need access to documentation, potentially for asset-level drilldowns
     - Auditors may perform spot checks to verify calculations and data splitting
   - **Status**: Fully addressed, with clear audit access protocols established.

2. **Archiving Policies** *(Post_Valuation_Process.md - Step 4)*
   - **Gap Addressed**: Details on archiving policies and procedures.
   - **Details Provided**:
     - Archiving locks the data but keeps it in the database for future reference
     - This process ensures consistency across years for comparative analysis
     - Job is archived after financial statements have been signed off
   - **Status**: Substantially addressed, with core procedures documented.

3. **Client System Integration** *(Post_Valuation_Process.md - Step 3)*
   - **Gap Addressed**: Process for client system integration.
   - **Details Provided**:
     - Workflow includes intermediary export, report generation, client review, query handling
     - Clients are given view-only access to their reports via the system
   - **Status**: Partially addressed, but specific formats and data mapping details remain undefined.

### Cross-Cutting Information Gaps

1. **Manual Workarounds** *(Information_Gaps_Summary.md - Cross-Cutting Gap #2)*
   - **Gap Addressed**: Detailed documentation of manual workarounds for system limitations.
   - **Details Provided**:
     - Desktop land valuations require index application in external spreadsheet before reimporting
     - Report customization requires manual tailoring in Word
     - Manual percentage change checks used for outlier detection
     - Manual asset creation available for items not initially listed in register
     - Previous comprehensive valuations rollover process includes manual workarounds
   - **Status**: Fully addressed, with comprehensive documentation of manual processes.

2. **Exception Handling** *(Information_Gaps_Summary.md - Cross-Cutting Gap #1)*
   - **Gap Addressed**: How exceptions are handled in the calculation process.
   - **Details Provided**:
     - System shows status (valid, error, warning) with visual indicators
     - Built-in system prevents finalizing jobs with errors
     - Refresh and revalidation options available after making changes
   - **Status**: Partially addressed, focusing primarily on calculation validation.

## Red Items Still Requiring Clarification

Despite the productive meeting, several "red items" from the documentation remain inadequately addressed:

1. **Training and Knowledge Transfer** *(Information_Gaps_Summary.md - Cross-Cutting Gap #3)*
   - No substantial information was provided about training processes or knowledge transfer to new team members.

2. **Assumption Management** *(Information_Gaps_Summary.md - File Setup Process #3)*
   - The process for developing and validating assumptions was not discussed in detail.

3. **Sampling Methodology** *(Information_Gaps_Summary.md - Data Collection Process #2)*
   - No information provided about the sampling methodology used for infrastructure validation.

4. **Process Improvement Framework** *(Information_Gaps_Summary.md - Cross-Cutting Gap #4)*
   - While individual improvement desires were mentioned (e.g., report customization), no formal process for continuous improvement was discussed.

5. **Technical Implementation of Business Rules** *(Information_Gaps_Summary.md - Technical-Business Gap #1)*
   - Limited information on how business rules are implemented in the codebase.

## Additional Insights Discovered

Beyond addressing documented gaps, the meeting revealed several important operational details not previously captured:

1. **External Performance Tracking**: Performance metrics, such as job completion times, are tracked externally to the system for internal reporting and quality management. This represents an opportunity for future system integration.

2. **Desktop Land Valuations Workflow**: A specific manual workflow exists for desktop land valuations, involving index application in external spreadsheets before reimporting data. This process is explicitly flagged within the software.

3. **Asset Register Management Flexibility**: Manual asset creation functionality provides flexibility during field inspections for items not initially listed in the register.

4. **Client Data Requirements in Tenders**: The team clarifies data requirements in tenders to manage client expectations about extra work and associated charges.

5. **Audit Access Restrictions**: Large firms have requested access to the valuation team, which was denied. This established a clear boundary for audit interactions.

6. **Report Customization Limitations**: Current report customization requires manual tailoring in Word, with the team expressing desire for more built-in options in future iterations.

7. **Client Data Workflow Complexity**: The end-to-end client data workflow includes multiple steps: intermediary export, report generation, client review, query handling, audit, and final version archiving.

## Action Items

### For Michelle Cross
- Review business process documentation, focusing on areas marked with yellow/red dots
- Provide feedback via Word document or audio recording
- Share auditor's guide and methodology guide with Victor Hong via SharePoint
- Provide documentation of formulas used in valuation calculations
- Save relevant reports in the shared folder
- Notify Paul to grant Tom subscriber access
- Schedule additional screen shares as needed

### For Victor Hong
- Update documentation based on meeting transcript
- Share updated documentation with 62C for feedback
- Arrange screen share with Michelle's team to demonstrate app functionality
- Create documentation using screen recording software (potentially Loom)

### For Rahavan Yoganathan
- Send Victor Hong the meeting transcript

## Conclusion

The meeting successfully addressed 7 high-priority "red items" from the business documentation, providing clear information about user roles, audit procedures, manual workarounds, report customization, calculation validation, archiving policies, and data import processes. This information significantly enhances the accuracy of the business process documentation.

Several "red items" remain only partially addressed or unaddressed, particularly around training, assumption management, sampling methodology, and the process improvement framework. These areas should be prioritized for future clarification sessions.

The additional insights gained during the meeting, particularly regarding external performance tracking and specific manual workflows, provide valuable context for understanding the operational reality of the valuation process. These insights will help align technical documentation with actual business practices and identify opportunities for future system enhancements.

Follow-up actions are clearly defined, with screen sharing sessions planned to further document user experience and workflow details. This collaborative approach will ensure comprehensive documentation that accurately reflects both technical capabilities and business processes.