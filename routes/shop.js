const path =require('path')
const express = require('express');
const req = require('express/lib/request');

const productsControllers = require('../controllers/products');

const router = express.Router();


router.get('/', productsControllers.getProducts);

module.exports = router;
