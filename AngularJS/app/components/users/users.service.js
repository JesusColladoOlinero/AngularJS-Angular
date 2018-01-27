(function(angular){
    'use strict';

    angular.module('app.users')
    .factory('userFactory', ['$http', '$q', function ($http, $q) {
 
        function GetUsers() {
            var deferred = $q.defer();
            console.log("I've been pressed!");  

            $http.get("https://reqres.in/api/users?page=2")
                .then(function(result){                
                    //console.log(result.data.data);               
                    deferred.resolve(result.data);                              
                }, function (error){
                    console.log("Unable to perform get request");
                    deferred.reject(error);
                });                      
                return $q.when(deferred.promise);
        }; 

        function GetUser(userId) {
            var deferred = $q.defer();
            console.log("I've been pressed!");  

            $http.get("https://reqres.in/api/users/" + userId)
                .then(function(result){                
                    //console.log(result.data.data);               
                    deferred.resolve(result.data);                              
                }, function (error){
                    console.log("Unable to perform get request");
                    deferred.reject(error);
                });                      
                return $q.when(deferred.promise);
        }; 

        return {
            getUsers: GetUsers,
            getUser: GetUser
        };

    }]);
})(window.angular);