angular.module('ecommerce-app')
  .controller('HomeController', HomeController)
  .controller('UsersController', UsersController)

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
}
