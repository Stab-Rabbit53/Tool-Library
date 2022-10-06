const express = require('express');
const app = express();
//const path = require('path');

//importing routers
const mainPageRouter = require('./Routes/mainPageRouter');
const userRouter = require('./Routes/userRouter');

app.use(express.json());


//define routes
app.use('/mainPage', mainPageRouter);
app.use('/user', userRouter);


//global error handler
app.use('/', 
  (err, req, res) => {
    console.log(err)
    res.status(400).send('Server had a middleware error: ' + err)
});

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});