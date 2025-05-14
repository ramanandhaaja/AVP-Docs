# Data Collection Process

## QUICK DOCUMENTATION (Complete these first)
- **Process Name**: Data Collection Process 🟢
- **Process Owner**: Valuation Team (Field Inspectors/Valuers) 🟢
- **Trigger**: Setup of valuation job and framework 🟢
- **Key Outcomes**: 🟢
  - Complete dataset required for valuation calculations
  - Validated asset information
  - Field inspection results integrated into system
- **System Features Expected**: 🟢
  - Data import/export functionality
  - Mobile data capture app integration
  - Data validation tools
  - Photo/image management

## DETAILED DOCUMENTATION (Complete after all quick sections are done)

### Process Overview
The Data Collection Process involves gathering, validating, and importing all necessary data required to perform valuations in Asset Valuer Pro. This includes importing existing asset data from client systems, collecting additional information through field inspections using the mobile data capture app, and ensuring all required data points are available for the valuation calculations. The process ensures data completeness and accuracy before valuations are calculated. 🟢

### Process Inputs 🟢
- Initial asset register from client
- Configured valuation framework
- Created valuation job
- Data collection requirements based on valuation approach
- Mobile data collection app (iOS)

### Process Steps 🟡
1. **Analyze Data Requirements**
   - **Role Responsible**: Valuer 🟢
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Valuation framework, job parameters 🟢
   - **Outputs Produced**: Data collection plan 🟡
   - **Decision Points**: 🟢
     - Determining which assets require field inspection
     - Identifying missing data elements
     - Selecting appropriate data collection method
     - Essential asset information is pre-populated before field work

2. **Prepare Mobile Data Collection**
   - **Role Responsible**: Valuer/Field Inspector 🟡
   - **Systems Used**: Asset Valuer Pro, iOS App 🟢
   - **Inputs Required**: Asset register, valuation framework 🟢
   - **Outputs Produced**: Configured mobile app with required data 🟢
   - **Decision Points**: 🟡
     - Data export parameters
     - Field inspection prioritization
     - Required attributes for collection

3. **Export Data to Mobile App**
   - **Role Responsible**: Valuer/Data Specialist 🟡
   - **Systems Used**: Asset Valuer Pro, iOS App 🟢
   - **Inputs Required**: Asset register data 🟢
   - **Outputs Produced**: 🟢
     - CSV files with textual data
     - Zip files with images
     - Synchronized data in iOS App
   - **Decision Points**: 🔴
     - Handling export exceptions
     - Data subset selection

4. **Conduct Field Inspections**
   - **Role Responsible**: Field Inspector 🟡
   - **Systems Used**: iOS mobile app on iPad 🟢
   - **Inputs Required**: Exported asset data 🟢
   - **Outputs Produced**: 🟢
     - Updated asset information
     - Condition assessments
     - Photos and documentation
     - Additional field notes
   - **Decision Points**: 🟢
     - Assessment of asset condition
     - Component identification
     - Data validation in the field
     - Manual asset creation for items not initially listed in the register

5. **Synchronize Field Data**
   - **Role Responsible**: Field Inspector/Valuer 🟡
   - **Systems Used**: iOS App (iPad) and Asset Valuer Pro 🟢
   - **Inputs Required**: Field inspection results 🟢
   - **Outputs Produced**: Synchronized data on PC 🟢
   - **Decision Points**: 🔴
     - Resolving synchronization issues
     - Data validation before export

6. **Import Data into Asset Valuer Pro**
   - **Role Responsible**: Valuer/Data Specialist 🟡
   - **Systems Used**: Asset Valuer Pro, iOS App 🟢
   - **Inputs Required**: 🟢
     - Field inspection results
     - Additional client-provided data
     - Excel/CSV files
     - Zip files for images
   - **Outputs Produced**: Updated asset register with complete data 🟢
   - **Decision Points**: 🟢
     - Handling import failures: System provides feedback on import failures, identifying the erroneous row
     - Data cleansing requirements: Manual process to ensure consistency between reported and client-adjusted figures
     - Resolving data conflicts

7. **Validate Collected Data**
   - **Role Responsible**: Valuer 🟡
   - **Systems Used**: Asset Valuer Pro 🟢
   - **Inputs Required**: Imported data 🟢
   - **Outputs Produced**: Validated dataset ready for calculations 🟢
   - **Decision Points**: 🟢
     - Data quality assessment: Manual percentage change check to identify outliers
     - Handling data gaps or inconsistencies: Apply assumptions to fill in gaps during import preparation
     - Verification of sampling approach (for infrastructure)

### Process Outputs 🟢
- Complete and validated asset register with all required data
- Field inspection results integrated into the system
- Photos and additional documentation linked to assets
- Data ready for valuation calculations

### Business Rules 🟡
- For buildings and structures, information is gathered in the field using the mobile data capture app
- For infrastructure, client-provided data is validated through sampling approach in the field
- All textual data can be imported/exported via CSV file
- Photos and images are imported/exported using zip files
- Data must be validated before proceeding to calculation phase
- Infrastructure data validation uses a sampling approach to verify client-provided information

### Regulatory Requirements 🟡
- Data collection must support compliance with accounting standards
- Documentation of data sources required for audit purposes
- Field inspection methodologies must align with industry standards

### Performance Metrics 🟢
- Performance metrics like job completion times are tracked externally, not within the AVP software
- These metrics are used for internal reporting and quality management
- The external tracking was identified as a potential area for future system integration

### Related Processes 🟢
- File Setup and Configuration Process
- Calculation Process
- Asset Valuation Process
- Mobile Data Collection Process

### Current System Implementation Status 🟡
- **Implemented**: Yes
- **System Features Used**:
  - Data import/export via CSV
  - Mobile data collection via iOS app (version 3, replacing previous FileMaker Pro app)
  - Photo/image management through zip files
  - Data validation tools
- **Manual Workarounds**: 🟢
  - Manual asset creation for items not initially listed in the register
  - Data cleansing involves manual application of assumptions during import preparation
  - Manual percentage change checks for quality control
  - Large datasets are managed through multiple Excel files or manual data adjustments
- **Gaps Identified**: 🟢
  - No integrated performance metrics tracking
  - Limited automation for data validation and quality control
  - Manual process for applying data assumptions

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

1. ~~**Process Owner**: Confirm the specific role or department responsible for this process~~ ✓ ADDRESSED
2. ~~**Decision Criteria**: What specific criteria are used to determine inspection requirements?~~ ⚠️ PARTIALLY ADDRESSED
3. ~~**Field Collection Protocols**: What specific protocols govern field inspections?~~ ⚠️ PARTIALLY ADDRESSED
4. ~~**Validation Rules**: What data validation rules are applied before calculation?~~ ✓ ADDRESSED
5. ~~**Performance Metrics**: How is the success of the data collection process measured?~~ ✓ ADDRESSED
6. **Common Challenges**: What are common issues encountered during data collection? ❌ NOT ADDRESSED
7. ~~**Manual Workarounds**: Are there any manual steps required during data collection?~~ ✓ ADDRESSED
8. **Sampling Methodology**: What sampling methodology is used for infrastructure validation? ❌ NOT ADDRESSED