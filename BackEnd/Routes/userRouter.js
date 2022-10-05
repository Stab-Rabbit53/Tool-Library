const express = require('express');
const router = express.Router();
const {
  verifyUser, 
  addUser
} = require('../Controllers/userController')

router.get('/login',  (req, res, next) => {
  res.status(200)
});

router.post('/signup',  (req, res, next) => {
  res.status(200)
})

module.exports = router;