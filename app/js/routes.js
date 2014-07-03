angular.module('myApp.routes').
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html'
		});
		$routeProvider.when('/addCourse', {
			templateUrl: 'partials/addCourse.html'
		});
		$routeProvider.when('/thumbnailView', {
			templateUrl: 'partials/thumbnailView.html'
		});
		$routeProvider.when('/details',{
			templateUrl:'partials/details.html'
		});
		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);