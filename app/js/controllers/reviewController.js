
angular.module('myApp.controllers')
  .controller('reviewController', ['$scope','reviewProvider','$routeParams',
    function($scope, reviewProvider, $routeParams){
    	var courseId = $routeParams.id;
    	$scope.review = reviewProvider.getReviews(courseId);
    }
/*
angular.module('myApp', ['ngSanitize'])
		.directive('myPreview', function(){
  return {
    restrict: 'E',
    templateUrl : '../partials/previewTemplate.html',
    scope: {
      previewContent : '='
      
    }
  }
})
*/