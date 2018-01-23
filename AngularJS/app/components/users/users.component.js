(function(angular){
    'use strict';
    angular.module('appge')  
    .controller("usersControl", function(userSrv){
        
        var vm = this;
 
        userSrv.getUsers()
        .then(function(data) {
                console.log('Success: ' + data.data);
                vm.users = data.data;
                //console.log(vm);                        
            }, 
            function(reason) {
                console.log('Failed: ' + reason);            
        });       
    })
    .component("users", {   
        templateUrl: "app/components/users/users.view.html",        
        bindings: {
            name: '='
          }      
    });
})(window.angular);