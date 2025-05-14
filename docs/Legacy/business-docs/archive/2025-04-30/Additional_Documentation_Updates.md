# Additional Documentation Updates Needed

Based on the transcript and transcript summary, there are several additional medium confidence (yellow-marked 🟡) areas and other information that should be updated in the business documentation. This document identifies these areas by document and section.

## 1. Data Collection Process Updates

### Process Steps
1. **Analyze Data Requirements**
   - **Decision Points**: Add that essential asset information is pre-populated before field work (mentioned in transcript [00:42:48])
   - **Role Responsible**: Update to specifically mention valuer's role in determining pre-populated information

2. **Conduct Field Inspections**
   - **Decision Points**: Add that manual asset creation is possible for assets not initially listed in the register (mentioned in transcript [00:48:15])

3. **Current System Implementation Status**
   - **Manual Workarounds**: Update to mention that manual asset creation is available for items not in initial register, providing flexibility during field inspections

## 2. Asset Valuation Process Updates

### Process Steps
1. **Set up a File**
   - **Role Responsible**: Update to clarify that Sharon (administrator) sets up jobs; valuers input frameworks and registers (mentioned in transcript [00:08:48])

2. **Import/Export Data**
   - **Decision Points**: Add information about data cleansing as a manual process to ensure consistency between reported and client-adjusted figures (mentioned in transcript [00:11:45])
   - Add that the system provides feedback on import failures, identifying the erroneous row (mentioned in transcript [00:12:54])

3. **Run Calculations**
   - **Decision Points**: Add manual percentage change check to identify outliers as a key part of the quality control process (mentioned in transcript [00:14:44])
   - Add that the system shows the status (valid, error, warning) of calculations with visual indicators (mentioned in transcript [00:26:20])

4. **Current System Implementation Status**
   - **Gaps Identified**: Update to note that version 3 (iOS app) is now the current implementation, replacing the previously mentioned File Maker Pro app (mentioned in transcript [00:09:55])
   - **Manual Workarounds**: Add desktop land valuations workaround involving index application in an external spreadsheet (mentioned in transcript [00:23:27])

## 3. Business-Technical Component Map Updates

Several components in the Business-Technical Component Map can be updated based on the transcript, changing confidence levels from 🟡 to 🟢 for items that were clearly referenced:

1. **iOS App Integration**: Update to confirm that the mobile app is currently implemented as an iOS app (version 3), replacing File Maker Pro (version 2)

2. **Report Generation**: Update to note that report generation utilizes templates from the AVP system, with manual tailoring done in Word before PDF conversion

3. **Audit Support**: Update to confirm that auditors receive view-only access after verification, and that there are specific limitations on audit access

4. **Job Status Management**: Confirm that this is implemented with status transitions from 'open' to 'draft' or 'finalised'

## 4. Business Process Map Updates

The Business Process Map could be updated to reflect some of the manual workarounds and integrations identified in the transcript:

1. **Add External Systems**: Add "External Spreadsheets" to the diagram as an external system connected to the Calculation & Reporting Process (for desktop land valuations)

2. **Add Sub-Process**: Add "Manual Report Customization" as a sub-process under CRP3 (Generate Reports)

3. **Add Integration Point**: Add connection between PVP2 (Support Audit Process) and a new external node for "Auditor View Access"

## 5. Updates to Process Ownership

Several documents list "Process Owner" as medium confidence (🟡). Based on the transcript, we can update this information:

1. **File Setup Process**: Process Owner = "Valuation Team (Administrator - Sharon)"

2. **Data Collection Process**: Process Owner remains "Valuation Team" but can note that field inspections are conducted by valuers

3. **Calculation & Reporting Process**: Process Owner remains "Valuation Team" but can note that Michelle Cross, as a super admin, has access to all jobs

4. **Post-Valuation Process**: Process Owner remains "Valuation Team" but can note the role of account managers in client relationships

## 6. New Information Not Currently Documented

Several pieces of information from the transcript are not currently documented in any of the business process documents:

1. **Access Control Hierarchy**:
   - Support login has highest level of access
   - Michelle Cross as super admin has access to all jobs
   - Valuers can only access specific jobs they are assigned to
   - Clients and auditors have view-only access

2. **Client Data Requirements in Tenders**:
   - Data requirements are clarified in tenders to manage extra work and associated charges
   - This helps set expectations about data quality and format

3. **Quality Control Process**:
   - Manual percentage change check to identify outliers
   - System validation preventing finalization until errors are resolved
   - Visual indicators for calculation status (valid, error, warning)

4. **Rollover Process Details**:
   - Process for previous comprehensive valuations is not a simple automated rollover
   - Includes manual steps for jobs not updated in several years

5. **Documentation Integration**:
   - Auditor's guide and methodology guide exist as separate documents
   - Valuation process is documented in a quality system, separate from documents shown

## 7. Next Steps for Documentation Update

1. Create updated versions of all process documents incorporating the additional information
2. Update the Business Process Map to reflect manual workarounds and external integrations
3. Update the Business-Technical Component Map with increased confidence levels
4. Consider creating a new document specifically focused on "Access Control and User Roles"
5. Add documentation about "Quality Control Processes" that span multiple process areas