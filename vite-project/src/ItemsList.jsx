const ItemsList = ({ items, deleteItem }) => (
  <ol>
    {items.map((item, index) => (
      <li key={index}>
        {item}
        <button type="button" onClick={() => deleteItem(index)}>
          Delete
        </button>
      </li>
    ))}
  </ol>
);

export default ItemsList;