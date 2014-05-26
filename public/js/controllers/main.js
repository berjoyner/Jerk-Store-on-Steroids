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

  //controller for admin 

  angular.module('JerkStoreApp')
  .controller('JerkProductsCtrl', function ($scope, $location, JerkProductsSvc) {

    $scope.createProduct = function() {
      $location.path('/newproduct');
    };
    $scope.newProduct = function(product) {
      JerkProductsSvc.create(product)
      $location.path('/product');
    };
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
  });

  // .controller('AdminsCtrl', function ($scope, $location, AdminsSvc) {
  //   $scope.createProduct = function() {
  //     console.log("here");
  //     $location.path('/jerkshop');
  //   };
  //   $scope.newProduct = function(product) {
  //     AdminsSvc.new(product)
  //     console.log("here");
  //     $location.path('/jerkshop');
  //   };
  //   $scope.products = AdminsSvc.query();
  // });
  // .controller('AdminCtrl', function($scope, $location, $routeParams, AdminSvc) {

  //   $scope.product = AdminSvc.show({ id: $routeParams.id });
  //   $scope.delete = function() { 
  //     AdminSvc.delete({ id: $routeParams.id });
  //     $location.path('/jerkshop');
  //   };
  //   $scope.edit = function() {
  //     AdminSvc.edit($scope.product);
  //     $location.path('/jerkshop');
  //   };
  // });

  //controller for shopping cart 

  //controller for reviews



