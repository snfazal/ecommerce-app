


























// 
// angular.module('ecommerce-app')
//   .controller('HomeController', HomeController)
//   .controller('UsersController', UsersController)
//   .controller('ProductsController', ProductsController)
//   .controller('CartsController', CartsController)
//
//
// function HomeController($scope, $http) {
//   var self = this;
//
//   //saves the user who just logged in to the home controller for use by other functions
//   $scope.$on('userLoggedIn', function(event, data){
//     self.currentUser = data;
//     console.log(`${self.currentUser.username} logged in!`)
//   });
//
//   //if user logs out, clears currentUser
//   $scope.$on('userLoggedOut', function(event){
//     self.currentUser = null;
//     console.log('User logged out!')
//   })
//
//   //if user adds or removes from cart, update front-end copy of the cart
//   $scope.$on('updateCart', function(event, data){
//     self.currentUser.cart = data;
//     console.log('Updated Cart!')
//   })
// }
//
// function UsersController($http, $state, $scope, $rootScope){
//   var self = this;
//
//   //sends data from signup form to backend in order to create a new user on DB
//   function signup(currentUser){
//     $http.post('/users', currentUser)
//       .then(function(response){
//         console.log('New User signed up: ', response.data.currentUser);
//         //sends the update to the CartsController for currentUser's cart
//         $scope.$emit('userLoggedIn', response.data.currentUser);
//         $state.go('index')
//       })
//   }
//
//   //takes user to profile page
//
//   function profile(currentUser) {
//     $http.get(`/users/${currentUser._id}`)
//       .then(function(response){
//         console.log('Profile route: ', response)
//         $state.go('profile', {userId: currentUser._id});
//       })
//   }
//
//
//
//   //Gets the products currently stored in the currentUser's cart and sends them to HomeController in order to update currentUser
//
//   function cart(currentUser) {
//     $http.get(`/users/${currentUser._id}/cart`)
//     .then(function(response){
//       $scope.$emit('updateCart', response.data.cart);
//       $state.go('cart', {userId: currentUser._id})
//     })
//   }
//
//
//   //sends login credentials to backend in order to verify correct email and pass entered
//
//   function login(currentUser){
//     $http.post('/sessions/login', currentUser)
//     .then(function(response){
//       console.log('User logged in: ', response.data.currentUser)
//       $state.go('index')
//       $scope.$emit('userLoggedIn', response.data.currentUser);
//     })
//   }
//
//   //deletes current req.session cookie, logging out user
//   function logout() {
//     $http.delete('/sessions')
//       .then(function(response) {
//         $scope.$emit('userLoggedOut');
//         $state.go('index');
//      });
//   }
//
//
//   self.logout = logout;
//   self.signup = signup;
//   self.login = login;
//   self.profile = profile;
//   self.cart = cart
// }
//
//
// function ProductsController($scope, $http, $state, $rootScope){
//     var self = this;
//
//
//     //on click will take user to specific product page
//   function showProducts(){
//     $http
//     .get('/products/')
//     .then(function(response){
//       console.log(response);
//       console.log('hit rouuute');
//       self.allProducts = response.data.products
//     });
//   }
//   showProducts();
//
//   self.showProducts = showProducts;
// }
//
// function CartsController($scope, $http, $state, $rootScope){
//   var self = this;
//
//   //will add currentUser's selected product to cart
//   function addToCart(product, currentUser){
//     $http
//     .post(`/users/${currentUser._id}/cart/${product._id}/add`, {userId: currentUser._id, quantity: self.quantityToBuy})
//     .then(function(response){
//       console.log('add to cart route ', response)
//     })
//   }
//
//   //removes currentUser's items from cart
//   function removeFromCart(product, currentUser){
//     $http.delete(`users/${currentUser._id}/cart/${product._id}/delete`)
//     .then(function(response){
//       $scope.$emit('updateCart', response.data.cart);
//       $state.go('cart', {userId: currentUser._id})
//     })
//   }
//
//   //update quantity of item in cart
//   function updateQuantity(product, currentUser){
//     $http.patch(`users/${currentUser._id}/cart/${product._id}`, {quantityToBuy: self.quantityToBuy})
//     .then(function(response){
//       $scope.$emit('updateCart', response.data.cart);
//       $state.go('cart', {userId: currentUser._id})
//     })
//   }
//
//
//   self.addToCart = addToCart;
//   self.removeFromCart = removeFromCart;
//   self.updateQuantity = updateQuantity;
// }
