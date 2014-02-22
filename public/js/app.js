'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'mm.foundation'
]).
config(['$stateProvider', '$routeProvider', function($stateProvider, $routeProvider) {

  $stateProvider.
    state('splash', {
      url: '',
      templateUrl: 'partials/splash.html',
      controller: 'SplashController'
    });

  $stateProvider.
    state('instagram', {
      url: '/instagram',
      templateUrl: 'partials/instagram.html',
      controller: 'InstagramController'
    });

  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    });

  $routeProvider.
    when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2'
    });

  $routeProvider.
    otherwise({
      redirectTo: '/view1'
    });
}]);
