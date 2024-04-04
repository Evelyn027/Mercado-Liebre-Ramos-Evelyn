const path = require('node:path');
const express = require('express');
const router = express.Router();

/*---Creo el homeC... ---*/
const homeController = require('../controllers/homeController.js');
/* router.get('/', (req, res) =>{
    const pathHome = path.join(__dirname, '../views/home.html');
    res.sendFile(pathHome);
}) */
router.get('/', homeController.renderHome);

module.exports = router;