import React, { useEffect, useState } from 'react';
import BrowseCard from './BrowseCard.js';
import { useItemContext } from '../contexts/itemContext';

function BrowseContainer({ username }) {

  const itemContext = useItemContext();

  const getGlobalItems = () => {
    itemContext.setGlobalItemList();
  };

  useEffect(() => {
    // BrowseContainer();
    getGlobalItems();
  }, []);

  return (
    <div>
      <h1 className="column-h1">Browse Items</h1>
      <div className='item-list-container'>
        {itemContext.itemList.globalItemList.map((item, index) => {
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
