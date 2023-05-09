var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.Name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.Department = department;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log(this.Name, this.Department);
    };
    return Employee;
}(Person));
var emp = new Employee("John", "Sales");
emp.display();
// method overriding
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.Name = name;
    }
    Person2.prototype.display = function () {
        console.log(this.Name);
    };
    return Person2;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.Department = department;
        return _this;
    }
    Employee2.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(this.Department);
    };
    return Employee2;
}(Person2));
var emp2 = new Employee2("John", "Sales");
emp2.display();
// Encapsulation
var Person4 = /** @class */ (function () {
    function Person4(name, age, phone) {
        this._name = name;
        this.age = age || 0;
        this.phone = phone || "";
    }
    Object.defineProperty(Person4.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Person4.prototype.display = function () {
        console.log(this.name, this.age, this.phone);
    };
    return Person4;
}());
var person4 = new Person4("John", 25, "1234567890");
console.log(person4.name);
person4.name = "Doe";
console.log(person4.name);
person4.display();
// Abstraction
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.Name = name;
    }
    return Person3;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.Department = department;
        return _this;
    }
    Employee3.prototype.display = function () {
        console.log(this.Name, this.Department);
    };
    return Employee3;
}(Person3));
var emp3 = new Employee3("John", "Sales");
emp3.display();
var Employee5 = /** @class */ (function () {
    function Employee5(name, department) {
        this.Name = name;
        this.Department = department;
    }
    Employee5.prototype.display = function () {
        console.log(this.Name, this.Department);
    };
    return Employee5;
}());
var emp5 = new Employee5("John", "Sales");
emp5.display();
