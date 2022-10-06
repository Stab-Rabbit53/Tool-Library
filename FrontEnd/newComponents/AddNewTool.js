import React, { useState } from 'react';
import { useItemContext } from '../contexts/itemContext';


function AddNewTools({ username }) {
  const itemContext = useItemContext();

  const handleClick = async (e) => {
    e.preventDefault();
    const body = {
      name: e.target[0].value,
      description: e.target[1].value,
      neighborhood: e.target[2].value,
      username: username,
    };
    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    try {
      const res = await fetch('/mainPage/addItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      
      itemContext.setMyItemList(username);
      itemContext.setGlobalItemList();
      
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
