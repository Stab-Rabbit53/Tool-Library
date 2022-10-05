const db = require('../Models/model.js');
//require('dotenv').config();
//const fetch = require('node-fetch');
//import database here

  //get data about tool from req.body
  //req.body should be an object with 
	/*
		{
			name: 'string',
			description: 'string',
			neighborhood: 'string',
      borrowed: 'string',
			_owner: 'string username of owner'
		}
	*/

const itemController = {};

//Controllers for getting Item Lists
itemController.getOwnerItemsList = (req, res, next) => {
  //req.body should include the username
  const {username} = req.body;
  const itemQuery = 'SELECT * FROM itemtable WHERE _owner = $1';
  const value = [username];
  db.query(itemQuery, value, (err, result) => {
    if(err) return next('error in getOwnerItemsList query');
    res.locals.itemList = result.rows;
    return next();
  })
}

itemController.getGlobalItemsList = (req, res, next) => {
	//we will have to test this WHERE condition where borrowed = "", might have to test the syntax here. Might use IS NULL
  db.query("SELECT * FROM itemtable WHERE borrowed = ''", (err, result) => {
    if(err) return next('error in getGlobalItemsList query')
  	res.locals.itemList = result.rows;
    return next()
  })
}

itemController.getBorrowedItemsList = (req, res, next) => {
  const {username} = req.body;
  const borrowedQuery = 'SELECT * FROM itemtable WHERE borrowed = $1'
  const value = [username];
  db.query(borrowedQuery, value, (err, result) => {
    if(err) return next('error in getBorrowedItemsList query');
    res.locals.itemList = result.rows;
    return next();
  })
}


//Controllers for CRUD on itemtable
itemController.addItem = (req, res, next) => {
	const { name, description, neighborhood, username } = req.body;
	const queryString = 'INSERT INTO itemtable (name, description, neighborhood, _owner, borrowed) ' + 
	'VALUES ($1, $2, $3, $4, $5)'
	const values = [name, description, neighborhood, username, '']
	db.query(queryString, values, (err, result) => {
		if (err) {
			console.log('error in addItem query')
			return next(err)
		}
		return next();
	})
}

itemController.deleteItem = (req, res, next) => {
  //interact with DB here
  const { id } = req.body;
  const queryString = 'DELETE FROM itemtable WHERE id = $1'
  const values = [id];
  db.query(queryString, values, (err, result) => {
    if (err) {
      console.log('error in deleteItem query');
      return next(err);
    }
		return next();
  })
}

itemController.returnItem = (req, res, next) => {
	const { id } = req.body;
	const queryString = "UPDATE itemtable SET borrowed = '' WHERE id = $1"
	const values = [id];
	db.query(queryString, values, (err, result) => {
		if (err) {
      console.log('error in returnItem query');
      return next(err);
    }
		return next();
	})
}

itemController.borrowItem = (req, res, next) => {
	const { username, id } = req.body;
	const queryString = 'UPDATE itemtable SET borrowed = $1 WHERE id = $2'
	const values = [username, id];
	db.query(queryString, values, (err, result) => {
		if (err) {
      console.log('error in borrowItem query');
      return next(err);
    }
		return next();
	})
}
module.exports = itemController;