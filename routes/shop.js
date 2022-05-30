const path =require('path')
const express = require('express');
const req = require('express/lib/request');

const rootDir= require('../util/path')
const adminData = require('./admin');

const router = express.Router();


router.get('/', (req, res, next) => {
  console.log('array',adminData.products);
  const products=adminData.products
  // res.sendFile(path.join(rootDir,'views','shop.html'));
  res.render('shop',{prods:products,docTitle:'Shop', path:'/'})
});

module.exports = router;
