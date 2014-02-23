angular.module('myApp.controllers').

controller('InstagramController', ['$scope', function($scope) {

  $scope.title = 'Please Authorize with Instagram';

  $scope.err = "Error Message";

}]);