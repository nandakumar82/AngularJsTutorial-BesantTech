angular.module('controllers').
controller('listctrl', function($scope,$state) {
    console.log("Inside listctrl");
    $scope.title = 'PEOPLE LIST';
    $scope.peopleList = [{ 'id': 1, 'name': 'Mukesh' }, { 'id': 2, 'name': 'Nanda' }, { 'id': 3, 'name': 'Kooper' }, { 'id': 4, 'name': 'Krishna' }, { 'id': 5, 'name': 'Amit' }];
    console.log($scope.peopleList);

     $scope.personDetails = function(id){
     		console.log(id);
     		$state.go('userinfo',{'id':id});
     }

    
})
