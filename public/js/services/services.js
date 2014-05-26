'use strict';
angular.module('JerkStoreApp')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/demotiy',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/demotiy/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			});
	})
	.factory('JerkProductsSvc', function($resource) {
		return $resource('api/collections/products',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('JerkProductSvc', function($resource) {
		return $resource('api/collections/products/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})
	.factory('JerkCartsSvc', function($resource) {
		return $resource('api/collections/cart',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('JerkCartSvc', function($resource) {
		return $resource('api/collections/cart/:id',
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			)
	})
