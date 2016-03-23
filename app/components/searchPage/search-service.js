(function() {
  'use strict';

  var searchService = function($http) {
    var self = this;

    self.getAllUserData = function() {
      $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').then(function(result) {
        console.log(result.data);
        return result.data;
      });
    };
  };

  angular.module('UserSearch', [])
    .service('searchService', ['$http', searchService]);
})();
