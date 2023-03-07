const router = require('express').Router();
const { readAndAppend, readFromFile, writeToFile } = require('../../helpers/fsUtils');
var uuid = require('uuid');


router.get('/', (req, res) => {
  console.info(`${req.method} request received for notes`);

  readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
  console.info(`${req.method} request received to update notes`);

  const { title, text } = req.body;

  if(title && text) {
    const newNote = {
      title,
      text,
      id: uuid.v4(),
    };

    readAndAppend(newNote, './db/db.json');
    const response = {
      status: 'success',
      body: newNote,
    };
    res.json(response)
  }
  else {
    res.status(400).send('The note is not formatted properly');
  }
});

module.exports = router;