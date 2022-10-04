const express = require('express');
const databaseController = require('../Controllers/database-controller');
const userController = require('../Controllers/user-controller');

const router = express.Router();

router.post('/create', userController.createUser, databaseController.insertRecord, (req, res, next) => {
    console.log(`user ${res.locals.result} was created succesfully`);
    res.sendStatus(200);
})

router.post('/login', userController.loginUserBefore, databaseController.getRecords, userController.loginUserAfter, (req, res) => {
    res.status(200).send('testing login function');
  });

router.post('/signup', userController.createUser, databaseController.insertRecord, (req, res) => {
    res.status(200).send("Created user!");
})

module.exports = router;