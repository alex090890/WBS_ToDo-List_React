const ItemsList = ({ items, deleteItem }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item}
        <button type="button" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ItemsList;