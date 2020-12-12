// const { db } = require('./db/db');
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// const notes = require('../lib/notes.js');
//II.  API Routes 
  // import readNotes function from lib/notes.js
 const {readNotes, writeNotes, findById} = require('../lib/notes.js');


// II -1. GET/api/notes (When open page)
//a. read db.json (Create function (readNotes function in lib/notes.js); call in get function below).  &
 router.get('/notes', (req, res) => {
  notes = readNotes(); // a.  call function created in notes.js
//b.  return all saved notes as json (update get function to res.join(result of readNotes function call))
  res.json(notes); 
});

// get a saved note by id
router.get('/notes/:id', (req, res) => {
  notes = readNotes();      // call readNotes function created in notes.js & save value in notes variable
  const result = findById(req.params.id, notes);  //(call findById function created in notes.js -- filters notesArray for note.id)
  res.json(result);
}); 

// II -2.  POST/api/notes 
  //a. receive a new note to
  router.post('/notes', (req, res) => {  
  //b. save on the request body,       
  const newNote = req.body;                 
  //give each note a unique id when it is saved (look into npm packages that could do this for you) 
  newNote.id= uuidv4(); 
  //c. add it (new note) to the db.json file, and then  d. return the new note to the client
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

//BONUS -  Handle Delete Requests
// III - DELETE/api/notes: id
  //a. receives a query parameter containing the id of the note to delete. 
router.delete('/notes:id?', (req, res) => { 
     //b. To delete a note:
      //i. read all notes from the db.json filec
      const id = req.query.id;
  notes = readNotes();
      //ii. remove the note with the given id property
  newNotes = notes.filter(note => note.id != id);
      //iii. rewrite the notes to the db.json file
       writeNotes(newNotes);
  res.send(JSON.stringify(newNotes));
});


module.exports = router;