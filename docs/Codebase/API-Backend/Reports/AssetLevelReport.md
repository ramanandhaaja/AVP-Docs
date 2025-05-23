# Asset Level Report Documentation

## Quick Reference

| Item                | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| **File Path**       | `/Application/Reports/Queries/GetGeneralValuationReport/`                        |
| **Report Type**     | Excel (multi-sheet file in GeneralValuationReports)                              |
| **Primary Purpose** | Presents detailed, asset-level valuation information for reporting and audit use |

---

## Purpose

The **Asset Level Report** is a core deliverable within the Asset Valuer Pro reporting suite. It provides a comprehensive view of each asset's valuation data, financial metrics, attributes, and status. It's generated as one worksheet within a multi-tab Excel file.

---

## Key Details

| Attribute            | Description                                           |
| -------------------- | ----------------------------------------------------- |
| **Access Point**     | `ReportsController.GetGeneralValuationReports`        |
| **Generator Method** | `GetGeneralValuationReportsQueryHandler.Handle()`     |
| **Output Format**    | `.xlsx` Excel file (includes AVP logo and formatting) |
| **Delivery**         | HTTP file download response                           |

---

## Report Parameters

| Parameter    | Type    | Required   | Default | Description                            |
| ------------ | ------- | ---------- | ------- | -------------------------------------- |
| `JobId`      | Integer | ✅ Yes      | –       | The job ID used to pull valuation data |
| `AssetClass` | String  | ❌ Optional | null    | Filters output to specific asset class |

---

## Data Sources

| Source                                                                     | Description                         |
| -------------------------------------------------------------------------- | ----------------------------------- |
| `AssetValuations`                                                          | Core valuation data per asset       |
| `ComponentValuations`                                                      | Detailed component-level financials |
| `InsuranceValuation`, `MarketApproachValuation`, `IncomeApproachValuation` | Valuation-specific breakdowns       |
| `AssetReplacementCostValuations`, `ComponentReplacementCostValuations`     | Detailed cost modeling              |
| `Jobs`, `Asset`, `ValuationProfile`                                        | Contextual metadata                 |

---

## Report Content: Fields per Asset

| Section              | Examples                                                                               |
| -------------------- | -------------------------------------------------------------------------------------- |
| **Identification**   | `AssetId`, `EntityId`, `AssetName`                                                     |
| **Hierarchy**        | `AssetClass`, `AssetType`, `AssetSubType`                                              |
| **Facility**         | `Facility`, `SubFacility`                                                              |
| **Custodianship**    | `AssetCustodian`, `ValuationPolicy`                                                    |
| **Financial Values** | `GrossOrMV`, `AccumulatedDepreciation`, `CurrentValue`, `DepreciationExpense`          |
| **Previous Values**  | `PreviousGrossOrMV`, `PreviousCurrentValue`, `PreviousDepreciation`                    |
| **Lifecycle**        | `WeightedAverageUsefulLife`, `WeightedAverageRUL`                                      |
| **Location**         | `StreetAddress`, `Suburb`, `Town`, `PostCode`, `Latitude`, `Longitude`                 |
| **Classification**   | `FinancialAssetClass`, `FinancialSubClass`, `FVMClass`, `FVMTechnique`, `FVMHierarchy` |
| **Flags**            | `HeldForSale`, `HighestAndBestUse`, `IsInvestment`, etc.                               |

---

## Calculations Included

* **Accumulated Depreciation** = `Gross - CurrentValue`
* **Value Variance** = `Current - Previous`
* **Weighted UL/RUL** = Weighted averages across component assumptions

---

## Excel Worksheets Included

| Worksheet Name             | Description                   | Source                             |
| -------------------------- | ----------------------------- | ---------------------------------- |
| Asset Class Report         | Summary by asset class        | AssetValuations (grouped)          |
| Asset Level Report         | Per-asset valuation details   | AssetValuations                    |
| Component Level Report     | Component breakdown           | ComponentValuations                |
| Cost Apportionment Report  | Asset replacement cost        | AssetReplacementCostValuations     |
| Cost Direct Cost Report    | Component replacement costs   | ComponentReplacementCostValuations |
| Insurance Valuation Report | Insurance-specific details    | InsuranceValuation                 |
| Market Approach Report     | Market comps and calculations | MarketApproachValuation            |
| Income Approach Report     | Cashflow-based valuation      | IncomeApproachValuation            |

---

## Business Rules & Filters

* Assets with `IsControlledForFinancialPurpose = false` → financial fields = `0`
* Report may exclude assets based on `ValuationPolicy` (e.g., "NotToBeValued")
* Insurance report includes only coverage types: `Full`, `Indemnity`

---

## Business Context

This report supports:

* **IFRS 13/AASB 13** fair value disclosures
* **IFRS 16/AASB 16** lease valuation and recognition
* Local government compliance reporting
* Internal and external audits
* Stakeholder briefings with comprehensive asset insights

---

## Usage Instructions

1. Navigate to **Reports** section in AVP
2. Select **General Valuation Report**
3. Input `JobId`
4. Optionally filter by `AssetClass`
5. Click **Generate** and download the Excel file

---

## Known Limitations

* Generating large reports can take time → use `AssetClass` filter for better performance
* Custom client logic may be needed for reporting variations

> Tip: Exporting by asset class can reduce generation time and improve usability.

---

## Related Documentation

* [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md)
* [Asset Model](Asset.md)
* [Field Data Collection Workflow](../Workflows/Field_Data_Collection_Workflow.md)
* [Valuation Process Overview](../Workflows/Valuation_Process_Workflow.md)
