(function() {
  'use strict';
  
  angular.module('UserSearch')
    .controller('UserSearchController', ['searchService', UserSearchController]);


  function UserSearchController(searchService) {
      var self = this;

        console.log('it begins');

      var userData = searchService.getAllUserData();
  }
})();
