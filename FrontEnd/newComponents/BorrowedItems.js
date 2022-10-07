import React, { useState, useEffect } from 'react';
import BorrowedItemsCard from './BorrowedItemsCard';
import {useItemContext} from '../contexts/itemContext';

function BorrowedItems({ username }) {
  //fetch request for the items user borrowed
  const itemContext = useItemContext();

  const getBorrowedItems = () => {
    itemContext.setBorrowedItemList(username);
  };

  useEffect(() => {
    getBorrowedItems();
  }, []); //this empty array stops it from reloading
  
  return (
    <div>
      <h1 className="column-h1">Borrowed Items</h1>
      <div className='item-list-container'>
        {itemContext.itemList.borrowedItemList.map((data, index) => {
          return (
            <BorrowedItemsCard
              username={username}
              key={index}
              item_id={data.id}
              name={data.name}
              description={data.description}
              neighborhood={data.neighborhood}
              owner={data._owner}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BorrowedItems;
