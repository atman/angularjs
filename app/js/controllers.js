'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('mainController', ['$scope', function($scope) {
  	$scope.courses = [{
  		name: 'Introduction to Programming',
  		description: 'Learn many of the concepts that underlie all programming languages. Develop a programming style known as functional programming and contrast it with object-oriented programming. Through experience writing programs and studying three different languages, learn the key issues in designing and using programming languages, such as modularity and the complementary benefits of static and dynamic typing. This course is neither particularly theoretical nor just about programming specifics – it will give you a framework for understanding how to use language constructs effectively and how to design correct and elegant programs. By using different languages, you learn to think more deeply than in terms of the particular syntax of one language. The emphasis on functional programming is essential for learning how to write robust, reusable, composable, and elegant programs – in any language.',
  		pic: 'http://therealsingapore.com/sites/default/files/field/image/webProgrammingInternship.jpg' 
  	},
  	{
  		name: 'Data Structures and Programming',
  		description: 'The course will follow the idea of  “Algorithms + Data Structures = Programs”, aimed at improving  students’ knowledge and skills of theory, abstraction and design in problem solving. On a solid basis of the fundamental theory, the students will analyze the problems using problem, data and algorithm abstraction. Making a tradeoff between space and time complexity, the students will learn how to organize data reasonably, design efficient and effective algorithms, and implement high quality programs, so that they can solve real-world complex problems. After studying this course, students should be well prepared for further study, engineering and research in computer related areas.',
  		pic: 'http://www.greenbookblog.org/wp-content/uploads/2012/03/big-data.jpg'
  	},
  	{
  		name: 'Robotics',
  		description: 'Robotics is the branch of technology that deals with the design, construction, operation, and application of robots,[1] as well as computer systems for their control, sensory feedback, and information processing. These technologies deal with automated machines that can take the place of humans in dangerous environments or manufacturing processes, or resemble humans in appearance, behavior, and/or cognition. Many of todays robots are inspired by nature contributing to the field of bio-inspired robotics.',
  		pic: 'http://someinterestingfacts.net/wp-content/uploads/2013/01/Robot-future.jpg'
  	}];

  }])

  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
