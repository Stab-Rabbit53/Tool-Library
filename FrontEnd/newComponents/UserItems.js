import React, { useState, useEffect } from 'react';
import MyItemsCard from './MyItemsCard';
import { useItemContext } from '../contexts/itemContext';

function UserItemsContainer({ username }) {
  // fetch the user's inventory
  const itemContext = useItemContext();
  // itemContext is an object with itemList, setMyItemList, setGlobalItemList, setBorrowedItemList

  //change how we render
  //currently rendering based on usersData state --> render based on itemList.myItemList
  //use setUsersData(itemlist.myItemList)

  const getUserItems = () => {
    itemContext.setMyItemList(username);
  };

  useEffect(() => {
    getUserItems();
  }, []);

  //1. UseContext Hook
  //2. UseEffect
  //3. Combine UserItems with ItemsCard

  return (
    <div>
      <h1>ITEMS THAT I OWN AND AM LENDING (borrower is not empty)</h1>
      {itemContext.itemList.myItemList.map((data, index) => {
        return (
          <MyItemsCard
            item_id={data.id}
            key={index}
            username={data._owner}
            name={data.name}
            description={data.description}
            neighborhood={data.neighborhood}
            borrowed={data.borrowed}
          />
        );
      })}
    </div>
  );
}

export default UserItemsContainer;
