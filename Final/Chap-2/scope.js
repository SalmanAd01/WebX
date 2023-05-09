// Scope in TypeScript
var global_num = 12; //global variable
var Numbers = /** @class */ (function () {
    function Numbers() {
        // class variable
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable
        console.log("Local num: " + local_num);
    };
    Numbers.sval = 10; //static field
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable
var obj = new Numbers();
console.log("Class num: " + obj.num_val); //class variable
obj.storeNum(); //local variable
