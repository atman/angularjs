angular.module('myApp.controllers')
  .controller('addCourseController', ['$scope','courseProvider','$location',
    function($scope,courseProvider,$location) {

      $scope.addCourse = function(course, addCourseForm) {
				if (addCourseForm.$invalid) {
					alert('validation failed');
				} else {
					var courses = courseProvider.getCourses();
					course.id = courses.length+1;
					courseProvider.addCourse(course);
					$location.url('/listing');
					console.log('saving course : ' + course.name);
				}
			}
    	}
  ]); 