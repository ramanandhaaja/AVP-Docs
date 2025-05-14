# AVP Version 2 to Version 3 Migration Process

## Overview
This document outlines the process for migrating historical job data from AVP Version 2 (FileMaker Pro-based) to new jobs in Version 3 (iOS app). This is an "as needed" support task performed by Paul when a new valuation job requires data from a previous job that was completed in V2. The process ensures data continuity and allows new V3 jobs to start with prepopulated data from historical valuations.

## Process Owner
- **Primary: Paul** (Technical Support)
- **Secondary: Sharon** (Administrator)

## When Migration Is Required
Migration of data from V2 to a new V3 job is required in the following scenarios:

1. **Returning Client with V2 History**: When creating a new valuation job for a client whose previous valuations were completed in V2
2. **Desktop or Comprehensive Valuations**: When creating a new job that needs to reference previous desktop or comprehensive valuations done in V2
3. **Data Continuity Requirements**: When new valuations require continuity with historical asset data from V2
4. **Periodic Valuations**: For recurring clients whose previous valuation cycle was completed in V2, and the new job should start with that data

## Example: Gladstone Regional Council
As mentioned in the transcript, the Gladstone Regional Council case exemplifies when this migration is necessary:
> "If there are jobs we have done either as a desktop or comprehensive in V2, he will roll over the information into V3, it gets reconciled and achieved, and a new job created (giving us all the previous valuation and asset data). Which will be happening today with Gladstone Regional Council."

The process involves:
1. Rolling over information from V2 to V3
2. Reconciling the data to match previously delivered figures
3. Archiving as the previous year's job in V3 (e.g., 2021 job)
4. Creating a new job in V3 (e.g., 2025 job) using the validated data

## Process Steps

### 1. Identification of Migration Need
- Valuer or administrator identifies a job requiring previous V2 data
- Request for migration is communicated to Paul

### 2. Data Extraction from V2 Format
- Paul accesses the V2 data
- Extracts relevant job data
- Prepares data for migration to V3

### 3. Data Reconciliation
- Data from V2 (which is already archived) is imported into V3
- The valuer reconciles the data to match the exact figures previously delivered
- This ensures data integrity and consistency with previously reported values

### 4. Archiving in V3 and New Job Creation
- After reconciliation, the data is archived in V3 as the previous year's job (e.g., "2021 job")
- A new job is then created in V3 (e.g., "2025 job") using this verified data
- This two-step process maintains historical accuracy while providing the foundation for the new valuation
- The new job contains all the previous valuation and asset data needed for the current valuation cycle

## Access Requirements
- Paul has the necessary access to retrieve data from V2 format
- Other team members requiring access to V2 data must request it through Paul
- As noted in the transcript: "We will also need to get Paul to give you access to version 2 so we can access previous jobs if required."

## Technical Context
- **Version 2**: Previous system with FileMaker Pro component
- **Version 3**: Current system with iOS app component
- The exact implementation details of how Paul accesses and extracts V2 data are not fully documented
- This process focuses on the business workflow rather than technical implementation details

## Technical Considerations

### User Interface Indicators
- It is currently undocumented whether there is a visual indication in the user interface that distinguishes jobs with V2-originated data from native V3 jobs
- This information would be valuable to document for users who may be working with both types of jobs
- Further investigation with Paul or other system administrators may be required to clarify this point

## Process Flow
1. **Request** → 2. **V2 Data Extraction** → 3. **Data Reconciliation in V3** → 4. **Archive as Previous Year's Job** → 5. **Create New Job with Data** → 6. **Valuer Notification**

## Business Impact
- Ensures data continuity for clients
- Maintains historical context for valuations
- Supports comprehensive and desktop valuation processes
- Enables year-to-year comparison of asset valuations

## Future Considerations
- This process represents a transitional solution for handling historical data from V2
- As more client valuations are completed in V3, the need for this migration will gradually decrease
- Future development may include more automated data transfer tools
- The process should be reviewed periodically as the proportion of clients with historical V2 data decreases


---
*Last updated: May 02, 2025*