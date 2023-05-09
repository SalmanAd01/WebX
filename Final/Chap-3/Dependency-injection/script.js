var app = angular.module("Myapp", []);

app.controller("MainCtrl", function ($scope) {
  $scope.message = "Hello World!";
});

// Value
app.value("AppName", "My App");
app.value("numVal", 0);

// Constant
app.constant("AppVersion", "1.0.0");

// Provider
// A provider is an object with a $get() method. The injector calls the $get() method to create a new instance of a service.
app.provider("rootServiceprovider", function () {
  this.$get = function () {
    var factory = {};

    factory.root = function (a) {
      a = parseInt(a);
      return Math.sqrt(a);
    };

    return factory;
  };
});

// Factory
// A factory is a function which returns an object. The object returned by the factory function is injected whenever the service is requested.

app.factory("CubeServicefactory", function () {
  var factory = {};

  factory.cube = function (a, b, c) {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    return a * b * c;
  };

  return factory;
});

// Service
// A service is a constructor function which is invoked with the new keyword to create a new instance.

app.service("SquareService", function () {
  this.square = function (a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a * b;
  };
});

app.controller(
  "CalcController",
  function (
    $scope,
    SquareService,
    numVal,
    CubeServicefactory,
    rootServiceprovider
  ) {
    $scope.result = numVal;

    $scope.square = function (a) {
      $scope.result = SquareService.square(a, a);
    };

    $scope.cube = function (a) {
      $scope.result = CubeServicefactory.cube(a, a, a);
    };

    $scope.root = function (a) {
      $scope.result = rootServiceprovider.root(a);
    };
  }
);

app.controller("injectController",[
  "$scope",
  "AppName",
  function (a, n) {
    a.appName = n;
  },
  
  // $scope.appVersion = AppVersionFn()
]);

var AppVersionFn = function (s,version) {
  s.appVersion = version;
}

AppVersionFn.$inject = ["$scope","AppVersion"];

app.controller("injectController2", AppVersionFn);




