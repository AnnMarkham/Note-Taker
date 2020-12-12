//After create api& html routes:
const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes =require ('./routes/htmlRoutes');

const express = require('express');

//create route that the front-end can request data from
// const { db } = require('./db/db');

const PORT = process.env.PORT|| 3002

//assign express() to app variable so can later chain on other methods to Express.js server.
const app= express();

const fs = require ('fs');
const path = require('path');

//Express middleware
app.use(express.urlencoded({ extended: true }));
//parse incoming json data
app.use(express.json());

//rel paths to routes  --- uncomment after routes are added
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));


//chain listen method onto app variable to make Express.js server listen
app.listen(PORT, () =>{
  console.log (`API server now on port ${PORT}!`)
});

