// Function to handle the GET request for retrieving all grocery items from the database
const getGrocery = (db) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM groceries`;

		db.all(sql, (err, rows) => {
			if (err) {
				console.error(err.message);
				reject({ error: "Internal Server Error" });
			} else {
				resolve({ groceryItems: rows });
			}
		});
	});
};

export default getGrocery;
