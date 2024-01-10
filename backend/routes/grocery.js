import express from "express";
import initializeDB from "../config/db.js";
import getGrocery from "../controllers/getGroceries.js";
import postGrocery from "../controllers/postGroceries.js";

const groceryRoute = express.Router();

const handleAsync = (fn) => async (req, res) => {
	try {
		const result = await fn(req, res);
		res.json(result);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

// Immediately-invoked function expression to initialize the database and set up routes
(async () => {
	const { db } = await initializeDB();

	// Handling GET requests for the "/grocery" endpoint
	groceryRoute.get(
		"/",
		handleAsync(async () => getGrocery(db))
	);

	// Handling POST requests for the "/grocery" endpoint
	groceryRoute.post(
		"/",
		handleAsync(async (req, res) => postGrocery(db, req, res))
	);
})();

export default groceryRoute;
