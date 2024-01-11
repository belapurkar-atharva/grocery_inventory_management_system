const apiUrl = "http://localhost:5000";

const getGroceries = async () => {
	try {
		const response = await fetch(`${apiUrl}/grocery`);

		if (!response.ok) {
			throw new Error(`Failed to fetch groceries. Status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching groceries:", error.message);
		throw error; // Rethrow the error for handling at a higher level if needed
	}
};

export default getGroceries;
