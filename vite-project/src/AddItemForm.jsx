import { useState } from "react";

const AddItemForm = ({ addItem }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addItem(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new item"
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="button">Add</button>
        </form>
    )
};


export default AddItemForm;