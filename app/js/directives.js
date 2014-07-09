'use strict';

/* Directives */

angular.module('myApp.directives', ['ngSanitize']).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('myPreview', function(){
  		return{
  			restrict: 'E',
  			templateUrl: 'partials/previewTemplate.html',
  			scope: {
  				previewContent: '='
  			}
  		}
  	});
