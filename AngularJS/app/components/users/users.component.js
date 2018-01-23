(function(angular){
    'use strict';
    angular.module('users', [])  
    .component("users", {        
        templateUrl: "app/components/users/users.view.html",
        bindings: {
            name: '='
          }      
    });
})(window.angular);