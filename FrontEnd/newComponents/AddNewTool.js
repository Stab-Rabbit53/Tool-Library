import React, { useState } from 'react';

function AddTools() {
  //item state in browse
  // const [items, setItems] = useState('')
  const [description, setDescription] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      item: e.target[0].value,
      description: e.target[1].value,
      neighborhood: e.target[2].value,
    };

    try {
      const res = await fetch('/api/user/addTool', {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedAddToolBack = res.json();
      //add tool to both my items and browse
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className='addToolsDiv' onSubmit={handleClick}>
      <h1>add new items</h1>
      <form className='form'>
        <input type='text' id='item' />
        <lable>item name</lable>
        <input type='text' id='description' />
        <lable>description</lable>
        <input type='text' id='neighborhood' />
        <lable>neighborhood</lable>
        <input type='submit' value='add' />
      </form>
    </div>
  );
}

export default AddTools;
