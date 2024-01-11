const apiUrl = "http://localhost:5000";

const addGrocery = async (itemToSend) => {
	try {
		const response = await fetch(`${apiUrl}/grocery`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(itemToSend),
		});

		if (!response.ok) {
			throw new Error(`Failed to add grocery item. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error adding grocery item:", error.message);
		throw error; // Rethrow the error for handling at a higher level if needed
	}
};

export default addGrocery;
