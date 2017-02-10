var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Product = require('../models/product.js')

//GET ALL PRODUCTS - get all products that have been saved to the database (for use in showing them on partials/products/index)
router.get('/', function(req, res){
  console.log('hit products controller!')
})


module.exports = router;
