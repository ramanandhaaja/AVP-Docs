# ⚠️ Version Notes Guidelines

## Overview
This document provides standardized guidelines for documenting version discrepancies between legacy documentation and the current codebase. Use these guidelines when you find inconsistencies that suggest the system has evolved beyond what's described in legacy documentation.

## Standard Version Note Format

When documentation based on legacy sources may conflict with observations from the codebase, include a version note using this format:

```markdown
> **⚠️ Version Note:**  
> The legacy documentation describes [legacy implementation], while the repository contains evidence of [current implementation]. This suggests a version transition may be underway or completed. Both implementations are documented for completeness.
```

## When to Use Version Notes

Include version notes when:

1. Legacy documentation mentions a feature "in development" that appears to be implemented in the codebase
2. Legacy documentation describes a technology or approach that differs from what's observed in the code
3. Legacy documentation references "version 2" while code suggests "version 3" features exist

## How to Document Multiple Versions

When documenting functionality that exists in multiple versions:

1. Use clear headings with version labels:
   - "Legacy Implementation ([technology])"
   - "Current Implementation ([technology])"

2. Document both implementations when possible

3. Include a "Version Transition Notes" section explaining the differences and status

## Example Usage

### Mobile Data Collection
The legacy documentation mentions File Maker Pro while the codebase contains a React Native implementation:

```markdown
> **⚠️ Version Note:**  
> The legacy documentation describes a File Maker Pro app running on iPads for field data collection, while the repository contains React Native/Expo code for iOS. This suggests the planned version 3 transition mentioned in the legacy documentation may be underway or completed.

### Legacy Implementation (File Maker Pro)
[Documentation based on legacy documentation]

### Current Implementation (iOS Native App)
[Documentation based on codebase observations]
```

## Integration with Documentation Enhancement Plan

As part of our Documentation Enhancement Plan, we'll:

1. Review all technical documentation for version discrepancies
2. Apply standard version notes where needed
3. Document both legacy and current implementations when possible
4. Suggest areas where direct developer input would be valuable for clarification

This approach acknowledges the evolutionary nature of software systems while providing the most comprehensive documentation possible based on available information.
