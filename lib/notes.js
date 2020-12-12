fs = require('fs');
const { dirname } = require('path');
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
  JSON.stringify(notesArray, null, 2)
);
};

module.exports = {readNotes,writeNotes}