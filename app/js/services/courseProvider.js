'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')	
	.factory('courseProvider', ['$http','$q',

		function($http,$q){ 


		function getCourses(){
			//return courses;
			  return $http.get('data/courses.json');
		}

		function getCourse(id) {
				
				//returns a promise
				var deferred = $q.defer();
				var targetCourse;

				var courses;

				$http.get('data/courses.json').success(function(courses){

					angular.forEach(courses, function(item, index) {
						if (item.id === id) {
							targetCourse = item;

							deferred.resolve(targetCourse);
						}
					})
				});

				return deferred.promise;
			}

		function addCourses(course){
			courses.push(course);
		};

		return {
			getCourses: getCourses,
			addCourse: addCourses,
			getCourse: getCourse
		};		
	}
	]);