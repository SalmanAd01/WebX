// return type

function add(a: number, b: number): number {
  return a + b;
}

// void return type
function printResult(num: number): void {
  console.log('Result: ' + num);
}

// parameter type
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

// optional parameter
function add3(a: number, b?: number): number {
  return a + (b || 0);
}

// default parameter
function add4(a: number, b = 1): number {
  return a + b;
}

// named parameter
function add5({ a, b }: { a: number; b: number }): number {
  return a + b;
}

// rest parameter
function add6(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

// type alias
type negat = (a: number) => number;
const negatFunc: negat = (a) => -a;

// calling function
printResult(add(5, 12));
console.log(multiply(5, 2));
console.log(add3(5));
console.log(add4(5, 5));
console.log(add5({ a: 5, b: 5 }));
console.log(add6(5, 5, 5, 5));
console.log(negatFunc(5));

// Inheritance
class Person {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
}

class Employee extends Person {
  Department: string;
  constructor(name: string, department: string) {
    super(name);
    this.Department = department;
  }
  display() {
    console.log(this.Name, this.Department);
  }
}

const emp = new Employee('John', 'Sales');
emp.display();
