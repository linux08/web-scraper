const express = require('express');
const router = express.Router();
const Scraper = require('./controllers/scraper.js');

router.get('/snapshot', Scraper.getScreenShot);

router.post('/sendemail', Scraper.sendEmail);


module.exports = router;