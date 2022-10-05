const express = require('express');
const app = express();
//const path = require('path');

//importing routers
const mainPageRouter = require('./Routes/mainPageRouter');
const userRouter = require('./Routes/userRouter');

app.use(express.json());

//any call to '/api' will get routed to this server
//define routes
app.use('/api/mainPage', mainPageRouter);
app.use('/api/user', userRouter);


//global error handler
app.use('/', 
  (err, req, res) => {
    res.status(400).send('Server had a misc middleware error: ' + err)
});

app.listen(3000, () => {
  console.log('Server is Listening on port 3000');
});