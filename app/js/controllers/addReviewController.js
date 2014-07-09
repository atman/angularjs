angular.module('myApp.controllers')
  .controller('addReviewController', ['$scope','reviewProvider','$location','$routeParams',
    
    function($scope,reviewProvider,$location,$routeParams) {
    	
    	$scope.ratings=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},
		{value:9},{value:10}]	
	  	 	
      	$scope.addReview = function(review, addReviewForm) {
      			var reviewId = $routeParams.id;
      			//$scope.description=review.description;
				if (addReviewForm.$invalid) {
					alert('validation failed');
				} else {
					review.id = reviewId;
					review.dateOfPost = new Date();

					reviewProvider.addReview(review);
					$location.url('/details/'+reviewId);
				}
			}
    	}
  ]);