# 📊 AssetSubType Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/AssetSubType.cs
- **Database Table**: AssetSubTypes
- **Primary Purpose**: Defines the third level in the asset hierarchy, representing subtypes within an asset type
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the asset subtype
  - AssetTypeId (int) - Links to the parent asset type
  - LookupType (enum) - Identifies this as an AssetSubType lookup
- **🔗 Related Models**: 
  - AssetType (parent) - The parent type
  - Asset (indirect, through hierarchy) - Assets of this subtype
  - AssetAssumptions (one-to-one) - Valuation assumptions
  - InsuranceAssumptions (one-to-one) - Insurance parameters
  - ComponentName (one-to-many) - Component templates

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The AssetSubType entity represents the most detailed level in the asset hierarchy, providing highly specific categorization of assets. For example, within a "Roads" asset type, subtypes might include "Sealed Roads," "Unsealed Roads," or "Footpaths." The AssetSubType directly connects to assumptions models that define specific valuation parameters, making it a critical link between the asset hierarchy and the valuation framework.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: Lookup, IClientEntity

### 📝 Business Rules Applied
- AssetSubType must be linked to an AssetType
- AssetSubType forms the most detailed level of the asset hierarchy (AssetClass → AssetType → AssetSubType)
- Each AssetSubType can have associated AssetAssumptions and InsuranceAssumptions that define valuation parameters
- AssetSubType determines which ComponentNames can be associated with assets of this subtype
- AssetSubType is a client-specific lookup, allowing different clients to have different asset subtype schemes

### 🔗 Hierarchy Relationships
ℹ️ **Note:** The asset hierarchy completes at the subtype level:
- AssetClass (e.g., Infrastructure)
- → AssetType (e.g., Roads)
- → → AssetSubType (e.g., Sealed Roads)

This detailed classification enables precise application of valuation parameters and component templates.

### 📝 Business Context
AssetSubType directly impacts several important valuation aspects:

1. **Default Assumptions**
   - Each SubType can have default useful life assumptions
   - Default unit rates are often defined at the SubType level
   - Residual value percentages may vary by SubType

2. **Component Templates**
   - The ComponentNames associated with a SubType define the expected structure
   - These templates help ensure consistent component breakdowns across similar assets

3. **Valuation Rules**
   - Different SubTypes might use different valuation approaches
   - Consumption patterns often vary by SubType
   - Validation rules may be specific to certain SubTypes

### ⚡ Performance Considerations
💡 **Tip:** When working with asset hierarchies, consider caching the SubType relationships to reduce database queries, especially when processing large volumes of assets.