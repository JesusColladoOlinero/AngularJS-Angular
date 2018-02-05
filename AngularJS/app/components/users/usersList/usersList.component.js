(function (angular) {
    'use strict';
  
    angular
      .module('app.users')
      .component('usersList', userList());
  
    function userList() {
      var component = {
        templateUrl: '/app/components/users/usersList/usersList.view.html',
        controller: UserListController
      };
      return component;
    }
  
    function UserListController() {
        var ctrl = this;
        ctrl.onFilter = onFilter;
        ctrl.$onInit = onInit;
  
        function onFilter(filter) {
            ctrl.filter = filter;
        }
    
        function onInit() {
            ctrl.filter = '';
        }
    }
  })(window.angular);