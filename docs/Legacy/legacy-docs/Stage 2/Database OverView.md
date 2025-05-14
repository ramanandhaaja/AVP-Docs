---
title: "Database Overview"
date: 2021-12-07
draft: true
---
# DB(me5cd2w04s.database.windows.net)
> This documentation won't cover all the components used in the Schema, only the essential components will be introduced. Some of the features of SQL server(like customized table parameter, function) will be ignored.

## Tables
> *obsolete* means the table no longer used and has no legacy data

	
| Table Name  | Description |
|-------------|:-------------:|
|Asset|Store Valuation Related Data|
|AssetAttribute|Store Valuation Related Data|
|AssetAttributeName|Store Valuation Related Data|
|AssetData|Store Valuation Related Data|
|AssetHierarchy|Store Valuation Related Data|
|AssetHolisticItem|Store Valuation Related Data|
|AssetLevelReportView|obsolete|
|AssetRegister|Store Valuation Related Data|
|AssetSubType|Store Valuation Related Data|
|AssetType|Store Valuation Related Data|
|AssumptionReportTable|Store Valuation Related Data|
|BuildingDetail|Store Valuation Related Data|
|CapitalisationOfIncome|Store Valuation Related Data|
|CharacteristicsItem|Store Valuation Related Data|
|CharacteristicsItemBase|Store Valuation Related Data|
|CharacteristicsName|Store Valuation Related Data|
|ClientDocument|Store Valuation Related Data|
|ClientDocuments|Store Valuation Related Data|
|ComponentAssetHierarchy|Store Valuation Related Data|
|ComponentData|Store Valuation Related Data|
|ComponentInput|Store Valuation Related Data|
|ComponentLevelAssumption|Store Valuation Related Data|
|ComponentSubType|Store Valuation Related Data|
|ComponentType|Store Valuation Related Data|
|ComponentValidationReport|Store Valuation Related Data|
|ConditionTranslatorFile|Store Valuation Related Data|
|ConditionTranslatorRow|Store Valuation Related Data|
|ConsumptionProfile|Store Valuation Related Data|
|ConsumptionProfileRow|Store Valuation Related Data|
|DefaultMatrixRow|Store Valuation Related Data|
|DepositBox|Store Valuation Related Data|
|DepositBoxFilesUpload|Store Valuation Related Data|
|DirectComparison|Store Valuation Related Data|
|DirectComparisonSale|Store Valuation Related Data|
|DocumentsUpload|Store Valuation Related Data|
|Expense|Store Valuation Related Data|
|FairValueMeasurementClass|Store Valuation Related Data|
|FairValueMeasurementfields|Store Valuation Related Data|
|FairValueProClient|Store Valuation Related Data|
|FairValueProGroup|Store Valuation Related Data|
|FairValueProRole|Store Valuation Related Data|
|FairValueProUser|Store Valuation Related Data|
|FileAttachment|Store Valuation Related Data|
|FileData|Store Valuation Related Data|
|FileSystemLinkObject|XAF Module Used|
|FileSystemStoreObject|XAF Module Used|
|FinancialAssetClass|Store Valuation Related Data|
|FinancialAssetType|Store Valuation Related Data|
|FinancialReportingClassification|Store Valuation Related Data|
|GenenralEmailNotification|Store Valuation Related Data|
|General|Store Valuation Related Data|
|GeneralAssumptions|Store Valuation Related Data|
|Geojson|obsolete|
|GrossIncome|Store Valuation Related Data|
|HighLevelAssumption|Store Valuation Related Data|
|HolisticItem|Store Valuation Related Data|
|ImportFilesContainer|Store Valuation Related Data|
|ImportRequest|Store Valuation Related Data|
|IncomeApproachData|Store Valuation Related Data|
|InformationLog|Store Valuation Related Data|
|InstructionFile|Store Valuation Related Data|
|Insurance|Store Valuation Related Data|
|InsuranceValuation|Store Valuation Related Data|
|Job|Store Valuation Related Data|
|JobData|Store Valuation Related Data|
|JobJobs_FairValueProUserUsers|Store Valuation Related Data|
|JobSetting|Store Valuation Related Data|
|Lease|Store Valuation Related Data|
|LeaseFileData|Store Valuation Related Data|
|LeaseNotifications|Store Valuation Related Data|
|Log|Store Valuation Related Data|
|MarketValue|Store Valuation Related Data|
|MatrixRowByUsefulLife|Store Valuation Related Data|
|MediaDataObject|XAF Module Used|
|ModelDifference|XAF Module Used|
|ModelDifferenceAspect|XAF Module Used|
|ModuleInfo|XAF Module Used|
|MovementReconciliation|Store Valuation Related Data|
|MovementReconciliation_Value_Change|Store Valuation Related Data|
|MultipleFilesExporter|Store Valuation Related Data|
|MyAddress|obsolete|
|Notifications|Store Valuation Related Data|
|PersistedGrants|XAF Module Used|
|Phase2ComponentValuation| obsolete with legacy data |
|PhotoCheckingTable|obsolete|
|PreviousValuationFigure|XAF Module Used|
|QuestionAndAnswer|XAF Module Used|
|ReassignmentRecordRelationship|XAF Module Used|
|ReplacementCost|XAF Module Used|
|ReplacementCostApportionment|XAF Module Used|
|ReplacementCostData|XAF Module Used|
|ReplacementCostDetailComponent|XAF Module Used|
|ReplacementCostDirectCost|XAF Module Used|
|ReportDataV2|XAF Module Used|
|ReportFileContainer|XAF Module Used|
|ReportFilesContainer|XAF Module Used|
|ReportFilesUpload|XAF Module Used|
|SecuritySystemMemberPermissionsObject|XAF Module Used|
|SecuritySystemObjectPermissionsObject|XAF Module Used|
|SecuritySystemRole|XAF Module Used|
|SecuritySystemRoleParentRoles_SecuritySystemRoleChildRoles|XAF Module Used|
|SecuritySystemTypePermissionsObject|XAF Module Used|
|SecuritySystemUser|XAF Module Used|
|SecuritySystemUserUsers_SecuritySystemRoleRoles|XAF Module Used|
|SummaryValuationBase|obsolete with legacy data|
|Test|obsolete|
|UploadDocument|XAF Module Used|
|VacantLand|XAF Module Used|
|VacantLandSale|XAF Module Used|
|XPObjectType|XAF Module Used|
	
## Views
Views are created for the export query from web application also to make the retrieve easier when the developer or db admin want to directly query from database.
- Framework
	| Table Name  | Description |
	|-------------|:-------------:|
	| Asset_Level_Assumption_Appotionment_View|
	| Asset_Level_Assumption_View|
	| AssetAttributesSetupView|
	| AssetHolisticSetupView|
	| Assumptions_View_Default_Matrix_Row|
	| Assumptions_View_High_Level_Assumptions|
	| Assumptions_View_Matrix_Row_By_UsefulLife|
	| Assumptions_View_Valuation_Profile|
	| Assumptions_View_Valuation_Profiles|
	| Assumptions_View_Valuation_Profiles_With_ScoreRange|
	| ComponentCharacteristicsSetupView|
	| ComponentLevelAssumptionView|
	| HierarchyView_AssetLevel|
	| HierarchyView_ComponentLevel|
	| HierarchyView_FairValueMeasurementLevel|
	| HierarchyView_FinancialAssetLevel|
- JobData/ValuationData
	| Table Name  | Description |
	|-------------|:-------------:|
	| Asset_Holistic_Item|
	| Asset_Level_Attributes|
	| Asset_Other_Documents_View|
	| Asset_Photo_View|
	| AssetComponentValuationView|
	| AssetLevelReplacementCostView|
	| AssetOtherDocumentsView|
	| AssetPhotoView|
	| AssetRegisterView|
	| Client_Job_View|
	| Client_View|
	| Component_Characteristics|
	| Component_Input_Preset_View|
	| Component_Input_View_For_Import|
	| DirectCost_SpecialisedUnitRateView|
	| Apportionment_SpecialisedReportUnitRateView|
	| GLCodeSummaryReport|
	| IncomeApproachDetailView|
	| Insurance_Valuation_Report_View|
	| Job_View|
	| JobSettingView|
	| MarketApproachDetailView|
	| Report_AssetClass_Level_Valuation|
	| Report_Component_Level_Valuation|
	| Report_Insurance_Valuation|
	| Summary_View_Photos|
	| SummaryValuationView|
	| Tailored_Data_View_Component_Charecteristics|
	| ValuationApproachView|
	| ValuationReport_Component|
- For Stage Three
	| Table Name  | Description |
	|-------------|:-------------:|
	| StageThree_Apportionment|
	| StageThree_AssetAssumptions|
	| StageThree_AssetHirarchy|
	| StageThree_AssetRegister|
	| StageThree_AssetRegister_Archive|
	| StageThree_ComponentAssumptions|
	| StageThree_ComponentInput|
	| StageThree_ComponentInput_Archive|
	| StageThree_FinancialHierarchy|
	| StageThree_InsuranceAssumptions|
	| StageThree_ReplacementCostApportionment|
	| StageThree_ReplacementCostApportionment_Archive|
	| StageThree_ReplacementCostDirectCost|
	| StageThree_ReplacementCostDirectCost_Archive|
	| StageThree_ValuationClasses|
	| StageThree_ValuationProfileRules|
	| StageThree_ValuationProfiles|
	| StageThree_ValuationProfileScores|

## Stored-procedures

There are many legacy SPs created before, some of them are transformed as SQL query in the Web application. The *followings* are the one need to be maintained and related to the web application.
> DO NOT DELETE ANY Stored-procedure WITHOUT CHECKING BOTH [Objects that depend on it] and [Objects on which it depends] list
- Import	
	- For Excel File / Normal Import
		|  Name |  |
		|-------|-------|
		|Import_AssetHierarchy|
		|Import_ValuationProfiles|
		|Import_Asset_Level_Assumptions_Apportionment|
		|Import_Asset_Level_Assumptions_General|
		|Import_Asset_Level_Assumptions_Insurance|
		|Import_Default_Matrix_Row|
		|Import_Matrix_Row_By_Useful_Life|
		|Import_Asset |
		|Import_Component |
		|Import_MarketApproach |
		|Import_IncomeApproach |
		|Import_ReplacementCost_Apportionment |
		|Import_ReplacementCost_DirectCost |
		|Import_InsuranceValuation |	
	- For Csv Files / FMP Import
		|  Name |  |
		|-------|-------|
		|Import_Asset_Level_Attributes|
		|Import_AssetRecord|
		|Import_Component_Characteristics|
		|Import_ComponentRecord|
		|Import_IncomeApproach|
		|Import_InsuranceValuation|
		|Import_MarketApproach|
		|Import_ReplacementCost_Apportionment|
		|Import_ReplacementCost_DirectCost|
	- For MovementReconciliation Report Input
		|  Name |  |
		|-------|-------|
		|Import_MovementReconciliation_CAPEX|
		|Import_MovementReconciliation_Current|
		|Import_MovementReconciliation_Previous|
		|Import_MovementReconciliation_Reassignment|
- Start Valuations
	|  Name |  |
	|-------|-------|
	|Update_ReplacementCost_Apportionment_UnitRate_From_Assumption_By_AssetRegisterOids|
	|Update_Index_By_AssetRegisterOids|
	|Valuations_Approach_Apportionment|
	|Valuations_Approach_Direct_Cost|
	|Valuations_Approach_Market|
	|Valuations_Approach_Income|
	|Valuations_Approach_Common|
	|Update_Insurance_Valuation_By_AssetRegisterOids|
- Archive
	|  Name |  |
	|-------|-------|
	|Archive_1_Job_By_JobName_JobNumber_Client|
	|Archive_2_Asset_by_JobName_JobNumber_Client|
	|Archive_3_Component_by_JobName_JobNumber_Client|
	|Archive_4_ReplacementCost_by_JobName_JobNumber_Client|
- Roll over
	> These queries have been put into the *Web Application* project
- Delete
	|  Name |  |
	|-------|-------|
	|Delete_Assets_By_ArOids_No_Transmision|
- Reporting
	|  Name |  |
	|-------|-------|
	|AssetInspectionRequiredReport_By_JobOid||
	|AssetLevelReportByClientName||
	|ComponentLevelReportByClientName||
	|Report_Apportionment_SpecialisedReportUnitRate||
	|Report_Asset_History_Chart||
	|Report_Asset_Level_Validations_Report||
	|Report_Asset_Level_Validations_Summary||
	|Report_Asset_Portfolio||
	|Report_Component_Attatchment_A||
	|Report_Component_Level_Assumptions_Attatchment_F||
	|Report_Component_Level_Validations_Report||
	|Report_Cost_to_bring_to_satisfactory||
	|Report_Cost_to_bring_to_satisfactory_Component||
	|Report_DirectCost_SpecialisedUnitRate||
	|Report_Highest_And_best_Use||
	|Report_Indices_Applied_Since_Last_Comprehensive_Valuation||
	|Report_Insurance_Assumptions||
	|Report_MovementReconciliation_Value_Change||
	|Report_MovementReconciliation_Value_Change_By_ArOids||
	|Report_MovementReconciliation_Value_Change_Delete_Existing||
	|Report_MovementReconciliation_Value_Change_Open_Only||
	|Report_Non_Recurring_Valuation||
	|Report_Obsolescence_AssetClassLevel||
	|Report_Obsolescence_AssetLevel||
	|Report_Obsolsecence_Changes_Component||
	|Report_Portfolio_Change_Asset||
	|Report_Portfolio_Change_AssetClass||
	|Report_Portfolio_Change_AssetType||
	|Report_Portfolio_Change_Component||
	|Report_ProjectedRenewal_AssetClassLevel||
	|Report_ProjectedRenewal_AssetLevel||
	|Report_ProjectedRenewal_AssetTypeLevel||
	|Report_ProjectedRenewal_ComponentLevel||
	|Report_ProjectedRenewal_Summary_By_Years_AssetClassLevel||
	|Report_ProjectedRenewal_Summary_By_Years_AssetLevel||
	|Report_ProjectedRenewal_Summary_By_Years_AssetTypeLevel||
	|Report_RangeAssetTypes||
	|Report_Score_Changes_Asset||
	|Report_Score_Changes_AssetClass||
	|Report_Score_Changes_Component||
	|Report_Stratification_By_Score||
	|Report_Stratification_By_Score_Develop||
	|Report_Stratification_By_Value||
	|Report_Stratification_By_Value_AssetClass_Level||
	|Report_Summary_By_Valuation_Approach||
	|Report_Summary_By_Value_Table_1||
	|Report_Summary_of_Inspections||
	|Report_Valuation_Profile||
	|Report_Valuation_Profile_By_ArOids||
	|Report_Valuation_Profile_By_JobOid||
	|Report_Valuation_Profiles||
	|Report_ValuationTechniques||
	
- Miscellaneous
	|  Name | Description |
	|-------|-------|
	|Import_Refactor_AssetId|Refactor AssetId|
	|Upload_Images_New|Import Photos|
	|SP_PhotoNaming|Bulk Rename Photos|
	
- Schedulet notifications
	|  Name | Description |
	|-------|-------|
	|Schedule_Notification_Client_Expiry||
	|Schedule_Notification_Deposit_Box_File_From_Last_Day|Import Photos|
	|Schedule_Notification_Lease_ExpireLease||
	|Schedule_Notification_Lease_MarketReview||
	|Schedule_Notification_Lease_PerformanceReview||
	|Schedule_Notification_Lease_RentReview||
	|Schedule_Notification_User_Expiry||