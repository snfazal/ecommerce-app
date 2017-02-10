var express = require('express');
var router = express.Router({mergeParams: true});
var authHelpers = require('../helpers/auth.js');
var User = require('../models/user.js');
// var Product = require('../models/product.js')

//CREATE A NEW USER ROUTE - uses bcrypt inside of auth helper middleware to scramble password and then saves new user with email, username and scrambled password
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password_digest: res.hashedPassword
  });

  user.save(function(err, user){
    if(err) console.log(err);

    console.log('saving user')
    console.log(user);

    //log-in newly created user
    req.session.currentUser = user;
    res.json({status: 201, message: "New user created", currentUser: req.session.currentUser})
  });
});

//GET USER DETAILS - accessed by clicking the 'profile' button in top right and only accessible by logged in users
router.get('/:id', authHelpers.authorize, function(req, res){
  User.findById(req.params.id)
    .exec(function(err, user){
      if(err) console.log(err);

      console.log(user);
      res.json({user})
    });
});

module.exports = router;
