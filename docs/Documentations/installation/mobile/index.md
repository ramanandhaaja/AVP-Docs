# Mobile Application Installation Guide

This guide will walk you through setting up and running the AVP Mobile Application (React Native/Expo).

---

## 1. Prerequisites

Ensure you have the following installed:
- **Node.js** (LTS recommended)
- **Yarn** or **npm**
- **Expo CLI** (`npm install -g expo-cli`)
- **Git**
- (Optional) **Android Studio** or **Xcode** (for emulators/simulators)
- (Optional) **Physical iOS/Android device** (Expo Go app)

---

## 2. Clone the Repository

```sh
git clone <repo-url>
cd assetvaluerpro-ioscapture
```

---

## 3. Install Dependencies

Install server dependencies:
```sh
yarn install
# or
npm install
```

---

## 4. Database Setup

1. Ensure SQL Server is running and accessible.
2. Configure your connection string in `API/appsettings.json` or `appsettings.Development.json`.
3. Apply database migrations:
   ```sh
   cd Infrastructure
   dotnet ef migrations add <MigrationName> --startup-project=../API --output-dir=Persistence/Migrations --verbose --context ApplicationDbContext
   dotnet ef database update --startup-project=../API --context ApplicationDbContext
   dotnet ef migrations script <PreviousMigration> --startup-project=../API --verbose --context ApplicationDbContext -i | out-file ./script.sql
   ```

---

## 5. Running the API Backend

From the root or API directory:
```sh
dotnet build
# then
cd API
dotnet run
```

Or use Visual Studio/VS Code to run the solution.

---

## 6. Troubleshooting

- Common issues and solutions will be listed here.
- Check logs in the API output or in the `logs/` directory.

---

For more details, refer to the [Repository Structure Overview](../structure/index.md).
