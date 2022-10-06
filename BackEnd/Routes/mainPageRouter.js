const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

//Get Requests for entire Items Lists on Component Mounting
router.post('/ownerItemsList', itemController.getOwnerItemsList, (req, res) => {
  res.status(200).json(res.locals.itemList);
});

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
router.post('/addItem', itemController.addItem, (req, res) => {
  res.status(200).end();
});

//delete from database
router.delete(
  '/deleteItem',
  itemController.deleteItem,
  itemController.getOwnerItemsList,
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

router.patch(
  '/returnItem',
  itemController.returnItem,
  itemController.getBorrowedItemsList,
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

//SHOULE BE A PATCH INSTEAD OF POST
router.patch(
  '/borrowItem',
  itemController.borrowItem,
  itemController.getGlobalItemsList,
  (req, res) => {
    res.status(200).json(res.locals.itemList);
  }
);

module.exports = router;
