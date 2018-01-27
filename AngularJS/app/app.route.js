(function(angular){
    'use strict';
    angular.module('appge')   
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<home></home>'
        })
        .state({
            name: 'users',
            url: '/users',
            template: '<filter-search name="user"></filter-search><users name="user"></users>'
        })
        .state({
            name: 'user',
            url: '/user/:userId',
            template: '<user-detail></user-detail>'
        })
        .state({
            name: 'post',
            url: '/post',
            template: '<post></post>'
        })
        .state({
            name: 'contact',
            url: '/contact',
            template: '<contact></contact>'
        });
       
        $urlRouterProvider.otherwise('/home'); //red become the default view

        $locationProvider.html5Mode(true);
      
    });    

})(window.angular);