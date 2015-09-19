angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink($scope.link)
    .then(function (data) {
      // $scope.link = data;
    })
    .catch(function (err) {
      throw err;
    });
  };

});
