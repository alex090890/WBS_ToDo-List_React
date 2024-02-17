const ItemsList = ({ items, deleteItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => deleteItem(index)}>x</button>
                </li>
            ))}
        </ul>
    )
}

export default ItemsList;