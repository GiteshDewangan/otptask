const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/store', profileController.storeProfile);

module.exports = router;
