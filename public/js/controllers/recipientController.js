angular.module('myApp.controllers').

controller('RecipientController', ['$scope', function($scope) {

  $scope.recipientInfo = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  };

  $scope.submitInfo = function(recipientInfo) {
    console.log($scope.recipientInfo);
  };

}]);