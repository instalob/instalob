angular.module('myApp.controllers').

controller('SettingsController', ['$scope', '$state', function($scope, $state) {

  $scope.oneAtATime = true;

  $scope.menu = [
    'Account',
    'Balance',
    'Pending',
    'History',
    'Hashtags',
    'Sign Out'
  ];

  $scope.go = function(state) {
    if (state === 'Hashtags') {
      $state.go('settings.hashtags');
    }
    $scope.$apply();
  };

}]);
