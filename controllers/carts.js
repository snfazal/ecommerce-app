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
    })
  })
})


module.exports = router;
