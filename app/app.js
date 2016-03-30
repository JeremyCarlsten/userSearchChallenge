(function() {
  'use strict';

  angular.module('UserSearch')
    .controller('UserSearchController', ['searchService', UserSearchController]);


  function UserSearchController(searchService) {
      var self = this;
      self.user = {};
      self.searchFilter = '';
      init();

      function init() {
          return searchService.getAllUserData().then(function(data){
                  self.userData = data;
                  self.getUserDetails(0);
                });
      }

      self.getUserDetails = function(index){
        if(self.userData[index]){
          self.user = self.userData[index];
        }
      };
  }
})();
