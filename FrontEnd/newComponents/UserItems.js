import React, { useState, useEffect } from 'react';
import MyItemsCard from './MyItemsCard';

function UserItemsContainer({ username }) {
  const [usersData, setUsersData] = useState([]);
  // fetch the user's inventory
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
      const data = res.json();
      setUsersData(data);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  // const fakeData = [
  //   { name: 'dskjfj', description: 'hi', neighborhood: 'hdksfjhkd' },
  //   { name: 'sdfgs', description: 'hsdfgi', neighborhood: 'hdksfjsdfghkd' },
  //   { name: 'sdfg', description: 'hisdfg', neighborhood: 'hdksfsdfgjhkd' },
  // ];

  return (
    <div>
      {usersData.map((data, index) => {
        return (
          <MyItemsCard
            username={username}
            // username='sdkjfhskjf'
            key={index}
            name={data.name}
            description={data.description}
            neighborhood={data.neighborhood}
          />
        );
      })}
    </div>
  );
}

export default UserItemsContainer;
