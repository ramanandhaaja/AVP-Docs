---
title: "Web Application Overview"
date: 2021-12-08
draft: true
---

# Data Model

> The project is built in [Cross-Platform .NET App UI & Business Components (XAF)](https://docs.devexpress.com/eXpressAppFramework/112670/expressapp-framework) version 18.2.5. It is not the latest version, but most stable. 

## XPO
> It is highly recommended go through the [turtorial](https://docs.devexpress.com/eXpressAppFramework/113577/getting-started) if it is first-time hands over the project. Use database first pattern to implement further feature.[Here](https://docs.devexpress.com/eXpressAppFramework/113451/business-model-design-orm/business-model-design-with-xpo/generate-xpo-business-classes-for-existing-data-tables) is some extra reading.

# Solution Overview
> In this Application, replace XXX with ***FairValuePro***
	
>	## XXX.Module
>> BusinessObjects are Implemented in this projects like (Asset.cs, ComponentInput.cs)
>	## XXX.Module.Web
>> In charge of the UI customization and Query Handling, *most of the APIs* are handled here.
>	## XXX.Web
>> It is the main API project with Web.config

# UI Implementation

> The Actions(button in the UI) are using [controllers](https://docs.devexpress.com/eXpressAppFramework/112621/ui-construction/controllers-and-actions/controllers)
> Controllers receive the request and respose to it.
> There is one and only way to customize the layout and the table structure, ****Model.DesignedDiffs.xafml****

# Turtorial
> Read the documentation [Here](https://docs.devexpress.com/eXpressAppFramework/112582/ui-construction/application-model/model-editor)

# Import / Export

> ## Import

> The following directory links to the [Importing Issues](#-Importing-Issue) for xlsx import
  ```
    FairValuePro\FairValuePro.Module.Web\Controllers\ImportXLSX\
  ```  
> The following directory  for xlsx import
  ```
    FairValuePro\FairValuePro.Module.Web\Controllers\ImportXLSX\
  ```
> The Leasing Module is under 
``` 
FairValuePro\FairValuePro.Module.Web\Models\Import\ 
```
> ## Export

>> ### xlsx export
>> The following directory links to the [Exporting Issues](#-Exporting-Issue)
  ```
    \FairValuePro\FairValuePro.Module.Web\Controllers\ExportXLSX\
  ```
>> ### csv export
>> The following directory links to the [Exporting Issues](#-Exporting-Issue)
  ```
   FairValuePro\FairValuePro.Module.Web\Models\FileMakerProService\
  ```
# Actions 
> Maintain following classes to ensure the request gets handlled.
> ## Refresh Job
```
 FairValuePro\FairValuePro.Module.Web\Models\JobOperations\JobOperation.cs
```
> ## Archive Job
```
 FairValuePro\FairValuePro.Module.Web\Models\JobOperations\ArchiveOperator.cs
```
> ## Roll Over Job
```
 FairValuePro\FairValuePro.Module.Web\Models\JobOperations\RollOverHandler.cs
```
> ## Populate Movement Reconciliation Report
```
 FairValuePro\FairValuePro.Module.Web\Models\MovementReconciliationReport\MovementReconciliationOperation.cs
```
> ## Populate Portfolio Changes Report
```
 FairValuePro\FairValuePro.Module.Web\Models\PortfolioChangesReport\PortfolioChangesOperation.cs
```
# Business Logic Trouble Shooting

> ## Importing Issues
>> Under Project *"FairValuePro.Module"* at *"BusinessObjects\Helpers\FVPMultipleExcelFilesImporter\ImporterClasses"*
>> Debug These Classes to locate the issue if the log is not helping 
> ## Exporting Issues
>> For **XLSX Export**, under project *"FairValuePro.Module"* at *"BusinessObjects\Helpers\ExcelExporter\IndividualExporters\"*
>> For **CSV Export**, under project *"FairValuePro.Module.Web"* at *"Models\FileMakerProService\"*
>> Debug the coresponding classes for different export
>> ### Reports
>> | Class Name | Function Description |
>> |-------------|:-------------:|
>> |AssetClassReport|Asset Class Report|
>> |AssetLevelReport|Asset Level Report|
>> |ComponentLevelReport|Component Level Report|
>> |ComponentPartLevelReport|Component Level Part Level Report|
>> |ReplacementCostApportionmentReport|Replacement Cost Report|
>> |ReplacementCostDirectCostReport|Replacement Cost Report|
>> |MarketValueReport|Market Report|
>> |InsuranceValuationReport|Insurance Report|
>> |ReplacementCostDirectCostReport|Replacement Cost Report|

>> ### Assumptions and Hierarchy
>> | Class Name | Function Description |
>> |-------------|:-------------:|
>> |AssetHierarchy|Asset Hierarchy|
>> |ValuationProfileDetails|Valuation Profile Details|
>> |DefaultMatrixRow|Default Matrix Row|
>> |MatrixRowByUsefulLife|Matrix Row By Useful Life|
>> |AssumptionsApportionment|Assumptions Apportionment|
>> |AssumptionsGeneral|Asset Level Assumption|
>> |AssumptionsInsurance|Insurance Assumptions|
>> |ComponentLevelAssumptions|Component Level Assumptions|

>> ### Job Data
>> | Class Name | Function Description |
>> |-------------|:-------------:|
>> |AssetRegisterExporter|Asset|
>> |ComponentInputExporter|Component|
>> |MarketApproachValue|Market|
>> |ReplacementCostApportionment|Apportionment Cost Approach Replacement Cost|
>> |ReplacementCostDirectCost|Direct Cost Approach Replacement Cost|
>> |IncomeApproach|Income Approach Data|
>> |InsuranceValuation|Insurance Data|



