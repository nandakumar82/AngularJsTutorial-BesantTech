//works by accessing the variable controleers initialized in login.js not recommended, should use module pattern
/*controllers.controller('a', function($scope) {
    console.log("Inside");
});*/

angular.module('controllers').controller('a', function($scope) {
    console.log("Inside");
});