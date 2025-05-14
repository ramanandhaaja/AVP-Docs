# Asset Valuation Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: Asset Valuation Process 🟢
- **Process Owner**: Valuation Department 🟡
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
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Client information, license type 🟢
   - **Outputs Produced**: Configured valuation job 🟢
   - **Decision Points**: 🔴
     - Creating a client and allocating a 'license type' (Multi, single, or 3rd party)
     - Creating users and allocating roles
     - Creating the valuation framework including asset hierarchy
     - Creating a valuation job (with assigned asset classes)

2. **Collect Key Data**
   - **Role Responsible**: Valuer/Field Inspector 🟡
   - **Systems Used**: Asset Valuer Pro, File Maker Pro mobile app 🟢
   - **Inputs Required**: Asset register, client data 🟢
   - **Outputs Produced**: Complete dataset for valuation 🟢
   - **Decision Points**: 🟡
     - Determining which assets require field inspection
     - Selection of valuation approach (market, income, or cost)
     - Validation of client-provided data

3. **Import/Export Data**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro, Excel, File Maker Pro 🟢
   - **Inputs Required**: Raw data, field inspection results 🟢
   - **Outputs Produced**: Consolidated dataset in Asset Valuer Pro 🟢
   - **Decision Points**: 🔴
     - Handling data import failures
     - Data cleansing requirements

4. **Run Calculations**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Complete dataset, valuation profiles 🟢
   - **Outputs Produced**: Calculated valuations 🟢
   - **Decision Points**: 🔴
     - Review of calculation results
     - Handling exceptions or unusual results

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
   - **Decision Points**: 🔴
     - Approval workflows
     - Quality control checks

6. **Undertake Post-Valuation Processes**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Finalized valuations 🟢
   - **Outputs Produced**: Archived job, client-ready data 🟢
   - **Decision Points**: 🟢
     - Changing job status ('open' to 'draft' or 'finalised')
     - Archiving job after audit sign-off

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

### Performance Metrics 🔴
[Information gap - requires business unit input]

### Related Processes 🟡
- Asset inspection and condition assessment
- Financial reporting
- Insurance management
- Asset lifecycle management
- Audit and compliance

### Current System Implementation Status 🟡
- **Implemented**: Yes
- **System Features Used**:
  - Asset register management
  - Valuation calculation
  - Field data collection (via File Maker Pro app)
  - Import/export functionality
  - Report generation
- **Manual Workarounds**: 🔴 [Information gap - requires business unit input]
- **Gaps Identified**: 
  - Need to move from File Maker Pro to new app (mentioned in version 3)
  - 10 Year maintenance plan (mentioned for future version)

### Process Documentation 🔴
[Information gap - requires business unit input on additional documentation]

### Change History
| Date | Version | Author | Changes |
|------|---------|--------|---------|
| [Today's Date] | 1.0 | [Your Name] | Initial documentation based on existing materials |

## Information Gaps for Business Unit Review

1. **Process Owner**: Confirm the specific role or department responsible for this process
2. **Decision Points**: Need clarification on decision criteria for each process step
3. **Manual Workarounds**: Identify any manual processes required due to system limitations
4. **Performance Metrics**: What metrics are used to measure the success of the valuation process?
5. **Approval Workflows**: Are there formal approval steps before valuations are finalized?
6. **Timing and Duration**: What is the typical timeline for a complete valuation process?
7. **Exception Handling**: What processes exist for handling unusual valuation scenarios?
