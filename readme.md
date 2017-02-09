# What is it?
  E-Commerce store app
 
### What does it do?
  Allows sellers to:
   - create products
   - edit products (name, picture, price)
   - list their products for sale
   
  Allows users to:
   - view list of products for sale
   - add items from list to cart
   - checkout..
   
### What value does it provide end users?
  Easy interfacing between seller and user to make purchases simple

### Are you thinking of using any API’s?
  Paypal? Amazon? Etsy?

# Entity Relationship Diagram (ERD)
### User
  - username
  - email
  - password_digest (how do we hide this?)
  - account type (seller, user)
  - favorited items
  - items in cart 
  - payment option (how do we hide this?)
  - shipping info 

### Seller
  - products for sale
  
### Product
  - seller
  - category(ies)
  - price
  - quantity in stock
  
# Wireframes

[Homepage](https://wireframe.cc/pro/pp/f063f370365314)

[Product Index](https://wireframe.cc/pro/pp/8d5508bbe65316)

[Seller Page](https://wireframe.cc/pro/pp/f063f370365314)
