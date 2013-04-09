'use strict';

angular.module('Stacato', [])
  .directive('markdown', function($http) {
  	var converter = new Showdown.converter();
  	var editTemplate = '<textarea id="bigdoc" ng-show="isEditMode" ng-dblclick="switchToPreview()" rows="20" ng-model="markdown"></textarea>';
  	var previewTemplate = '<div ng-hide="isEditMode" ng-dblclick="switchToEdit()">Preview</div>';
  	return {
  		restrict: 'E',
  		compile: function (tElement, tAttrs, transclude) {
  			var markdown = tElement.text();
  			// $http.get(tAttrs.src).then(function(data) {
  			// 	return data.data;
  			// });

            tElement.html(editTemplate);
            var previewElement = angular.element(previewTemplate);
            tElement.append(previewElement);

            return function (scope, element, attrs) {
                scope.markdown = markdown;
            	var makeHtml = converter.makeHtml(scope.markdown);
                previewElement.html(makeHtml);

            	scope.isEditMode = false;

            	scope.switchToPreview = function() {
            		scope.isEditMode = false;
            	    var makeHtml = converter.makeHtml(scope.markdown);
                    previewElement.html(makeHtml);
            	}

            	scope.switchToEdit = function() {
            		scope.isEditMode = true;	
            	}
            }
  		}
  	}
  });