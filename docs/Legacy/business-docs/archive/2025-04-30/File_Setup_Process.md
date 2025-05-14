# File Setup and Configuration Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: File Setup and Configuration Process 🟢
- **Process Owner**: Valuation Team 🟡
- **Trigger**: New valuation engagement or project 🟡
- **Key Outcomes**: 🟢
  - Configured valuation framework
  - Established asset hierarchy
  - Created valuation job with defined parameters
- **System Features Expected**: 🟢
  - Client configuration
  - User management and role assignment
  - Valuation framework setup
  - Asset hierarchy definition
  - Assumption management

## DETAILED DOCUMENTATION (Complete after all quick sections are done)

### Process Overview
The File Setup and Configuration Process establishes the foundation for performing valuations in Asset Valuer Pro. It involves creating the client record, configuring users and roles, establishing the valuation framework with appropriate asset hierarchies, and setting up the specific valuation job. This process defines the structure and parameters that govern all subsequent valuation activities. 🟢

### Process Inputs 🟡
- Client information
- License type requirements
- User information and role assignments
- Asset classification structure
- Valuation methodology requirements
- Asset types to be valued

### Process Steps 🟢
1. **Create Client and License**
   - **Role Responsible**: System Administrator/Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Client details, license type 🟢
   - **Outputs Produced**: Configured client in system 🟢
   - **Decision Points**: 🟡
     - Selection of license type (Multi, Single, or 3rd party)
     - Client configuration parameters

2. **Create Users and Roles**
   - **Role Responsible**: System Administrator 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: User information, role definitions 🟡
   - **Outputs Produced**: Configured users with appropriate permissions 🟡
   - **Decision Points**: 🔴
     - Role permission assignments
     - Access level determination
     - User hierarchy/reporting structure

3. **Create Valuation Framework**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Asset classification structure 🟢
   - **Outputs Produced**: Configured asset hierarchy and valuation framework 🟢
   - **Decision Points**: 🟡
     - Asset hierarchy structure definition
     - Component determination
     - Assumption application levels

4. **Define Asset Hierarchy**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Asset types and classifications 🟢
   - **Outputs Produced**: Structured asset hierarchy 🟢
   - **Decision Points**: 🟢
     - Defining Asset Classes
     - Defining Asset Types
     - Defining Asset Sub-Types
     - Defining Component Types
     - Defining Component Sub-Types

5. **Configure Assumptions**
   - **Role Responsible**: Valuer/Valuation Specialist 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Valuation parameters 🟢
   - **Outputs Produced**: Configured assumption tables 🟢
   - **Decision Points**: 🟢
     - Entity-level assumptions (valuation profiles)
     - Asset Class level assumptions (valuation profile rules)
     - Asset Level assumptions (unit rates, indices, apportionment)
     - Component level assumptions (unit rates, useful life, residual value)

6. **Create Valuation Job**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Valuation requirements, asset classes to be valued 🟢
   - **Outputs Produced**: Configured valuation job 🟢
   - **Decision Points**: 🟡
     - Specifying asset classes to include
     - Setting effective date of valuation
     - Determining valuation parameters

7. **Import Initial Asset Register**
   - **Role Responsible**: Valuer/Data Specialist 🟡
   - **Systems Used**: Asset Valuer Pro, Excel 🟢
   - **Inputs Required**: Client asset register data 🟢
   - **Outputs Produced**: Imported initial asset register in system 🟢
   - **Decision Points**: 🔴
     - Data mapping requirements
     - Data cleansing approach
     - Handling import exceptions

### Process Outputs 🟢
- Configured client in Asset Valuer Pro
- Established user accounts with appropriate roles
- Defined asset hierarchy
- Configured valuation framework with assumptions
- Created valuation job ready for data collection

### Business Rules 🟡
- Asset hierarchy must follow the specified structure (Class > Type > Sub-Type)
- Components must be specified with Type and Sub-Type
- Effective date of valuation is typically the first or last day of the financial year
- Initial asset register is usually imported from client's existing records
- Assumptions must be configured at multiple levels (entity, asset class, asset, component)

### Regulatory Requirements 🟡
- Configuration must support compliance with accounting standards
- Framework must enable appropriate valuation approaches (market, income, cost)
- Structure must support required financial statement disclosures

### Performance Metrics 🔴
[Information gap - requires business unit input]

### Related Processes 🟡
- Data Collection Process
- Valuation Calculation Process
- Reporting Process
- User Management Process

### Current System Implementation Status 🟡
- **Implemented**: Yes
- **System Features Used**:
  - Client configuration
  - User and role management
  - Asset hierarchy definition
  - Valuation framework setup
  - Job creation
  - Data import/export
- **Manual Workarounds**: 🔴 [Information gap - requires business unit input]
- **Gaps Identified**: 🔴 [Information gap - requires business unit input]

### Process Documentation 🔴
[Information gap - requires business unit input on additional documentation]

### Change History
| Date | Version | Author | Changes |
|------|---------|--------|---------|
| [Today's Date] | 1.0 | [Your Name] | Initial documentation based on existing materials |

## Information Gaps for Business Unit Review

1. **Process Owner**: Confirm the specific role or department responsible for this process
2. **User Roles**: What specific roles exist in the system and what permissions do they have?
3. **Decision Process**: What decision criteria are used when establishing the asset hierarchy?
4. **Manual Workarounds**: Are there any manual steps required during setup that aren't supported by the system?
5. **Performance Metrics**: How is the success of the file setup process measured?
6. **Data Validation**: What validation checks are performed during initial asset register import?
7. **Common Challenges**: What are common issues encountered during file setup?
