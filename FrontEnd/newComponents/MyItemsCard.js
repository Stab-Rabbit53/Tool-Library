import React from 'react';
import { useItemContext } from '../contexts/itemContext';


function MyItemsCard({ borrowed, item_id, username, name, description, neighborhood }) {
  const itemContext = useItemContext();

  
  const deleteFromMylist = async () => {
    const body = { username: username, id: item_id };
    try {
      const res = await fetch('/mainPage/deleteItem', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      itemContext.setMyItemList(username);
      itemContext.setGlobalItemList();

    } catch (err) {
      console.log('err');
    }
  };

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div><b>Name:</b> {name}</div>
        <div><b>Description:</b> {description}</div>
        <div><b>Neighborhood:</b>{ neighborhood}</div>
        <div><b>Borrower:</b> {borrowed}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={deleteFromMylist}>Delete</button>
      </div>
    </div>
  );
}

export default MyItemsCard;
