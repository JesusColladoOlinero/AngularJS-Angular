(function(angular){
    'use strict';

    angular.module('filterSearch', [])  
    .component("filterSearch", {  
        templateUrl: "app/components/filterSearch/filterSearch.view.html",
        bindings: {
            name: '='
          }
    });
})(window.angular);