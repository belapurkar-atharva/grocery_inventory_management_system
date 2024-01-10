// Function to handle the POST request for adding or updating a grocery item
const postGrocery = (db, req, res) => {
	return new Promise(async (resolve, reject) => {
		try {
			const itemName = req.body.item_name;
			const itemPrice = req.body.item_price;
			const itemCount = req.body.count || 1;

			// Checking if the item already exists in the database
			const row = await getItemFromDatabase(db, itemName);

			if (row) {
				// If the item exists, updating its count and total price
				await updateExistingItem(db, itemName, itemPrice, itemCount);

				resolve({
					message: `Item '${itemName}' was present, increased the count by ${itemCount}`,
				});
			} else {
				// If the item is not present, inserting a new record for it
				await insertNewItem(db, itemName, itemCount, itemPrice);

				resolve({ message: `Item '${itemName}' added to the database` });
			}
		} catch (err) {
			console.error(err.message);
			reject({ error: "Internal Server Error" });
		}
	});
};

const getItemFromDatabase = (db, itemName) => {
	return new Promise((resolve, reject) => {
		const sql = `SELECT * FROM groceries WHERE item_name = ?`;
		db.get(sql, [itemName], (err, row) => {
			if (err) {
				console.error("Error finding the item:", err.message);
				reject(err);
			} else {
				resolve(row);
			}
		});
	});
};

const updateExistingItem = (db, itemName, itemPrice, itemCount) => {
	return new Promise((resolve, reject) => {
		const sql = `UPDATE groceries SET count = count + ?, total_price = (count + ?) * ? WHERE item_name = ?`;
		db.run(sql, [itemCount, itemCount, itemPrice, itemName], (err) => {
			if (err) {
				console.error("Error updating the item:", err.message);
				reject(err);
			} else {
				resolve();
			}
		});
	});
};

const insertNewItem = (db, itemName, itemCount, itemPrice) => {
	return new Promise((resolve, reject) => {
		const sql = `INSERT INTO groceries (item_name, count, item_price, total_price) VALUES (?, ?, ?, ?)`;
		db.run(
			sql,
			[itemName, itemCount, itemPrice, itemCount * itemPrice],
			(err) => {
				if (err) {
					console.error("Error adding the item:", err.message);
					reject(err);
				} else {
					resolve();
				}
			}
		);
	});
};

export default postGrocery;
