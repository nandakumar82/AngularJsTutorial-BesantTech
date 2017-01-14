angular.module('controllers').
controller('userInfoCtrl', function($scope,$stateParams) {
    console.log("Inside userInfoCtrl");
    $scope.value = $stateParams.id;

     //create an object with contents based on id, 
});
