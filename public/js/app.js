'use strict';

angular
  .module('JerkStoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
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



      // .when ('/admin', {
      //   templateUrl: 'views/admin-main.html',
      //   controller: 'AdminsCtrl'
      // })
      // .when ('/jerkshop', {
      //   templateUrl: 'views/jerkshop.html',
      //   controller: 'AdminsCtrl'
      // })
      // .when('/admin/:id', {
      //   templateUrl: 'views/jerkshop-detail.html',
      //   controller: 'AdminCtrl'
      // })
      // .when('/admin/:id/edit', {
      //   templateUrl: 'views/jerkshop-editDetail.html',
      //   controller: 'AdminCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
