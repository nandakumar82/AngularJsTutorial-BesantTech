angular.module('main', [])
    .controller('one', function($scope, $rootScope) {
        $rootScope.$on('EVENT_FOR_CLICK', function(item, item1) {
            console.log("In Controller one");
            $scope.value = item1;
        })

    });

angular.module('main')
    .controller('three', function($scope, $rootScope) {
        $rootScope.$on('EVENT_FOR_CLICK', function(item, item1) {
            console.log("In Controller three");
            $scope.value = item1;
        })

    });

angular.module('main')
    .controller('two', function($scope, $rootScope) {
        $scope.raiseEvent = function() {
            $rootScope.$emit('EVENT_FOR_CLICK', 'two')
        }

    });
