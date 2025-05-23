# Lookup Model Documentation

#  Lookup Documentation

## QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/Lookup.cs
- **Database Table**: N/A (abstract base class)
- **Primary Purpose**: Abstract base class for all lookup/taxonomy entities in the system
- **Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the lookup item
  - ClientId (int) - Links to the client
  - LookupType (enum) - Identifies the type of lookup
- **Related Models**: 
  - Client - Organization owning the lookup
  - Multiple derived classes (AssetClass, AssetType, AssetSubType, ComponentName, etc.)

## DETAILED DOCUMENTATION

## Overview
The Lookup abstract class serves as the foundation for all hierarchical classification entities in the system. It provides common properties and behavior for various lookup types such as asset classes, types, subtypes, component names, types, and subtypes. This base class enables consistent handling of taxonomy entities while allowing for specialized behavior in derived classes.

## Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity
- **Derived Classes**: AssetClass, AssetType, AssetSubType, ComponentName, ComponentType, ComponentSubType, FinancialAssetClass, FinancialAssetSubClass

## Business Rules Applied
- All lookup entities are client-specific, allowing each client to have their own taxonomies
- Lookup entities are categorized by their LookupType, which identifies their role in the system
- Lookup entities form hierarchical relationships, with each level in the hierarchy having a more specific implementation
- The name property provides the human-readable identifier for the lookup
- Lookup entities are foundational to the asset and component hierarchies in the system

## Class Hierarchy
The Lookup class serves as the base for two primary hierarchies:

1. **Asset Hierarchy**
   - AssetClass  AssetType  AssetSubType
   - Forms the classification structure for physical assets

2. **Component Hierarchy**
   - ComponentName  ComponentType  ComponentSubType
   - Forms the classification structure for asset components

Additionally, it supports financial classification:
- FinancialAssetClass  FinancialAssetSubClass
- Used for financial reporting classifications

## LookupType Enumeration
The LookupType enum identifies the specific role of each lookup entity:

| LookupType Value | Description | Example |
|------------------|-------------|---------|
| AssetClass | Top level of asset hierarchy | Buildings, Infrastructure |
| AssetType | Second level of asset hierarchy | Commercial Building, Road |
| AssetSubType | Third level of asset hierarchy | Office Building, Sealed Road |
| ComponentName | Top level of component hierarchy | Structure, Roof |
| ComponentType | Second level of component hierarchy | Concrete Structure, Metal Roof |
| ComponentSubType | Third level of component hierarchy | Reinforced Concrete, Colorbond |
| FinancialAssetClass | Financial classification level 1 | Land, Buildings |
| FinancialAssetSubClass | Financial classification level 2 | Commercial Land, Specialized Buildings |

## Performance Considerations
 **Tip:** Lookup entities are frequently used in queries and filtering. Efficient indexing on Id, Name, ClientId, and LookupType can significantly improve query performance.

## Business Context
Lookup entities provide crucial business benefits:

1. **Standardization**
   - Consistent classification across the organization
   - Enforced taxonomic structure
   - Predictable naming conventions

2. **Client Customization**
   - Each client can have unique classification schemes
   - Industry-specific terminology can be accommodated
   - Different organizational structures are supported

3. **Reporting Flexibility**
   - Roll-up reporting by hierarchy level
   - Filtering by classification
   - Comparative analysis across classification types