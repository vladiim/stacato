'use strict';

/* Controllers */

function CategoryListCtrl($scope, $http) {
  $http.get('data/categories.json').success(function(data) {
    $scope.categories = data;
  });

  // $scope.categories = [
  //   { name: 'New Recruit', event_count: 430 },
  //   { name: 'News', event_count: 1230 },
  //   { name: 'Army', event_count: 759 },
  //   { name: 'Air Force', event_count: 980 },
  //   { name: 'Navy', event_count: 784 }
  // ]
}