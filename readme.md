
# What is it nerd-crunch?

An eCommerce application to sell prime products that fuel programmers around the globe.


### What does it do?

nerd-crunch lets users buy custom products that aid in their belief to fuel their bodies while fueling their minds everyday. We let users buy simple products while making it easy to add items to their cart, edit their carts and make purchases when they need them most.

**navbar visible from all pages**

  - link to cart
  - link to homepage (logo)
  - link to sign in page

1. **Homepage**
  - can view all products for sale
    - main product picture
    - link to add to cart
    - basic info - price, name, in stock/out of stock

3. **Login page** - When user attempts to checkout or access user page and are not logged in, redirect here
  - link to signup page for new users
  - login form

4. **Signup page**
  - signup form
    - username or email
    - password

5. **Profile page**
  - link to add additional email address in order to better contact customer for purchase delivery

7. **Cart page**
  - change quantity for items in cart
  - removes all items from cart
  - link to checkout and

8. **Checkout page**
  - totals price + tax
  - link to payment page (Reach goal - MVP will just give confirmation message of purchase)

### What value does it provide end users?
  Purchases made simple

### Are you thinking of using any API’s?
  Paypal? Amazon? Etsy? Maybe?

#Technologies Used

nerd-crunch is built using Javascrip, MongoDB, Express, Angular.js, and Node.js. This full CRUD MEAN stack application is structured with RESTful routes.

#Approach Taken

At first we started by taking into consideration the best way to utilize the features of an application that could create, read, update and destroy. eCommerce platforms are a complex way to monetize full CRUD applications, they're fun and interesting too.

Once we had our base model, we worked around the details by creating wireframes of our ideal eCommerce app. Wireframes turned into user stories as we found ourselves inside the mindset of a user. Using GitHub we were able to create user stories, identify technologies and even divide [tasks](https://github.com/snfazal/ecommerce-app/issues).

Choosing to focus on tasks we were weaker in handling helped push us through the project. So the execution of some features took pair-programming, precise scheduling, and lots of communication in order to get to production.

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

#Reach Goals

- be able to favorite items and have them save for review or purchase in the future
- be able to view items for sale by their category
- let users review products and give feedback to the seller
- let users search for items via a search bar
- let users save previous purchases to reference
- let users modify their user profiles

#Unsolved Bugs



#Final Thoughts

This project really helped us visualize what it takes to monetize an application for end users. There were several battles we faced through the planning period that helped us get through the development process. One of the main battles was the checkout cart and how we wanted the checkout to work specifically for ease of purchase. 
