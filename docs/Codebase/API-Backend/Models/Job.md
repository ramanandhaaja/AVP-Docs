# Job Model Documentation

#  Job Documentation

## QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/Job.cs
- **Database Table**: Jobs
- **Primary Purpose**: Represents a valuation job or assignment with specific parameters and effective dates
- **Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Job name
  - EffectiveDateOfValuation (DateTime) - The date the valuation is effective
  - Type (JobTypes enum) - Comprehensive, Desktop, or Rolling
  - Status (string) - Tracks the current status of the job
  - AccountingStandard (AccountingStandards enum) - IFRS or IPSAS
- **Related Models**: 
  - Client - The organization owning the job
  - AssetClass (one-to-many) - Asset classes included in the job
  - Asset (one-to-many) - Assets being valued
  - AssetValuation (one-to-many) - Calculated values for assets
  - ComponentValuation (one-to-many) - Calculated values for components
  - JobImportLog (one-to-many) - Import history

## DETAILED DOCUMENTATION

## Overview
The Job entity represents a valuation assignment with specific parameters, timeframes, and assets to be valued. It serves as the container for all assets being valued at a particular point in time (EffectiveDateOfValuation) for a specific client. The Job model tracks important dates, valuation type, and references to all related assets and their valuation results.

## Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: BaseEntity, IClientEntity, IAuditableEntity

## Business Rules Applied
- A job has a specific effective date of valuation that determines the point in time for all valuations
- Jobs can be of different types (Comprehensive, Desktop/Indexation, or Rolling) which affects valuation methodology
- For non-comprehensive jobs, the system tracks years since the last comprehensive valuation
- Jobs contain collections of assets organized by asset classes
- Job status indicates workflow state (e.g., open, draft, finalized, archived)
- Jobs include tracking of various dates (draft due, final due, draft delivery, final delivery)
- Jobs are associated with a specific accounting standard (IFRS or IPSAS)

## Job Lifecycle
The job entity follows a specific lifecycle represented by its Status:

1. **Open** - Initial state, job is being configured and data is being collected
2. **Draft** - Preliminary calculations are complete, draft reports are generated
3. **Final** - Client has approved valuations, final reports are generated
4. **Archived** - Job is complete and preserved for historical reference

 **Note:** Only jobs in "Open" status can have their data modified. Once a job moves to "Draft" or later statuses, data becomes increasingly locked to preserve integrity.

## Job Relationships
The Job entity is central to the valuation process and has numerous relationships:

- **Client** - Each job belongs to a client organization
- **AssetClass** - Jobs include specific asset classes for valuation
- **Assets** - Related through asset classes
- **Valuation Profiles** - Applied through valuation profile rules
- **Valuation Results** - Stores calculated values for reporting
- **Import Logs** - Tracks data import history

## Business Context

## Purpose in Valuation Process
According to the legacy documentation, a Job represents a valuation at a specific point in time (the "effective date of valuation"). The job typically corresponds to financial year-end requirements.

## Data Isolation
Jobs serve as a critical mechanism to maintain data isolation between the valuation process and live systems. The legacy documentation emphasizes that "The data held in the valuation must be quarantined from live data to ensure agreed valuation results are not impacted by changes to the live data." This isolation is necessary because the valuation process, including audit review, can take more than six months.

## Lifecycle States
The job status transitions through several business states that reflect the valuation workflow:
- **Open**: Active job where changes can be made to assets and calculations
- **Draft**: Pending client feedback and possible changes - initial reports have been generated
- **Finalised**: Client has accepted results and final reports have been delivered
- **Archived**: Financial statements have been signed off by audit; job data becomes "previous year's figures" in the database for future reference

The archived status is particularly important as it preserves the final valuation data for year-to-year comparisons and movements reporting.

## Relationship to Asset Classes
Jobs are created with specific asset classes allocated to them. This allows organizations to schedule different types of assets for valuation in different periods if necessary.

## Role in Post-Valuation Processes
After a job is archived, its data is used for:
- Generation of movements reports (comparing to the next valuation)
- Audit evidence
- Historical valuation records
- Trend analysis

## Performance Considerations
 **Tip:** Jobs can contain thousands of assets. When querying job data:
- Use projections to retrieve only needed fields
- Consider pagination for user interfaces displaying job assets
- Use indexed queries when filtering by effective date or status