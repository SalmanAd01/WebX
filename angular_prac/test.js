var angular = angular.module("myApp", []);
angular.controller("myController", function ($scope) {
  $scope.name = "World";

  // define a function
  $scope.sayHello = function () {
    return "Hello " + $scope.name;
  };
});
