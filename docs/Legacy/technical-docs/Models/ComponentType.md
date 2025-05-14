# 📊 ComponentType Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/ComponentType.cs
- **Database Table**: ComponentTypes
- **Primary Purpose**: Defines the second level in the component hierarchy, representing types within a component name
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the component type
  - ComponentNameId (int) - Links to the parent component name
  - LookupType (enum) - Identifies this as a ComponentType lookup
- **🔗 Related Models**: 
  - ComponentName (parent) - The parent component group
  - ComponentSubType (one-to-many) - Subtypes within this type
  - Component (one-to-many) - Components of this type

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The ComponentType entity represents the second level in the component hierarchy, providing more specific categorization within a component name group. For example, within a "Roof" component name, component types might include "Metal Roof," "Tiled Roof," or "Concrete Roof." This intermediate level helps organize components more precisely and enables more targeted valuation parameters.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: Lookup, IClientEntity

### 📝 Business Rules Applied
- ComponentType must be linked to a ComponentName
- ComponentType is a key part of the component hierarchy (ComponentName → ComponentType → ComponentSubType)
- Component types are used to organize components and apply appropriate valuation parameters
- ComponentType is a client-specific lookup, allowing different clients to have different component type schemes
- Each ComponentType can have multiple ComponentSubTypes for even more granular categorization

### 🔗 Hierarchy Relationships
ℹ️ **Note:** In the component hierarchy:
- ComponentType is the second level of classification
- Example hierarchy: Structure (ComponentName) → Concrete Structure (ComponentType) → Precast Concrete (ComponentSubType)
- This hierarchy enables precise application of unit rates, useful lives, and other parameters

### 📝 Business Context
ComponentType provides important business benefits in asset valuation:

1. **Cost Estimation**
   - Different construction types have different unit rates
   - Material variations are captured at the type level
   - Regional cost differences may apply based on type

2. **Lifecycle Planning**
   - Different component types have distinct useful lives
   - Maintenance requirements vary by type
   - Replacement cycles can be type-specific

3. **Valuation Methodology**
   - Some component types may use specialized valuation approaches
   - Depreciation patterns can vary by component type
   - Industry standards may specify different handling for certain types

### ⚡ Performance Considerations
💡 **Tip:** When retrieving component hierarchies, consider using projection queries that include only the necessary type information when loading large datasets.