var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.get('/', function(req, res){
  console.log('hit session controller!')
})


module.exports = router;
