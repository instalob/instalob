angular.module('myApp.controllers').

controller('InstagramController', ['$scope', function($scope) {

  $scope.title = 'Connect with IG';

  $scope.igAuth = function() {
    console.log('auth button clicked');
  };

  $scope.err = "Error Message";

}]);