
# Version Notes Guidelines

## Overview

This document provides standardized guidelines for documenting discrepancies between legacy documentation and the current codebase. Use these guidelines when the system's implementation differs from what is described in older documentation.

## Standard Version Note Format

When documentation may conflict with codebase observations, include a version note using this format:

```
> Version Note:  
> The legacy documentation describes [legacy implementation], while the repository contains evidence of [current implementation]. This suggests a version transition may be underway or completed. Both implementations are documented for completeness.
```

## When to Use Version Notes

Use version notes when:

1. Legacy documentation references features "in development" that are present in code
2. Legacy docs describe an outdated technology or architecture
3. There are indications of a version transition (e.g., from version 2 to version 3)

## Documenting Multiple Versions

When both legacy and current implementations exist:

- Use clear section headings, such as:
  - "Legacy Implementation ([technology])"
  - "Current Implementation ([technology])"
- Document both when possible
- Add a "Version Transition Notes" section explaining context and differences

## Example Usage

### Mobile Data Collection

The legacy documentation references a File Maker Pro app, but the current repository includes a React Native mobile implementation.

```
> Version Note:  
> The legacy documentation describes a File Maker Pro app running on iPads for field data collection, while the repository contains React Native/Expo code for iOS. This suggests the planned version 3 transition may be underway or completed.

### Legacy Implementation (File Maker Pro)
Details based on legacy architecture.

### Current Implementation (React Native)
Details based on the actual codebase and deployments.
```

## Integration with Documentation Workflow

As part of ongoing documentation review efforts:

1. Identify discrepancies between current implementation and legacy records
2. Annotate affected sections with version notes
3. Capture both implementations when practical
4. Identify areas needing further clarification from developers

This ensures documentation evolves with the system while maintaining a historical record for reference.
