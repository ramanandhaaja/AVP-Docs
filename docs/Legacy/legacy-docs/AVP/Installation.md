# Asset Valuer Pro

Asset Valuer Pro is a Web Application that allows Valuers to input asset data to produce valuation data to view in the Web application or reports
## Build Status
[![Build Status](https://dev.azure.com/Assetvaluerpro/AVP/_apis/build/status/Asset%20Management%20Modelling%20UI?branchName=master)](https://dev.azure.com/Assetvaluerpro/AVP/_build/latest?definitionId=4&branchName=master)

## Prerequisites

Before you begin, please do the following:
* Install the Dot Net 6 sdk
* Install VS Code (Recommended)
* Install Windows Terminal (Recommended)
* Install the latest version of Visual Studio (Recommended)
* Install the latest version of NodeJS
* Install the latest version of Yarn (Recommended)
* Install an instance of SQL Server with a database named AVP
* Create a login:
```
CREATE LOGIN AVPAdmin WITH PASSWORD = 'Je11yBe@n'
GO
```
* Create a user with permissions on the AVP database
```
Use AVP;
GO
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = N'AVPAdmin')
BEGIN
    CREATE USER [AVPAdmin] FOR LOGIN [AVPAdmin]
    EXEC sp_addrolemember N'db_owner', N'AVPAdmin'
END;
GO
```

## Installing AVP

To install AVP, follow these steps:


Within the ReportingUI Directory run the following:
`yarn` or `npm install`

## Using AVP

To use AVP, follow these steps:

`yarn start` or `npm start`

Then start up an instance via Visual Studio

## Building AVP

To use AVP, follow these steps:

`yarn start` or `npm start`

## Contributing to AVP
To contribute to AVP, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin AVP/<location>`
5. Create the pull request.

## Contributors

Thanks to the following people who have contributed to this project:

* Paul Leavitt
* Sam Xian
