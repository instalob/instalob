angular.module('myApp.controllers').

controller('HashtagController', ['$scope', function($scope) {

  $scope.tags = [
    '#launch',
    '#hackathon',
    '#hackreactor'
  ];

  $scope.recipients = [
    { info: 'Mehul - 123 ABC Street',
      tags: ['#launch', '#hackreactor']
    },
    { info: 'David - 321 XYZ Avenue',
      tags: ['#launch', '#hackreactor']
    }
  ];

  $scope.getRecipients = function(tag) {
    console.log(tag);
    // this fn will update $scope.recipients
    // query the db w/ hashtag blah blah.
  };

  $scope.editRecipient = function(recipient) {
    console.log(recipient);
  };


}]);