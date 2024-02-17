import { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemsList from './ItemsList';
import itemsData from './items.json';
import Header from './Header';
import './App.css';

const App = () => {
  const [items, setItems] = useState(() => {
    const loadedItems = localStorage.getItem('items');
    return loadedItems ? JSON.parse(loadedItems) : itemsData;
  });

  const addItem = (value) => {
    setItems((prevItems) => [...prevItems, value]);
  };

  const deleteItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  useEffect(() => {
    // Save items to the localStorage when they change
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <Header />
      <AddItemForm addItem={addItem} />
      <ItemsList items={items} setItems={setItems} deleteItem={deleteItem} />
    </div>
  );
};

export default App;