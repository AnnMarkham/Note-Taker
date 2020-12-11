const { db } = require('./db/db');
const router = require('express').Router();

//II.  API Routes

// II -1. GET/api/notes 
  //a. read db.json &
  //b.  return all saved notes as json

router.get('/notes', (req,res) => {
  console.log('get');
  console.log('notes');
  res.json();
});

// II -2.  POST/api/notes 
  //a. receive a new note to
  //b. save on the request body,  
      //** you will need a way to give each note a unique id when it is saved 
          // (look into npm packages that could do this for you)
          // or use the method that zookeeper used -- based on zookeper.length?
  //c. add it (new note) to the db.json file, and then
  //d. return the new note to the client

  


router.post('/notes', (req, res) => {
  const newNote = req.body;
  console.log('Post Success!');
  console.log(newNote);
});

//BONUS -  Handle Delete Requests
// III - DELETE/apio/notes: id
  //a. receives a query parameter containing the id of the note to delete. 
  //b. To delete a note:
      //i. readd all notes from the db.json file
      //ii. remove the note with the given id property
      //iii. rewrite the notes to the db.json file


module.exports = router;