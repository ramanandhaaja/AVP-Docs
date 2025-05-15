# Tech Stack
This document provides an overview of the technologies used in the Asset Valuer Pro (AVP) application, organized by layer and component.

| Layer         | Technology/Tool                | Notes / Version           |
|--------------|-------------------------------|---------------------------|
| **Frontend** | React, TypeScript, Tailwind CSS, React Router, Formik, Yup, Chart.js | Modern SPA, forms, charts |
| **Backend**  | .NET Core, ASP.NET Core, Entity Framework Core, MediatR, CQRS, Clean Architecture, Repository Pattern, FluentValidation, xUnit, Moq | API, business logic, validation, testing |
| **Mobile**   | React Native, Expo, React Native Paper, Expo Camera, AsyncStorage, Geolocation | Cross-platform mobile app |
| **Database** | SQL Server, Azure SQL Database | Relational DB, cloud-hosted|
| **Storage**  | Azure Blob Storage             | File, document, image storage |
| **DevOps/CI-CD** | Azure DevOps, Azure Pipelines | Build & deployment |
| **Cloud/Infra** | Microsoft Azure, Azure App Service, Azure Storage, Azure Monitor, Application Insights | Hosting, monitoring |
| **Version Control** | Git, Bitbucket           | Source code management     |
| **Document Generation** | Microsoft Office Interop | Generate documents from templates |
| **Mapping**  | Mapbox                        | Interactive asset maps     |
| **Authentication** | ASP.NET Core Identity, JWT, Azure Active Directory, OAuth 2.0, OpenID Connect | Security & SSO           |
| **API Design** | RESTful API, Swagger/OpenAPI | Standards & documentation  |
| **Background Jobs** | Hosted Services, Azure WebJobs | Background processing   |
| **Testing**  | xUnit, Moq, SQLite            | Unit testing, mocking      |

## Additional Tools
- Visual Studio / Visual Studio Code / Xcode (development)
- NPM/Yarn (.js package management)
- .NET CLI (build & tooling)
- Webpack (frontend bundling)
- Application Insights, Azure Monitor (monitoring)
- Structured Logging

### Notes
- **Frontend**: Built with React, TypeScript, and Tailwind CSS for a modern, maintainable UI. Uses React Router for navigation, Formik/Yup for forms and validation, and Chart.js for data visualization.
- **Backend**: .NET Core with ASP.NET Core for APIs, Entity Framework for ORM, MediatR for CQRS, and Clean Architecture for maintainability. Uses FluentValidation for input validation and xUnit/Moq for testing.
- **Mobile**: React Native (with Expo) for cross-platform iOS/Android support, including device features like camera and geolocation.
- **Cloud & DevOps**: Hosted on Azure, using Azure DevOps and Pipelines for CI/CD, with monitoring via Application Insights and Azure Monitor.
- **Security**: Uses ASP.NET Identity, JWT, Azure AD, OAuth 2.0/OpenID Connect for authentication and authorization.
- **Other**: Mapbox for mapping, Microsoft Office Interop for document generation, and Bitbucket for version control.
