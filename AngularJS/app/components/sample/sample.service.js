(function(angular){
    'use strict';
    var app = angular.module('sampleService', []);
    
    app.service('sampleSrv', function($http, $q) {
        var service = this;

        service.getUsers = function () {
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
    });
})(window.angular);