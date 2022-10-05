import React from 'react';

function BorrowedItemsCard({ username, name, description, neighborhood }) {
  const returnToBrowse = async () => {
    const body = { username: username, name: name };
    try {
      const res = await fetch('/api/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedBack = res.json();
    } catch (error) {
      console.log('error');
    }
  };

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div>name:{name}</div>
        <div>description:{description}</div>
        <div>neighborhood:{neighborhood}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={returnToBrowse}>Return</button>
      </div>
    </div>
  );
}

export default BorrowedItemsCard;
