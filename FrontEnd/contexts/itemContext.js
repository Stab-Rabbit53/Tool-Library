import React, { useContext, useState } from 'react';

const ItemContext = React.createContext();

export function useItemContext() {
  return useContext(ItemContext);
}

const defaultState = {
  myItemList: [],
  globalItemList: [],
  borrowedItemList: [],
};

export function ItemContextProvider({ children }) {
  //    state,  setState
  const [itemList, setItemList] = useState(defaultState);

  //the itemList param should be an Array
  //each element of the array should be an object representing an item
  const setMyItemList = async (username) => {
    const body = {username: username};
    try {
      const res = await fetch('/mainPage/ownerItemsList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      //do we need await?
      setItemList(oldState => {
        return {
          ...oldState,
          myItemList: data
        };
      });
    } catch(error) {
      console.log(error.message);
    }
  };

  const setGlobalItemList = async () => {
    try {
      const res = await fetch('/mainPage/globalItemsList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
      });
      const data = await res.json();
      setItemList(oldState => {
        return {
          ...oldState,
          globalItemList: data
        };
      });
    } catch (error) {
      console.log(error.message);
    }
  }; 


  const setBorrowedItemList = async (username) => {
    const body = { username: username };
    try {
      const res = await fetch('/mainPage/borrowedItemsList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      //return the array with item borrowed
      const data = await res.json();
      setItemList(oldState => {
        return {
          ...oldState,
          borrowedItemList: data
        };
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  //should define function(s) to setState,
  //these functions should call setItemList within them

  return (
    <ItemContext.Provider value={{itemList, setMyItemList, setGlobalItemList, setBorrowedItemList}}>
      {children}
    </ItemContext.Provider>
  );
}
