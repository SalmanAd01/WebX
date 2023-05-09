var app = angular.module("Myapp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<h1>Home</h1><p>This is the home page</p>",
    })
    .when("/about", {
      template: "<h1>About</h1><p>This is the about page</p>",
    })
    .when("/contact", {
      template: "<h1>Contact</h1><p>This is the contact page</p>",
    })
    .otherwise({
      template: "<h1>None</h1><p>Nothing has been selected</p>",
    });
});

app.controller("MainCtrl", function ($scope) {
  $scope.message = "Hello World!";
});
