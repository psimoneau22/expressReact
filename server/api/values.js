const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => resp.json({ test: 'passed'}));

module.exports = router;