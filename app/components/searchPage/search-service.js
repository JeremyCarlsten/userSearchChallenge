(function () {
    'use strict';

    var searchService = function ($http, $q) {
        var self = this;

        self.getAllUserData = function () {
            var deferred = $q.defer();
            $http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').then(function (result) {
                deferred.resolve(result.data);
            }, function(err){
                deferred.resolve(err);
            });

            return deferred.promise;
        };
    };

    angular.module('UserSearch', ['angularSpinner'])
        .service('searchService', ['$http', '$q', searchService]);
})();
