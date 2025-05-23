
# ComponentType Model Documentation

## Quick Reference
- **File Path**: /Domain/Entities/ComponentType.cs
- **Database Table**: ComponentTypes
- **Namespace**: AVP.Domain.Entities
- **Base Class**: Lookup, IClientEntity

## Key Fields

| Field            | Type   | Description                                      |
|------------------|--------|--------------------------------------------------|
| Id               | int    | Primary key                                      |
| Name             | string | Name of the component type                       |
| ComponentNameId  | int    | Links to the parent component name               |
| LookupType       | enum   | Identifies this as a ComponentType lookup        |

## Related Entities

| Entity            | Relationship    | Description                                |
|-------------------|------------------|--------------------------------------------|
| ComponentName     | Parent           | The parent component group                 |
| ComponentSubType  | One-to-Many      | Subtypes within this type                  |
| Component         | One-to-Many      | Components of this type                    |

## Purpose & Role
Defines the second level in the component hierarchy, providing specific categorization within a component name group. This enables structured classification and precise valuation modeling of components.

## Business Rules
- Each ComponentType must be linked to a `ComponentName`.
- ComponentType is a key part of the hierarchy: `ComponentName` → `ComponentType` → `ComponentSubType`.
- It serves as a client-specific lookup allowing tailored schemes per client.
- Each ComponentType can have multiple `ComponentSubTypes` for more granular breakdowns.

## Hierarchy Relationships
ComponentType represents the second level of classification in the component hierarchy.

Example:
- ComponentName: Structure
- ComponentType: Concrete Structure
- ComponentSubType: Precast Concrete

This structure allows precision in applying unit rates, useful life estimates, and other valuation parameters.

## Business Context

### Cost Estimation
- Varies by construction type and materials
- Affects unit cost rates and regional pricing

### Lifecycle Planning
- Useful life differs by component type
- Replacement and maintenance cycles can be defined at this level

### Valuation Methodology
- Component types may determine which valuation method is applicable
- Impacts depreciation schedules and financial reporting

## Performance Considerations
- Use projection queries when retrieving large datasets to reduce load time
- Index `ComponentNameId` to improve query performance on joins

## Technical Design

| Field               | Type                           | Nullable | Description                                                |
|--------------------|--------------------------------|----------|------------------------------------------------------------|
| ComponentNameId     | int?                           | Yes      | Foreign key referencing the parent ComponentName            |
| ComponentName       | ComponentName                  | Yes      | Navigation property to the parent component name            |
| ComponentSubTypes   | `ICollection<ComponentSubType>`  | Yes      | Collection of subtypes within this component type           |
| Components          | `ICollection<Component>`         | No       | Collection of components that belong to this type           |

## Related Documentation

| Document Name         | Description                              |
|-----------------------|------------------------------------------|
| ComponentName         | Model documentation for parent entity    |
| ComponentSubType      | Model documentation for subtypes         |
| Component             | Documentation for linked components      |
