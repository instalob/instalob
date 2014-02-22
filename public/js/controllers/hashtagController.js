angular.module('myApp.controllers').

controller('HashtagController', ['$scope', function($scope) {

  $scope.tags = [
    '#launch',
    '#hackathon',
    '#hackreactor'
  ];

  $scope.getRecipients = function(tag) {
    console.log(tag);
  };

}]);