# 📊 Component Documentation

## 📊 QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/Component.cs
- **Database Table**: Components
- **Primary Purpose**: Represents a part or component of an asset with its own valuation characteristics
- **🔑 Key Fields**: 
  - Id (int) - Primary key
  - AssetId (int) - Links to the parent asset
  - ComponentNameId, ComponentTypeId, ComponentSubTypeId (int) - Define component hierarchy
  - ConsumptionScore (decimal) - Condition rating for valuation calculations
  - ApportionmentPct (decimal) - Percentage of the parent asset's value
  - ValuationType (enum) - Determines how the component is valued
- **🔗 Related Models**: 
  - Asset (parent) - The parent asset
  - ComponentName, ComponentType, ComponentSubType (hierarchy) - Component classification
  - ComponentAssumptions (valuation parameters) - Valuation rules
  - ValuationProfile (depreciation patterns) - Consumption patterns
  - ComponentReplacementCost (one-to-many) - Cost data

## 📝 DETAILED DOCUMENTATION

### 📊 Overview
The Component entity represents individual parts of an asset that have distinct valuation characteristics. Components are used particularly in the Apportionment Cost valuation approach, where an asset's value is distributed across its components. Each component has its own lifecycle parameters, condition rating, and replacement costs, allowing for more precise valuation and depreciation calculations.

### 🏗️ Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: BaseEntity, IErrorEntity, IClientEntity, IAuditableEntity

### 📝 Business Rules Applied
- Components must have a ComponentAssumptions record and ValuationProfile to be valued
- Different valuation methods have different required fields:
  - Standard cost-based approaches require a ConsumptionScore
  - HistoricalCost valuation requires different parameters
- Components can have separate acquisition and decommission dates from their parent Asset
- The ApportionmentPct values across all components of an asset should sum to 100% (1.0)
- Components have separate lifecycle tracking for short-life and long-life portions
- Valuation readiness is determined by checking multiple required fields and relationships
- Components trigger domain events that propagate to parent assets when key values change

### 🧮 Valuation Calculations
Components form the foundation of several key valuation approaches:

1. **Apportionment Cost Method**
   - The asset's total replacement cost is apportioned across components
   - Each component has its own consumption score and depreciation pattern
   - Different components may have different useful lives

2. **Direct Cost Method**
   - Each component has its own replacement cost calculated directly
   - Unit rates and measurements determine replacement values
   - Depreciation is calculated component by component

3. **Mixed Methods**
   - Some assets use hybrid approaches with different methods per component
   - Components can have specialized valuation rules based on their type

### 🔗 Component Hierarchy
ℹ️ **Note:** Components have their own classification hierarchy:
- ComponentName (e.g., Structure)
- → ComponentType (e.g., Concrete Frame)
- → → ComponentSubType (e.g., Reinforced Concrete Column)

This hierarchy allows for precise unit rate application and useful life determination.

### ⚡ Performance Considerations
💡 **Tip:** When loading assets with many components, consider using projection queries when only specific component data is needed rather than loading all properties.

### 📝 Business Context

> **⚠️ Version Note:**  
> The legacy documentation primarily focuses on the component structure for the Apportionment Cost valuation approach, while the codebase implements more sophisticated component-level valuation methods. This suggests enhancements to component functionality in newer versions of the system.

#### 📋 Role in the Asset Hierarchy
According to the legacy documentation, components are a critical part of the asset hierarchy structure. While assets are categorized using Asset Class → Asset Type → Asset Sub-Type, components have their own parallel hierarchy of Component Name → Component Type → Component Sub-Type. This detailed categorization enables precise valuation and lifecycle management.

#### 📋 Purpose in Valuation Process
The legacy documentation emphasizes that components are particularly important for the Apportionment Cost valuation approach. In this approach, an asset's total replacement cost is distributed across its components according to their relative importance (ApportionmentPct). This allows for more accurate depreciation calculations since different components may have different useful lives and condition states.

#### 📋 Lifecycle Management
Components enable sophisticated lifecycle management by tracking:
- Short-life and long-life portions of components (e.g., finishes vs. structure)
- Different useful lives for different component types
- Component-specific residual values
- Independent condition assessments

#### 📋 Field Data Collection
During the data collection phase described in the legacy documentation, valuers collect component-level data including:
- Physical dimensions and attributes
- Condition scores (ConsumptionScore)
- Photos of specific components
- Notes on defects or special characteristics

This data is typically collected using the mobile data collection app during site inspections.

#### 📋 Component Assumptions
The legacy documentation describes how component-level assumptions stored in ComponentAssumptions include:
- Component-level unit rates
- Short-life and long-life splits
- Useful life parameters
- Residual values

These assumptions are part of the valuation framework that must be established before valuation calculations can be performed.