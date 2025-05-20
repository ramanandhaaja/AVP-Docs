// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Project Overview & Setup',
      collapsed: true,
      items: [
        'Documentations/intro',
        'Documentations/tech-stack',
        {
          type: 'category',
          label: 'Code Structure',
          collapsed: true,
          items: [
            'Documentations/structure/index',
            'Documentations/structure/web',
            {
              type: 'category',
              label: 'API Backend Structure',
              collapsed: true,
              items: [
                {
                  type: 'category',
                  label: 'Controller',
                  collapsed: true,
                  items: [
                    'Codebase/API-Backend/Controller/index',
                    'Codebase/API-Backend/Controller/AssetClassController',
                    'Codebase/API-Backend/Controller/AssetController',
                    'Codebase/API-Backend/Controller/AssetHierarchyController',
                    'Codebase/API-Backend/Controller/AssetReplacementCostController',
                    'Codebase/API-Backend/Controller/AssumptionsController',
                    'Codebase/API-Backend/Controller/BaselineAssumptionsController',
                    'Codebase/API-Backend/Controller/ClientController',
                    'Codebase/API-Backend/Controller/ComponentController',
                    'Codebase/API-Backend/Controller/ComponentHierarchyController',
                    'Codebase/API-Backend/Controller/ComponentReplacementCostController',
                    'Codebase/API-Backend/Controller/ContentController',
                    'Codebase/API-Backend/Controller/ControllersInventory',
                    'Codebase/API-Backend/Controller/DocumentController',
                    'Codebase/API-Backend/Controller/FilterController',
                    'Codebase/API-Backend/Controller/FinancialClassController',
                    'Codebase/API-Backend/Controller/GroupController',
                    'Codebase/API-Backend/Controller/ImportController',
                    'Codebase/API-Backend/Controller/ImportLogController',
                    'Codebase/API-Backend/Controller/JobController',
                    'Codebase/API-Backend/Controller/LeaseController',
                    'Codebase/API-Backend/Controller/LookupController',
                    'Codebase/API-Backend/Controller/MaintenancePlanController',
                    'Codebase/API-Backend/Controller/ReportsController',
                    'Codebase/API-Backend/Controller/RoleController',
                    'Codebase/API-Backend/Controller/StrategyController',
                    'Codebase/API-Backend/Controller/SubscriptionController',
                    'Codebase/API-Backend/Controller/UserController',
                    'Codebase/API-Backend/Controller/ValuationClassController',
                    'Codebase/API-Backend/Controller/ValuationProfileController',
                    'Codebase/API-Backend/Controller/ValuationProfileRuleController',
                  ],
                },
              ],
            },
            'Documentations/structure/mobile',
          ],
        },
        {
          type: 'category',
          label: 'Installations',
          collapsed: true,
          items: [
            'Documentations/installation/index',
            {
              type: 'category',
              label: 'Web',
              collapsed: true,
              items: [
                'Documentations/installation/web/index',
              ],
            },
            {
              type: 'category',
              label: 'API Backend',
              collapsed: true,
              items: [
                'Documentations/installation/api-backend/index',
                'Documentations/installation/api-backend/restore',
              ],
            },
            {
              type: 'category',
              label: 'Mobile',
              collapsed: true,
              items: [
                'Documentations/installation/mobile/index',
              ],
            },
          ],
        },
        'Documentations/local-setup',
        'Documentations/testing',
        'Documentations/production',
      ],
    },
    {
      type: 'category',
      label: 'Codebase',
      collapsed: true,
      items: [
        'Codebase/Overview',
        {
          type: 'category',
          label: 'API Backend',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Controller',
              collapsed: true,
              items: [
                { type: 'autogenerated', dirName: 'Codebase/API-Backend/Controller' }
              ],
            },
          ],
        },

      ],
    },
    {
      type: 'category',
      label: 'Legacy',
      collapsed: true,
      items: [
        { type: 'autogenerated', dirName: 'Legacy' }
      ],
    },
  ],
};

export default sidebars;
