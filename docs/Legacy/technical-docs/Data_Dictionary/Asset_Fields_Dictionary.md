# 📊 Asset Fields Data Dictionary

## 📋 Overview
This document provides a comprehensive data dictionary for Asset fields in the Asset Valuer Pro system. It maps technical field names to their business purpose, data types, validation rules, and usage examples.

## 📋 Core Identification Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Id | Integer | Unique identifier | Yes | System-generated primary key | 12345 |
| Name | String | Descriptive name | Yes | Human-readable name of the asset | "Main Administration Building" |
| Reference | String | Asset identifier | Yes | Unique reference code for the asset | "BLDG-001" |
| CustomerReference | String | Client reference | No | Client's internal reference code | "FA-1234" |
| AssetClassId | Integer (FK) | Classification | Yes | Links to asset classification | 5 |
| AssetTypeId | Integer (FK) | Type categorization | Yes | Links to asset type | 12 |
| AssetSubTypeId | Integer (FK) | Detailed categorization | Yes | Links to asset sub-type | 23 |

## 📋 Valuation Classification Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| ValuationPolicy | Enum | Valuation approach | Yes | Defines how asset is valued | "Above Revaluation Threshold" |
| ValuationType | Enum | Valuation method | Yes | Method used for valuation | "Direct Cost" |
| ValuationClassId | Integer (FK) | Disclosure classification | Yes | For financial disclosures | 7 |
| FinancialAssetClassId | Integer (FK) | Financial reporting | No | Classification for financial reports | 3 |
| FinancialAssetSubClassId | Integer (FK) | Financial sub-class | No | Sub-classification for financial reports | 8 |
| IsControlledForFinancialPurpose | Boolean | Control status | Yes | Whether asset is controlled for financial reporting | true |

## 📋 Physical Attributes and Location

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Address | Complex (Object) | Location address | No | Full address details | Address object |
| Facility | String | Facility location | No | Facility name where asset is located | "North Campus" |
| SubFacility | String | Sub-facility | No | Sub-facility location | "Building C" |
| Latitude | Decimal | GPS coordinates | No | GPS latitude for mapping | -33.865143 |
| Longitude | Decimal | GPS coordinates | No | GPS longitude for mapping | 151.209900 |

## 📋 Temporal and Status Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| AcquisitionDate | DateTime | Acquisition date | No | When asset was acquired | "2020-06-15" |
| DecommissionDate | DateTime | Retirement date | No | When asset was/will be retired | "2045-12-31" |
| IndexedFromDate | DateTime | Indexation date | No | Date from which indexation is applied | "2022-01-01" |
| Status | Enum | Inspection status | Yes | Current inspection status | "Inspected" |
| InspectionDate | DateTime | Last inspection | No | When asset was last inspected | "2023-09-22" |
| InspectorName | String | Inspector | No | Name of inspector | "John Smith" |
| AssetHistory | Enum | Asset history | Yes | Classification of asset history | "Found" |

## 📋 Valuation Attributes

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| AssetAssumptionsId | Integer (FK) | Valuation assumptions | Yes | Links to valuation assumptions | 45 |
| OptimisationAdjustmentPct | Decimal | Optimization factor | No | Adjustment for optimization | 0.05 (5%) |
| Valuer | String | Valuation authority | No | Person who performed valuation | "Sarah Johnson" |
| IsHeritageAsset | Boolean | Heritage status | No | Whether asset has heritage status | false |
| IsHeldForSale | Boolean | Sale status | No | Whether asset is held for sale | false |
| IsInvestment | Boolean | Investment status | No | Whether asset is held for investment | false |
| IsHighestAndBestUse | Boolean | Usage status | No | Whether asset is at highest and best use | true |

## 📋 Financial Values

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| PreviousGross | Decimal | Previous valuation | No | Previous gross replacement cost | 450000.00 |
| PreviousCurrentValue | Decimal | Previous fair value | No | Previous fair/current value | 350000.00 |
| PreviousDepreciationExpense | Decimal | Previous depreciation | No | Previous depreciation expense | 15000.00 |

## 📋 Related Collections

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Components | Collection | Component breakdown | No | Components comprising the asset | List of Component objects |
| ReplacementCosts | Collection | Cost details | No | Replacement cost breakdown | List of AssetReplacementCost objects |
| Contents | Collection | Asset contents | No | Contents within the asset | List of Contents objects |
| Notes | Collection | Documentation | No | Notes about the asset | List of AssetNote objects |
| Images | Collection | Visual documentation | No | Photos of the asset | List of AssetImage objects |
| Documents | Collection | Document attachments | No | Documents related to the asset | List of AssetDocument objects |

## 📋 Specialized Valuation Objects

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| Insurance | Complex (Object) | Insurance valuation | No | Insurance-related valuation data | Insurance object |
| MarketApproach | Complex (Object) | Market valuation | Conditional | Market approach valuation data | MarketApproach object |
| IncomeApproach | Complex (Object) | Income valuation | Conditional | Income approach valuation data | IncomeApproach object |
| ValuationMethod | Complex (Object) | Valuation calculations | Yes | Calculated valuation results | AssetValuationMethod object |

## 📋 Custom and Error Fields

| Field Name | Data Type | Business Purpose | Required | Description | Example Value |
|------------|-----------|------------------|----------|-------------|---------------|
| CustomFields | Dictionary | Custom attributes | No | Client-specific custom fields | `{"ProjectCode": "P123"}` |
| Errors | Dictionary | Validation errors | No | Validation errors for the asset | `{"Reference": "Duplicate reference"}` |
| Warnings | Dictionary | Validation warnings | No | Validation warnings for the asset | `{"DecommissionDate": "Date in past"}` |

## 📋 Relationships with Other Entities

| Related Entity | Relationship Type | Description | Navigation Property |
|----------------|-------------------|-------------|---------------------|
| AssetClass | Many-to-One | Asset belongs to an asset class | AssetClass |
| AssetType | Many-to-One | Asset belongs to an asset type | AssetType |
| AssetSubType | Many-to-One | Asset belongs to an asset sub-type | AssetSubType |
| Component | One-to-Many | Asset comprises multiple components | Components |
| AssetAssumptions | Many-to-One | Asset uses valuation assumptions | AssetAssumptions |
| Client | Many-to-One | Asset belongs to a client | Client |
| Lease | One-to-Many | Asset may have multiple leases | Leases |
| ValuationClass | Many-to-One | Asset has a valuation classification | ValuationClass |
| MaintenancePlan | One-to-Many | Asset may have maintenance plans | MaintenancePlans |

## 📋 Business Rules and Validations

1. **Identity Rules**
   - Reference must be unique within a client
   - Name should be descriptive and meaningful

2. **Classification Rules**
   - Asset must have valid AssetClass, AssetType, and AssetSubType
   - ValuationType must be appropriate for the asset class

3. **Valuation Readiness Rules**
   ```csharp
   // Asset is ready for valuation when:
   AssetClassId is not null && 
   ValuationPolicy != ValuationPolicies.Undefined &&
   ValuationPolicy != ValuationPolicies.NotToBeValued && 
   IsControlledForFinancialPurpose &&
   AssetClass?.Job is not null && 
   AssetAssumptions is not null &&
   (DecommissionDate is null || DecommissionDate > AssetClass.Job.EffectiveDateOfValuation)
   ```

4. **Specialized Method Rules**
   - Market approach valuation requires MarketApproach object
   - Income approach valuation requires IncomeApproach object

## 📋 Business Impact and Usage

### Financial Reporting
Assets provide the foundation for financial reporting valuation, with their classification, status, and attributes directly impacting:
- Gross replacement cost calculations
- Current value (fair value) determination
- Depreciation expense calculations
- Financial statement disclosures

### Asset Management
Asset data supports asset management through:
- Condition assessment (Status field)
- Location tracking (Address, Facility fields)
- Lifespan management (AcquisitionDate, DecommissionDate)
- Maintenance planning (MaintenancePlans collection)

### Insurance Valuation
Insurance object contains data for insurance calculations:
- Replacement cost determination
- Escalation factors
- Professional fees calculations
- Debris removal estimates

## 📋 Data Collection Methods

Asset data is collected through multiple channels:
1. **Direct Entry**: Web interface manual entry
2. **Bulk Import**: CSV/Excel import of asset registers
3. **Field Data Collection**: Mobile app capture of physical attributes and condition
4. **System Calculation**: Valuation results generated by system

## 📋 Version Considerations

### Version 2 vs. Version 3 Differences
- Version 3 adds more comprehensive GPS location support
- Version 3 enhances CustomFields capabilities
- Version 3 improves validation with structured Errors and Warnings collections
- Version 3 adds more comprehensive MaintenancePlans tracking

## 📋 Related Documentation

- [Asset Model Documentation](../Models/Asset.md)
- [Valuation Process Workflow](../Workflows/Valuation_Process_Workflow.md)
- [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
- [AssetController Documentation](../API/AssetController.md)
