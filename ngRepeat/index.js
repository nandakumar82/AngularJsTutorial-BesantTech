angular.module('main', [])
    .controller('loop', function($scope) {
        
        // $scope.data = ['Krishnadeep', 'Amit', 'Priyajith'];
        $scope.data = [{ 'id': 1, 'salary': 10000, 'name': 'Krishnadeep' }, { 'id': 2, 'salary': 20000, 'name': 'Ram' }, { 'id': 3, 'salary': 30000, 'name': 'Vishnu' }]
        $scope.Save = function() {
            $scope.data.push($scope.name);
        };
    });
