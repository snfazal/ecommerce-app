
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
    console.log('User logged out!')
  })
}

function UsersController($http, $state, $scope, $rootScope){
  var self = this;

  function signup(userPass){
    $http.post('/users', userPass)
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

  function login(userPass){
    $http.post('/sessions/login', userPass)
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


    self.showProducts = showProducts;
    self.productsCreated = [];

    //on click will take user to specific product page
    function showProducts(){
      $http
      .get('/products/')
      .then(function(response){
        console.log(response);
        console.log('hit rouuute');
        self.allProducts = response.data.products
        // if(response.data.status === 401){return}
        $state.go('index');
      });
    }


  function addToCart(product, currentUser){
    $http.post(`/users/${currentUser._id}/cart/${product._id}/add`, {userId: currentUser._id, quantity: 2})
    .then(function(response){
      console.log('add to cart route ', response.message)
    })
  }

  function showCart(currentUser){
    $state.go('cart', {userId: currentUser._id})
  }

  self.addToCart = addToCart;
  self.showCart = showCart;
>>>>>>> 8ad1188080dd9670dc41fdf1399f33e24c696b9b
}
