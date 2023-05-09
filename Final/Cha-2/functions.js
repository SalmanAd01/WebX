// return type
function add(a, b) {
    return a + b;
}
// void return type
function printResult(num) {
    console.log("Result: " + num);
}
// parameter type
function multiply(num1, num2) {
    return num1 * num2;
}
// optional parameter
function add3(a, b) {
    return a + (b || 0);
}
// default parameter
function add4(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
// named parameter
function add5(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
// rest parameter
function add6() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; });
}
var negatFunc = function (a) { return -a; };
// calling function
printResult(add(5, 12));
console.log(multiply(5, 2));
console.log(add3(5));
console.log(add4(5, 5));
console.log(add5({ a: 5, b: 5 }));
console.log(add6(5, 5, 5, 5));
console.log(negatFunc(5));
