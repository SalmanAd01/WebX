var app = angular.module("Myapp", []);

app.controller("MainCtrl", function ($scope) {
  $scope.message = "Hello World!";

  $scope.equaltest = angular.equals(1, 1);
  $scope.equaltest2 = angular.equals(1, "1");

  $scope.copytest = angular.copy(1);

  $scope.extendtest = angular.extend({ a: 1 }, { b: 2 });

  $scope.forEachtest = angular.forEach([1, 2, 3], function (value, key) {
    console.log(value);
  })

  $scope.datetest = angular.isDate(new Date());
  
});
