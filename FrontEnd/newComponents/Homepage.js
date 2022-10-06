import React from 'react';
import UserItemsContainer from './UserItems';
import BrowseContainer from './Browse';
import AddTools from './AddNewTool';
import BorrowedItems from './BorrowedItems';
import { ItemContextProvider } from '../contexts/itemContext';


function Homepage({ username }) {
  return (
    <div>
      <ItemContextProvider>
        <h1>Welcome, {username.toUpperCase()}</h1>
        <AddTools username={username} />
        <UserItemsContainer username={username} />
        <BorrowedItems username={username} />
        <BrowseContainer username={username} />
      </ItemContextProvider>
    </div>
  );
}

export default Homepage;
