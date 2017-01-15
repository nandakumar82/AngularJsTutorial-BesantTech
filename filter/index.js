angular.module('main', [])
    .controller('customFilter', function($scope) {

    });

angular.module('main').
filter('ordinal', function() {
    return function(number) {
            console.log(number);
            if (isNaN(number) || number < 1)
                return number;

            var lastDigit = number % 10;

            if (lastDigit === 1) {
                return number + 'st';

            } else if (lastDigit === 2) {
                return number + 'nd';

            } else if (lastDigit === 3) {
                return number + 'rd';
            } else {
                return number + 'th';
            }

        }
  
});
