angular.module('JerkStoreApp.directives')
	.directive('jerkDirective', function(){
		return{
			restrict:'EA',
			templateUrl: 'views/directives.html'
		}
	});
	.directive('jerkDirective')





// angular.module('JerkStoreApp.directives')
// 	.directives('myDirective', function(){
// 		return {
// 		// restrict: 'EA', //element and attribute
// 		// template: '<span>hello from directive</span>',
// 		restrict: 'E',
// 		// scope: {
// 		// 	items: '@'
// 		// },
// 		template: '<span>{{awesome}}</span>'
// 		template: '<p ng-repeat="awesome in awesomeThings"><span>{{awesome}}</span></p>'
// 		templateUrl: 'views/directiveDemo.html'
// 		}
// 	});

// angular.module('ngDay6App.directives')
// 	.directive('hellocard', function (){
// 		return {
// 			restrict: 'EA',
// 			scope: {
// 				name: '@',
// 				image: '@',
// 			},
// 			scope: true, 
// 			templateUrl: 'views/demo.html', 
// 			transclude: true,	
// 			replace: true,	
// 			link: function(scope, element, attrs) {
// 				element.append(attrs.name);
// 				element.on('click', function(e) {
// 					alert('we have clicked this:' +attrs.name);
// 					element.children().addClass('green');
// 				});

// 				var html = "<h2>html from directive</h2>";
// 				var text = attrs.name;


// 				element.find('.boilerplate').append(html);
// 			}
// 		}
// 	})

	
// // demohtml

// <div class="jumbotron">
// <div class="outer">text</div>
// <hello-card name="calvin"></hello-card>
// <hello-card>
// Calvin
// </hello-card>
// <div hello-card>
// Nick
// </div>

// //mainhtml
// <div class="outer">
// <div class="boilerplate">
// HI
// </div>
// <div class="">

// HW:

// Create a directive that you can use more than once (doesnt have to repeat), use data from an 
// angular service, traverse the dom, jquery, using elements and attrs Use the link function and use element and attrs
// directive needs to be used more than once- doesnt have to be an event- don't have to use transclude
