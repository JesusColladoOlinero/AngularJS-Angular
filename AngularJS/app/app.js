(function(angular){
    'use strict';
    var app = angular.module('appge', ['ui.router', 'ngResource', 'layout'])   
    .config(function($stateProvider, $urlRouterProvider, $resourceProvider) {
       
        $resourceProvider.defaults.stripTrailingSlashes = false;

        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<home></home>'
        })
        .state({
            name: 'users',
            url: '/users',
            template: '<users></users>'
        })
        .state({
            name: 'contact',
            url: '/contact',
            template: '<contact></contact>'
        });
       
        $urlRouterProvider.otherwise('/home'); //red become the default view
      
    })
    .controller("appgeCtrl", function(){
        
        var vm = this;       
    
        /*  
        sampleSrv.getUsers()
        .then(function(data) {
                console.log('Success: ' + data.data);
                vm.users = data.data;
                //console.log(vm);                        
            }, 
            function(reason) {
                console.log('Failed: ' + reason);            
        });   
        */      
    });

})(window.angular);