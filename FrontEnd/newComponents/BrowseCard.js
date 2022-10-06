import React from 'react';

//need to add id in parent component
function BrowseCard({
  itemOwner,
  item_id,
  username,
  name,
  description,
  neighborhood,
}) {
  const borrow = async () => {
    const body = { id: item_id, username: username };
    try {
      const res = await fetch('/mainPage/borrowItem', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      const receivedUpdatedBack = res.json();
      //updating the borrow person given the item id
    } catch (error) {
      console.log('err');
    }
  };

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div>name:{name}</div>
        <div>description:{description}</div>
        <div>neighborhood:{neighborhood}</div>
        <div>Owner:{itemOwner}</div>
      </div>
      <div className='itemCardBtns'>
        <button onClick={borrow}>Borrow</button>
      </div>
    </div>
  );
}

export default BrowseCard;
