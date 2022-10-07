import React from 'react';
import UserItemsContainer from './UserItems';
import BrowseContainer from './Browse';
import AddTools from './AddNewTool';
import BorrowedItems from './BorrowedItems';
import { ItemContextProvider } from '../contexts/itemContext';


function Homepage({ username }) {
  return (
    <ItemContextProvider>
      <h1 id="homepageTitle">Welcome, {username[0].toUpperCase() + username.slice(1).toLowerCase()}</h1>
      <div id="homepage-main-div">
        <div id="user-item-container">
          <AddTools username={username} />
          <UserItemsContainer username={username} />
        </div>
        <div>
          <BorrowedItems username={username} />
        </div>
        <div>
          <BrowseContainer username={username} />
        </div>
      </div>
    </ItemContextProvider>
  );
}

export default Homepage;
