'use strict';

const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index-controller');


router.get('/products', indexController.get );

module.exports = router;