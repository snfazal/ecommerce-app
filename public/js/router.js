angular.module('listAngularApp', ['ui.router'])
  .config(GiphyRouter);

function GiphyRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/home.html'
  })
  .state('signup', {
    url: '/login',
    templateUrl: '/partials/signup.html'
  })

}
