# Models_Inventory Model Documentation

# Data Models Inventory

This document provides an inventory of the core data models in the Asset Valuer Pro application. Models are organized by their functional domain.

## Core Domain Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| Asset | `/API/Web/src/models/Asset.tsx` | Multiple DTOs | The central entity representing physical assets being valued |
| Component | `/API/Web/src/models/Component.tsx` | Multiple DTOs | Components that make up an asset |
| Job | `/API/Web/src/models/Job.tsx` | JobDto | A valuation job that includes one or more asset classes |
| ValuationProfile | `/API/Web/src/models/ValuationProfile.tsx` | ValuationProfileWithScoresDto | Configuration for how valuations are calculated |
| Client | `/API/Web/src/models/Client.tsx` | ClientDto | Organization that owns assets |
| User | `/API/Web/src/models/User.tsx` | ApplicationUserDto | System user with various permissions |

## Asset-Related Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| AssetSummary | `/API/Web/src/models/AssetSummary.tsx` | AssetSummaryDto | Summarized asset information |
| ComponentSummary | `/API/Web/src/models/ComponentSummary.tsx` | ComponentSummaryDto | Summarized component information |
| Content | `/API/Web/src/models/Content.tsx` | ContentDto | Content items associated with assets |
| HierarchyNode | `/API/Web/src/models/HierarchyNode.tsx` | HierarchyNodeDto | Node in the asset/component hierarchy |
| Note | `/API/Web/src/models/Note.tsx` | NoteDto | Notes attached to assets |
| Image | `/API/Web/src/models/Image.tsx` | N/A | Images associated with assets |
| Lease | `/API/Web/src/models/Lease.ts` | LeaseDto | Lease information for assets |
| MaintenancePlan | `/API/Web/src/models/MaintenancePlan.tsx` | MaintenancePlanDto | Maintenance planning for assets |

## Assumption Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| AssetAssumptions | `/API/Web/src/models/AssetAssumptions.tsx` | AssetAssumptionsDetailDto | Valuation assumptions for assets |
| ComponentAssumptions | `/API/Web/src/models/ComponentAssumptions.tsx` | ComponentAssumptionsDetailDto | Valuation assumptions for components |
| InsuranceAssumptions | `/API/Web/src/models/InsuranceAssumptions.tsx` | InsuranceAssumptionsDto | Insurance-related assumptions |
| ComponentWithAssumptionValues | `/API/Web/src/models/ComponentWithAssumptionValues.tsx` | ComponentWithAssumptionValuesDto | Components with applied assumptions |

## Cost Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| ReplacementCostSummary | `/API/Web/src/models/ReplacementCostSummary.tsx` | Multiple DTOs | Summary of replacement costs |
| AssetReplacementCostExcelFileDto | N/A | AssetReplacementCostExcelFileDto | Asset replacement costs for export |
| ComponentReplacementCostExcelFileDto | N/A | ComponentReplacementCostExcelFileDto | Component replacement costs for export |

## Hierarchy and Classification Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| HierarchyType | `/API/Web/src/models/HierarchyType.tsx` | N/A | Type of hierarchy (Asset or Component) |
| FinancialClass | `/API/Web/src/models/FinancialClass.tsx` | N/A | Financial classification of assets |
| ValuationClass | `/API/Web/src/models/ValuationClass.tsx` | ValuationClassDto | Classification for valuation purposes |

## User and Organization Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| Group | `/API/Web/src/models/Group.tsx` | GroupDto | User group for permissions |
| Role | `/API/Web/src/models/Role.tsx` | ApplicationRoleDto | User role defining permissions |
| Subscription | `/API/Web/src/models/Subscription.tsx` | SubscriptionDto | Client subscription information |
| Address | `/API/Web/src/models/Address.tsx` | AddressDto | Address information |
| Contact | `/API/Web/src/models/Contact.tsx` | ContactDto | Contact information |

## Import/Export Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| ImportLogItem | `/API/Web/src/models/ImportLogItem.tsx` | ImportLogDetailDto | Log entry for import operations |
| ImportResults | `/API/Web/src/models/ImportResults.tsx` | N/A | Results of import operations |
| AssetExcelFileDto | N/A | AssetExcelFileDto | Asset data for Excel export |
| LeaseExcelFileDto | N/A | LeaseExcelFileDto | Lease data for Excel export |

## Report Models

| Model | Frontend File | Backend Representation | Description |
|-------|--------------|------------------------|-------------|
| SummaryReportDto | N/A | SummaryReportDto | Data for summary reports |
| MethodologyReportDto | N/A | MethodologyReportDto | Data for methodology reports |
| StratificationSummaryReportDto | N/A | StratificationSummaryReportDto | Data for stratification reports |
| ChangesReportDto | N/A | ChangesReportDto | Data for changes reports |

## Priority Models

Based on business requirements and core functionality, the following models should be prioritized for detailed documentation:

1. **Asset** - Central entity in the system
2. **Component** - Key part of asset composition
3. **Job** - Critical for valuation workflow
4. **ValuationProfile** - Essential for valuation configuration
5. **AssetAssumptions/ComponentAssumptions** - Important for valuation calculations
