import React, { useEffect, useState } from 'react';
import BrowseCard from './BrowseCard.js';

function BrowseContainer() {
  //pass this from app?
  const [items, setItems] = useState('');

  //fetch all items
  // fetch('api/users/items')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setItems(data);
  //   })
  //   .catch((err) => console.log(err));

  // useEffect(() => {
  //   Browse()
  // }, items)

  const fakeData = [
    { name: 'dskjfj1111', description: 'hi', neighborhood: 'hdksfjhkd' },
  ];

  return (
    <div className='browseDiv'>
      <h1>Browse All Items</h1>
      <div>
        {fakeData.map((item) => {
          return (
            <BrowseCard
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
