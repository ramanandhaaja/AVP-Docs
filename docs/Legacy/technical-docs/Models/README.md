# 📊 Asset Valuer Pro - Models Documentation

> **⚠️ Important Note:**  
> This directory contains documentation about the data models used in Asset Valuer Pro. The actual source code is maintained in a separate repository and is not included in this documentation repository.

## Overview

This directory contains documentation for the data models (entities) used in the Asset Valuer Pro system. These models represent the core business objects that the application manages, including assets, components, jobs, and valuation-related entities.

## Available Model Documentation

- [Asset](Asset.md) - Core entity representing physical assets to be valued
- [Component](Component.md) - Parts of assets with their own valuation characteristics
- [Job](Job.md) - Represents a valuation at a point in time
- [ValuationProfile](ValuationProfile.md) - Defines consumption patterns for valuation
- And more...

For a complete list of models, see the [Models Inventory](Models_Inventory.md).

## Model Relationships

The models in Asset Valuer Pro form a hierarchical structure:

1. Jobs contain Asset Classes
2. Asset Classes contain Asset Types
3. Asset Types contain Asset Sub-Types
4. Asset Sub-Types categorize Assets
5. Assets contain Components
6. Components have their own hierarchy (Type and Sub-Type)

Refer to the individual model documentation for detailed relationship information.
