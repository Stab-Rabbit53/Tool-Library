const bcrypt = require('bcrypt');
const db = require('../Models/model.js');
//require('dotenv').config();
//const fetch = require('node-fetch');
//import database here

const userController = {};

//read from list of users and check if user exists
//check if password matches
userController.verifyUser = (req, res, next) => {
  //interact with DB here
  const { username, password } = req.body;
  console.log('user to verify:', username, password); //log variables from the req.body
  if (!username || !password) {
    return next('missing username or password in userController.verifyUser')
  }
  const verifyQuery = 'SELECT * FROM usertable WHERE username = $1';
  const value = [username]
  db.query(verifyQuery, value, (err, result)=> {
    if(err){
      return next('error in verifyUser db.query', err)
    }
    //username exists in DB
    if(result.rows.length){
      //username exists in DB AND password matches
      if (username === result.rows[0].username && password === result.rows[0].password){
        res.locals.user = {login: true};
        return next()
      //username exists in DB BUT password does not match
      }else if (password !== result.rows[0].password){
        res.locals.user = {login: false};
        return next()
        }
    }else{
      //username does not exist
      res.locals.user = {login: false};
      return next()
    }
  });
}

//create functionality for adding a username password pair
userController.addUser = (req, res, next) => {
  //interact with DB here
  const { username, password } =  req.body;
  console.log('New User: ', username, password);
  if (!username || !password){
    return next('Missing username or password in userController.creatUser');
  }

  const insertQuery = 'INSERT INTO usertable ( username, password ) VALUES ($1, $2 )';
  db.query(insertQuery, [ username, password ], (err, result)=>{
    if(err){
      return next('error in addUser db.query', err)
    }else{
      res.locals.added = {added: true};
      return next();
    }
  })
}

module.exports = userController;