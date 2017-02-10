// console.log('js connected')
//sourced from angular_bucket_list_solution
// 
// angular.module('myApp')
//   .controller('MainController', MainController)
//   .controller('AuthController', AuthConroller)
//
//    function MainController($http, $scope) {
//
//       var self = this;
//
//       $scope.$on('userLoggedIn', function(event, data){
//         self.currentUser = data;
//       });
//
//     }
//
//     function AuthController($http) {
//       var self = this;
//
//     function signup(userPass) {
//       $http.post('/', userPass)
//       .then(function(response){
//         $state.go('signup');
//       });
//     }
//
//     function signup(userPass){
//       $https
//       .get('/users')
//       .then(function(response){
//         console.log(response);
//         console.log(response.data.users);
//         self.allUsers = response.data.users
//       });
//     }
//
//     // getAllUsers();
//
//     this.signup = signup;
//     }
