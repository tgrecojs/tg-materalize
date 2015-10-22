'use strict';

angular.module('yoTgApp')
    .config(function($stateProvider) {
            $stateProvider
                .state('meet-with-me', {
                    url: '/meet-with-me',
                    templateUrl: 'app/meet-with-me/meet-with-me.html',
                    controller: 'MeetWithMeCtrl'
                });
            });