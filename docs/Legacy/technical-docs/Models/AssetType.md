# 📊 AssetType Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/AssetType.cs
- **Database Table**: AssetTypes
- **Primary Purpose**: Defines the second level in the asset hierarchy, representing types within an asset class
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the asset type
  - AssetClassId (int) - Links to the parent asset class
  - LookupType (enum) - Identifies this as an AssetType lookup
- **🔗 Related Models**: 
  - AssetClass (parent) - The parent classification
  - AssetSubType (one-to-many) - Subtypes within this type
  - Asset (one-to-many) - Assets belonging to this type

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The AssetType entity represents the second level in the asset hierarchy, providing more specific categorization within an asset class. For example, within an "Infrastructure" asset class, asset types might include "Roads," "Drainage," or "Bridges." This intermediate level helps organize assets more precisely and enables more targeted valuation rules and assumptions.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: Lookup, IClientEntity

### 📝 Business Rules Applied
- AssetType must be linked to an AssetClass
- AssetType is a key part of the asset hierarchy (AssetClass -> AssetType -> AssetSubType)
- Asset types are used in ValuationProfileRules to determine applicable depreciation patterns
- AssetType is a client-specific lookup, allowing different clients to have different asset type schemes within the same asset class
- Each AssetType can have multiple AssetSubTypes for even more granular categorization

### 🔗 Hierarchy Relationships
ℹ️ **Note:** In the asset hierarchy:
- AssetType is the second level of classification
- Example hierarchy: Buildings (Class) → Commercial Buildings (Type) → Office Building (SubType)
- The hierarchy allows for increasingly specific valuation methodologies and parameters

### 📝 Business Context
Asset types serve important business purposes in the valuation process:

- Different asset types within the same class may have different useful lives
- Depreciation patterns often vary by asset type (e.g., straight-line vs consumption-based)
- Replacement costs and unit rates are frequently defined at the asset type level
- Regulatory reporting might require breakdowns by asset type

### ⚡ Performance Considerations
💡 **Tip:** When retrieving assets, consider eager loading the AssetType relationship only when needed for display or filtering purposes. For bulk calculations, this relationship can often be loaded selectively to improve performance.