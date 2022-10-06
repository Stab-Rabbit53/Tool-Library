import React from 'react';
import UserItemsContainer from './UserItems';
import BrowseContainer from './Browse';
import AddTools from './AddNewTool';
import BorrowedItems from './BorrowedItems';

function Homepage({ username }) {
  return (
    <div>
      <h1>HomePage</h1>
      <AddTools username={username} />
      <UserItemsContainer username={username} />
      {/* <BorrowedItems username={username} /> */}
      <BrowseContainer username={username} />
    </div>
  );
}

export default Homepage;
