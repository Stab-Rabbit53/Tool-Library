import React, {useContext, useState} from 'react';

const ItemContext = React.createContext();
// const UpdateItemContext = React.createContext();

export function useItemContext() {
  return useContext(PetContext);
}


// export function useUpdateItemContext() {
//   return useContext(PetUpdateContext);
// }

const defaultState = {
  myItemList: [],
  globalItemList: [],
  borrowedItemList: []
}

export function ItemContextProvider({children}) {
  const [itemList, setItemList] = useState(defaultState);
  //    state,  setState

  function addPetData(newPetObj) {
    setItemList(oldState => {
      if (newPetObj.hasOwnProperty('DELETEID')) {
        //Logic to remove the object with this id from our state
        let newState = [...oldState]
        newState = newState.filter(element => {
          if (element._id === newPetObj.DELETEID) return false
          return true;
        })
        return newState;
      }
      if (Array.isArray(newPetObj)) return [...oldState, ...newPetObj]
      return [...oldState, newPetObj]
    })
  }

  return (
    <PetContext.Provider value={itemList, addPetData}>
        {children}
    </PetContext.Provider>
  )
}