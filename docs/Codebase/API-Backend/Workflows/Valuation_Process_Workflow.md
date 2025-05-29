# Valuation Process Workflow Documentation

## Overview

This document provides a comprehensive and structured overview of the **valuation workflow** in **Asset Valuer Pro (AVP)**. It bridges business process understanding and technical implementation to guide valuation teams, developers, QA, and support teams.

The workflow covers everything from client setup to asset registration, field data collection, valuation calculation, reporting, and archival.

---

## Business Value

The valuation workflow supports:

* Accurate and standardized asset valuation across clients
* Full audit trails and compliance with IFRS/IPSAS standards
* Automation of complex financial, insurance, and management logic
* Reports that drive capital planning, budgeting, and disclosures

---

## Valuation Workflow Phases

### Phase 1: Client and Job Setup

| Task                         | Tool                                     |
| ---------------------------- | ---------------------------------------- |
| Client creation              | `ClientController.cs` / `ClientEdit.tsx` |
| Job setup and effective date | `JobController.cs` / `JobEdit.tsx`       |
| User roles and access        | `UserController.cs`, `RoleController.cs` |

**Endpoints:**

* `POST /api/client`
* `POST /api/job`
* `GET /api/client/{id}/jobs`

---

### Phase 2: Valuation Framework Definition

| Task                                | Tool                                                        |
| ----------------------------------- | ----------------------------------------------------------- |
| Create asset/component hierarchy    | `AssetHierarchyController.cs` / `UpdateHierarchy.tsx`       |
| Define valuation profiles and rules | `ValuationProfileController.cs`, `ValuationProfileEdit.tsx` |
| Set assumptions (UL, cost)          | `AssumptionsController.cs`                                  |

**Entities:** `ValuationProfile`, `AssetAssumptions`, `ValuationProfileRule`

---

### Phase 3: Asset Registration

| Task                   | Tool                                                               |
| ---------------------- | ------------------------------------------------------------------ |
| Import via spreadsheet | `ImportController.cs` / `ImportAssetRegisterSpreadsheetCommand.cs` |
| Manual entry and edits | `AssetController.cs` / `AssetEdit.tsx`                             |

**Endpoints:**

* `POST /api/import/assets`
* `POST /api/asset`
* `GET /api/asset`

---

### Phase 4: Field Data Collection

| Task                                    | Tool                                          |
| --------------------------------------- | --------------------------------------------- |
| Data capture (condition, photos, notes) | iOS app (React Native)                        |
| Sync data to AVP                        | `ContentController.cs`, `ImportController.cs` |

**Data Format:** CSV for assets, ZIP for images, JSON for sync metadata

**Integration:** `AssetValuation.ConsumptionScore`, `Image`, `Note`, `Dimensions`

---

### Phase 5: Valuation Calculations

| Task                         | Tool                                                                    |
| ---------------------------- | ----------------------------------------------------------------------- |
| Run/recalculate valuations   | `ValuationService.cs`, `AssetController.cs`                             |
| Apply valuation method logic | `DirectCostValuationMethod.cs`, `ApportionmentValuationMethod.cs`, etc. |

**Valuation Methods:** Direct Cost, Apportionment, Market, Income

**Calculation Steps:**

1. Apply assumptions
2. Calculate replacement cost
3. Adjust for condition (RSP)
4. Apply depreciation
5. Derive insurance values

---

### Phase 6: Report Generation

| Task             | Tool                                                         |
| ---------------- | ------------------------------------------------------------ |
| Validate inputs  | `ReportCalculationService.cs`                                |
| Generate outputs | `ReportsController.cs`, `GetGeneralValuationReportsQuery.cs` |
| Output types     | Excel, Word, PDF                                             |

**Report Types:**

* Financial: General Valuation, Movements, Depreciation
* Insurance: Replacement, Indemnity
* Management: Cost to Satisfactory, Renewal Planning
* Documentation: Summary, Methodology

---

### Phase 7: Job Archiving

| Task                                     | Tool                                |
| ---------------------------------------- | ----------------------------------- |
| Archive job and freeze values            | `JobController.cs` / `ArchiveJob()` |
| Transition job statuses                  | Open → Draft → Finalised → Archived |
| Copy current values to "Previous" fields | `Asset.PreviousGross`, etc.         |

---

## Technical Highlights

### Valuation Logic

```csharp
switch (ValuationType) {
  case "Direct Cost": return CalculateDirectCostValue();
  case "Apportionment": return CalculateApportionmentValue();
  case "Market": return CalculateMarketValue();
  case "Income": return CalculateIncomeValue();
  default: return 0;
}
```

### Archival Routine

```csharp
asset.PreviousGross = asset.Gross;
asset.PreviousCurrentValue = asset.CurrentValue;
asset.PreviousDepreciationExpense = asset.DepreciationExpense;
```

---

## Considerations & Recommendations

| Area                 | Concern                               | Solution                              |
| -------------------- | ------------------------------------- | ------------------------------------- |
| Mobile versioning    | Legacy FileMaker (v2) vs iOS app (v3) | Align users to v3 apps + API sync     |
| Large datasets       | Calculation/report delays             | Use pagination and background workers |
| Hierarchy complexity | Long setup time                       | Provide templates and import tools    |

---

## Related Docs

* [Field Data Collection Workflow](Field_Data_Collection_Workflow)
* [Reporting Workflow](Reporting_Process_Workflow)
* [Valuation Fields Dictionary](../DataDictionary/Valuation_Fields_Dictionary)
* [Reports README](../Reports/)
