angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    $http.get('/api/links')
      .then(function(response){
        $scope.data.links = response.data;
      })
      .catch(function(err){
        throw err;
      });
  };
 $scope.getLinks();
});
