
'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')	
	.factory('courseProvider', ['reviewProvider',

		function(reviewProvider){

		var courses  = [{

				id:1,
				name: 'Introduction to Programming',
				description: 'An introduction to the theory and practice of computer programming, the emphasis of this course is on techniques of program development within the object-oriented paradigm. Topics include control structures, objects, classes, inheritance, simple data structures, and basic concepts of software development. Currently, Java is the programming language used in the course. This course has a required lab component, and is required for the major and minor in computer science. (Offered every semester)',
				pic: 'http://i.imgur.com/JmGNipQ.png',
				price: 19.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			}, 
			{
				id:2,
				name: 'Data Structures and Algorithms',
				description: 'This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)',
				pic: 'http://i.imgur.com/JqSysC9.jpg',
				price: 49.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			}, 
			{
				id:3,
				name: 'Robotics',
				description: 'An advanced study of the electronics, mechanics, sensors, and programming of robots. Emphasis is placed on programming robots which investigate, analyze, and interact with the environment. Topics may include mobile robots, legged robots, computer vision, and various approaches to robot intelligence. Prerequisite: CPSC 226 or permission of the instructor. (Offered alternate years)',
				pic: 'http://i.imgur.com/LhNjJ5O.jpg',
				price: 99.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			}, 
			{
				id:4,
				name: 'Artificial Intelligence',
				description: 'This course serves as an introduction to some of the major problems and techniques in the field of artificial intelligence. Artificial intelligence generally deals with problems that are too large, complex, or poorly-specified to have exact algorithmic solutions. Topics to be covered might include knowledge representation, natural language processing, machine learning, neural nets, case-based reasoning, intelligent agents, and artificial life. Prerequisite: CPSC 327 or 329. (Offered occasionally)',
				pic: 'http://i.imgur.com/6QS5NKk.jpg',
				price: 29.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			},
			{
				id:5,
				name: "Physics",
				description: "Physics is the scientific study of matter and energy and how they interact with each other. This energy can take the form of motion, light, electricity, radiation, gravity . . . just about anything, honestly. Physics deals with matter on scales ranging from sub-atomic particles (i.e. the particles that make up the atom and the particles that make up those particles) to stars and even entire galaxies.",
				pic: "http://i.imgur.com/bw2iIas.jpg",
				price: 59.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			}, 
			{
				id:6,
				name: "Chemistry",
				description: "Chemistry is the branch of science concerned with the substances of which matter is composed, the investigation of their properties and reactions, and the use of such reactions to form new substances.",
				pic: "http://i.imgur.com/pNS83DA.jpg",
				price: 74.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0
			}, 
			{
				id:7,
				name: "Mathematics",
				description: "Mathematics is the study of topics such as quantity (numbers), structure, space, and change. There is a range of views among mathematicians and philosophers as to the exact scope and definition of mathematics. Mathematicians seek out patterns[9][10] and use them to formulate new conjectures. Mathematicians resolve the truth or falsity of conjectures by mathematical proof. When mathematical structures are good models of real phenomena, then mathematical reasoning can provide insight or predictions about nature.",
				pic: "http://i.imgur.com/bUqDLb9.jpg",
				price: 49.99,
				rating: 0,
				ratingCount: 2,
				usefulCount: 0

			}]

		function getCourses(){
			//return courses;
			  return courses;
		}

		function getCourse(id) {
			var targetCourse;

			angular.forEach(courses, function(item, index) {
				if (item.id == id) {
					targetCourse = item;
				}
			})

			return targetCourse;
		}

		function getAvgRating(){
			
			var totalRating;
			var count;
			var reviews;
			angular.forEach(courses, function(itemCourse, index) {
				
				reviews = reviewProvider.getReviews(itemCourse.id);
				totalRating = 0;
				count = 0;
				angular.forEach(reviews, function(itemReview, index) {
					totalRating += parseInt(itemReview.rating);
					count++;
				})
				itemCourse.rating = totalRating/count;
				courses[index].rating = itemCourse.rating;
				console.log(itemCourse.rating);
			})
			return ;
		}

		function addCourses(course){
			courses.push(course);
		};
		return {
			getCourses: getCourses,
			addCourse: addCourses,
			getCourse: getCourse,
			getAvgRating: getAvgRating
		}

		
	}]) 