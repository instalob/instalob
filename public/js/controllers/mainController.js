angular.module('myApp.controllers').

controller('MainController', ['$scope', 'MailService', function($scope, MailService) {

  $scope.title = "Main";

  // $scope.$watch('emails', function(emails) {
  //   console.log(emails);
    // emails.forEach(function(email) {
    //   MailService.sendTo(email);
    // });
  // });

  $scope.submit = function() {
    // validate hashtag
    var hashtag = $scope.hashtag;
    if ($scope.hashtag[0] !== '#') {
      hashtag = '#' + hashtag;
    }
    console.log(hashtag);
    MailService.send($scope.emails);
  };

}]);