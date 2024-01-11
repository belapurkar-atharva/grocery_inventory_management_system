# Grocery Inventory Management System (Backend)

This is a simple Grocery Inventory Management System built using Node.js, Express, and SQLite.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd grocery_management_system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Initialize the database:**

   ```bash
   npm run init-db
   ```

   This command will create the SQLite database file (grocery.db) and initialize the necessary table.

2. **Start the server:**

   ```bash
   npm start
   ```

   The server will run on http://localhost:5000 by default. You can modify the PORT variable in the index.js file.

## Endpoints

- GET /grocery

  Fetches all grocery items from the database.

- POST /grocery

  Adds or updates a grocery item in the database.

# Grocery Inventory Management System (Frontend)

This repository contains a simple web application built using Vite and React. The application has functionalities to make api calls to the backend to get grocery items from it as well as add items to the database.

## Getting Started

**Prerequisites:**

Make sure you have Node.js and npm installed on your machine.

- Node.js
- npm

**Installation:**

Clone the repository:

```bash
git clone <repo-url>
```

**Navigate to the project directory:**

```bash
cd vite-react-app
```

**Install dependencies:**

```bash
npm install
```

**Development:**

To start the development server, run the following command:

```bash
npm run dev
```

This will launch the application in development mode.

Open http://localhost:5173 in your browser to view the application.
