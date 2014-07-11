angular.module('myApp.controllers')
	.controller('detailsController',['$scope','settings','courseProvider','$routeParams','reviewProvider',
		function($scope,settings,courseProvider,$routeParams,reviewProvider){
			var courseId = $routeParams.id;

			$scope.course = courseProvider.getCourse(courseId);
			$scope.reviews = reviewProvider.getReviews(courseId);
			$scope.maxLength = settings.maxDescriptionLength;
			$scope.avgRatings = courseProvider.getAvgRating();	    
		}
	]);