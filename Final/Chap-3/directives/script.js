var app = angular.module("Myapp", []);

app.controller("MainCtrl", function ($scope) {
  $scope.message = "Hello World!";
});

// custom directive to display the message
app.directive("myDirective", function () {
  return {
    restrict: "EA",
    template: "<div>{{message}}</div>",
  };
});

