
angular.module('ecommerce-app')
  .controller('HomeController', HomeController)
  .controller('UsersController', UsersController)

function HomeController($scope, $http) {
  var self = this;

  $scope.$on('userLoggedIn', function(event, data){
    self.currentUser = data;
    console.log(`${self.currentUser.username} logged in!`)
  });
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
    $http.get(`/users/${currentUser._id}`, {currentUser: currentUser})
      .then(function(response){
        console.log(response)
        $state.go('profile', {userId: currentUser._id});
      })
  }

  self.signup = signup;
  self.profile = profile;
}
