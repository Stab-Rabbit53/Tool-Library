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
    // db.query('SELECT * FROM usertable WHERE username is' +  req.body.usernmae, [params])
    //     .then
}


//create functionality for adding a username password pair
userController.addUser = (req, res, next) => {
    //interact with DB here
}

module.exports = userController;