//add dependency of ui-router , required for accessing $stateProvider
angular.module('main', ['ui.router', 'controllers'])
    .config(function($stateProvider) {
        $stateProvider.state('login', {
            url: '',
            templateUrl: 'views/login.html',
            controller: 'login'
        }).state('list', {
            url: '/list',
            templateUrl: 'views/list.html',
            controller: 'listctrl'
        }).state('userinfo',{
            url:'/userinfo/:id',
            templateUrl : 'views/userinfo.html',
            controller : 'userInfoCtrl'
        });

    });
