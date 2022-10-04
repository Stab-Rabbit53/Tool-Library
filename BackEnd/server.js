const express = require('express');
const app = express();
const path = require('node:path');

//importing controllers 
const userController = require('./Controllers/user-controller')      
const userRoute = require('./Routes/user-route')
const itemRoute = require('./Routes/item-router')

app.use(express.json());

// handle sign up and login functionalities 
app.use('/api/user/items', itemRoute);
app.use('/api/user', userRoute);

//global error handler
app.use('/', 
  (err, request, response) => {
    response.status(400).send('Server had a misc middleware error: ' + err)
});

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});