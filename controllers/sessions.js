var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var authHelpers = require('../helpers/auth.js');

router.post('/login', authHelpers.loginUser, function(req, res){
  res.json({status: 200, currentUser: req.session.currentUser});
});

router.delete('/', function(req, res){
  req.session.destroy(function() {
    res.json({status: 204, message: 'User logged out'});
  });
});

module.exports = router;
