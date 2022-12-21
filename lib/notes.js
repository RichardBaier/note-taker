const fs = require('fs');
const path = require('path');

function validateNote(note){
    if (!note.title || typeof note.title !== 'string'){
        return false;
    }
    if (!note.text || typeof note.text !== 'string'){
        return false;
    }
    if (!note.id || typeof note.id !== 'string'){
        return false;
    }
    return true;
}

function createNewNote(body, noteArray){
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray}, null, 2)
    );
    return note;
}

function overwriteDb(obj){
    const note = obj;

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: obj}, null, 2)
    );

    return note;
}

module.exports = {
    validateNote,
    createNewNote,
    overwriteDb
}