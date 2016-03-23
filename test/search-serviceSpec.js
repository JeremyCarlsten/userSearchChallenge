describe("searchServiceTest", function() {
    var searchService;

    beforeEach(function(){
      bard.appModule('UserSearch');
      bard.inject('$httpBackend','searchService');
    });

    describe("getAllUserData", function() {
        it("should call to server url and get data about the users", function () {
                $httpBackend.expectGET('http://private-a73e-aquentuxsociety.apiary-mock.com/members').respond([]);
        });
    });
});
