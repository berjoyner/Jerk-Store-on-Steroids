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

	// .factory('AdminsSvc', function($resource) {
	// 	return $resource('api/collections/jerkshop',
	// 		{},
	// 		{
	// 			query: { method: 'GET', isArray: true },
	// 			create: { method: 'POST'}
	// 		});
	// })
	// .factory('AdminSvc', function($resource) {
	// 	return $resource('api/collections/jerkshop/:id',
	// 		{
	// 			id: '@_id'
	// 		},
	// 		{
	// 			show: { method: 'GET'},
	// 			edit: { method: 'PUT'},
	// 			delete: { method: 'DELETE'}
	// 		});
	// })

