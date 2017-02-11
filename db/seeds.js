var mongoose = require('mongoose');
var Product = require('../models/Product.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/ecommerce-app');

var products = [{
        name: 'Toilet Paper',
        img: 'https://cdn.thisiswhyimbroke.com/images/donald-trump-toilet-paper.jpg',
        price: 1,
        quantity: 10
    },
    {
        name: 'Paper Towels',
        img: 'http://ghk.h-cdn.co/assets/cm/15/11/54feec62af58e-ghk-bounty-paper-towel-xl.jpg',
        price: 2,
        quantity: 100
    },
    {
        name: 'Hat',
        img: 'https://ae01.alicdn.com/kf/HTB1B4VQKpXXXXbBXFXXq6xXFXXXT/Donald-font-b-Trump-b-font-font-b-Hat-b-font-Make-America-Great-Again-font.jpg',
        price: 10,
        quantity: 100
    },
    {
        name: 'Sunglasses',
        img: 'https://brobible.files.wordpress.com/2016/06/classic-polarized-wayfarer-sunglasses.jpg?quality=90&w=650',
        price: 50,
        quantity: 2
    },
    {
        name: 'T-Shirt',
        img: 'https://files.slack.com/files-pri/T0351JZQ0-F444BMYN6/mcga3827-black-at.jpg',
        price: 10,
        quantity: 10
    },
    {
      name: 'Chia Pet',
      img: 'https://files.slack.com/files-tmb/T0351JZQ0-F446ZU51B-35e53f7d4d/pasted_image_at_2017_02_10_04_05_pm_360.png',
      price: 15,
      quantity: 2
    },
    {
      name: 'Candle',
      img: 'https://files.slack.com/files-tmb/T0351JZQ0-F44QDKLS2-3e9f735c49/il_570xn.1039253913_6i2k_480.jpg',
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
