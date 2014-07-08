angular.module('myApp.services')	
	.factory('reviewProvider', [function(){

		var reviews  = [{

				id:"1",
				name: 'Atman',
				description: 'An introduction to the theory and practice of computer programming, the emphasis of this course is on techniques of program development within the object-oriented paradigm. Topics include control structures, objects, classes, inheritance, simple data structures, and basic concepts of software development. Currently, Java is the programming language used in the course. This course has a required lab component, and is required for the major and minor in computer science. (Offered every semester)',
				rating: 10,
				dateOfPost: "12/4/1990"
			}, 
			{
				id:"2",
				name: 'Batman',
				description: 'This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)',
				rating: 4,
				dateOfPost: "12/4/2001"
			}, 
			]

		

		//function getCourses(){
			//return courses;
		//	  return courses;
		//}
	
		function getReviews(id) {
			var targetReview = [];
		

			angular.forEach(reviews, function(item, index) {
				if (item.id === id) {
					targetReview.push(item);
				}
			});

			return targetReview;
		}

		function addReview(review){
			reviews.push(review);
		};

		return {
			getReviews: getReviews,
			addReview: addReview,
		
		}
	}])