//After create api& html routes:
//const apiRoutes= require('./routes/apiRoutes');
//const htmlRoutes =require ('./routes/htmlRoutes');

const express = require('express');
const { db } = require('./db/db');

const PORT = process.env.PORT|| 3001
const app= express();

const fs = require ('fs');
const path = require('path');


//parse incoming json data
app.use(express.json());

//rel paths to routes  --- uncomment after routes are added
//app.use('/api', apiRoutes);
//app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () =>{
  console.log (`API server now on port ${PORT}!`)
});

