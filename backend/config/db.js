import sqlite3 from "sqlite3";

const openDatabase = (filename) => {
	return new Promise((resolve, reject) => {
		const db = new sqlite3.Database(filename, sqlite3.OPEN_READWRITE, (err) => {
			if (err) {
				console.error("Error opening the database:", err.message);
				reject(err);
			} else {
				resolve(db);
			}
		});
	});
};

const createTable = (db) => {
	return new Promise((resolve, reject) => {
		const createTableQuery = `
      CREATE TABLE IF NOT EXISTS groceries(
        id INTEGER PRIMARY KEY,
        item_name TEXT,
        count INTEGER,
        item_price REAL,
        total_price REAL
      )
    `;

		db.run(createTableQuery, (err) => {
			if (err) {
				console.error("Error creating table:", err.message);
				reject(err);
			} else {
				resolve(db);
			}
		});
	});
};

// Function to initialize the database, opening it and creating the necessary table
const initializeDB = async () => {
	try {
		const db = await openDatabase("./database/grocery.db");
		await createTable(db);
		return { db, message: "Database initialized successfully" };
	} catch (err) {
		console.error("Error initializing the database:", err.message);
		throw err;
	}
};

export default initializeDB;
