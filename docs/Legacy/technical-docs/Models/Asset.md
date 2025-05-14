# 📊 Asset Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: Domain/Entities/Asset.cs
- **Database Table**: Assets
- **Primary Purpose**: Represents a physical asset to be valued within the APV system
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Asset identifier
  - AssetClassId, AssetTypeId, AssetSubTypeId (int) - Define asset hierarchy
  - ValuationType (enum) - Determines how the asset is valued
  - ValuationPolicy (enum) - Determines valuation policy approach
  - Status (enum) - Tracks asset inspection status
- **🔗 Related Models**: 
  - AssetClass - Defines the asset classification
  - AssetType - Defines the asset type within a class
  - AssetSubType - Defines the asset sub-type within a type
  - Component (one-to-many) - Parts that make up the asset
  - AssetReplacementCost (one-to-many) - Cost estimates for replacement
  - Job (through AssetClass) - Valuation job context
  - ValuationClass - Classification for valuation purposes
  - Various assumption-related models - Parameters for calculations

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The Asset entity is a core model representing physical assets that need to be valued. It contains comprehensive information about an asset's identification, classification, location, valuation methodology, and status. The model includes numerous properties for tracking both physical attributes and financial information, plus supports multiple valuation approaches including cost, market, and income-based methods.

## 📝 Business Context

> **⚠️ Version Note:**  
> The legacy documentation describes a hierarchical asset structure with more limited valuation approaches, while the codebase contains implementations for additional valuation methods such as HistoricalCost. This suggests ongoing expansion of functionality between versions.

### 📋 Role in the Valuation Process
The Asset entity is the central element in APV's valuation process. According to the legacy documentation, assets must be properly categorized within a hierarchical structure (Asset Class → Asset Type → Asset Sub-Type) to enable appropriate valuation.

### 📋 Valuation Approaches
Assets can be valued using three primary approaches as specified in accounting standards:
- **Market approach**: For assets with an open and active market (e.g., residential properties)
- **Income approach**: For assets where value is driven by income-earning potential (e.g., commercial buildings)
- **Cost approach**: For assets with no market that deliver community benefits (e.g., infrastructure)

The `ValuationType` property determines which approach is used.

### 📋 Data Isolation Requirements
Per the legacy documentation, valuation data must be isolated from live ERP/finance systems during the valuation process, which may take up to six months. The `JobId` relationship allows assets to be associated with a specific valuation job that maintains this isolation.

### 📋 Field Data Collection
When asset data is incomplete, field inspections using the iOS app are necessary. The Asset entity's `Status` property tracks the inspection state, and various data fields capture information during field collection.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: BaseEntity, IExtensibleEntity, IClientEntity, IErrorEntity, IAuditableEntity

### 📝 Business Rules Applied
- Assets must be controlled for financial purposes to be valued
- An asset must have an AssetClass, ValuationPolicy, and AssetAssumptions to be valued
- Decommissioned assets (with DecommissionDate before the job's EffectiveDateOfValuation) are not valued
- Different valuation methods (ApportionmentCost, DirectCost, Market, Income, HistoricalCost) require specific data to be present
- Market valuation requires MarketApproach data
- Income valuation requires IncomeApproach data
- Apportionment cost valuation requires component data with appropriate apportionment percentages

### ⚡ Performance Considerations
ℹ️ **Note:** Assets are often retrieved in bulk operations for valuation processing. Consider using projection queries when only specific properties are needed rather than loading the entire entity.
