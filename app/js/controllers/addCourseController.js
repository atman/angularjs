angular.module('myApp.controllers')
  .controller('addCourseController', ['$scope','courseProvider','$location',
    function($scope,courseProvider,$location) {

    	//Function that is called when new course is added
      	$scope.addCourse = function(course, addCourseForm) {
				if (addCourseForm.$invalid) {
					alert('validation failed');
				} else {
					//Getting courses to append a new ID to the newly added course
					var courses = courseProvider.getCourses();
					course.id = courses.length+1;
					//Adding course to 'courses' array
					courseProvider.addCourse(course);
					//Go to listing view
					$location.url('/listing');
					
				}
			}
    	}
  ]); 