describe("userCtrlTest", function() {
    var userCtrl;

    beforeEach(function(){
      module('UserSearch');
      inject(function($controller){
        userCtrl = $controller('UserSearchController');
      });
    });

    describe("should do something", function() {
        it("should really do something", function () {
            expect(true).toBe(true);
        });
    });
});
