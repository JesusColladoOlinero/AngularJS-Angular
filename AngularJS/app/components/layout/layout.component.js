(function(angular){
    'use strict';
    angular.module('layout', ['menu', 'home', 'users', 'contact', 'filterSearch'])  
    .component("layout", {        
        templateUrl: "app/components/layout/layout.view.html"        
    });
})(window.angular);
