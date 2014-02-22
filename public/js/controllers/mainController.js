angular.module('myApp.controllers').

controller("MainController", ['$scope', function($scope) {

  $scope.title = "Main hey hey!";

  $scope.hashtagSubmit = function() {
    console.log('Submitting hashtags');
  };

}]);