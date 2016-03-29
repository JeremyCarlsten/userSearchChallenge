(function() {
  'use strict';

  angular.module('UserSearch')
    .controller('UserSearchController', ['searchService', UserSearchController]);


  function UserSearchController(searchService) {
      var self = this;
      self.user = {};
      activate();

      function activate() {
          return searchService.getAllUserData().then(function(data){
                  self.userData = data;
                });
      }

      self.getUserDetails = function(index){
        console.log(self.userData[index]);
        if(self.userData[index]){
          self.user = self.userData[index];
        }
      }
  }
})();
