# 📊 ComponentSubType Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/ComponentSubType.cs
- **Database Table**: ComponentSubTypes
- **Primary Purpose**: Defines the third level in the component hierarchy, representing subtypes within a component type
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the component subtype
  - ComponentTypeId (int) - Links to the parent component type
  - LookupType (enum) - Identifies this as a ComponentSubType lookup
- **🔗 Related Models**: 
  - ComponentType (parent) - The parent type
  - Component (indirect, through hierarchy) - Components of this subtype
  - ComponentAssumptions (one-to-one) - Valuation parameters
  - BaselineAssumptions (one-to-one) - Strategic planning data

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The ComponentSubType entity represents the most detailed level in the component hierarchy, providing highly specific categorization of components. For example, within a "Metal Roof" component type, subtypes might include "Colorbond," "Zincalume," or "Copper." The ComponentSubType directly connects to assumptions models that define specific valuation parameters, making it a critical link between the component hierarchy and the valuation framework.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: Lookup, IClientEntity

### 📝 Business Rules Applied
- ComponentSubType must be linked to a ComponentType
- ComponentSubType forms the most detailed level of the component hierarchy (ComponentName → ComponentType → ComponentSubType)
- Each ComponentSubType can have associated ComponentAssumptions and BaselineAssumptions that define valuation parameters
- ComponentSubType is a client-specific lookup, allowing different clients to have different component subtype schemes
- The associated assumptions determine key valuation parameters like useful life, replacement cost, and residual value

### 🔗 Hierarchy Relationships
ℹ️ **Note:** The component hierarchy completes at the subtype level:
- ComponentName (e.g., Structure)
- → ComponentType (e.g., Metal Structure)
- → → ComponentSubType (e.g., Steel Frame)

This detailed classification enables precise application of valuation parameters and is essential for accurate cost estimation.

### 🧮 Valuation Parameters
ComponentSubType is directly linked to valuation parameters through ComponentAssumptions:

1. **Unit Rates**
   - Replacement costs are often defined at the subtype level
   - Different material subtypes have different costs
   - Installation complexity varies by subtype

2. **Lifecycle Data**
   - Useful life is typically defined by subtype
   - Residual value percentages are subtype-specific
   - Consumption patterns vary by material and construction

3. **Strategic Asset Management**
   - BaselineAssumptions link subtypes to strategic planning
   - Renewal forecasting relies on subtype-specific data
   - Risk profiles are frequently defined at the subtype level

### 📝 Business Context
ComponentSubType provides the most granular level of detail for:

- Detailed cost estimation
- Precise asset lifecycle modeling
- Component-specific maintenance planning
- Industry-standard classification alignment
- Cost indexation by specific component materials

### ⚡ Performance Considerations
💡 **Tip:** When loading component data with assumptions, consider eager loading the ComponentSubType relationship only when detailed parameters are needed. For bulk operations or reports, projections that include only necessary fields can improve performance.