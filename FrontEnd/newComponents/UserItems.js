import React, { useState, useEffect } from 'react';
import MyItemsCard from './MyItemsCard';

function UserItemsContainer({ username }) {
  const [usersData, setUsersData] = useState([]);
  // fetch the user's inventory

  const getUserItems = async () => {
    const body = { username: username };
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

      //data is an array of objects
      //each object represents an item
      /*
      {
        name: String, (name of item) | shovel
        description: String, (description of item) | it digs well
        neighborhood: String, (name of the hood) | glendale
        _owner: String (name of user who owns the item) | jpeaches
        borrowed: String (empty if not borrowed (''), or a string of whoever is borrowing it)
        id: Number (automatically unique)
      }
      */
      setUsersData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUserItems();
  }, []);
  //usersData.length

  //1. UseContext Hook
  //2. UseEffect
  //3. Combine UserItems with ItemsCard

  return (
    <div>
      <h1>ITEMS THAT I OWN AND AM LENDING empty borrower</h1>
      {usersData.map((data, index) => {
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
