
angular.module('ecommerce-app')
  .controller('HomeController', HomeController)
  .controller('UsersController', UsersController)
  .controller('ProductsController', ProductsController)
  .controller('CartsController', CartsController)


function HomeController($scope, $http) {
  var self = this;

  //saves the user who just logged in to the home controller for use by other functions
  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    console.log(`${self.currentUser.username} logged in!`)
  });

  //if user logs out, clears currentUser
  $scope.$on('userLoggedOut', function(event){
    self.currentUser = null;
    console.log('User logged out!')
  })

  //if user adds or removes from cart, update front-end copy of the cart
  $scope.$on('updateCart', function(event, data){
    self.currentUser.cart = data;
    console.log('Updated Cart!')
  })
}

function UsersController($http, $state, $scope, $rootScope){
  var self = this;

  //sends data from signup form to backend in order to create a new user on DB
  function signup(currentUser){
    $http.post('/users', currentUser)
      .then(function(response){
        console.log('New User signed up: ', response.data.currentUser);
        //sends the update to the CartsController for currentUser's cart
        $scope.$emit('userLoggedIn', response.data.currentUser);
        $state.go('index')
      })
  }

  //takes user to profile page

  function profile(currentUser) {
    $http.get(`/users/${currentUser._id}`)
      .then(function(response){
        console.log('Profile route: ', response)
        $state.go('profile', {userId: currentUser._id});
      })
  }

  function updateProfile(currentUser){
    console.log(self.newUsername)
    $http.patch(`/users/${currentUser._id}`, {username: self.newUsername})
      .then(function(response){
        console.log('updated profile', response)
      })
  }

  //Gets the products currently stored in the currentUser's cart and sends them to HomeController in order to update currentUser

  function cart(currentUser) {
    $http.get(`/users/${currentUser._id}/cart`)
    .then(function(response){
      $scope.$emit('updateCart', response.data.cart);
      $state.go('cart', {userId: currentUser._id})
    })
  }

  //sends login credentials to backend in order to verify correct email and pass entered

  function login(currentUser){
    $http.post('/sessions/login', currentUser)
    .then(function(response){
      console.log('User logged in: ', response.data.currentUser)
      $state.go('index')
      $scope.$emit('userLoggedIn', response.data.currentUser);
    })
  }

  //deletes current req.session cookie, logging out user
  function logout() {
    $http.delete('/sessions')
      .then(function(response) {
        $scope.$emit('userLoggedOut');
        $state.go('index');
     });
  }

  // self.checkout = checkout;
  self.logout = logout;
  self.signup = signup;
  self.login = login;
  self.profile = profile;
  self.updateProfile = updateProfile;
}


function ProductsController($scope, $http, $state, $rootScope){
    var self = this;


    //on click will take user to specific product page
  function showProducts(){
    $http
    .get('/products/')
    .then(function(response){
      console.log(response);
      console.log('hit rouuute');
      self.allProducts = response.data.products
    });
  }
  showProducts();

  self.showProducts = showProducts;
}

function CartsController($scope, $http, $state, $rootScope){
  var self = this;

  //will add currentUser's selected product to cart
  function addToCart(product, currentUser){
    $http
    .post(`/users/${currentUser._id}/cart/${product._id}/add`, {userId: currentUser._id, quantity: self.quantityToBuy})
    .then(function(response){
      self.cart = response.data.cart;
      findTotal();
      $scope.$emit('updateCart', self.cart);
    })
  }

  //removes currentUser's items from cart
  function removeFromCart(product, currentUser){
    $http.delete(`users/${currentUser._id}/cart/${product._id}/delete`)
    .then(function(response){
      self.cart = response.data.cart;
      findTotal();
      $scope.$emit('updateCart', self.cart);
      $state.go('cart', {userId: currentUser._id})
    })
  }

  //update quantity of item in cart
  function updateQuantity(product, currentUser){
    $http.patch(`users/${currentUser._id}/cart/${product._id}`, {quantityToBuy: self.quantityToBuy})
    .then(function(response){
      self.cart = response.data.cart;
      findTotal();
      $scope.$emit('updateCart', self.cart);
      $state.go('cart', {userId: currentUser._id})
    })
  }

  //sums the subtotals (item price * item quantity) for each item and attaches variable to self.cart

  function findTotal(){
    var cart = self.cart;
    var subtotal = 0
    cart.forEach(function(product){
      subtotal += (product.product.price * product.quantity)
    })
    self.cart.totalPrice = subtotal
  }

  //Gets the products currently stored in the currentUser's cart and sends them to HomeController in order to update currentUser

  function getCart(currentUser) {
    $http.get(`/users/${currentUser._id}/cart`)
    .then(function(response){
      self.cart = response.data.cart;
      findTotal();
      $scope.$emit('updateCart', self.cart);
      $state.go('cart', {userId: currentUser._id})
    })
  }

  //clears cart contents and directs to thankyou page
  function checkout(currentUser) {
    $http.delete(`/users/${currentUser._id}/cart`)
    .then(function(response){
      $state.go('thank_you')
    })
  }

  self.addToCart = addToCart;
  self.removeFromCart = removeFromCart;
  self.updateQuantity = updateQuantity;
  self.findTotal = findTotal;
  self.getCart = getCart;
  self.checkout = checkout;
}
