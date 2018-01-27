(function(angular){
    'use strict';
    angular.module('app.post') 
    .component("post", {   
        templateUrl: "app/components/post/post.view.html",
        controller: PostController
    });

    PostController.$inject = [        
        'userFactory'
    ];

    function PostController(userFactory){
        var vm = this;

        vm.setUser = setUser;

        function setUser(user){
            userFactory.setUser({
                name: user.name + ' ' + user.lastname,
                job: user.job
            })
            .then(function(data) {
                    console.log('Success: ' + data);
                    vm.userPost = data;   
                }, 
                function(reason) {
                    console.log('Failed: ' + reason);            
            });  
        }
    }

})(window.angular);