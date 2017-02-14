# What is nerd-crunch?
  E-Commerce store that sells prime products to fuel programmers around the globe. 

### What does it do?
**navbar visible from all pages**

  - link to cart
  - link to user profile
  - link to homepage
  - link to sign in page

1. **Homepage**
  - can view all products for sale
    - main product picture
    - link to add to cart
    - basic info - price, name, in stock/out of stock
    - clicking product links to product details page
  - search bar to search for products

2. **Products details page**
  - link to add to cart (with dropdown or field to enter quantity > 1)
  - quantity in stock, price
  - additional pictures
  - feedbacks/comments/questions...
  - ability to post new feedback

3. **Login page** - When user attempts to checkout or access user page and are not logged in, redirect here
  - if items in cart (from when they weren't logged in), items will be added to their cart
  - link to signup page for new users
  - login form

4. **Signup page**
  - signup form

5. **Profile page**
  - link to edit form for user
  - link to past purchases
  - personal info (address, shipping payment preferences etc)

6. **User edit page**
  - can edit login info (username, password)
  - can edit personal info (address, shipping payment preferences etc)

7. **Cart page**
  - change quantity for items in cart
  - remove items from cart
  - link to checkout

8. **Checkout page**
  - totals price + tax
  - link to payment page (Reach goal - MVP will just give confirmation message of purchase)

### What value does it provide end users?
  Purchases made simple

### Are you thinking of using any API’s?
  Paypal? Amazon? Etsy?

# Entity Relationship Diagram (ERD)
### User
```
 username: String,
 email: String,
 password_digest: String,
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
