const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

//Get Requests for entire Items Lists on Component Mounting
router.post('/ownerItemsList', 
  itemController.getOwnerItemsList, 
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

router.get(
  '/globalItemsList',
  itemController.getGlobalItemsList,
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

router.post(
  '/borrowedItemsList',
  itemController.getBorrowedItemsList,
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

//Request Endpoints for buttons to modify data in itemtable
//we might need to add middleware to re query db to set context
router.post('/addItem', 
  itemController.addItem,
  (req, res) => {
    res.status(200).end();
  }
);

//delete from database
router.delete(
  '/deleteItem',
  itemController.deleteItem,
  (req, res) => {
    res.status(200).end();
  }
);

router.patch(
  '/returnItem',
  itemController.returnItem,
  (req, res) => {
    res.status(200).end();
  }
);


router.patch(
  '/borrowItem',
  itemController.borrowItem,
  (req, res) => {
    res.status(200).end();
  }
);

module.exports = router;
