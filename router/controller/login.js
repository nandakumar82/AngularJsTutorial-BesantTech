var controllers = angular.module('controllers', []);

controllers.controller('login', function($scope,$state) {
    $scope.name = 'router';
    

    $scope.login =function(){
    	$state.go('a');	
    }
});