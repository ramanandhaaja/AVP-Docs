# Asset Valuer Pro – Data Dictionary Documentation

> **Note for Users:**
> This directory serves as documentation only. The source code that powers the Asset Valuer Pro system is maintained in a separate repository and is **not** included here.

---

## What This Is

This repository contains **data dictionaries** for the Asset Valuer Pro platform. These documents provide clear, structured explanations of the fields, data types, relationships, and business context associated with key entities in the system.

Whether you're a developer integrating with Asset Valuer Pro, a business analyst preparing reports, or a finance team member ensuring data consistency — this resource will help you understand exactly what each field means and how it’s used.

---

## Included Dictionaries

| Dictionary                                                    | Description                                                                   |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Asset Fields Dictionary](Asset_Fields_Dictionary.md)         | Describes fields related to physical and financial characteristics of assets. |
| [Valuation Fields Dictionary](Valuation_Fields_Dictionary.md) | Explains fields used during various valuation methods and outputs.            |

---

## Data Dictionary Format

Each dictionary is designed to be both **technical** and **business-friendly**, using a consistent structure:

| Section              | Details                                                                         |
| -------------------- | ------------------------------------------------------------------------------- |
| **Field Name**       | The technical (database or API) name of the field.                              |
| **Data Type**        | The data type (e.g., string, decimal, integer, boolean).                        |
| **Description**      | A clear, plain-language explanation of what the field represents.               |
| **Business Context** | The role this field plays in business processes, reporting, or decision-making. |
| **Validation Rules** | Logic and constraints applied to ensure valid data.                             |
| **Example Values**   | Sample data for quick understanding of typical inputs.                          |

---

## 🛠️ How to Use This Repository

You can use the data dictionaries for:

* **Understanding business meaning** behind each field
* **Mapping fields** for integrations and data transformations
* **Implementing validations** in external systems
* **Designing reports and dashboards** based on field definitions
* **Troubleshooting data issues** with clearer context

> For specific field definitions, navigate to the respective dictionary file listed above.

---

## Related Resources

These documents complement other technical documentation found in related repositories:

* **Asset Model Schema** – Detailed data structure definition
* **Valuation Process Workflows** – Overview of how valuation logic flows through the system
* **API Documentation** – Definitions of endpoints and payloads used to access or manage assets

---

## Final Note

We aim to keep these documents as clear, current, and comprehensive as possible. Please reach out to the documentation team if you have suggestions or notice areas needing improvement.
