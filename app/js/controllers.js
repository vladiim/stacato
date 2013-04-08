'use strict';

/* Controllers */

function CategoryListCtrl($scope, $http) {
  $http.get('data/categories.json').success(function(data) {
    $scope.categories = data;
  });
}