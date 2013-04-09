'use strict';

/* Controllers */

function CategoryListCtrl($scope, $http) {
  $http.get('data/categories.json').success(function(data) {
    $scope.categories = data;
  });
}

function EventListCtrl($scope, $http) {
  $http.get('data/events.json').success(function(data) {
    $scope.events = data;
  });
}