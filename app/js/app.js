'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngSanitize',
	'ngRoute',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers',
	'myApp.routes'
]);
angular.module('myApp.routes', []);
angular.module('myApp.controllers', []);