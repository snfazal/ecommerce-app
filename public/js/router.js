
angular.module('ecommerce-app', ['ui.router'])
  .config(StoreRouter);

function StoreRouter($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/partials/products/index.html'
  })
  .state('signup', {
    url: '/users/signup',
    templateUrl: '/partials/users/signup.html'
  })
  .state('login', {
    url: '/users/login',
    templateUrl: '/partials/users/login.html'
  })
  .state('cart', {
    url:'/users/:userId/cart',
    templateUrl: '/partials/cart/current.html'
  })
  .state('checkout', {
    url:'/users/checkout',
    templateUrl: '/partials/cart/checkout.html'
  })
  .state('thank_you', {
    url:'/thank_you',
    templateUrl: '/partials/cart/thank_you.html'
  })
  .state('profile', {
    url:'/users/:userId',
    templateUrl: '/partials/users/profile.html'
  })

}
