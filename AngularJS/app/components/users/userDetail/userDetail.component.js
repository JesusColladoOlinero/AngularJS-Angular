(function(angular){
    'use strict';
    angular.module('app.users') 
    .component("userDetail", {   
        templateUrl: "app/components/users/userDetail/userDetail.view.html",
        controller: UserDetailController
    });

    UserDetailController.$inject = [
        '$stateParams', 
        'userFactory'
    ];

    function UserDetailController($stateParams, userFactory){
        var vm = this;

        vm.$onInit = onInit;
        function onInit(){
            userFactory.getUser($stateParams.userId)
            .then(function(data) {
                    //console.log('Success: ' + data.data);
                    vm.user = data.data;                    
                }, 
                function(reason) {
                    console.log('Failed: ' + reason);            
            });  
        }
    }

})(window.angular);