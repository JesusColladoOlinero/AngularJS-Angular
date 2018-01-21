(function(){
  var app = angular.module('appge', ['sample'])
    .controller("appgeCtrl", function(sampleSrv){
        
        var vm = this;       
    
        sampleSrv.getUsers()
        .then(function(data) {
                console.log('Success: ' + data.data);
                vm.users = data.data;
                //console.log(vm);                        
            }, 
            function(reason) {
                console.log('Failed: ' + reason);            
        });         
    });
})();