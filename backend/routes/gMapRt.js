const express = require('express');
const router = express.Router();

const gMapCt = require('../Controller/gMapCt');

router.post('/nearby', gMapCt.gMap);
module.exports = router;