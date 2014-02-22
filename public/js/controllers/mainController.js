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
    var str = $scope.hashtag;
    if (str[0] !== '#') {
      str = str.split('');
      str.unshift('#');
      str = str.join('');
      console.log(str);
    }

    MailService.send($scope.emails);
    
  };

}]);