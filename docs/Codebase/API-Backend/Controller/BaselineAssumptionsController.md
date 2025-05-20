
# Baseline Assumptions

## File Info
- **Location**: `/API/Controllers/BaselineAssumptionsController.cs`
- **Function**: Handles *baseline assumptions* for the EasySAM (Easy Strategic Asset Management) system, including data retrieval and file-based import/export for strategic modeling.

---

## Quick Summary
### What This Controller Does
The `BaselineAssumptionsController` enables users to:
- **Retrieve** a list of asset classes with baseline assumptions
- **Export** current baseline assumption data for external use
- **Import** updated assumption parameters from files

### Used In:
- EasySAM strategic asset planning
- Data configuration and setup
- Integration with external asset systems
- Strategy comparison tools

---

## Dependencies & Technical Context
- **Namespace**: `AVP.API.Controllers`
- **Architecture**: CQRS via **MediatR**
- **Authentication**: Required for all actions
- **Model Used**: `AssetClassDto`

---

## API Endpoints

### 1. GET `/GetList`
**Purpose**: Returns available asset classes for which baseline assumptions can be configured.

#### Input
_None required_

#### Output (Sample)
```json
[
  {
    "id": 1,
    "name": "Buildings",
    "description": "Building assets",
    "hasBaselineAssumptions": true
  },
  {
    "id": 2,
    "name": "Infrastructure",
    "description": "Infrastructure assets",
    "hasBaselineAssumptions": true
  },
  {
    "id": 3,
    "name": "Plant & Equipment",
    "description": "Plant and equipment assets",
    "hasBaselineAssumptions": false
  }
]
```

---

### 2. POST `/Export`
**Purpose**: Exports baseline assumptions as a downloadable file.

#### Input
| Parameter | Type                        | Required | Description                          |
|----------|-----------------------------|----------|--------------------------------------|
| query    | `ExportBaselineAssumptionsQuery` | ✅ Yes  | Must include `AssetClassId` and export options |

#### Output
Binary file (typically Excel or CSV)

Export includes:
- Condition thresholds
- Standard maintenance costs
- Deterioration models
- Performance expectations
- Discount/inflation rates

---

### 3. POST `/Import`
**Purpose**: Imports a file containing updated baseline assumptions.

#### Input
| Parameter | Type                             | Required | Description                  |
|----------|----------------------------------|----------|------------------------------|
| command  | `ImportBaselineAssumptionsCommand` | ✅ Yes | File and import configuration |

#### Output
```json
{
  "message": "Baseline assumptions imported successfully"
}
```

---

## Types of Baseline Assumptions

### 1. Deterioration Parameters
- Condition decay models (age/use/environment)
- Environmental impact factors
- Usage-based deterioration trends

### 2. Intervention Parameters
- Condition triggers for maintenance
- Typical activity costs and frequencies
- Treatment effectiveness

### 3. Financial Parameters
- Discount rates (Net Present Value calculations)
- Inflation forecasts
- Unit rate escalations and budget ceilings

---

## Modeling Applications

### Lifecycle Prediction
- Forecasts asset condition over time
- Projects useful life and maintenance timing
- Supports scenario-based performance modeling

### Cost Forecasting
- Estimates lifecycle and renewal costs
- Determines capital funding needs
- Compares multiple investment strategies

### Risk Assessment
- Calculates likelihood and impact of failures
- Assesses risk-adjusted intervention plans
- Prioritizes action based on exposure levels

---

## Business Value

### Evidence-Based Strategy
- Uses real-world data for accurate assumptions
- Creates a consistent foundation for comparisons
- Ensures reliability in decision-making

### Scenario Simulation
- Modifies inputs to test "what-if" strategies
- Analyzes impact of changing financial/policy parameters
- Aids optimization of long-term plans

---

## Developer Notes
There is a commented-out `/Refresh` endpoint. This may have previously allowed updates from "current practices" data. It could be reinstated in the future to support syncing assumptions with operational data.

