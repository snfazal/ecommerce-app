
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
        console.log(response.data.currentUser);
        $scope.$emit('userLoggedIn', response.data.currentUser);
        $state.go('index')
      })
  }

  function profile(currentUser) {
    console.log(currentUser)
    $http.get(`/users/${currentUser._id}`)
      .then(function(response){
      console.log(response)
      $state.go('profile', {userId: currentUser._id});
      })
  }

  function login(userPass){
    $http.post('/sessions/login', userPass)
    .then(function(response){
      console.log(response)
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

    function
}
