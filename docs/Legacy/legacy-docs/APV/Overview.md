---
title: "About Asset Valuer Pro"
date: 2021-12-08T00:51:48+10:00
draft: true
---

[Introduction](#introduction)

[Development Background](#development-background)

[What does it do](#what-does-it-do)

[Relationship with other systems](#relationship-with-other-systems)

[**VALUATION TYPES AND KEY INPUTS** 5](#_Toc89858097)

[**Financial Reporting** 5](#_Toc89858098)

[**Insurance** 5](#_Toc89858099)

[**ASSET VALUER PRO VALUATION PROCESS** 6](#_Toc89858100)

[**Set up a File** 7](#_Toc89858101)

[**Collect Key Data** 8](#_Toc89858102)

[**Importing/Exporting Data** 9](#_Toc89858103)

[**Run Calculations** 9](#_Toc89858104)

[**Finalise Valuation and Produce Reports** 9](#_Toc89858105)

[**Undertake Post-Valuation Processes** 10](#_Toc89858106)

[HIGH LEVEL SYSTEM OVERVIEW](#high-level-system-overview)

# Introduction

This brief guide has been developed to provide a high-level overview and introduction to Asset Valuer Pro. Detailed information about the product is included in the specific guidance material found within the HELP section.

# Development Background

In the early 2010&#39;s APV went through a growth phase resulting in the need to employ more professional staff. However, this resulted in significant challenges with significant time required to get the new staff to a productive level.

This was because we could not get new staff that already had the required level of knowledge and experience in -

- Valuation
- Knowledge of accounting standards and associated valuation requirements
- Financial reporting valuation methodology
- Excel
- Local government assets

The led to a realisation that we needed to create our own database that would allow us to take any valuer or engineer off the street and make them productive very quickly.

This in turn led to an idea to develop the database on the cloud and build it so that any entity could use it to deliver their own valuations. This would allow us to leverage our intellectual property and make the business more profitable.

# What does it do

Despite the name and its original drivers, Asset Valuer Pro does much more than simply delivering valuations.

Based on basic information such as asset type, dimensions and condition in association with a range of assumptions it can deliver -

- Financial reporting valuation (under IFRS International Financial Reporting Standards and IPSAS International Public Sector Accounting Standards)
- Insurance Valuations
- A range of asset management outputs including -
  - Whole of lifecycle optimisation modelling tool (EasySAM)
  - Projected renewals report
  - Cost to bring to satisfactory report
  - Analysis of the portfolio by condition or value
- Financial Statement disclosures including -
  - Movements reconciliation figures
  - Valuation measurement disclosures
  - Other disclosure note information

While not currently in version 2 of the software it will also be able to deliver -

- 10 Year maintenance plan (currently relevant data is captured using the File Maker Pro app)
- Statistical analysis by segment (eg average unit rates, useful life, condition, etc)

# Relationship with other systems

It is important to note that the valuation process must be undertaken external to any live data held in an entity&#39;s ERP or finance system.

A valuation is undertaken at a point in time and the process (including final audit review) can sometimes take more than six months. The data held in the valuation must be quarantined from live data to ensure agreed valuation results are not impacted by changes to the live data.

<!-- ![](RackMultipart20211209-4-19gh7no_html_c0a7f9cf82d81b04.gif) -->

# **VALUATION TYPES AND KEY INPUTS

## **Financial Reporting**

Under the accounting standards the valuations may be delivered by one of or a combination of -

- Market approach (used when there is an open and active market - eg residential properties/cars)
- Income approach (used when value is driven by income earning potential. Eg commercial highrise)
- Cost approach (where there is no market and assets are used to deliver community benefits e.g roads)

Asset Valuer Pro provides workflows to enable delivery of all three types of valuations.

## **Insurance**

To protect against accidental loss entities will choose to insure some assets. Usually they insure for full replacement value but sometimes they only insure for indemnity value.

Asset Valuer Pro uses the replacement cost of the assets to determine the full insurance value and the current value to determine the indemnity value.

# **ASSET VALUER PRO VALUATION PROCESS**

The diagram below sets out the process used to deliver the valuations and other outputs.

<!-- ![](RackMultipart20211209-4-19gh7no_html_222274246767f252.jpg) -->

In short, the steps are -

## **Set up a File**

- Create a &#39;client&#39; and allocate a &#39;licence type&#39; (Multi, single or 3rd party)

- Create &#39;Users&#39; and allocate &#39;Roles&#39;

- Create the &#39;Valuation Framework&#39; (this includes an Asset Hierarchy and relevant assumptions)

The asset hierarchy is an essential element. It requires all assets to be described based on -

  - Asset Class
  - Asset Type
  - Asset Sub-Type

Based on that combination we specify what the &#39;components&#39; will be and for each &#39;component&#39; to specify the -

  - Component Type
  - Component Sub-Type

The types of assumptions include -

  - Entity level assumptions (valuation profiles)
  - Asset Class level assumptions (valuation profile rules)
  - Asset Level assumptions (asset level unit rates, indices, apportionment)
  - Component level assumptions (component level unit rates, short-life and long-life splits, useful life, residual value)

- Create a valuation &#39;Job&#39; (requires allocating &#39;asset classes&#39; to the &#39;job&#39;). This includes specifying the &#39;effective date of valuation&#39; which is usually the first or last day of the financial year

- Create and register Assets (usually done by importing existing asset register via Excel)

## **Collect Key Data**

Once the initial Asset Register is created, we then need to populate a range of key which then in combination with the assumptions enables the calculation of the values. The specific data required depends on the type of valuation approach being adopted.

The table below sets out -

- the mandatory data such as asset hierarchy and scores
- specific key inputs for each valuation approach that would be sourced from client data or collected by the valuer and
- key assumptions populated in the assumptions tables but can also be over-written if required.

<!-- ![](RackMultipart20211209-4-19gh7no_html_cc1e83969960ddc3.gif) -->

Typically for buildings and other structures and information will be gathered in the field using the mobile data capture app. Currently this is a File Maker Pro app running on an iPad. The intention is to move to a new app currently being developed as part of version 3.

All data held within Asset Valuer Pro is exported to CSV files and zip files (images) and imported into File Maker Pro running off the valuers PC. This is then synchronised to the iPad.

On return to the office (or web access) the data is then synchronised back to the PC, exported and then imported back into Asset Valuer Pro.

In contrast, for infrastructure, the data is normally provided by the client in Excel files. The valuers will then clean up and sort the Excel files and import the data into Asset Valuer Pro. They then adopt a sampling approach in the field to validate the data. Ideally the data provided is consistent with what the valuer is experiencing in the field and as a result provides sufficient assurance that the data is complete and accurate.

## **Importing/Exporting Data**

All textual data can be imported and exported via Excel (version 2) or CSV file (version 3).

In version 2 the process is controlled via a log file which provides confirmation of whether or not the import was successful and if it failed, the reasons and row numbers of the data that failed.

A similar tool is yet to be designed for version 3.

A separate process using zip files is used to import/export photos and images.

## **Run Calculations**

Once all data is populated the valuer refreshes all the calculations. This process -

- reads the raw data (such as asset hierarchy))
- accesses relevant information (based on the hierarchy) from the assumptions table and populates relevant fields (such as valuation profiles, unit rates, useful life, residual value, depreciation profile, obsolescence profile)
- uses the populated data to run the various algorithms and produce valuations

## **Finalise Valuation and Produce Reports**

Once the refresh of calculations is completed the valuer is able to -

- run validations to ensure there are no obvious mistakes or missing data
- Produce the various reports covering -
  - Valuation spreadsheets (financial reporting and insurance)
  - Valuation methodology and other textual based reports
  - Depreciation analysis
  - Financial reporting disclosures
  - Analysis of scores and value
  - Renewal and cost to bring to satisfactory projections
  - Job management and progress
  - EasySAM strategic asset management planning

The various reports should be saved in the &#39;Reports File Container&#39; so that they can accessed at any time without having to re-run them.

## **Undertake Post-Valuation Processes**

The &#39;job status&#39; should be changed from &#39;open&#39; to either &#39;draft&#39; (if expecting feedback and possible changes from the client) or &#39;finalised&#39; (when client has accepted results). Changes can only be made in an &#39;open&#39; job.

Once the financial statements have been signed off by audit (or when a new job is required) the &#39;job status&#39; is changed to &#39;archived&#39;. This process access the final figures and raw data and records them as the &#39;previous years&#39; figures in the data base. This is necessary to allow generation of movements reports, etc at the completion of the next years valuation.

# HIGH LEVEL SYSTEM OVERVIEW

The following diagram provides an overview of the key elements of Asset Valuer Pro and how data is obtained and used to deliver the valuations. It shows -

- An initial asset register and associated attributes are sourced from the client and imported into Asset Valuer Pro via Excel
- The user than analyses the data and creates an asset hierarchy (Asset Class, Asset Type and sub-type, components, component type and sub-type) and a range of assumptions. This is called the valuation framework
- A job is then created within Asset Valuer Pro where the valuer specifies which asset classes are to be valued and the effective date of valuation.
- If additional data is required to be collected by physical inspection the Asset Register and Valuation Framework data is exported to a mobile data capture app which is then used in the field to capture missing data. Once inspections are completed the asset register is updated with the new data.
- Once all data is captured the calculations are run by the system and the asset register is updated with new valuation results.
- Reports are then run with the client able to update their own systems via Excel outputs.
- Once audit has signed off on the valuations the job can be archived.
