angular
    .module('interestApp')
    .controller('testController', testController)
function testController($scope) {
    	$scope.test = "AAA";
    var vm = this;
    vm.test = "Hello world!";
}

