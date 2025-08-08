<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18%2B-brightgreen" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-4.x-blue" alt="Express.js">
  <img src="https://img.shields.io/badge/TypeScript-4.x-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/OracleDB-XE%2021c%2B-orange" alt="OracleDB">
  <img src="https://img.shields.io/badge/pnpm-10%2B-yellow" alt="pnpm">
</p>

# 🚀 React Systems Backend

A modern backend for the **React Systems** project, built with **Node.js**, **Express**, **TypeScript**, and **Oracle Database**. This server provides RESTful API endpoints to power the frontend React application.

---

## 📦 Tech Stack

- **Node.js** (v18+)
- **Express.js**
- **TypeScript**
- **Oracle Database** (XE 21c+)
- **OracleDB Node.js Driver**
- **pnpm** (v10+)

---

## 📁 Project Structure

```
react-systems-be/
├── src/
│   ├── index.ts            # Main Express server entry
│   └── db/
│       ├── db.ts           # Oracle DB connection logic
│       ├── routes/
│       │   └── products.ts # Products route (e.g. /api/top-products)
│       └── types/
│           └── oracledb.d.ts
├── .env                    # Environment variables (NOT committed)
├── .gitignore              # Git ignore rules
├── package.json            # Project metadata and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # You're here
```

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/en/) (v18+)
- [pnpm](https://pnpm.io/) (v10+)
- [TypeScript](https://www.typescriptlang.org/)
- [Oracle Instant Client](https://www.oracle.com/database/technologies/instant-client.html)
- Oracle XE 21c or another Oracle DB instance

> 📂 **See [`src/db/README.md`](src/db/README.md) for Oracle setup and table creation instructions.**

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. (Optional) Compile TypeScript
pnpm run build

# 3. Start the server in dev mode
pnpm run dev
```

---

## 🔌 Database Connection

- Connection logic: [`src/db/db.ts`](src/db/db.ts)
- Uses the OracleDB Node.js driver
- Requires:
  - Oracle Instant Client installed
  - A running Oracle DB
  - Credentials in a `.env` file

**.env example:**
```env
ORACLE_USER=your_user
ORACLE_PASSWORD=your_password
ORACLE_CONNECTION_STRING=localhost/orclpdb1
```

---

## 📮 Example Endpoint

```http
GET /api/top-products
```
Returns top product statistics from the database.

---

## 🧪 Scripts

| Script        | Description                        |
|---------------|------------------------------------|
| `pnpm dev`    | Run server in dev mode using tsx    |
| `pnpm build`  | Compile TypeScript to JavaScript    |
| `pnpm start`  | Run the compiled server             |

---

## 🧾 GitHub Setup

If you want to push this project to GitHub:

1. **Initialize Git (if not already):**
    ```bash
    git init
    ```
2. **Create a `.gitignore` file:**
    ```gitignore
    node_modules/
    dist/
    .env
    ```
    > ⚠️ Never commit `node_modules`, `dist`, or `.env` files to Git.
3. **Stage and commit your code:**
    ```bash
    git add .
    git commit -m "Initial commit"
    ```
4. **Create a new GitHub repository:**
    - Go to [https://github.com/new](https://github.com/new)
    - Name your repository
    - Click **Create repository**
5. **Link your local project to GitHub:**
    ```bash
    git remote add origin https://github.com/your-username/your-repo-name.git
    git branch -M main
    git push -u origin main
    ```

---

## ✅ Final Notes

- 🟢 **Oracle DB must be running before starting the server.**
- 🛡️ **Ensure `.env` is excluded from version control via `.gitignore`.**
- 📦 After cloning or pulling the project, install dependencies:

    ```bash
    pnpm install
    ```

- 📚 For Oracle DB setup, see [`src/db/README.md`](src/db/README.md).
- ❓ For questions or issues, open an [issue](https://github.com/your-username/your-repo-name/issues) on GitHub.