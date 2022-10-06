import React, { useState, useEffect } from 'react';
import BorrowedItemsCard from './BorrowedItemsCard';

function BorrowedItems({ username }) {
  const [usersData, setUsersData] = useState([]);
  //fetch request for the items user borrowed

  const itemsUserBorrowed = async () => {
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
      setUsersData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    itemsUserBorrowed();
  }, []); //this empty array stops it from reloading

  return (
    <>
      <h1>ITEMS THAT THE USER IS BORROWING</h1>

      {usersData.map((data, index) => {
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
