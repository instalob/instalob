'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$stateProvider', '$routeProvider', function($stateProvider, $routeProvider) {

  $stateProvider.
    state('splash', {
      url: '',
      templateUrl: 'partials/splash.html',
      controller: 'SplashController'
    }).

    state('instagram', {
      url: '/instagram',
      templateUrl: 'partials/instagram.html',
      controller: 'InstagramController'
    }).

    state('main', {
      url: '/main',
      templateUrl: 'partials/main.html',
      controller: 'MainController'
    }).

    state('hashtags', {
      url: '/hashtags',
      templateUrl: 'partials/hashtag.html',
      controller: 'HashtagController'
    }).

    state('recipient', {
      url: '/recipient',
      templateUrl: 'partials/recipient.html',
      controller: 'RecipientController'
    }).

    state('myHashtags', {
      url: '/myhashtags',
      templateUrl: 'partials/myhashtags.html',
      controller: 'MyHashtagsController'
    });

  /*
   * Old routes
   */
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
