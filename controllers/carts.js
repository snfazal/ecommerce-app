var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Cart = require('../models/cart.js')
var Product = require('../models/product.js')

//ADD PRODUCT TO SHOPPING CART - When buy button clicked on product index route, add clicked item to cart... if product exists in cart, product is removed and readded with new quantity
router.post('/:productId/add', function(req, res){
  Product.findById(req.params.productId)
  .exec(function(err, product){
    if(err) console.log(err);


    var previousQuantity = 0

    User.findById(req.session.currentUser._id)

    .exec(function(err, user){
      user.cart.forEach(function(item) {
        console.log(item.product.id == req.params.productId)
        if(item.product.id == req.params.productId){
          matchedProduct = item;
          previousQuantity = item.quantity
          matchedProduct.remove();
        }
        user.save();
      })

      User.update({_id: req.session.currentUser._id}, {
        $push: {
          cart: {
            product: product,
            quantity: parseInt(previousQuantity) + parseInt(req.body.quantity)
          }

        }
    })

      .exec(function(err, success){
        if(err) console.log(err);
        res.json({cart: user.cart})
      });
    })
  });
});

//Update cart quantities - take quantity from update field on cart page, replace old quantity with new
router.patch('/:productId', function(req, res){
  User.findByIdAndUpdate(req.session.currentUser._id)
  .exec(function(err, user){
    if(err) console.log(err);
    var product = user.cart.id(req.params.productId)
      product.quantity = req.body.quantityToBuy
    user.save();
    res.json({cart: user.cart})
  })
})


//GET CART CONTENTS - get cart contents for current user
router.get('/', function(req, res){
  User.findById(req.session.currentUser._id)
  .exec(function(err, user){
    if(err) console.log(err);

    res.json({cart: user.cart})
  })
})

//removes deleted item from currentUser's cart
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
