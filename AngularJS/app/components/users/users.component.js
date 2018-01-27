(function(angular){
    'use strict';
    angular.module('app.users')  
    .component("users", {   
        templateUrl: "app/components/users/users.view.html",   
        controller: UserController,              
        bindings: {
            name: '<'
        }      
    });

    UserController.$inject = [
        '$location', 
        'userFactory'
    ];

    function UserController($location, userFactory){
        var vm = this;

        vm.onChange = onChange;
        vm.viewUserDetails = viewUserDetails;
        vm.$onInit = onInit;

        function onInit(){

            userFactory.getUsers()
            .then(function(data) {
                    //console.log('Success: ' + data.data);
                    vm.users = data.data;                     
                }, 
                function(reason) {
                    console.log('Failed: ' + reason);            
            });       
        }
    
        function onChange(name){
            vm.name = name;
        }
        
        function viewUserDetails(userId){
            $location.path('/user/' + userId);
        }
    }

})(window.angular);