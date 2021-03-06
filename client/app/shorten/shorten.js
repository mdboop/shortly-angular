angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.formLink = {};
  $scope.newLink = {};

  $scope.addLink = function () {
    $scope.newLink = {};
    Links.addLink($scope.formLink)
    .then(function (data) {
      $scope.newLink = data;
      console.log($scope.newLink);
    })
    .catch(function (err) {
      $scope.newLink = null;
      throw err;
    });
  };

});
