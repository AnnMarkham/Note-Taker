fs = require('fs');

const path = require('path');

const readNotes = () =>{
 const dbData = fs.readFileSync(
        path.join(__dirname, '../db/db.json'),
  );
  return JSON.parse(dbData);
};

const writeNotes = (notesArray) =>{
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray , null, 2)
      );
    };


function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}


module.exports = {readNotes,writeNotes,findById};