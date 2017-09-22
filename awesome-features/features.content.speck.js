describe('ValetListController', function() {

    beforeEach(module('featureApp'));

    it('should create a `products` model with 1 products', inject(function($controller) {
        var scope = {};
        var ctrl = $controller('ValetListController', {$scope: scope});

        expect(scope.valets.length).toBe(1);
    }));

});