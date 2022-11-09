import React from 'react';
import { useItemContext } from '../contexts/itemContext';

function BorrowedItemsCard({
  item_id,
  username,
  name,
  description,
  neighborhood,
  owner
}) {
  const itemContext = useItemContext();
  const returnToBrowse = async () => {
    const body = {username: username, id: item_id };
    try {
      const res = await fetch('/mainPage/returnItem', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      itemContext.setBorrowedItemList(username);
      itemContext.setGlobalItemList();
      //set Context of borrowed items
      //set Context of global items 
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div><b>Name:</b> {name}</div>
        <div><b>Description:</b> {description}</div>
        <div><b>Neighborhood:</b> {neighborhood}</div>
        <div><b>Owner:</b> {owner}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={returnToBrowse}>Return</button>
      </div>
    </div>
  );
}

export default BorrowedItemsCard;
