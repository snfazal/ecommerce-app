
angular.module('ecommerce-app')
  .controller('HomeController', HomeController)
  .controller('UsersController', UsersController)
  .controller('ProductsController', ProductsController)


function HomeController($scope, $http) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    console.log(`${self.currentUser.username} logged in!`)
  });

  $scope.$on('userLoggedOut', function(event){
    self.currentUser = null;
    console.log('User logged out!')
  })
}

function UsersController($http, $state, $scope, $rootScope){
  var self = this;

  function signup(currentUser){
    $http.post('/users', currentUser)
      .then(function(response){
        console.log('New User signed up: ', response.data.currentUser);
        $scope.$emit('userLoggedIn', response.data.currentUser);
        $state.go('index')
      })
  }

  function profile(currentUser) {

    $http.get(`/users/${currentUser._id}`)

      .then(function(response){

      // console.log(response)
      // $state.go('profile', {userId: currentUser._id});

        console.log('Profile route: ', response)
        console.log(currentUser.cart)
        $state.go('profile', {userId: currentUser._id});

      })
  }

  function login(currentUser){
    $http.post('/sessions/login', currentUser)
    .then(function(response){
      console.log('User logged in: ', response.data.currentUser)
      $state.go('index')
      $scope.$emit('userLoggedIn', response.data.currentUser);
    })
  }

  function logout() {
    $http.delete('/sessions')
      .then(function(response) {
        $scope.$emit('userLoggedOut');
        $state.go('index');
     });
  }


  self.logout = logout;
  self.signup = signup;
  self.login = login;
  self.profile = profile;
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

  //will add currentUser's selected product to cart
  function addToCart(product, currentUser){
    $http
    .post(`/users/${currentUser._id}/cart/${product._id}/add`, {userId: currentUser._id, quantity: 2})
    .then(function(response){
      console.log('add to cart route ')
    })
  }

  //shows currentUser's product inside cart function
  function showCart(currentUser){
    $state.go('cart', {userId: currentUser._id})
  }

  //removes currentUser's items from cart
  function removeCart(currentUser){
    $state.go('cart', {userId: currentUser._id})
  }

  self.showProducts = showProducts;
  self.addToCart = addToCart;
  self.showCart = showCart;
}
