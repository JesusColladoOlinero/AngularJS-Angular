(function(angular){
    'use strict';

    angular.module('app.filterSearch')  
    .component("filterSearch", {  
        templateUrl: "app/components/filterSearch/filterSearch.view.html",
        bindings: {
            filter: '<',
            onFilter: '&'
          }
    });
})(window.angular);