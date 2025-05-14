# Business Process Validation Summary
**Date:** April 30, 2025

## Overview

This document summarizes the updates made to the business process documentation following the April 24, 2025 meeting with Michelle Cross (APV Valuers & Asset Management). The meeting successfully addressed numerous information gaps previously marked in the documentation, providing valuable insights into actual operational practices.

## Key Business Processes Updated

All core business process documents have been updated with information from the validation meeting:

1. **File Setup and Configuration Process**
   - Clarified administrator (Sharon) responsibilities
   - Documented user role hierarchy and permissions
   - Added details about data import and validation processes
   - Added information about handling large datasets
   - Documented external performance tracking

2. **Data Collection Process**
   - Added details about pre-populated asset information
   - Included information about manual asset creation capability
   - Documented data validation processes
   - Updated to reflect iOS app (version 3) replacing FileMaker Pro

3. **Calculation and Reporting Process**
   - Added detailed validation criteria and processes
   - Documented report generation and customization workflow
   - Detailed information about client access to reports
   - Added details about manual quality control checks
   - Documented desktop land valuations process

4. **Post-Valuation Process**
   - Documented audit access protocols and limitations
   - Added information about archiving and data retention
   - Detailed process for future valuation planning
   - Added information about client system integration workflow
   - Documented manual steps in the rollover process

5. **Asset Valuation Process**
   - Clarified role responsibilities in the setup and valuation process
   - Documented manual percentage checks for quality control
   - Added details about desktop land valuations with external spreadsheets
   - Updated to reflect current iOS app implementation

## New Cross-Cutting Documentation

Two new documents were created to address important cross-cutting concerns:

1. **Access Control and User Roles**
   - Comprehensive documentation of role hierarchy
   - Six distinct roles from Support Login to Auditor
   - Detailed permissions and responsibilities for each role
   - Access control rules and key security decisions

2. **Quality Control Processes**
   - Cross-cutting documentation of quality measures across all process areas
   - Both system validation controls and manual quality checks
   - Quality control responsibilities and accountability
   - Potential process improvement opportunities

## Supporting Material Updates

1. **Business Process Map**
   - Added manual workarounds as explicit components
   - Added external systems and integrations
   - Added external performance tracking connections
   - Enhanced visual representation of the entire process flow

2. **Business-Technical Component Map**
   - Updated confidence levels for components based on validation
   - Added specific implementation details from the meeting
   - Enhanced descriptions of how technical components support business processes
   - Added key system validations and manual workaround support

## Key Information Added

### User Access and Roles
- Detailed hierarchy from Support Login (highest) to Auditor (restricted view-only)
- Michelle Cross as super admin has access to all jobs
- Sharon as administrator handles client setup and job creation
- Valuers can only access assigned jobs
- Clients and auditors have view-only access
- Auditors receive access after verification

### Manual Processes and Workarounds
- Desktop land valuations require external spreadsheets
- Manual report customization in Word before PDF conversion
- Manual percentage checks for quality control
- Manual asset creation for items not in register
- Data cleansing as a manual consistency process
- Manual rollover process for previous valuations

### Quality Control Measures
- Component values must sum to 100% rule
- Visual status indicators (valid, error, warning)
- System prevention of finalizing jobs with errors
- Manual outlier detection through percentage checks
- Client review process
- Audit verification through spot checks

### System Implementation Details
- Current implementation uses iOS app (version 3)
- Previous version used FileMaker Pro (version 2)
- Performance metrics tracked externally, not in AVP
- Archiving locks data but keeps it in database

## Information Gaps Still Requiring Clarification

Despite significant progress, several information gaps remain to be addressed:

1. **Common Challenges** (All processes)
   - What common issues are encountered during each process stage?
   - How are these issues typically resolved?

2. **Training and Knowledge Transfer**
   - How are users trained on system processes?
   - What documentation exists for training purposes?
   - How is knowledge transferred to new team members?

3. **Sampling Methodology** 
   - What sampling methodology is used for infrastructure validation?
   - How is sample size determined?
   - What ensures sample representativeness?

4. **Process Timing**
   - What is the typical timeline for a complete valuation process?
   - What factors affect process duration?

5. **Technical Implementation Details**
   - How are business rules implemented in the codebase?
   - Where are calculation formulas documented? (Michelle to provide)

## Next Steps

1. Schedule follow-up meeting to address remaining information gaps
2. Review updated documentation with 62C for feedback
3. Arrange screen sharing session with Michelle's team to document user experience
4. Receive auditor's guide and methodology guide from Michelle (via SharePoint)
5. Obtain documentation of formulas used in valuation calculations
6. Finalize documentation updates based on all inputs

## Conclusion

The business process validation meeting has significantly improved our documentation by addressing numerous information gaps previously marked. The updated documentation provides a much clearer picture of actual operational practices, including manual workarounds and external processes. This will help align technical documentation with real-world usage and provide 62C with a better understanding of the business processes supported by the software.

The comprehensive updates have transformed theoretical process descriptions into documentation that accurately reflects actual business practices, capturing both automated and manual components of the valuation workflow.