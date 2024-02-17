const ItemsList = ({ items, deleteItem, setItems }) => {

  const editItem = (index) => {
    const newItem = prompt('Edit item:', items[index]);
    if (newItem) {
      const newItems = items.slice();
      newItems[index] = newItem;
      setItems(newItems);
    }
  };

  return (
    <ol>
    {items.map((item, index) => (
      <li key={index}>
        {item}
        <button type="button" onClick={() => deleteItem(index)}>
          Delete
        </button>
        <button type="button" onClick={() => editItem(index)}>
          Edit
        </button>
      </li>
    ))}
  </ol>
  )
};

export default ItemsList;