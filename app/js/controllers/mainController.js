//Attach Controller and declare dependencies
angular.module('myApp.controllers')
  .controller('mainController', ['$scope', 'settings', 'courseProvider',
    function($scope, settings, courseProvider) {

	  	$scope.maxLength = settings.maxDescriptionLength;	//For limiting course description length
	  	$scope.maxResults = settings.maxResults;			//For limiting no. of results in listing.html
	  	$scope.avgRatings = courseProvider.getAvgRating();	//Get AvgRating for each course
	 	$scope.courses = courseProvider.getCourses();		//Get allcourses for listing.html 

	}
 ]); 