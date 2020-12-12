// const { db } = require('./db/db');
const router = require('express').Router();

// const notes = require('../lib/notes.js');
//II.  API Routes 
  // import readNotes function from lib/notes.js
 const {readNotes, writeNotes} = require('../lib/notes.js');


// II -1. GET/api/notes 
  //a. read db.json (Create function (readNotes function in lib/notes.js); call in get function below).  &
  //b.  return all saved notes as json (update get function to res.join(result of readNotes function call))

router.get('/notes', (req,res) => {
  notes = readNotes(); // a.  call function created in notes.js
  res.json(notes); // b. return notes as json
});

// II -2.  POST/api/notes 
  //a. receive a new note to
  //b. save on the request body,  
      //** you will need a way to give each note a unique id when it is saved 
          //i.  (look into npm packages that could do this for you)
  //c. add it (new note) to the db.json file, and then
  //d. return the new note to the client

 router.post('/notes', (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

//BONUS -  Handle Delete Requests
// III - DELETE/apio/notes: id
  //a. receives a query parameter containing the id of the note to delete. 
  //b. To delete a note:
      //i. readd all notes from the db.json file
      //ii. remove the note with the given id property
      //iii. rewrite the notes to the db.json file


module.exports = router;