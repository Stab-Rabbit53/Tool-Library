import React from 'react';
import { useItemContext } from '../contexts/itemContext';
//need to add id in parent component
function BrowseCard({
  itemOwner,
  item_id,
  username,
  name,
  description,
  neighborhood,
}) {
  const itemContext = useItemContext();
  const borrow = async () => {
    const body = { id: item_id, username: username };
    try {
      const res = await fetch('/mainPage/borrowItem', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      itemContext.setBorrowedItemList(username);
      itemContext.setGlobalItemList();
      //updating the borrow person given the item id
    } catch (error) {
      console.log('err');
    }
  };

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div><b>Name:</b> {name}</div>
        <div><b>Description:</b> {description}</div>
        <div><b>Neighborhood:</b> {neighborhood}</div>
        <div><b>Owner:</b> {itemOwner}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={borrow}>Borrow</button>
      </div>
    </div>
  );
}

export default BrowseCard;