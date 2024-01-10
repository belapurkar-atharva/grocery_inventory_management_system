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
