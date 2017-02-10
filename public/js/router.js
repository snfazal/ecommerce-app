angular.module('ecommerce-app', ['ui.router'])
  .config(StoreRouter);

function StoreRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/'
  })
  .state('signup', {
    url: '/users/signup',
    templateUrl: '/partials/users/signup.html'
  })

}
