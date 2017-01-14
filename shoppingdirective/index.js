angular.module('main', ['directives'])
    .controller('shoppingcart', function($scope) {
        $scope.shoppingitems = [{ id: 1, name: 'pen drive', price: 10 }, { id: 2, name: 'laptop', price: 1000 }, { id: 3, name: 'mouse', price: 15 }];

        $scope.name = 'Flipkart';
    });
