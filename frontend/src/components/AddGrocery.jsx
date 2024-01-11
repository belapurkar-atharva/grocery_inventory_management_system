import { useState } from "react";
import PropTypes from "prop-types";
import addGrocery from "../api/addGrocery";

const AddGrocery = ({ onAddItem }) => {
  // State for tracking the new grocery item
  const [newItem, setNewItem] = useState({
    item_name: "",
    count: "",
    item_price: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  // Handle the addition of a new grocery item
  const handleAddItem = async (e) => {
    e.preventDefault();

    // Ensure a default count of 1 if not provided
    const newItemWithCount = {
      ...newItem,
      count: newItem.count || 1,
    };

    // Validation checks
    if (!newItemWithCount.item_name || !newItemWithCount.item_price) {
      console.error("Validation failed. Please fill in all required fields.");
      return;
    }

    // Call the API to add the new grocery item
    await addGrocery(newItemWithCount);
    
    // Trigger the parent's callback to refresh the grocery list
    onAddItem();

    // Reset the form fields
    setNewItem({
      item_name: "",
      count: "",
      item_price: "",
    });
  };

  return (
    <div className="add-grocery">
      <form onSubmit={handleAddItem}>
        {/* Input for item name */}
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={newItem.item_name}
            onChange={handleChange}
            required
          />
        </label>
        
        {/* Input for item count */}
        <label>
          Count:
          <input
            type="number"
            name="count"
            value={newItem.count}
            onChange={handleChange}
          />
        </label>
        
        {/* Input for item price */}
        <label>
          Item Price:
          <input
            type="number"
            name="item_price"
            value={newItem.item_price}
            onChange={handleChange}
            min="0.01"
            step="0.01"
            required
          />
        </label>
        
        {/* Submit button */}
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

// PropTypes for prop validation
AddGrocery.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default AddGrocery;
