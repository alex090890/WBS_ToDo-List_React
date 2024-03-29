import { useState } from 'react';

const AddItemForm = ({ addItem }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addItem(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className='addbutton'>
        <img className='icon' src="add.png" alt="" />  
      </button>
    </form>
  );
};

export default AddItemForm;