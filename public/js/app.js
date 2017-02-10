console.log('js connected')

angular.module('myApp');


  .controller('MainController', MainController)
  .controller('AuthController', AuthConroller)

   function MainController($http, $scope) {

      var self = this;

      $scope.$on('userLoggedIn', function(event, data){
        self.currentUser = data;
      });

    }

    function AuthController($http, $state, $scope) {
      var self = this;

    function signup(userPass) {
      $http.post('/users', userPass)
      .then(function(response){
        $state.go('login');
      });
    }

    }
