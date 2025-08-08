# Oracle DB Connection – VS Code with SQL Developer Extension

This project demonstrates how to connect to an **Oracle Database** using the **Oracle SQL Developer Extension** in Visual Studio Code, and run SQL queries with default setup for local development.

---

## 📦 Requirements

Before connecting to the database, make sure the following are installed:

### 🖥️ System Requirements

- Windows 10 or higher (x64)
- At least 2 GB RAM and 10 GB free disk space (for Oracle DB XE)

### 🧰 Software

| Component                        | Required Version | Notes |
|----------------------------------|------------------|-------|
| [Visual Studio Code](https://code.visualstudio.com/) | Latest           | Code editor |
| [Oracle SQL Developer Extension](https://marketplace.visualstudio.com/items?itemName=Oracle.oracledevtools) | Latest           | Oracle DB management in VS Code |
| Oracle Database XE              | 21c or 18c       | Oracle Express Edition (lightweight free edition) |
| [Oracle Instant Client (Optional)](https://www.oracle.com/database/technologies/instant-client/downloads.html) | 23.9 or latest   | For command line or other tools |
| **Visual C++ Redistributable**  | 2015–2022 (x64)  | Required for Oracle Instant Client to work |

> ✅ Tip: You can download the VC++ Redistributable from [Microsoft](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist).

---

## 📁 Installation Paths

Example installation structure:

- Oracle XE:  
  `D:\OracleDB\OracleXE213_Win64\Oracle Database 21c Express Edition`
  
- Oracle Instant Client (if used):  
  `C:\oracle\instantclient-basic-windows.x64-23.9.0.25.07\instantclient_23_9`

---

## ⚙️ Default DB Credentials

> ⚠️ Use these credentials **only for local development**. Never use them in production.

| Property       | Value       |
|----------------|-------------|
| Username       | `system`    |
| Password       | `system`    |
| Host           | `localhost` |
| Port           | `1521`      |
| Service Name   | `XEPDB1`    |

---

## 🚀 Getting Started in VS Code

### 1. Install Oracle SQL Developer Extension

- Open VS Code
- Go to Extensions (`Ctrl+Shift+X`)
- Search for `Oracle SQL Developer` (extension ID: `Oracle.sql-developer`)
- Click **Install**

### 2. Add New Connection

1. Go to **SQL Developer** icon on the left panel
2. Click ➕ to create a new connection
3. Fill in:

    | Field            | Value              |
    |------------------|--------------------|
    | Connection Name  | `react-system-be`  |
    | Username         | `system`           |
    | Password         | `system`           |
    | Host             | `localhost`        |
    | Port             | `1521`             |
    | Service Name     | `XEPDB1`           |

4. Click **Test Connection**
5. If successful, click **Save and Connect**

---

## 🧪 Sample Queries

💡 **Note:** After `INSERT`, `UPDATE`, or `DELETE`, don't forget to run `COMMIT`.

```sql
-- Simple test
SELECT * FROM DUAL;

-- Example table data
SELECT * FROM top_products;

-- Insert data
INSERT INTO top_products (product_label) VALUES ('label:product_a');
COMMIT;
