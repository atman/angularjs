angular.module('myApp.controllers')
  .controller('mainController', ['$scope', 'settings', 'courseProvider',
    function($scope, settings, courseProvider) {

      $scope.maxLength = settings.maxDescriptionLength;
      $scope.maxResults = settings.maxResults;

      courseProvider.getCourses().success(function (data){
      	$scope.courses = data;
      });
	}
 ]); 