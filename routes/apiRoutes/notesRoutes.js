const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { validateNote, createNewNote, overwriteDb } = require('../../lib/notes');
var { notes } = require('../../db/db');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not formatted properly');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note); 
    }
});

router.delete('/notes/:id', (req, res) => {
    const results = notes.filter(dat => dat.id !== req.params.id)

    overwriteDb(results);
    notes = results;
    res.sendStatus(200);
})

module.exports = router;