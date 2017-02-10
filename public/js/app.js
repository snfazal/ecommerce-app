
angular.module('ecommerce-app')
  .controller('HomeController', HomeController)
  .controller('UsersController', UsersController)
  .controller('ProductsController', )


function HomeController($scope, $http) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
  });
}

function UsersController($http, $state, $scope, $rootScope){
  var self = this;

  function signup(userPass){
    $http.post('/users', userPass)
      .then(function(response){
        console.log(response)
        $state.go('index')
        // $scope.$emit('userLoggedIn', response.data.data);
      })
  }

  function login(userPass){
    $http.post('/users', userPass)
    .then(function(response){
      console.log(response)
      console.log('heyyyyy')
      $state.go('index')
    })
  }
  self.signup = signup;
  self.login = login;
}
