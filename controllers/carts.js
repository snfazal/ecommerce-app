var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Cart = require('../models/cart.js')
var Product = require('../models/product.js')

//ADD PRODUCT TO SHOPPING CART - When buy button clicked on product index route, add clicked item to cart... basically its searching for both a product by the url params and a user by the passed userId, then pushing the product into the cart array





router.post('/:productId/add', function(req, res){
  Product.findById(req.params.productId)
  .exec(function(err, product){
    if(err) console.log(err);

    var matchedproduct

    User.findById(req.session.currentUser._id)
    .exec(function(err, user){
      user.cart.forEach(function(item) {
        console.log(item.product.id == req.params.productId)
        if(item.product.id == req.params.productId){
          matchedproduct = item;
        }
      })
      console.log("########## CONSOLE LOGGING FROM THIS THING ###########", matchedproduct)
    })


    User.update({_id: req.session.currentUser._id}, {
      $push: {
        cart: {
          product: product,
          quantity: req.body.quantity
        }
      }
    })
    .exec(function(err, success){
      if(err) console.log(err);
      res.json({success, message: `Added ${product.name} successfully`})
    });
  });
});


//GET CART CONTENTS - get cart contents for current user
router.get('/', function(req, res){
  User.findById(req.session.currentUser._id)
  .exec(function(err, user){
    if(err) console.log(err);

    res.json({cart: user.cart})
  })
})

//removes currentUser's items from cart
router.delete('/:productId/delete', function(req, res){
  User.findById(req.session.currentUser._id)
  .exec(function(err, user){
    if(err) console.log(err);
    var product = user.cart.id(req.params.productId)
      product.remove();
    user.save();
    res.json({cart: user.cart})
  })
})


module.exports = router;
