# 📊 AssetValuation Model

## 📊 QUICK DOCUMENTATION
- **File Path**: `/Domain/Entities/AssetValuation.cs`
- **Primary Purpose**: Stores the calculated valuation results for an asset, including current value, accumulated depreciation, and other financial metrics
- **Key Fields**:
  - `AssetValuationId`: Unique identifier for the valuation record
  - `AssetId`: Reference to the associated asset
  - `JobId`: Reference to the valuation job
  - `CurrentValue`: The current fair value of the asset
  - `AccumulatedDepreciation`: Total accumulated depreciation
  - `ReplacementCost`: Cost to replace the asset
  - `EffectiveDate`: Date of the valuation
  - `ValuationMethod`: Method used for valuation (Cost, Market, Income)
- **Relationships**:
  - Belongs to one `Asset`
  - Belongs to one `Job`
  - Has many `ComponentValuation` records (if using component-based valuation)
- **Used By**:
  - AssetController (for valuation recalculation)
  - ReportsController (for reporting)
  - Job operations (for job-level valuation processes)

## 📊 DETAILED DOCUMENTATION

### 📊 Overview
The AssetValuation model represents the calculated valuation results for an asset at a specific point in time (the effective date of a valuation job). It stores financial information such as current value, accumulated depreciation, replacement cost, and other metrics required for financial reporting and asset management purposes. AssetValuation records are created during the calculation phase of the valuation process and are referenced when generating reports.

### 📊 Model Details
- **Namespace**: `AVP.Domain.Entities`
- **Base Class**: `AuditableEntity`
- **Database Table**: `AssetValuations`

### 📊 Properties

#### Core Valuation Fields
| Property | Type | Description |
|----------|------|-------------|
| `AssetValuationId` | Guid | Primary key |
| `AssetId` | Guid | Foreign key to Asset |
| `JobId` | Guid | Foreign key to Job |
| `EffectiveDate` | DateTime | Valuation date |
| `ValuationMethod` | Enum | Valuation method used (CostApproach, MarketApproach, IncomeApproach) |
| `CurrentValue` | decimal | Current fair value of the asset |
| `AccumulatedDepreciation` | decimal | Total accumulated depreciation |
| `ReplacementCost` | decimal | Cost to replace the asset |

#### Financial Reporting Fields
| Property | Type | Description |
|----------|------|-------------|
| `ResidualValue` | decimal | Estimated value at end of useful life |
| `CarryingAmount` | decimal | Value carried on the balance sheet |
| `DepreciableAmount` | decimal | Amount subject to depreciation |
| `AnnualDepreciation` | decimal | Annual depreciation amount |
| `RevaluationReserve` | decimal | Revaluation reserve amount |
| `RemainingUsefulLife` | decimal | Remaining useful life in years |

#### Insurance Valuation Fields
| Property | Type | Description |
|----------|------|-------------|
| `InsuranceValue` | decimal | Value for insurance purposes |
| `IndemnityValue` | decimal | Indemnity value (current value) |
| `InsuranceCategory` | Enum | Category for insurance purposes |

#### Asset Management Fields
| Property | Type | Description |
|----------|------|-------------|
| `ConditionScore` | decimal | Condition score (usually 1-5) |
| `RemainingServicePotential` | decimal | Percentage of service potential remaining |
| `ProjectedRenewalDate` | DateTime? | Projected date for asset renewal |
| `CostToBringToSatisfactory` | decimal | Cost to restore to satisfactory condition |

### 📊 Navigation Properties
- `Asset`: Reference to the associated Asset entity
- `Job`: Reference to the associated Job entity
- `ComponentValuations`: Collection of related ComponentValuation entities

### 📝 Business Context

In the Asset Valuer Pro system, the AssetValuation model plays a central role in the valuation process. According to the legacy documentation:

> "Asset Valuer Pro delivers financial reporting valuations under accounting standards (IFRS International Financial Reporting Standards and IPSAS International Public Sector Accounting Standards) and Insurance Valuations."

The AssetValuation model stores these valuation results for financial reporting, including values needed for financial statement disclosures, such as:
- Fair value measurements
- Accumulated depreciation
- Carrying amounts

The model also supports insurance valuations by storing:
> "To protect against accidental loss entities will choose to insure some assets. Usually they insure for full replacement value but sometimes they only insure for indemnity value."

### 📊 Usage in Valuation Process Flow

The AssetValuation model is used in the following stages of the valuation process:

1. **Calculation Stage**: When the valuer runs calculations, the system creates or updates AssetValuation records:
   > "Once all data is populated the valuer refreshes all the calculations... uses the populated data to run the various algorithms and produce valuations"

2. **Reporting Stage**: AssetValuation records are the primary data source for financial reports:
   > "Once the refresh of calculations is completed the valuer is able to... Produce the various reports covering Valuation spreadsheets (financial reporting and insurance)"

3. **Job Archiving**: When a job is archived, the AssetValuation records are preserved as historical data:
   > "Once the financial statements have been signed off by audit (or when a new job is required) the 'job status' is changed to 'archived'. This process access the final figures and raw data and records them as the 'previous years' figures in the data base."

### 📊 Calculation Methods

AssetValuation records can be created using different methodologies, as described in the documentation:

> "Under the accounting standards the valuations may be delivered by one of or a combination of - Market approach (used when there is an open and active market), Income approach (used when value is driven by income earning potential), Cost approach (where there is no market and assets are used to deliver community benefits)"

The `ValuationMethod` property records which approach was used, which affects how the valuation fields are calculated and interpreted.

### ⚡ Performance Considerations

AssetValuation records are created for every asset in a job, which can result in a large number of records for clients with extensive asset portfolios. To optimize performance:

1. AssetValuation records are only created or updated when calculations are explicitly run
2. Queries against AssetValuation typically filter by JobId to limit result sets
3. Indexed fields include AssetId, JobId, and EffectiveDate for efficient querying