import React, { useEffect, useState } from 'react';
import BrowseCard from './BrowseCard.js';

function BrowseContainer({ username }) {
  //pass this from app?
  const [items, setItems] = useState([]);

  //fetch all items

  //   fetch('/mainPage/globalItemsList')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data);

  //     })
  //     .catch((err) => console.log(err));

  const getGlobalItemsList = async () => {
    try {
      const res = await fetch('/mainPage/globalItemsList', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
      });
      const data = await res.json();
      // const data = await JSON.parse(res);
      setItems(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // BrowseContainer();
    getGlobalItemsList();
  }, []);

  return (
    <div className='browseDiv'>
      <h1>Browse All Items</h1>
      <div>
        {items.map((item, index) => {
          return (
            <BrowseCard
              key={index}
              item_id={item.id}
              itemOwner={item._owner}
              username={username}
              name={item.name}
              description={item.description}
              neighborhood={item.neighborhood}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BrowseContainer;
