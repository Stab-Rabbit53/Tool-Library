const express = require('express');
const router = express.Router();

const userController = require('../Controllers/userController');

router.post('/login', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/signup', userController.addUser, (req, res) => {
  res.status(200).json(res.locals.added);
});

module.exports = router;
