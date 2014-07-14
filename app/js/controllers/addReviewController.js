angular.module('myApp.controllers')
  .controller('addReviewController', ['$scope','reviewProvider','$location','$routeParams',
    
    function($scope,reviewProvider,$location,$routeParams) {
    	
    	//Ratings limited only from 1-10
    	$scope.ratings=[{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},
		{value:9},{value:10}]	
	  	
	  	//Function that is called when new review is added 	
      	$scope.addReview = function(review, addReviewForm) {
      			var reviewId = $routeParams.id;
      			//$scope.description=review.description;
				if (addReviewForm.$invalid) {
					alert('validation failed');
				} else {
					//Set review ID to bind the review to a course
					review.id = reviewId;
					review.dateOfPost = new Date();
					//Add the review
					reviewProvider.addReview(review);
					//Navigate to details view
					$location.url('/details/'+reviewId);
				}
			}
    	}
  ]);