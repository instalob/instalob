angular.module('myApp.controllers').

controller("MainController", ['$scope', function($scope) {

  $scope.title = "Main";

  $scope.$watch('emails', function(emails) {
    console.log(emails);
    // emails.forEach(function(email) {
    //   MailService.sendTo(email);
    // });
  });

  $scope.submit = function() {
    // validate hashtag
    var hashtag = $scope.hashtag;
    if ($scope.hashtag[0] !== '#') {
      hashtag = '#' + hashtag;
    }

    // MailService.send($scope.emails);
    
  };

}]);