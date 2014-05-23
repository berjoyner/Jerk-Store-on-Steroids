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
	.factory('AdminSvc', function($resource) {
		return $resource('api/collections/jerkshop',
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	});
	// .factory('AdminSvc', function($resource) {
	// 	return $resource('api/collections/admin/:id',
	// 		{
	// 			id: '@_id'
	// 		},
	// 		{
	// 			show: { method: 'GET'},
	// 			edit: { method: 'PUT'},
	// 			delete: { method: 'DELETE'}
	// 		});
	// });

