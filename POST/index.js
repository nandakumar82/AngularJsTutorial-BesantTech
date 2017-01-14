angular.module('main', [])
    .controller('restex', function($scope, $http) {

        $scope.save = function() {
            $http.post('http://192.168.0.18:3000/users', $scope.user).then(function(response) {
                console.log(response.data);
            })
        }
    });
