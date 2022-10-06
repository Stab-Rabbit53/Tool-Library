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
    <div className='browseDiv'>
      <h1>BROWSING ALL THE ITEMS AVAILABLE (meaning borrower is empty)</h1>
      <div>
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
