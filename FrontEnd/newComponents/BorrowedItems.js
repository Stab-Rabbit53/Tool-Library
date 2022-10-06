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
    <>
      <h1>ITEMS THAT I AM BORROWING</h1>

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
    </>
  );
}

export default BorrowedItems;
