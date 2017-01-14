var controllers = angular.module('controllers', []);
controllers.controller('login', function($scope, $state) {
    $scope.title = 'LOGIN';
    $scope.login = function() {
        $state.go('list');
    }
});
