(function(angular){
    'use strict';
    var app = angular.module('sample', ['sampleService'])  
    .component("probandoComponent", {        
        templateUrl: "app/components/sample/sample.view.html"
    });
})(window.angular);
