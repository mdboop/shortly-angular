angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function () {
    Links.addLink()
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      throw err;
    });
  };

});
