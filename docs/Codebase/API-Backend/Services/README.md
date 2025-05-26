
# Asset Valuer Pro - Services Documentation

> **Important Note:**  
> This directory contains documentation about the business services used in Asset Valuer Pro. The actual source code is maintained in a separate repository and is not included in this documentation repository.

## Overview

This directory contains documentation for the business logic services that implement the core functionality of the Asset Valuer Pro system. These services handle complex operations such as valuation calculations, data import/export, and report generation.

## Available Service Documentation

- [ValuationCalculation](ValuationCalculation.md) – Implements various valuation methodologies
- [ReportingServices](ReportingServices.md) – Generates reports for financial and asset management purposes
- [ImportExport](ImportExport.md) – Handles data import and export operations
- [RefreshJobDataService](RefreshJobData_Corrected.md) – Updates calculated values for assets
- [RevalidateCommand](RevalidateCommand_Corrected.md) – Applies business rule validation to assets and components
- [ValuationServices](ValuationServices_Corrected.md) – Core service interface for applying valuation logic
- [JobOperation](JobOperation_Corrected.md) – Manages job lifecycle operations

For a complete list of services, see the [BusinessLogicServicesInventory](BusinessLogicServicesInventory.md).

## Service Organization

The services are organized by functional area:

### 1. Valuation Processing
- ValuationCalculation
- ValuationServices
- RefreshJobDataService
- RevalidateCommand

### 2. Data Management
- ImportExport
- ImportJobService
- JobOperation

### 3. Reporting
- ReportingServices
- ReportCalculationService

Refer to the individual service documentation files for implementation-specific details.
