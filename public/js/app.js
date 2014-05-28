'use strict';

angular
  .module('JerkStoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
    // 'JerkStoreApp.directives',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'PostsCtrl'
      })
      .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
      .when('/blog/:id', {
        templateUrl: 'views/blog-detail.html',
        controller: 'PostCtrl'
      })
      .when('/blog/:id/edit', {
        templateUrl: 'views/blog-editDetail.html',
        controller: 'PostCtrl'
      })
       .when('/product', {
        templateUrl: 'views/jerkshop-list.html',
        controller: 'JerkProductsCtrl'
      })
      .when('/newProduct', {
        templateUrl: 'views/jerkshop-create.html',
        controller: 'JerkProductsCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/jerkshop-detail.html',
        controller: 'JerkProductCtrl'
      })
      .when('/product/:id/edit', {
        templateUrl: 'views/jerkshop-editDetail.html',
        controller: 'JerkProductCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart-list.html',
        controller: 'JerkCartsCtrl'
      })
      .when('/newCart', {
        templateUrl: 'views/cart-create.html',
        controller: 'JerkCartsCtrl'
      })
      .when('/cart/:id', {
        templateUrl: 'views/cart-detail.html',
        controller: 'JerkProductCtrl'
      })
      .when('/cart/:id/edit', {
        templateUrl: 'views/cart-editDetail.html',
        controller: 'JerkProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// angular.module('JerkStoreApp.directives', []);

//original

      //  .when('/product', {
      //   templateUrl: 'views/jerkshop-list.html',
      //   controller: 'JerkProductsCtrl'
      // })
      // .when('/newProduct', {
      //   templateUrl: 'views/jerkshop-create.html',
      //   controller: 'JerkProductsCtrl'
      // })
      // .when('/product/:id', {
      //   templateUrl: 'views/jerkshop-detail.html',
      //   controller: 'JerkProductCtrl'
      // })
      // .when('/product/:id/edit', {
      //   templateUrl: 'views/jerkshop-editDetail.html',
      //   controller: 'JerkProductCtrl'
      // })
      // .when('/cart', {
      //   templateUrl: 'views/cart-list.html',
      //   controller: 'JerkCartsCtrl'
      // })
      // .when('/newCart', {
      //   templateUrl: 'views/cart-create.html',
      //   controller: 'JerkCartsCtrl'
      // })
      // .when('/cart/:id', {
      //   templateUrl: 'views/cart-detail.html',
      //   controller: 'JerkProductCtrl'
      // })
      // .when('/cart/:id/edit', {
      //   templateUrl: 'views/cart-editDetail.html',
      //   controller: 'JerkProductCtrl'
      // })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });

// angular.module('JerkStoreApp.directives', []);
