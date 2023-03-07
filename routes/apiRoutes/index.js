const router = require('express').Router();
const notesRoutes = require('./notes');

router.use('/notes', notesRoutes);

module.exports = router;