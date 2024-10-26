const express = require('express');
const router = express.Router();
const { analyzeCode } = require('../controllers/codeController');

router.post('/analyze', analyzeCode);

module.exports = router;
