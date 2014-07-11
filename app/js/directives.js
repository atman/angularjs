'use strict';

/********************************************CUSTOM DIRECTIVES ***************************************/

angular.module('myApp.directives', ['ngSanitize']).   //ngSanitize used to prevent unsafe html from being parsed in the my-preview directive
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]) //Custom Directive for displaying preview
  .directive('myPreview', function(){              
  		return{
  			restrict: 'E',
  			templateUrl: 'partials/previewTemplate.html',
  			scope: {
  				previewContent: '='
  			}
  		}
  	})//Custom directive for showing rating in progress bar
  .directive('myProgressBar',function(){            
 return{
   restrict:'E',
   templateUrl:'partials/progressBar.html'
 }
});
