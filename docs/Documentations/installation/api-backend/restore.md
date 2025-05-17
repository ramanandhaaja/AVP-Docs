# Restore Database
# Guide to Restoring a .bacpac File in SQL Server Management Studio (SSMS)

This guide explains how to restore a `.bacpac` file using SQL Server Management Studio (SSMS) in a clear and easy-to-follow way.

---

## A. Preparation

Before you start, make sure you have the following:

1. A `.bacpac` file – this is a backup file of a database.

2. SQL Server is running on your computer (locally) or on a server you can access.

   - Example: `localhost` or `(localdb)\MSSQLLocalDB`

3. SQL Server Management Studio (SSMS) version 18.x or newer is installed.

   - Download SSMS here: [Download SSMS](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

---

## B. How to Restore the File

1. Open SQL Server Management Studio (SSMS) and log in to your local server.

2. In the Object Explorer on the left, right-click on the **Databases** folder.

3. Choose **Import Data-tier Application...**

4. A wizard will open. Click **Next**.

5. On the **Import Settings** screen:

   - Select **Import from local disk**
   - Click **Browse** and choose your `.bacpac` file
   - Click **Next**

6. On the **Database Settings** screen:

   - Enter the name you want for the new database (e.g., `AVP_Dev`)
   - Click **Next**

7. On the **Summary** screen:

   - Click **Finish**

8. Wait for the process to complete. When successful, you will see a **Completed** status.

---

## C. Check the Result

After it's done:

- Check the **Databases** list to make sure the new database is there.
- Open it and verify that all tables and data are available.

---

## D. Additional Notes

- **Error: "Could not import package"**  
  - Your SQL Server version must be the same or newer than the one used to create the `.bacpac` file.

- **File Access Error**  
  - Run SSMS as Administrator.

- **Invalid File Path**  
  - Make sure SQL Server has permission to write to the folder where it stores database files.

- **User Access Issues**  
  - Check if the user has permission to access the new database.

---
