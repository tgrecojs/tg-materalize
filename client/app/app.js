'use strict';

angular.module('yoTgApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMessages'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    
  });
