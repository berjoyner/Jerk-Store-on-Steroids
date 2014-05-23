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
   .controller('AdminCtrl', function ($scope, $location, AdminSvc) {
    $scope.createProduct = function() {
      $location.path('/admin');
    };
    $scope.newProduct = function(product) {
      AdminSvc.create(product)
      $location.path('/jerkshop');
    };
    $scope.product = AdminSvc.query();
  });

  //controller for shopping cart 

  //controller for reviews

  //controller for admin 


