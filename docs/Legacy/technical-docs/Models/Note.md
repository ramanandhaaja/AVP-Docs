# 📝 Note Model

## 📝 QUICK DOCUMENTATION
- **File Path**: `/Domain/Entities/Note.cs`
- **Primary Purpose**: Stores text notes and annotations related to assets, providing a way to capture additional information during field data collection or valuation processes
- **Key Fields**:
  - `NoteId`: Unique identifier for the note
  - `AssetId`: Reference to the associated asset (optional if attached to a different entity)
  - `JobId`: Reference to the valuation job
  - `Text`: The actual note content
  - `NoteType`: Type of note (general, inspection, valuation, etc.)
  - `CreatedDate`: Date and time the note was created
- **Relationships**:
  - Can belong to an `Asset`
  - Can belong to a `Component`
  - Can belong to a `Job`
  - Created by a `User`
- **Used By**:
  - Field data collection app
  - Asset inspection processes
  - Valuation review processes
  - Reports (methodology documentation)

## 📝 DETAILED DOCUMENTATION

### 📝 Overview
The Note model provides a way to capture textual information and observations related to assets, components, or jobs during the asset valuation process. Notes are particularly important during field data collection, where valuers record observations about assets that aren't captured in structured fields. Notes can include information about asset condition, access issues, installation details, assumptions made during valuation, or any other relevant observations.

### 📝 Model Details
- **Namespace**: `AVP.Domain.Entities`
- **Base Class**: `AuditableEntity`
- **Database Table**: `Notes`

### 📝 Properties

#### Core Fields
| Property | Type | Description |
|----------|------|-------------|
| `NoteId` | Guid | Primary key |
| `Text` | string | The note content (up to 2000 characters) |
| `NoteType` | Enum | Type of note (General, Inspection, Valuation, Internal, etc.) |
| `CreatedDate` | DateTime | When the note was created |
| `CreatedBy` | string | User who created the note |

#### Relationship Fields
| Property | Type | Description |
|----------|------|-------------|
| `AssetId` | Guid? | Optional foreign key to Asset |
| `ComponentId` | Guid? | Optional foreign key to Component |
| `JobId` | Guid? | Optional foreign key to Job |
| `UserId` | string | Foreign key to User |

#### Additional Fields
| Property | Type | Description |
|----------|------|-------------|
| `IsSystem` | bool | Indicates if this is a system-generated note |
| `Severity` | Enum | Optional severity level (Info, Warning, Issue) |
| `IsPrivate` | bool | Whether the note is for internal use only |
| `VisibleInReports` | bool | Whether the note should appear in reports |

### 📝 Navigation Properties
- `Asset`: Reference to the associated Asset entity (if applicable)
- `Component`: Reference to the associated Component entity (if applicable)
- `Job`: Reference to the associated Job entity (if applicable)
- `User`: Reference to the User who created the note

### 📝 Business Context

Notes play an important role in the asset valuation process, particularly during field data collection. According to the legacy documentation:

> "Typically for buildings and other structures, information will be gathered in the field using the mobile data capture app."

These field inspections often require capturing observations that don't fit into structured data fields, which is where notes are used.

The mobile app synchronization process handles note creation and updates:

> "On return to the office (or web access) the data is then synchronised back to the PC, exported and then imported back into Asset Valuer Pro."

During this synchronization, notes captured in the field are transferred back to the main system.

### 📝 Usage in Valuation Process Flow

Notes are used in several stages of the valuation process:

1. **Field Data Collection**: Valuers create notes during site inspections to record observations about assets:
   > "The valuers will then clean up and sort the Excel files and import the data into Asset Valuer Pro. They then adopt a sampling approach in the field to validate the data."

   Notes often document the validation process, recording any discrepancies or additional information.

2. **Valuation Process**: During valuation, notes might record assumptions or special considerations:
   > "Once all data is populated the valuer refreshes all the calculations."

   Notes can document manual adjustments or explain unusual valuation results.

3. **Methodology Documentation**: Notes often appear in methodology reports:
   > "Valuation methodology and other textual based reports"

   Significant notes about assets or components may be included in these reports to explain valuation approaches or assumptions.

### 📝 Note Types

The NoteType property categorizes notes for different purposes:

1. **General Notes**: General observations about an asset
2. **Inspection Notes**: Observations made during field inspection
3. **Valuation Notes**: Notes related to valuation methodology or calculations
4. **Internal Notes**: For internal team reference only (not visible in reports)
5. **System Notes**: Automatically generated by the system to log events or changes

### 📝 Mobile Data Collection Integration

Notes are a key component of the mobile data collection process:

1. **Creation**: Notes are created on mobile devices during field inspections
2. **Synchronization**: Notes are synchronized back to the main system
3. **Review**: Valuers review notes during valuation processes
4. **Reporting**: Selected notes may appear in reports

### ⚡ Performance Considerations

1. Notes are designed for efficient storage and retrieval:
   - Text fields are limited to 2000 characters to prevent excessive storage
   - Indexed fields include AssetId, ComponentId, and JobId for efficient querying
   - NoteType categorization allows filtering for specific purposes

2. Notes synchronization from mobile devices is optimized:
   - Only changed notes are transferred during synchronization
   - Batch processing is used for multiple notes