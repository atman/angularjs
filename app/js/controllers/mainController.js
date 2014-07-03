angular.module('myApp.controllers')
  .controller('mainController', ['$scope', 'settings', 'courseProvider',
    function($scope, settings, courseProvider) {

      $scope.maxLength = settings.maxDescriptionLength;
      $scope.maxResults = settings.maxResults;
      $scope.courses = courseProvider.getCourses();
    }
  ]); 