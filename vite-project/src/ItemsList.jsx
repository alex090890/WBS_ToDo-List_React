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
    <ol className="todolist">
    {items.map((item, index) => (
      <li key={index} className="todo">
        <p className="todotext">{item}</p>
        <div>
          <hr />
          <button type="button"  className="deletebutton" onClick={() => deleteItem(index)}>
          <img  className="icon" src="delete.png" alt="" />
        </button>
        <button type="button" className="editbutton" onClick={() => editItem(index)}>
          <img  className="icon" src="edit.png" alt="" />
        </button>
        
        </div>
      </li>
    ))}
  </ol>
  )
};

export default ItemsList;