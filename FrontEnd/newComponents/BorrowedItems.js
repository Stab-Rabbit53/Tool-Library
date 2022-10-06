import React, { useState } from 'react';
import BorrowedItemsCard from './BorrowedItemsCard';

function BorrowedItems({ username }) {
  const [usersData, setUsersData] = useState([]);
  //fetch request for the items user borrowed
  useEffect(() => {
    const body = { username: username };
    try {
      const res = fetch('api/users/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      //return the array with item borrowed
      const data = res.json();
      setUsersData(data);
    } catch (error) {
      console.log(error.message);
    }
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
