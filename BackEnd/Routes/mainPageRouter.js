const express = require('express');
const router = express.Router();
const {
  addTool, 
  deleteTool, 
  getGlobalItemsList, 
  getUserItemsList
} = require('../Controllers/itemController');

/* use GET method when user is routed to endpoint ../userItemsList, 
passing in appropriate middleware to authenticate user and respond with user items data */
router.get('/userItemsList', (req, res, next) => {

})

/* use GET method when user is routed to endpoint ../globalItemsList, 
passing in appropriate middleware to respond with global items list data */
router.get('/globalItemsList', (req, res, next) =>{
  
})

router.post('/addTool', (req, res, next)=> {
  
})

router.delete('/deleteTool', (req, res, next) => {
  
})