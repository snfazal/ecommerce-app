# What is it?
  E-Commerce store app
 
### What does it do?
**navbar visible from all pages**

  - link to cart
  - link to user profile
  - link to homepage
  - link to sign in page
  
1. When user comes to site, they will see **homepage** (index)
  - can view all products for sale
    - main product picture
    - link to add to cart
    - basic info - price, name, in stock/out of stock
    - clicking product links to product details page
  - search bar to search for products
2. From **products details page**
  - link to add to cart (with dropdown or field to enter quantity > 1)
  - quantity in stock, price
  - additional pictures
  - feedbacks/comments/questions...
  - ability to post new feedback
3. When user attempts to checkout or access user page - **login page**
  - if items in cart (from when they weren't logged in), items will be added to their cart
4. From **profile page** 
  - can edit user info (username, password)
5. From **cart page**
  - change quantity for items in cart
  - remove items from cart
  - link to checkout
   
### What value does it provide end users?
  Easy interfacing between seller and user to make purchases simple

### Are you thinking of using any API’s?
  Paypal? Amazon? Etsy?

# Entity Relationship Diagram (ERD)
### User
```
 username: String,
 email: String,
 password_digest: String (how do we hide this?),
 favorited items: [productSchema],
 carts: [cartSchema]
```
  
### Product
```
 name: String,
 photo_url: String, 
 category(ies): [String],
 price: Number,
 quantityInStock: Number,
 feedback: [feedbackSchema]
```

### Feedback (subdoc of product)
```
 product_id: String,
 comment: String,
 author: String
```

### Cart
```
 items in cart [{
  product: productSchema,
  quantity: Number
 }]
 
```
  
# Wireframes

[Homepage](https://wireframe.cc/pro/pp/f063f370365314)

[Product Index](https://wireframe.cc/pro/pp/8d5508bbe65316)

[Seller Page](https://wireframe.cc/pro/pp/f063f370365314)

[Product Show Page](https://wireframe.cc/pro/edit/65514)
