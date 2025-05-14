# 📊 AssetClass Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/AssetClass.cs
- **Database Table**: AssetClasses
- **Primary Purpose**: Defines the top level in the asset hierarchy and groups assets by category
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the asset class
  - JobId (int) - Links to the valuation job
  - LookupType (enum) - Identifies this as an AssetClass lookup
- **🔗 Related Models**: 
  - Job (parent) - The valuation job this class belongs to
  - AssetType (one-to-many) - Types within this class
  - Asset (one-to-many) - Assets belonging to this class
  - ValuationProfileRule (one-to-many) - Rules for valuation
  - AssetAssumptions (one-to-many) - Valuation parameters

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The AssetClass entity serves as the top level in the asset hierarchy, grouping assets into broad categories (such as Buildings, Roads, Bridges, etc.). It connects assets to their valuation job and holds specific valuation rules through its ValuationProfileRules collection. AssetClass is a foundational component in organizing assets and applying appropriate valuation methodologies.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: Lookup, IClientEntity

### 📝 Business Rules Applied
- AssetClass must be linked to a Job to be used for valuation
- When a Job is assigned to an AssetClass, valuation data events are triggered for all assets in that class
- AssetClass is used to organize assets in a hierarchical structure (AssetClass -> AssetType -> AssetSubType)
- ValuationProfileRules linked to an AssetClass determine which valuation profiles apply to which asset types
- AssetClass is a client-specific lookup, allowing different clients to have different asset classification schemes

### 🔗 Hierarchy Relationships
ℹ️ **Note:** The asset hierarchy follows this pattern:
1. AssetClass (e.g., Buildings)
2. AssetType (e.g., Commercial, Residential)
3. AssetSubType (e.g., Office, Apartment)

This hierarchy is crucial for organizing assets and applying the appropriate valuation methodologies based on the asset's classification.

### 📝 Business Context
AssetClass is one of the key entities that bridges business concepts with technical implementation:

- Financial reporting requires assets to be grouped by class for disclosure purposes
- Different asset classes often have different valuation methodologies (e.g., cost approach for infrastructure, market approach for land)
- Asset classes define which components are expected within assets (e.g., buildings have structure, roof, mechanical systems)

### ⚡ Performance Considerations
💡 **Tip:** Asset classes are frequently used in queries and filtering operations. Efficient indexes on the AssetClass table can significantly improve performance when dealing with large asset portfolios.