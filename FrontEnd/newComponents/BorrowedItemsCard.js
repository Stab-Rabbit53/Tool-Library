import React from 'react';

function BorrowedItemsCard({
  item_id,
  username,
  name,
  description,
  neighborhood,
}) {
  const returnToBrowse = async () => {
    const body = { username: username, id: item_id };
    try {
      const res = await fetch('/mainPage/returnItem', {
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
