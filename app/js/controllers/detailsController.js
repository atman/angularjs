angular.module('myApp.controllers')
	.controller('detailsController',['$scope','settings','courseProvider','$routeParams',
		function($scope,settings,courseProvider,$routeParams){
			var courseId = $routeParams.id;

			var promise = courseProvider.getCourse(courseId);

			promise.then(function(data){
				$scope.course = data;
			})

			$scope.maxLength = settings.maxDescriptionLength;
		}
	]);