import React, { useState, useEffect } from 'react';
import BorrowedItemsCard from './BorrowedItemsCard';

function BorrowedItems({ username }) {
  const [usersData, setUsersData] = useState([]);
  //fetch request for the items user borrowed

  const itemsUserBorrowed = async () => {
    const body = { username: username, id: item_id };
    try {
      const res = await fetch('/mainPage/borrowItem', {
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
  }, []);

  return (
    <>
      {usersData.map((data, index) => {
        return (
          <BorrowedItemsCard
            username={username}
            key={index}
            name={data.name}
            description={data.description}
            neighborhood={data.neighborhood}
          />
        );
      })}
    </>
  );
}

export default BorrowedItems;
