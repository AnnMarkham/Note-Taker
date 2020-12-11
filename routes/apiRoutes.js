const { db } = require('./db/db');
const router = require('express').Router();

router.get('/notes', (req,res) => {
  console.log('get');
  console.log('notes');
});
