import React, { useState } from 'react';

function AddNewTools({ username }) {
  //item state in browse
  // const [items, setItems] = useState('')
  const [description, setDescription] = useState('');
  const [neighborhood, setNeighborhood] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      name: e.target[0].value,
      description: e.target[1].value,
      neighborhood: e.target[2].value,
      username: username,
    };
    try {
      const res = await fetch('/mainPage/addItem', {
        method: 'POST',
        headers: {
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
        <lable>item name</lable>
        <input type='text' id='item' />
        <lable>description</lable>
        <input type='text' id='description' />
        <lable>neighborhood</lable>
        <input type='text' id='neighborhood' />
        <input type='submit' value='add' />
      </form>
    </div>
  );
}

export default AddNewTools;
