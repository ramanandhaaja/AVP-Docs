
# 📘 AVP Application Installation Guide

This guide will help you set up the AVP application on your computer. Please follow each step carefully.

---

## ✅ Step 1: Set Up the Environment

### 1.1 Install .NET SDK
- Visit this link: [Download .NET 5 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- Download the installer for your operating system (Windows, macOS, or Linux) and follow the installation instructions.

### 1.2 Install a Code Editor
Choose **one** of the following:
- **Visual Studio 2022**  
  Make sure to select the **"ASP.NET and Web Development"** workload during installation.
- **Visual Studio Code**  
  (If you choose this, you’ll also need to install the C# extension later.)

### 1.3 Install Node.js
- Visit: [https://nodejs.org](https://nodejs.org)
- Download the **LTS version** (recommended for most users) and install it.

### 1.4 Confirm Node.js and NPM Installation
Open a terminal (Command Prompt, PowerShell, or Terminal) and type:
```bash
node -v
npm -v
```
You should see version numbers if Node.js and NPM were installed correctly.

### 1.5 (Optional) Install Yarn
Yarn is an alternative package manager. You can skip this if unsure.
```bash
npm install -g yarn
```

---

## 🔧 Step 2: Install EF Core CLI (Database Tool)

### 2.1 Install EF Core CLI Tool
Run this command in your terminal:
```bash
dotnet tool install --global dotnet-ef
```

### 2.2 Verify Installation
Check if EF Core CLI is installed by typing:
```bash
dotnet ef --version
```

---

## 💾 Step 3: Set Up Azure Storage Emulator (Azurite)

Azurite is used to simulate Azure Storage for local development.

### 3.1 Install Azurite
```bash
npm install -g azurite
```

### 3.2 Start the Queue Emulator
```bash
azurite-queue --location ./azurite --debug ./azurite/debug.log
```

Leave this window open while working on the application.

---

## 🛢️ Step 4: Set Up the AVP Database

### 4.1 Open SQL Server Management Studio (SSMS) or a similar tool.

### 4.2 Run the following script to create a new database:
```sql
CREATE DATABASE AVP;
GO
CREATE LOGIN AVPSys WITH PASSWORD = 'Je11ybean';
GO
USE AVP;
GO
IF NOT EXISTS (SELECT * FROM sys.database_principals WHERE name = N'AVPUser')
BEGIN
    CREATE USER [AVPUser] FOR LOGIN [AVPSys];
    ALTER ROLE [db_owner] ADD MEMBER AVPUser;
END;
GO
```

> ⚠️ Make sure your SQL Server instance is running before executing the script.

---

## 🏗️ Step 5: Build the Project and Apply Database Migrations

In this step, you'll compile the application and update the database with the necessary structure.

### 🔹 Command 1: Build the Project

```bash
dotnet build
```

**What it does:**  
This command compiles all the source code in the project. It checks for any errors and prepares the project for running.

---

### 🔹 Command 2: Navigate to the Infrastructure Folder

```bash
cd Infrastructure
```

**What it does:**  
This changes the current directory to the `Infrastructure` folder, where the database migration scripts are managed.

---

### 🔹 Command 3: Apply the Database Migrations

```bash
dotnet ef database update --startup-project ../API --context ApplicationDbContext
```

**What it does:**
- `dotnet ef database update`: Updates the database to the latest version based on the migration files.
- `--startup-project ../API`: Tells the system where the API project's configuration is located.
- `--context ApplicationDbContext`: Specifies which database context to use.

**Why it's needed:**  
This ensures your local database structure matches what the app expects.

---

## 🚀 Step 6: Run the Application

Now that the app is built and the database is ready, you'll start both the **frontend (user interface)** and the **backend (server/API)**.

## 🖥️ Frontend (React App)

### 🔹 Command 1: Go to the Web Folder

```bash
cd Web
```

**What it does:**  
Moves into the folder that contains the frontend code.

---

### 🔹 Command 2: Install Dependencies

```bash
npm install
```

**What it does:**  
Downloads all the required packages that the React app needs to run.

---

### 🔹 Command 3: Start the Frontend Server

```bash
npm start
```

**What it does:**  
Launches the React development server.  
You should see the app open in your browser at `http://localhost:3000`.

---

## 🛠️ Backend (ASP.NET Core API)

In a **new terminal window**, do the following:

### 🔹 Command: Run the API Project

```bash
dotnet run --project API
```

**What it does:**  
Starts the backend service that handles all the data and logic of the app.  
It should run at `https://localhost:5001`.

---

## 🌐 Accessing the Application

Once both frontend and backend are running, you can open:

```
https://localhost:5001
```

This is the secured URL where the backend API is accessible.  
The React app (frontend) usually runs on:

```
http://localhost:3000
```

Make sure **both** are running for the application to work properly.


## 🛠️ Troubleshooting

- Common issues and solutions will be listed here.
- Check logs in the API output or in the `logs/` directory.

---

For more details, refer to the [Repository Structure Overview](../structure/index.md).
