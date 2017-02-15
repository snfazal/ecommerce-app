var mongoose = require('mongoose');
var Product = require('../models/product.js');

mongoose.Promise = global.Promise;

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/ecommerce-app';
mongoose.connect(mongoURI)

var products = [{
        name: 'Meltdown Muffins',
        img: 'http://www.ambitiouskitchen.com/wp-content/uploads/2013/03/5-IMG_8682.jpg',
        price: 1,
        quantity: 10
    },
    {
        name: 'Debugging Cups',
        img: 'http://www.macro-chef.com/wp-content/uploads/2015/01/DSC_2261-1024x692.jpg',
        price: 2,
        quantity: 100
    },
    {
        name: 'Java Juice',
        img: 'http://rabbitfoodformybunnyteeth.com/wp-content/uploads/2013/11/Juicing-for-Dummies-Homemade-Juice-Cleanse-17.jpg',
        price: 10,
        quantity: 100
    },
    {
        name: 'Power On Mix',
        img: 'http://www.cottercrunch.com/wp-content/uploads/2016/11/pumpkin-spice-trail-mix-slow-cooker-3-copy.jpg',
        price: 50,
        quantity: 2
    },
    {
        name: 'Goat Chalice',
        img: 'http://cdn.hiconsumption.com/wp-content/uploads/2014/12/Goat-Mug-01.jpg',
        price: 10,
        quantity: 10
    },
    {
      name: 'production bombs',
      img: 'http://www.chocolatecoveredkatie.com/wp-content/uploads/low-fat-chocolate-truffles_CCD6/truffles_thumb.jpg?x22297',
      price: 15,
      quantity: 2
    },
    {
      name: 'Elixir of Life',
      img: 'http://www.philzcoffee.com/images/sca/subscriptions.png',
      price: 5,
      quantity: 10
    }
];

Product.remove({})
    .then(function() {
        return Product.create(products);
    })
    .then(function(products) {
        console.log(products);
    })
    .then(function() {
        mongoose.connection.close(function() {
            console.log('New products seeded!');
        });
    });
