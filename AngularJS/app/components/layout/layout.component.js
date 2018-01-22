(function(angular){
    'use strict';
    angular.module('layout', ['menu', 'home', 'users', 'contact'])  
    .component("layout", {        
        templateUrl: "app/components/layout/layout.view.html"        
    });
})(window.angular);
