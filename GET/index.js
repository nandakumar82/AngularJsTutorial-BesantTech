angular.module('main', [])
    .controller('restex', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            //console.log(data);
            $scope.comments = response.data;
        }, function errorCallback(error) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(error);
        });
    });
