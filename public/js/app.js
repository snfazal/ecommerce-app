console.log('js connected')
//sourced from angular_bucket_list_solution

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
      $http.get('/users', userPass)
      .then(function(response){
        $state.go('login');
      });
    }

    }
