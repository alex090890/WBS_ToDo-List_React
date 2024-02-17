import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import itemsData from './items.json';
import './App.css';

const App = () => {
  const [items, setItems] = useState(itemsData);

  const addItem = (value) => {
    setItems((prevItems) => [...prevItems, value]);
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  useEffect(() => {
    // Save items to the JSON file when they change
    fetch('/items.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items),
    }).catch((error) => console.error('Error saving items:', error));
  }, [items]);

  return (
    <div>
      <h1>Items</h1>
      <AddItemForm addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;