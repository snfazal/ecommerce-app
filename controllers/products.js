var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
var Product = require('../models/product.js')

//GET ALL PRODUCTS - get all products that have been saved to the database (for use in showing them on partials/products/index)
router.get('/', function(req, res){
  Product.find({})
    .exec(function(err, products){
      if(err) console.log(err);
      console.log('Products from getAllProducts: ', products)
      res.json({products})
    })
})

//NEW PRODUCT - take data from front-end form and create a new product, then add to
router.post('/', function(req, res){
  var product = new Product({
    name: req.body.name,
    img: req.body.img,
    price: req.body.price,
    quantity: req.body.quantity
  })

  product.save(function(err, product){
    if(err) console.log(err);

    console.log('New product created in product post route: ', product);
    res.json({product});
  })
})

//

module.exports = router;
