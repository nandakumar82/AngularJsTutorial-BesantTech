//add dependency of ui-router , required for accessing $stateProvider
angular.module('main', ['ui.router', 'controllers'])
    .config(function($stateProvider) {
        $stateProvider.state('login', {
            url: '',
            /*template: '<span>Welcome {{name}} Router</span>',*/
            templateUrl: 'views/login.html',
            controller: 'login'
                /*function($scope){
                	$scope.name = 'router';
                }*/

        }).state('a', {
            url: '/a',
            templateUrl: 'views/a.html',
            controller: 'a'
        }).state('b',{
            url:'/b/:id',
            
        });

    });


//Seperating the controller out of the route logic
/*var controllers = angular.module('controllers', []);

controllers.controller('login', function($scope) {
    $scope.name = 'router';
});

controllers.controller('a', function($scope) {
    console.log("Inside");
});
*/