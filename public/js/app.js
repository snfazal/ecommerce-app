
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
    var list = this;

  function addToCart(product, currentUser){
    $http.post(`/users/${currentUser._id}/carts/${product._id}/add`, {userId: currentUser._id, quantity: 2})
    .then(function(response){
      console.log(response)
    })
  }

}
