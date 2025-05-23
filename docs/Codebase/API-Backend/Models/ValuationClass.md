# ValuationClass Model Documentation

#  ValuationClass Documentation

## QUICK DOCUMENTATION
- **File Path**: /Domain/Entities/ValuationClass.cs
- **Database Table**: ValuationClasses
- **Primary Purpose**: Defines valuation classification for fair value measurement disclosures
- **Key Fields**: 
  - Id (int) - Primary key
  - Name (string) - Name of the valuation class
  - ValuationTechnique (string) - Technique used for valuation
  - ValuationLevel (byte) - Hierarchy level for fair value measurement
- **Related Models**: 
  - AssetAssumptions (one-to-many) - Assumptions with this classification
  - Asset (one-to-many) - Assets classified this way

## DETAILED DOCUMENTATION

## Overview
The ValuationClass entity represents a classification used for fair value measurement disclosures in financial reporting. It defines both the valuation technique used and the hierarchy level of inputs used in the valuation (typically Level 1, 2, or 3 as defined in accounting standards). This classification is critical for financial statement disclosures related to fair value measurements.

## Model Details
- **Namespace**: AVP.Domain.Entities
- **Inheritance**: IClientEntity

## Regulatory Framework
ValuationClass directly supports regulatory requirements for fair value hierarchy disclosures:

1. **Fair Value Hierarchy Levels**
   - **Level 1**: Quoted prices in active markets for identical assets
   - **Level 2**: Observable inputs other than Level 1 prices
   - **Level 3**: Unobservable inputs (most common for specialized assets)

2. **Valuation Techniques**
   - **Market Approach**: Uses prices and other relevant information from market transactions
   - **Income Approach**: Converts future amounts to a single current discounted amount
   - **Cost Approach**: Reflects the amount currently required to replace the service capacity

## Implementation Structure
The ValuationClass entity combines two key fair value disclosure requirements:

1. **ValuationLevel**
   - Stored as a byte (1, 2, or 3)
   - Corresponds directly to IFRS/AASB 13 hierarchy levels
   - Used in financial statement footnote disclosures

2. **ValuationTechnique**
   - Stored as a string description
   - Typically one of "Market Approach", "Income Approach", or "Cost Approach"
   - May include additional detail on specific methods used

## Business Rules Applied
- ValuationClass defines both technique and hierarchy level for fair value measurement disclosures
- Assets are associated with a specific ValuationClass for financial reporting purposes
- ValuationLevel typically corresponds to Level 1, 2, or 3 inputs as defined in accounting standards
- The ValuationTechnique field describes the approach used (market, income, or cost)
- Each ValuationClass is client-specific, allowing different clients to use different classification schemes

## Financial Reporting Context
 **Note:** ValuationClass is primarily used to support these financial reporting requirements:

1. **Disclosure Requirements**
   - IFRS 13/AASB 13 Fair Value Measurement disclosures
   - Financial statement footnotes on valuation methods
   - Audit evidence for fair value hierarchy classifications

2. **Classification Patterns**
   - Specialized assets typically use Cost Approach (Level 3)
   - Income-producing assets often use Income Approach (Level 2 or 3)
   - Residential/commercial properties may use Market Approach (Level 2)

3. **Quantitative Requirements**
   - Financial reports must disclose the value of assets at each hierarchy level
   - Transfers between levels must be tracked and disclosed
   - Additional information is required for Level 3 valuations

## Business Context
The ValuationClass entity directly supports audit and disclosure requirements:

1. **Audit Support**
   - Provides clear documentation of fair value classifications
   - Supports consistent application across asset portfolio
   - Creates audit trail for valuation decisions

2. **Reporting Automation**
   - Enables automated fair value hierarchy reporting
   - Supports generation of financial statement disclosures
   - Facilitates year-to-year comparison of classifications