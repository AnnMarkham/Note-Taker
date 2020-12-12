const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {readNotes, writeNotes, findById} = require('../lib/notes.js');  

//  GET/ Notes  (When open page)
//a. read db.json &  b.  return all saved notes as json 
 router.get('/notes', (req, res) => {
  notes = readNotes(); 
  res.json(notes); 
});

// GET a Saved note by id
router.get('/notes/:id', (req, res) => {
  notes = readNotes();     
  const result = findById(req.params.id, notes);  //(call findById function created in notes.js -- filters notesArray for note.id)
  res.json(result);
}); 

// POST Notes
  //receives a new note 
  router.post('/notes', (req, res) => {  
  //save note on the request body,       
  const newNote = req.body;                 
   newNote.id= uuidv4(); //give note unique id
  //add new note to the db.json file, and then  d. return the new note to the client
  notes.push(newNote);
  writeNotes(notes);
  res.json(newNote);
});

// BONUS - DELETE Notes
//receives a query parameter containing the id of the note to delete. 
router.delete('/notes:id?', (req, res) => { 
 const id = req.query.id;
 notes = readNotes();
 //remove the note with the given id property
  newNotes = notes.filter(note => note.id != id);
  //rewrite the notes to the db.json file
  writeNotes(newNotes);
  res.send(JSON.stringify(newNotes));
});

module.exports = router;
