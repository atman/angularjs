angular.module('myApp.routes').
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'mainController'
		});
		$routeProvider.when('/addCourse', {
			templateUrl: 'partials/addCourse.html',
			controller:'addCourseController'
		});
		$routeProvider.when('/thumbnailView', {
			templateUrl: 'partials/thumbnailView.html',
			controller: 'mainController'
		});
		$routeProvider.when('/details/:id',{
			templateUrl:'partials/details.html',
			controller: 'detailsController'
		});
		$routeProvider.when('/addReview/:id',{
			templateUrl:'partials/addReview.html',
			controller: 'addReviewController'
		});
		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);