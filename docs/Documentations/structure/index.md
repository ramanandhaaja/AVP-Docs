---
title: Overview
sidebar_label: Overview
---

# Code Structure Overview

This document provides an overview of the main directories and files in the AVP project, along with links to detailed documentation for each major component.

## Component Structure

### Repository Structure Overview

This page provides a detailed overview of the Asset Valuer Pro (AVP) repository structure, cross-referenced with the actual source code layout.

## Main Components

AVP is organized into three primary components:

- [Web Application](./web.md): Browser-based interface for asset management and reporting, located at `/assetvaluerpro-avp/API/Web/`.
- [API Backend](./api-backend.md): Core business logic, APIs, and data processing services, located at `/assetvaluerpro-avp/`.
- [Mobile Application](./mobile.md): Field data capture and asset management on mobile devices, located at `/assetvaluerpro-ioscapture/`.

## Project Root Directory

```
/assetvaluerpro-avp/           # API Backend & Web Application
/assetvaluerpro-avp/API/Web/   # Web Application (React + Vite)
/assetvaluerpro-ioscapture/    # Mobile Application (React Native)
```

Refer to each component's dedicated documentation for further details:
- [Web Application Structure](./web.md)
- [API Backend Structure](./api-backend.md)
- [Mobile Application Structure](./mobile.md)
