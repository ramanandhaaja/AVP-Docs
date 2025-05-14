# Asset Valuation Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: Asset Valuation Process 🟢
- **Process Owner**: Valuation Team (Administrator - Sharon, Valuers) 🟢
- **Trigger**: Need for asset valuation (financial reporting or insurance purposes) 🟡
- **Key Outcomes**: 🟢
  - Completed asset valuations (financial reporting or insurance)
  - Generated reports for financial statements
  - Asset management outputs
- **System Features Expected**: 🟢
  - Asset register management
  - Valuation framework configuration
  - Data collection and import/export
  - Calculation engine
  - Report generation

## DETAILED DOCUMENTATION (Complete after all quick sections are done)

### Process Overview
The Asset Valuation Process is the core end-to-end business workflow in Asset Valuer Pro. It encompasses setting up a valuation file, collecting and importing data, performing calculations according to different valuation methodologies (market, income, or cost approach), producing reports, and finalizing the valuation for audit and integration with client systems. 🟢

### Process Inputs 🟡
- Client asset register data
- Valuation parameters and assumptions
- Field inspection data (where required)
- Entity-level assumptions (valuation profiles)
- Asset-class level assumptions (valuation profile rules)
- Asset-level assumptions (unit rates, indices, apportionment)
- Component-level assumptions (unit rates, useful life, residual value)

### Process Steps 🟢
1. **Set up a File**
   - **Role Responsible**: Administrator (Sharon) for initial setup, Valuers for framework 🟢
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Client information, license type 🟢
   - **Outputs Produced**: Configured valuation job 🟢
   - **Decision Points**: 🟢
     - Creating a client and allocating a 'license type' (Multi, single, or 3rd party)
     - Creating users and allocating roles: The "support" login has the highest level of access
     - Creating the valuation framework including asset hierarchy
     - Creating a valuation job (with assigned asset classes)

2. **Collect Key Data**
   - **Role Responsible**: Valuer/Field Inspector 🟡
   - **Systems Used**: Asset Valuer Pro, iOS app (version 3) 🟢
   - **Inputs Required**: Asset register, client data 🟢
   - **Outputs Produced**: Complete dataset for valuation 🟢
   - **Decision Points**: 🟢
     - Determining which assets require field inspection: Essential asset information is pre-populated before field work
     - Selection of valuation approach (market, income, or cost)
     - Validation of client-provided data: Manual asset creation is possible for assets not initially listed in the register

3. **Import/Export Data**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro, Excel 🟢
   - **Inputs Required**: Raw data, field inspection results 🟢
   - **Outputs Produced**: Consolidated dataset in Asset Valuer Pro 🟢
   - **Decision Points**: 🟢
     - Handling data import failures: System provides feedback on import failures, identifying the erroneous row
     - Data cleansing approach: Manual process to ensure consistency between reported and client-adjusted figures
     - Data cleansing involves applying assumptions to fill in gaps during import preparation
     - Large datasets are managed through multiple Excel files or manual data adjustments

4. **Run Calculations**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Complete dataset, valuation profiles 🟢
   - **Outputs Produced**: Calculated valuations 🟢
   - **Decision Points**: 🟢
     - Review of calculation results: Manual percentage change check to identify outliers as a key quality control process
     - Handling exceptions or unusual results: System shows status (valid, error, warning) with visual indicators
     - Validation rules: Component values must sum to 100%; otherwise, an error is flagged
     - For desktop land valuations: Manual process involving index application in external spreadsheet before reimporting data

5. **Finalize Valuation and Produce Reports**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Calculated valuations 🟢
   - **Outputs Produced**: 🟢
     - Valuation spreadsheets (financial reporting and insurance)
     - Valuation methodology reports
     - Depreciation analysis
     - Financial reporting disclosures
     - Analysis reports
     - Renewal and cost projections
     - Job management reports
     - EasySAM strategic asset management planning
   - **Decision Points**: 🟢
     - Approval workflows: Built-in system prevents finalizing jobs with errors
     - Quality control checks: Manual review before finalization
     - Report customization: Manual tailoring (deleting irrelevant sections) done in Word before PDF conversion
     - Client access: Clients are given view-only access to their reports via the system

6. **Undertake Post-Valuation Processes**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Finalized valuations 🟢
   - **Outputs Produced**: Archived job, client-ready data 🟢
   - **Decision Points**: 🟢
     - Changing job status ('open' to 'draft' or 'finalised')
     - Archiving job after audit sign-off: Archiving locks the data but keeps it in the database for future reference
     - Audit access: Auditors receive view-only access after verification
     - Future valuations: May either roll over previous comprehensive valuations or start from scratch for jobs that haven't been updated in several years

### Process Outputs 🟢
- Financial reporting valuations
- Insurance valuations
- Asset management outputs:
  - Whole of lifecycle optimization (EasySAM)
  - Projected renewals report
  - Cost to bring to satisfactory report
  - Portfolio analysis by condition or value
- Financial statement disclosures:
  - Movements reconciliation figures
  - Valuation measurement disclosures
  - Disclosure note information

### Business Rules 🟡
- Valuation process must be undertaken external to any live data held in an entity's ERP or finance system
- A valuation is undertaken at a point in time
- Data in the valuation must be quarantined from live data
- Jobs can only be modified when in 'open' status
- Asset hierarchy requires assets to be categorized by:
  - Asset Class
  - Asset Type
  - Asset Sub-Type
- Components must specify:
  - Component Type
  - Component Sub-Type
- Different valuation approaches require different key inputs

### Regulatory Requirements 🟡
- Compliance with accounting standards (IFRS/IPSAS)
- Financial reporting valuation methodology requirements
- Audit requirements for valuation processes

### Performance Metrics 🟢
- Performance metrics like job completion times are tracked externally, not within the AVP software
- These metrics are used for internal reporting and quality management
- The external tracking was identified as a potential area for future system integration

### Related Processes 🟡
- Asset inspection and condition assessment
- Financial reporting
- Insurance management
- Asset lifecycle management
- Audit and compliance

### Current System Implementation Status 🟢
- **Implemented**: Yes
- **System Features Used**:
  - Asset register management
  - Valuation calculation
  - Field data collection via iOS app (version 3, replacing previous FileMaker Pro app)
  - Import/export functionality
  - Report generation
- **Manual Workarounds**: 🟢
  - Desktop land valuations require index application in an external spreadsheet before reimporting data
  - Manual percentage change checks for identifying outliers as part of quality control
  - Report customization requires manual tailoring in Word before PDF conversion
  - Data cleansing as a manual process to ensure consistency
  - Process for previous comprehensive valuations is not a simple automated rollover
- **Gaps Identified**: 🟢
  - Limited report customization capabilities
  - No automated outlier detection for quality control
  - Manual process for applying indices to desktop land valuations
  - No integration of performance metrics tracking
  - Limited automation for valuation rollover process

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

1. ~~**Process Owner**: Confirm the specific role or department responsible for this process~~ ✓ ADDRESSED
2. ~~**Decision Points**: Need clarification on decision criteria for each process step~~ ✓ ADDRESSED
3. ~~**Manual Workarounds**: Identify any manual processes required due to system limitations~~ ✓ ADDRESSED
4. ~~**Performance Metrics**: What metrics are used to measure the success of the valuation process?~~ ✓ ADDRESSED
5. ~~**Approval Workflows**: Are there formal approval steps before valuations are finalized?~~ ✓ ADDRESSED
6. **Timing and Duration**: What is the typical timeline for a complete valuation process? ❌ NOT ADDRESSED
7. ~~**Exception Handling**: What processes exist for handling unusual valuation scenarios?~~ ⚠️ PARTIALLY ADDRESSED