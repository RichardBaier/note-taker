const path = require('path');
const router = require('express').Router();
const fs = require('fs');

var uniqid = require('uniqid');


router.get('/notes', (req, res) => {
    let data = fs.readFileSync("./db/db.json", "utf8");

    res.json(JSON.parse(data));
})

router.post('/notes', (req, res) => {

})

router.delete('/notes/:id', (req, res) => {

})