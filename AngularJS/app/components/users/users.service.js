(function(angular){
    'use strict';

    angular.module('app.users')
    .factory('userFactory', ['$http', '$q', function ($http, $q) {
 
        function GetUsers() {
            var deferred = $q.defer();
            //console.log("I've been pressed!");  

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
            //console.log("I've been pressed!");  

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

        function SetUser(user) {
            var deferred = $q.defer();
            
            // var config = {
            //     headers : {
            //         'Content-Type': 'application/json;charset=utf-8;'
            //     }
            // }

            $http.post("https://reqres.in/api/users", user)//, config)
                .then(function(result){                
                    console.log(result.data);               
                    deferred.resolve(result.data);                              
                }, function (data, status, header, config){
                    console.log("Unable to perform get request");
                    var error = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
                    deferred.reject(error);
                });                      
            return $q.when(deferred.promise);
        }; 

        return {
            getUsers: GetUsers,
            getUser: GetUser,
            setUser: SetUser
        };

    }]);
})(window.angular);