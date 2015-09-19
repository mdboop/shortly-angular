angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {
    links: []
  };
  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
      })
      .catch(function (err) {
        throw err;
      });
  };
 $scope.getLinks();
});
