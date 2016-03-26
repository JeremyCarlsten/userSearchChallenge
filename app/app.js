(function() {
  'use strict';

  angular.module('UserSearch')
    .controller('UserSearchController', ['searchService', UserSearchController]);


  function UserSearchController(searchService) {
      var self = this;

      activate();

      function activate() {
          return searchService.getAllUserData().then(function(data){
                  self.userData = data;
                });
      }
  }
})();
