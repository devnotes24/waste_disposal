const express = require('express');

const router = express.Router();

router.use('/regLoginRt', require('./regLoginRt'));
router.use('/gMapRt', require('./gMapRt'));

module.exports = router;
