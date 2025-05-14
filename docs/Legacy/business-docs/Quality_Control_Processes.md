# Quality Control Processes

## Overview

This document outlines the quality control processes implemented within Asset Valuer Pro (AVP) across multiple business process areas. It details both systematic and manual quality control measures used to ensure data accuracy, calculation validity, and reporting quality. This information was gathered during the business process validation meeting and spans multiple core processes.

## Quality Control in Data Import and Validation

### System Validation Controls

1. **Import Error Identification**
   - The system provides feedback on import failures
   - Erroneous rows are specifically identified to enable targeted correction
   - Prevents invalid data from entering the system

2. **Data Format Validation**
   - Ensures imported data meets required format specifications
   - Validates data types and required fields
   - Enforces data structure consistency

### Manual Quality Control Measures

1. **Data Cleansing Process**
   - Manual process to ensure consistency between reported and client-adjusted figures
   - Involves applying assumptions to fill in gaps during import preparation
   - Critical for maintaining data integrity

2. **Data Requirements Management**
   - Data requirements are clarified in tenders to manage extra work and associated charges
   - Sets clear expectations about data quality and format
   - Reduces quality issues through proactive communication

## Quality Control in Calculation Process

### System Validation Controls

1. **Component Value Validation**
   - Component values must sum to 100%; otherwise, an error is flagged
   - Systematic enforcement of business rule
   - Prevents invalid component allocations

2. **Status Indicators**
   - System shows status (valid, error, warning) with visual indicators
   - Provides immediate feedback on calculation state
   - Different colors or symbols indicate different status levels

3. **Finalization Prevention**
   - Built-in system prevents finalizing jobs with errors
   - Forces resolution of all validation issues before completion
   - Maintains data integrity throughout the process

### Manual Quality Control Measures

1. **Manual Percentage Change Check**
   - Key part of quality control process
   - Used to identify outliers in valuation results
   - Compares percentage changes to identify anomalies

2. **Desktop Land Valuations Process**
   - Index application in external spreadsheet before reimporting data
   - Process explicitly flagged as comprehensive or desktop valuation
   - Allows specialized handling of particular valuation types

3. **Refresh and Revalidation**
   - Refresh and revalidation options available after making changes
   - Ensures calculations remain valid as data changes
   - Supports iterative refinement process

## Quality Control in Reporting Process

### System Validation Controls

1. **Template-Based Generation**
   - Report generation utilizes templates from the AVP system
   - Ensures consistent structure and format
   - Reduces formatting errors

2. **Report File Management**
   - Reports saved in 'Reports File Container'
   - Standardized storage facilitates access and retrieval
   - Maintains version control

### Manual Quality Control Measures

1. **Manual Report Customization**
   - Manual tailoring (deleting irrelevant sections) done in Word before PDF conversion
   - Allows adaptation to specific client needs
   - Provides flexibility while maintaining base consistency

2. **Client Review Process**
   - Clients review reports and provide feedback
   - Allows correction of any remaining issues
   - Final validation by end-user

## Quality Control in Post-Valuation Process

### System Validation Controls

1. **Job Status Controls**
   - Changes can only be made in an 'open' job
   - Prevents unauthorized modifications to finalized data
   - Maintains data integrity after approval

2. **Archiving Process**
   - Archiving locks the data but keeps it in the database
   - Ensures consistency across years for reference
   - Prevents accidental modification of historical data

### Manual Quality Control Measures

1. **Audit Verification**
   - Auditors may perform spot checks to verify calculations and data splitting
   - External validation of valuation methods and results
   - Independent verification improves confidence in outputs

2. **Previous Year Comparison**
   - Comparison with previous year figures
   - Identifies unexpected changes or trends
   - Provides historical context for current valuations

## Cross-Cutting Quality Control Measures

1. **Access Control**
   - Different access levels for administrators, valuers, clients, and auditors
   - Prevents unauthorized changes
   - Ensures appropriate separation of duties

2. **External Performance Tracking**
   - Performance metrics tracked outside the APV software
   - Used for internal reporting and quality management
   - Monitors process effectiveness and efficiency

3. **Methodology Documentation**
   - Auditor's guide and methodology guide documented separately
   - Ensures consistent application of valuation approaches
   - Provides reference material for quality standards

## Quality Control Process Improvements

Based on the business process validation meeting, several potential improvements were identified:

1. **Enhanced Report Customization**
   - Desire for more built-in customization options in future iterations
   - Would reduce manual tailoring requirements
   - Potential for template-based approach with client-specific configurations

2. **Integrated Performance Metrics**
   - Current external tracking could be integrated into the system
   - Would provide real-time visibility into process performance
   - Could enable proactive quality monitoring

3. **Automated Outlier Detection**
   - Current manual percentage change checks could be automated
   - Would improve consistency and reduce manual effort
   - Could incorporate statistical methods for anomaly detection

4. **Improved Data Validation Tools**
   - Enhanced validation during import process
   - More sophisticated error handling and correction capabilities
   - Reduction in manual data cleansing requirements

## Responsibilities and Accountability

1. **Valuer Responsibilities**
   - Conducting manual percentage change checks
   - Validating calculation results
   - Ensuring report quality before client review

2. **Administrator Responsibilities**
   - Initial data quality during setup
   - User access management
   - Client configuration accuracy

3. **Super Admin Oversight**
   - Cross-job quality monitoring
   - System-wide quality standards enforcement
   - Final verification of critical outputs

## Change History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-04-30 | 1.0 | Documentation Team | Initial documentation based on business process validation meeting |