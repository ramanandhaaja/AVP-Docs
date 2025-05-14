# Calculation and Reporting Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: Calculation and Reporting Process 🟢
- **Process Owner**: Valuation Team 🟡
- **Trigger**: Completion of data collection process 🟢
- **Key Outcomes**: 🟢
  - Calculated asset valuations (financial reporting and insurance)
  - Generated reports and analysis
  - Validated valuation results
  - Financial reporting outputs
- **System Features Expected**: 🟢
  - Calculation engine
  - Validation tools
  - Report generation
  - Data export functionality

## DETAILED DOCUMENTATION (Complete after all quick sections are done)

### Process Overview
The Calculation and Reporting Process involves running the valuation calculations based on collected data and configured assumptions, validating the results, and generating the various reports required for financial reporting, insurance, and asset management purposes. This process transforms raw asset data into meaningful valuation outputs that can be used by the client for financial statements and asset management. 🟢

### Process Inputs 🟢
- Complete asset data from data collection process
- Configured valuation framework with assumptions
- Valuation profiles and rules
- Client-specific reporting requirements

### Process Steps 🟢
1. **Run Calculations**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: 🟢
     - Complete asset data
     - Valuation framework
     - Asset hierarchy information
     - Assumptions tables
   - **Outputs Produced**: Calculated valuations 🟢
   - **Decision Points**: 🟢
     - Timing of calculation refresh: Performed after making changes to asset data
     - Handling calculation failures: System shows status (valid, error, warning) with visual indicators
     - Review of preliminary results: Refresh and revalidation options available after making changes

2. **Validate Calculation Results**
   - **Role Responsible**: Valuer/Valuation Specialist 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Calculation results 🟢
   - **Outputs Produced**: Validated valuation results 🟢
   - **Decision Points**: 🟢
     - Handling anomalies in results: Manual percentage change check to identify outliers is a key quality control process
     - Validation rules application: Component values must sum to 100%; otherwise, an error is flagged
     - Approval criteria: System includes validation steps preventing finalization until errors are resolved

3. **Generate Reports**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Validated calculation results 🟢
   - **Outputs Produced**: 🟢
     - Valuation spreadsheets (financial reporting and insurance)
     - Valuation methodology reports
     - Depreciation analysis
     - Financial reporting disclosures
     - Analysis of scores and value
     - Renewal and cost projections
     - Job management reports
     - EasySAM strategic asset management planning
   - **Decision Points**: 🟢
     - Report selection based on client needs
     - Output format requirements: Reports generated as templates from the AVP system
     - Report customization: Manual tailoring (deleting irrelevant sections) done in Word before PDF conversion

4. **Save Reports**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Generated reports 🟢
   - **Outputs Produced**: Saved reports in 'Reports File Container' 🟢
   - **Decision Points**: 🟢
     - File naming conventions
     - Organization of report files
     - Access permissions: Clients are given view-only access to their reports via the system

5. **Review Results with Client**
   - **Role Responsible**: Valuer/Account Manager 🟡
   - **Systems Used**: Asset Valuer Pro, Communication tools 🟡
   - **Inputs Required**: Finalized reports 🟢
   - **Outputs Produced**: Client feedback 🟡
   - **Decision Points**: 🟢
     - Handling client questions: Client reviews results, submits queries that are handled by the team
     - Addressing feedback: Changes made while job is in 'open' status
     - Change requirements: Changes can only be made in an 'open' job

6. **Finalize Valuation**
   - **Role Responsible**: Valuer/Valuation Manager 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Client-approved reports 🟡
   - **Outputs Produced**: Final valuation with status changed 🟢
   - **Decision Points**: 🟢
     - Changing job status from 'open' to 'draft' or 'finalised'
     - Final documentation requirements

### Process Outputs 🟢
- Financial reporting valuations
- Insurance valuations
- Asset management outputs:
  - Whole of lifecycle optimization (EasySAM)
  - Projected renewals report
  - Cost to bring to satisfactory report
  - Analysis of the portfolio by condition or value
- Financial statement disclosures:
  - Movements reconciliation figures
  - Valuation measurement disclosures
  - Disclosure note information

### Business Rules 🟢
- Calculations are based on the asset hierarchy and assumptions defined in the valuation framework
- Reports must be saved in the 'Reports File Container' for future access
- Job status must be changed from 'open' to 'draft' or 'finalised' appropriately
- Changes can only be made in an 'open' job
- Valuation reports must meet financial reporting standards requirements

### Regulatory Requirements 🟡
- Valuations must comply with accounting standards (IFRS/IPSAS)
- Financial reporting outputs must meet audit requirements
- Documentation must support audit review process

### Performance Metrics 🟢
- Performance metrics like job completion times are tracked externally, not within the AVP software
- These metrics are used for internal reporting and quality management
- The external tracking was identified as a potential area for future system integration

### Related Processes 🟢
- Data Collection Process
- File Setup and Configuration Process
- Post-Valuation Process
- Client Reporting Process

### Current System Implementation Status 🟡
- **Implemented**: Yes
- **System Features Used**:
  - Calculation engine
  - Report generation tools
  - Validation functionality
  - Job status management
- **Manual Workarounds**: 🟢
  - Desktop land valuations require index application in an external spreadsheet before reimporting data
  - Manual percentage change checks for identifying outliers as part of quality control
  - Report customization requires manual tailoring in Word before PDF conversion
  - There is a desire for more built-in report customization options in future iterations
- **Gaps Identified**: 🟢
  - Limited report customization capabilities
  - No automated outlier detection for quality control
  - Manual process for applying indices to desktop land valuations
  - No integration of performance metrics tracking

### Process Documentation 🟢
Additional documentation includes:
- Auditor's guide (to be shared via SharePoint)
- Methodology guide (to be shared via SharePoint)
- The valuation process is documented in the quality system (separate from shown documentation)
- Documentation of formulas used in valuation calculations

### Change History
| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-04-30 | 1.1 | Documentation Team | Updated based on business process validation meeting |
| 2025-04-23 | 1.0 | Documentation Team | Initial documentation based on existing materials |

## Information Gaps for Business Unit Review

1. ~~**Process Owner**: Confirm the specific role or department responsible for this process~~ ⚠️ PARTIALLY ADDRESSED
2. ~~**Decision Criteria**: What specific criteria are used to validate calculation results?~~ ✓ ADDRESSED
3. ~~**Approval Workflow**: Is there a formal approval process for valuation results?~~ ✓ ADDRESSED
4. ~~**Report Customization**: What options exist for customizing reports for different clients?~~ ✓ ADDRESSED
5. ~~**Performance Metrics**: How is the success of the calculation and reporting process measured?~~ ✓ ADDRESSED
6. ~~**Manual Workarounds**: Are there any manual steps required during calculation or reporting?~~ ✓ ADDRESSED
7. **Common Challenges**: What are common issues encountered during calculation and reporting? ❌ NOT ADDRESSED
8. ~~**Client Review Process**: What is the formal process for client review of results?~~ ✓ ADDRESSED