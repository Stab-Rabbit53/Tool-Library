NOTE: The return value will be the the object stored in the body of the response
Example:
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      /*
      Here this variable data will be the object defined
      as the return value = 
      */
    })
___________________

userRouter
___________________

get request to (/user/login)
  expect req.body =  {
    username: String,
    password: String
  }

  return value = {
    username: Boolean, (if the username exists in the DB)
    password: Boolean  (if the password matches in the DB)
  }

post request to (/user/signup)
  expect req.body =  {
    username: String,
    password: String
  }

  return value = {
    username: String (the username that was passed in)
  }
__________________

mainPageRouter
__________________

get request to (/mainPage/ownerItemsList)
  expect req.body = {
    username: String
  }
  return value = {
    [ Objects ]   (An array of objects, with each object representing an item)
  }

get request to (/mainPage/globalItemsList)
  expect req.body = {
    nothing?
  }
  return value = {
    [ Objects ]   (An array of objects, with each object representing an item)
  }

get request to (/borrowedItemsList)
  expect req.body = {
    username: String   (The logged in user)
  }
  return value = {
    [ Objects ]   (An array of objects, with each object representing an item)
  }

__________________

{
  name: String, (name of item) | shovel
  description: String, (description of item) | it digs well
  neighborhood: String, (name of the hood) | glendale
  username: String (name of user who owns the item) | jpeaches
}
__________________

post request to (/api/mainPage/addItem)
  expect req.body = {
    name: String, (name of item)
    description: String,
    neighborhood: String,
    username: String (name of user who owns the item)
  }
  
delete request to (/mainPage/deleteItem)
  expect req.body = {
    id: Number (ID of the item in table)
  }
  return value = {
    nothing
  }


post request to (/mainPage/returnItem)
  expect req.body = {
    id: Number (ID of the item in table)
  }
  return value = {
    nothing
  }

post request to (/mainPage/borrowItem)
  expect req.body = {
    username: String (The logged in user)
    id: Number (ID of the item in table)
  }
  return value = {
    nothing
  }

