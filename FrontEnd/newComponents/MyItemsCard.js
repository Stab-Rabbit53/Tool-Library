import React from 'react';

function MyItemsCard({ borrowed, item_id, username, name, description, neighborhood }) {
  // const addToBrowse = async () => {
  //   const body = { username: username, name: name };
  //   try {
  //     const res = await fetch('/mainPage/', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json, text/plain',
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const receivedBack = res.json();
  //   } catch (error) {
  //     console.log('error');
  //   }
  // };

  
  const deleteFromMylist = async () => {
    const body = { username: username, id: item_id };
    try {
      const res = await fetch('/mainPage/deleteItem', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/plain',
        },
        body: JSON.stringify(body),
      });
      // console.log('Delete successful');



      const receivedDeleteBack = res.json();
    } catch (err) {
      console.log('err');
    }
  };
  // },[]);

  return (
    <div className='itemCardDiv'>
      <div className='itemCardDetails'>
        <div>name:{name}</div>
        <div>description:{description}</div>
        <div>neighborhood:{neighborhood}</div>
        <div>Borrower:{borrowed}</div>
      </div>
      <div className='itemCardBtns'>
        {/* <button onClick={addToBrowse}>Add</button> */}
        <button onClick={deleteFromMylist}>Delete</button>
      </div>
    </div>
  );
}

export default MyItemsCard;
