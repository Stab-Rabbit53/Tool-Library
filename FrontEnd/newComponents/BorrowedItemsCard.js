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
        <div>name: {name}</div>
        <div>description: {description}</div>
        <div>neighborhood: {neighborhood}</div>
        <div>owner: {owner}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={returnToBrowse}>Return</button>
      </div>
    </div>
  );
}

export default BorrowedItemsCard;
