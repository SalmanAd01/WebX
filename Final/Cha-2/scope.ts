// Scope in TypeScript
var global_num = 12; //global variable

class Numbers {
    // class variable
    num_val = 13;
    static sval = 10; //static field

    storeNum(): void {
        var local_num = 14; //local variable
        console.log("Local num: " + local_num);
    }
}

console.log("Global num: " + global_num);

console.log(Numbers.sval); //static variable

var obj = new Numbers();

console.log("Class num: " + obj.num_val); //class variable

obj.storeNum(); //local variable