var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js');
var User = require('../models/user.js');
// var Product = require('../models/product.js')


router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if(err) console.log(err);

    console.log(user);
    res.json({status: 201, message: "New user created"})
  });
});




module.exports = router;
