# Post-Valuation Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: Post-Valuation Process 🟢
- **Process Owner**: Valuation Team 🟡
- **Trigger**: Completion of calculation and reporting process, client acceptance of results 🟢
- **Key Outcomes**: 🟢
  - Archived valuation job
  - Previous year figures recorded for future reference
  - Client-ready data for system integration
  - Completed audit process
- **System Features Expected**: 🟢
  - Job status management
  - Archiving functionality
  - Data export tools
  - Previous year data recording

## DETAILED DOCUMENTATION (Complete after all quick sections are done)

### Process Overview
The Post-Valuation Process handles the final stages of the valuation workflow after calculations are complete and results have been accepted by the client. This includes changing job status appropriately, supporting the audit process, archiving the job once financial statements are signed off, and ensuring data is properly recorded for future reference and comparison. This process ensures the integrity of completed valuations and facilitates future valuation cycles. 🟢

### Process Inputs 🟢
- Finalized valuation results
- Client approval of valuation
- Completed reports
- Audit requirements

### Process Steps 🟡
1. **Update Job Status**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Finalized valuation, client feedback 🟢
   - **Outputs Produced**: Updated job status 🟢
   - **Decision Points**: 🟢
     - Changing job status from 'open' to either 'draft' (if expecting feedback and possible changes) or 'finalised' (when client has accepted results)
     - Locking data for changes

2. **Support Audit Process**
   - **Role Responsible**: Valuer/Valuation Manager 🟡
   - **Systems Used**: Asset Valuer Pro, Communication tools 🟡
   - **Inputs Required**: Final valuations, methodology documentation 🟢
   - **Outputs Produced**: Audit responses, additional documentation 🟡
   - **Decision Points**: 🟢
     - Handling audit queries: Provide documentation and answers to audit queries
     - Providing supporting evidence: Auditors may perform spot checks to verify calculations and data splitting
     - Documentation of methodology: Auditors need access primarily for documentation, asset-level drilldowns, or methodology review

3. **Export Client-Ready Data**
   - **Role Responsible**: Valuer/Data Specialist 🟡
   - **Systems Used**: Asset Valuer Pro, Excel 🟢
   - **Inputs Required**: Final valuation data 🟢
   - **Outputs Produced**: Export files for client systems 🟢
   - **Decision Points**: 🟢
     - Export format selection: Workflow includes an intermediary export
     - Data mapping requirements: Based on client system needs
     - Client system compatibility: Varies by client

4. **Archive Completed Job**
   - **Role Responsible**: Valuer/System Administrator 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Audited financial statements, final valuation 🟢
   - **Outputs Produced**: Archived job with recorded previous year figures 🟢
   - **Decision Points**: 🟢
     - Timing of archiving (after financial statements signed off)
     - Data retention requirements: Archiving locks the data but keeps it in the database for future reference
     - Record keeping for future reference: Ensures consistency across years

5. **Prepare for Future Valuations**
   - **Role Responsible**: Valuer/Account Manager 🟡
   - **Systems Used**: Asset Valuer Pro, Project management tools 🟡
   - **Inputs Required**: Archived job, client requirements 🟡
   - **Outputs Produced**: Valuation cycle plan 🟡
   - **Decision Points**: 🟢
     - Future valuation scheduling: Based on client valuation cycle
     - Asset register maintenance approach: May either roll over previous comprehensive valuations or start from scratch for jobs that haven't been updated in several years
     - Continuous improvement opportunities: Identified during review process

### Process Outputs 🟢
- Archived valuation job with 'previous years' figures recorded
- Audit-approved valuation results
- Client-ready data for system integration
- Documentation for future reference
- Completed valuation cycle

### Business Rules 🟢
- Changes can only be made in an 'open' job
- Job status must be changed from 'open' to 'draft' or 'finalised' as appropriate
- Job is archived only after financial statements have been signed off by audit
- Archiving process records final figures and raw data as 'previous years' figures
- Previous year figures are necessary for future movements reports

### Regulatory Requirements 🟡
- Archived data must meet audit trail requirements
- Record retention must comply with relevant accounting and legal standards
- Documentation must support future audit inquiries

### Performance Metrics 🟢
- Performance metrics like job completion times are tracked externally, not within the AVP software
- These metrics are used for internal reporting and quality management
- The external tracking was identified as a potential area for future system integration

### Related Processes 🟢
- Calculation and Reporting Process
- Audit Support Process
- Client System Integration Process
- New Valuation Cycle Process

### Current System Implementation Status 🟡
- **Implemented**: Yes
- **System Features Used**:
  - Job status management
  - Archiving functionality
  - Previous year data recording
  - Data export tools
- **Manual Workarounds**: 🟢
  - Rollover process for previous comprehensive valuations is not a simple automated rollover but includes manual steps
  - Process for scheduling future valuations requires coordination outside the system
  - Large firms' requests for access to the valuation team are denied; access control managed manually
  - Audit access requires verification before granting view-only privileges
- **Gaps Identified**: 🟢
  - Limited automation for valuation rollover process
  - No integrated performance metrics tracking
  - No automated scheduling system for future valuations

### Process Documentation 🟢
Additional documentation includes:
- Auditor's guide (to be shared via SharePoint)
- Methodology guide (to be shared via SharePoint)
- The valuation process is documented in the quality system (separate from shown documentation)

### Change History
| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-04-30 | 1.1 | Documentation Team | Updated based on business process validation meeting |
| 2025-04-23 | 1.0 | Documentation Team | Initial documentation based on existing materials |

## Information Gaps for Business Unit Review

1. ~~**Process Owner**: Confirm the specific role or department responsible for this process~~ ⚠️ PARTIALLY ADDRESSED
2. ~~**Audit Support Process**: What is the formal process for supporting client audits?~~ ✓ ADDRESSED
3. ~~**Client System Integration**: What specific formats and processes are used for client system integration?~~ ⚠️ PARTIALLY ADDRESSED
4. ~~**Data Retention Policy**: What are the data retention requirements for archived valuations?~~ ✓ ADDRESSED
5. ~~**Performance Metrics**: How is the success of the post-valuation process measured?~~ ✓ ADDRESSED
6. ~~**Manual Workarounds**: Are there any manual steps required during post-valuation activities?~~ ✓ ADDRESSED
7. **Common Challenges**: What are common issues encountered during post-valuation activities? ❌ NOT ADDRESSED
8. ~~**Future Valuation Planning**: What process is used to plan and schedule future valuations?~~ ✓ ADDRESSED