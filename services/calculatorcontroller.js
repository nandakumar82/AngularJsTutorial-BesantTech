angular.module('main', ['services'])
    .controller('calculator', function($scope,calcfactory) {

        $scope.add = function() {
            //console.log($scope.user);
            $scope.result = calcfactory.add($scope.A,$scope.B);
        };
        $scope.sub = function() {
            //console.log($scope.user);
            $scope.result = calcfactory.subtract($scope.A,$scope.B);
        };
        $scope.multiply = function() {
            //console.log($scope.user);
            $scope.result = calcfactory.multiply($scope.A,$scope.B);
        };
        $scope.divide = function() {
            //console.log($scope.user);
            $scope.result = calcfactory.divide($scope.A,$scope.B);
        };

    });

