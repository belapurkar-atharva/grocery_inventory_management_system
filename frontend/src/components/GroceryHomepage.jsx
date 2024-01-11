import { useEffect, useState } from "react";
import getGroceries from "../api/getGroceries";
import AddGrocery from "./AddGrocery";

const GroceryHomepage = () => {
  // State for storing grocery items
  const [items, setItems] = useState([]);

  // Function to fetch groceries from the API
  const fetchGroceries = async () => {
    try {
      const fetchedGroceries = await getGroceries();
      setItems(fetchedGroceries.groceryItems);
    } catch (error) {
      console.error("Error fetching groceries:", error);
    }
  };

  // Fetch groceries on component mount
  useEffect(() => {
    fetchGroceries();
  }, []);

  return (
    <>
      <h1>Grocery Inventory Management System</h1>
      <div className="main-container">
        {/* Component for adding a new grocery item */}
        <AddGrocery onAddItem={fetchGroceries} />

        <div className="display-container">
          <h2>Grocery Items</h2>
          {/* Display labels for grocery items */}
          <div className="item labels">
            <span>Name</span>
            <span>Count</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          
          {/* Display the list of grocery items */}
          <div className="grocery-list">
            {items.map((item) => (
              <div key={item.id} className="item">
                <span>{item.item_name}</span> &nbsp;
                <span>{item.count}</span> &nbsp;
                <span>{item.item_price}</span> &nbsp;
                <span>{item.total_price}</span> &nbsp;
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryHomepage;
