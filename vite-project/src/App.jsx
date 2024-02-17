import './App.css'
import Header from './Header'
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import Itemdata from "./items.json";
import { useState, useEffect } from "react";


function App() {
const [items, setItems] = useState(Itemdata);
const addItem = (value) => {
  setItems((prevItems) => [...items, value]);
};

const deleteItem = (index) => {
  setItems((prevItems) => {
    prevItems.filter((item, i) => i !== index);
  });
};

useEffect(() => {
fetch('/items.json', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items),
    }).catch((error) => console.error('Error saving items:', error));
}, [items]);

  return (
    <div>
      <Header />
      <AddItemForm addItem={addItem} />
      <ItemsList items={items} deleteItem={deleteItem} />
    </div>
  )
}

export default App
