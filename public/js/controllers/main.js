'use strict';

//controller for blog 

angular.module('JerkStoreApp')

//controller for creating and making a new post 

  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {
    $scope.createPost = function() {
      $location.path('/new');
    };
    $scope.newPost = function(post) {
      PostsSvc.create(post)
      $location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {
    $scope.post = PostSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      PostSvc.delete({ id: $routeParams.id });
      $location.path('/blog');
    };
    $scope.edit = function() {
      PostSvc.edit($scope.post);
      $location.path('/blog');
    };
  }) 

  //controller for admin- CRUD products

  angular.module('JerkStoreApp')
  .controller('JerkProductsCtrl', function ($scope, $location, JerkProductsSvc, JerkProductSvc) {

    $scope.createProduct = function() {
      $location.path('/newproduct');
    };
    $scope.newProduct = function(product) {
      JerkProductsSvc.create(product)
      $location.path('/product');
    };

    $scope.updateCart = function(product) {
      product.cart = true;
      JerkProductSvc.edit(products);

      console.log(product);
    }
    $scope.products = JerkProductsSvc.query();
  })
  .controller('JerkProductCtrl', function($scope, $location, $routeParams, JerkProductSvc) {

    $scope.product = JerkProductSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      JerkProductSvc.delete({ id: $routeParams.id });
      $location.path('/product');
    };
    $scope.edit = function() {
      JerkProductSvc.edit($scope.product);
      $location.path('/product');
    };
    $scope.editCart = function(product) {
      JerkProductSvc.edit(product);
    };
    $scope.deleteCart = function(product) {
      // product.cart = false;

      $scope.edit(product);
    };
  })

  //controller for shopping cart 

  angular.module('JerkStoreApp')
  .controller('JerkCartsCtrl', function ($scope, $location, JerkCartsSvc) {

    $scope.createCart = function() {
      $location.path('/newcart');
    };
    $scope.newCart = function(cart) {
      JerkCartsSvc.create(cart)
      $location.path('/cart');
    };
    // calvin demoing the add to cart from products list
    $scope.addToCart = function(product) {
      JerkCartsSvc.addProduct(product)
      $location.path('/cart');
    };
    $scope.cartProducts = JerkCartsSvc.query();
    
    // for(var i = 0; i < productz.length; i++) {
    //   if(productz[i].cart === false) {
    //     productz.splice(i,1); //promises in javascript?

    //   }

    // }

    // $scope.products = productz;

  })
  .controller('JerkCartCtrl', function($scope, $location, $routeParams, JerkCartSvc) {

    $scope.product = JerkCartSvc.show({ id: $routeParams.id });
    $scope.delete = function() { 
      JerkCartSvc.delete({ id: $routeParams.id });
      $location.path('/cart');
    };
    $scope.edit = function() {
      JerkCartSvc.edit($scope.cart);
      $location.path('/cart');
    };
  });


  //controller for reviews

//original 

  // angular.module('JerkStoreApp')
  // .controller('JerkProductsCtrl', function ($scope, $location, JerkProductsSvc, JerkProductSvc) {

  //   $scope.createProduct = function() {
  //     $location.path('/newproduct');
  //   };
  //   $scope.newProduct = function(product) {
  //     JerkProductsSvc.create(product)
  //     $location.path('/product');
  //   };

  //   $scope.updateCart = function(product) {
  //     product.cart = true;
  //     JerkProductSvc.edit(products);

  //     console.log(product);
  //   }
  //   $scope.products = JerkProductsSvc.query();
  // })
  // .controller('JerkProductCtrl', function($scope, $location, $routeParams, JerkProductSvc) {

  //   $scope.product = JerkProductSvc.show({ id: $routeParams.id });
  //   $scope.delete = function() { 
  //     JerkProductSvc.delete({ id: $routeParams.id });
  //     $location.path('/product');
  //   };
  //   $scope.edit = function() {
  //     JerkProductSvc.edit($scope.product);
  //     $location.path('/product');
  //   };
  //   $scope.editCart = function(product) {
  //     JerkProductSvc.edit(product);
  //   };
  //   $scope.deleteCart = function(product) {
  //     // product.cart = false;

  //     $scope.edit(product);
  //   };
  // })

  // //controller for shopping cart 

  // angular.module('JerkStoreApp')
  // .controller('JerkCartsCtrl', function ($scope, $location, JerkProductsSvc) {

  //   $scope.createCart = function() {
  //     $location.path('/newcart');
  //   };
  //   $scope.newCart = function(cart) {
  //     JerkCartsSvc.create(cart)
  //     $location.path('/cart');
  //   };
  //   var productz = JerkProductsSvc.query();
    
  //   for(var i = 0; i < productz.length; i++) {
  //     if(productz[i].cart === false) {
  //       productz.splice(i,1); //promises in javascript?

  //     }

  //   }

  //   $scope.products = productz;

  // })
  // .controller('JerkCartCtrl', function($scope, $location, $routeParams, JerkCartSvc) {

  //   $scope.product = JerkCartSvc.show({ id: $routeParams.id });
  //   $scope.delete = function() { 
  //     JerkCartSvc.delete({ id: $routeParams.id });
  //     $location.path('/cart');
  //   };
  //   $scope.edit = function() {
  //     JerkCartSvc.edit($scope.cart);
  //     $location.path('/cart');
  //   };
  // });


  // //controller for reviews

