var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js');
var User = require('../models/user.js');
// var Product = require('../models/product.js')


router.get('/', function(req, res){
  console.log('hit users controller!')
})


module.exports = router;
