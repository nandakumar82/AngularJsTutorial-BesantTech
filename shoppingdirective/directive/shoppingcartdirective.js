angular.module('directives', []).directive('shoppingCart', function () {
    return {
        templateUrl: 'views/shopping-cart.html',
        scope: {
            items: '='
        },
        transclude: true,
        link: function (scope, element, attributes) {
            scope.totalCost = 0;
            scope.itemCount = 0;


            scope.add = function (item) {

                //Doing with DOM manipulation
                /*var totalCost = parseInt(element[0].querySelector('#totalCost').textContent);
                 var itemCount = parseInt(element[0].querySelector('#itemCount').textContent);
                 totalCost = totalCost + item.price;
                 itemCount = itemCount + 1;
                 element[0].querySelector('#totalCost').textContent = totalCost;
                 element[0].querySelector('#itemCount').textContent = itemCount;

                 console.log(item);*/

                //Doing with scope
                scope.totalCost = scope.totalCost + item.price;
                scope.itemCount = scope.itemCount + 1;
            }
        }


    };

});


angular.module('directives').
directive('parent', function () {
    return {
    	template: '{{value}}',
        controller: function ($scope) {
            this.add = function (item) {
                console.log('This is a directive controller');
                $scope.value = item;
            }
        }
    }
});

angular.module('directives').
directive('child', function () {
    return {
        require: '^parent',
        link: function (scope, element, attr, ctrl) {
        	console.log('In child');
            ctrl.add('child');
        }
    }
});