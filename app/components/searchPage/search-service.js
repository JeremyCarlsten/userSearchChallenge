(function() {
  'use strict';

  var searchService = function($http, $q) {
    var self = this;

    self.getAllUserData = function() {
      var deferred = $q.defer();
      $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').then(function(result) {
         deferred.resolve(result.data);
      });

      return deferred.promise;
    };
  };

  angular.module('UserSearch', [])
    .service('searchService', ['$http', '$q', searchService]);
})();


// var testData = [
//   {
//   birthday:"1/15/1968",
//   city:"Bedford",
//   company:"Briazz",
//   country:"United States",
//   email:"ErnestoJTheroux@dayrep.com",
//   firstName:"Ernesto",
//   gender:"male",
//   id:1,
//   latitude:"42.418043",
//   longitude:"-71.346313",
//   middleInitial:"J",
//   motto:"640K ought to be enough for anybody. (Bill Gates, 1981)",
//   occupation:"Stevedore",
//   portrait:"http://s1.postimg.org/j5mytq3iz/profile.jpg",
//   state:"MA",
//   streetAddress:"3426 Christie Way",
//   surname:"Theroux",
//   title:"Mr.",
//   username:"Himeacerhe",
//   zipCode:"1730"
// },
// {
// birthday:"1/15/1968",
// city:"Bedford",
// company:"Briazz",
// country:"United States",
// email:"ErnestoJTheroux@dayrep.com",
// firstName:"Joe",
// gender:"male",
// id:1,
// latitude:"42.418043",
// longitude:"-71.346313",
// middleInitial:"J",
// motto:"640K ought to be enough for anybody. (Bill Gates, 1981)",
// occupation:"Dev",
// portrait:"http://s1.postimg.org/j5mytq3iz/profile.jpg",
// state:"MA",
// streetAddress:"3426 Christie Way",
// surname:"Smoe",
// title:"Mr.",
// username:"Himeacerhe",
// zipCode:"1730"
// }
// ]
