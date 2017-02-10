var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var FeedbackSchema = new Schema({
  comment: String,
  author: String
})

var ProductSchema = new Schema({
  name: String,
  photo_url: String,
  categories: [String],
  price: Number,
  quantityInStock: Number,
  feedback: [FeedbackSchema]
})

var CartSchema = new Schema ({
  products: [{
    product: ProductSchema,
    quantityInCart: Number
  }]
})

var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  favorited_products: [ProductSchema],
  cart: CartSchema,
  previous_purchases: [CartSchema],
  created_at: Date,
  updated_at: Date
});

UserSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var UserModel = mongoose.model('User', UserSchema);
var CartModel = mongoose.model('Cart', CartSchema);
var ProductModel = mongoose.model('Product', ProductSchema);
var FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

module.exports = {
  User: UserModel,
  Cart: CartModel,
  Product: ProductModel,
  Feedback: FeedbackModel
}
