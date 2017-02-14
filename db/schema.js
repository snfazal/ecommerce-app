var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var FeedbackSchema = new Schema({
  comment: String,
  author: String
})

var ProductSchema = new Schema({
  name: String,
  img: String,
  categories: [String],
  price: Number,
  quantity: Number,
  feedback: [FeedbackSchema]
})


var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  favorited_products: [ProductSchema],
  cart: [{
    product: ProductSchema,
    quantity: Number
  }],
  previous_purchases: [{
    product: ProductSchema,
    quantity: Number
  }],
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
var ProductModel = mongoose.model('Product', ProductSchema);
var FeedbackModel = mongoose.model('Feedback', FeedbackSchema);

module.exports = {
  User: UserModel,
  Product: ProductModel,
  Feedback: FeedbackModel
}
