angular.module('main', [])
    .controller('form', function($scope) {

        $scope.submit = function() {
            console.log($scope.user);
        }
    });

