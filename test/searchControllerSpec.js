describe('UserSearchControllerTest', function() {
    var searchCtrl, deferred;

    beforeEach(function(){
      bard.appModule('UserSearch');
      bard.inject('$httpBackend','$q', '$rootScope','$controller', 'searchService');
      deferred = $q.defer();


      spyOn(searchService, 'getAllUserData').and.returnValue(deferred.promise);
      searchCtrl = $controller('UserSearchController', {
          searchService: searchService
      });
    });

    it('should properly setup initial data', function () {
        var firstPerson = {firstname: 'Bob', occupation: 'Dev', company: 'Awesome Inc.'};
        var dataList = [firstPerson, {firstname: 'James', occupation: 'BA', company: 'Awesome Inc.'}];
        deferred.resolve(dataList)

        $rootScope.$apply();

        expect(searchService.getAllUserData).toHaveBeenCalled();
        expect(searchCtrl.userData).toEqual(dataList);
        expect(searchCtrl.searchFilter).toEqual('');
        expect(searchCtrl.user).toEqual(firstPerson);
        expect(searchCtrl.showSpinner).toEqual(false);
    });

    it('should handle no data from server', function () {
        var dataList = [];
        deferred.resolve(dataList)

        $rootScope.$apply();

        expect(searchService.getAllUserData).toHaveBeenCalled();
        expect(searchCtrl.userData).toEqual(dataList);
        expect(searchCtrl.searchFilter).toEqual('');
        expect(searchCtrl.user).toEqual({});
    });

    it('getUserDetails should setup current details based on index', function () {
        var firstPerson = {firstname: 'Bob', occupation: 'Dev', company: 'Awesome Inc.'};
        var secondPerson = {firstname: 'James', occupation: 'BA', company: 'Not Awesome Inc.'};
        var dataList = [firstPerson, secondPerson];
        deferred.resolve(dataList)

        $rootScope.$apply();

        expect(searchCtrl.userData).toEqual(dataList);
        expect(searchCtrl.user).toEqual(firstPerson);

        searchCtrl.getUserDetails(1)
        expect(searchCtrl.user).toEqual(secondPerson);

        searchCtrl.getUserDetails(0)
        expect(searchCtrl.user).toEqual(firstPerson);
    });
});
