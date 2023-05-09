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

const emp = new Employee("John", "Sales");
emp.display();

// method overriding
class Person2 {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
  display() {
    console.log(this.Name);
  }
}

class Employee2 extends Person2 {
  Department: string;
  constructor(name: string, department: string) {
    super(name);
    this.Department = department;
  }
  display() {
    super.display();
    console.log(this.Department);
  }
}

const emp2 = new Employee2("John", "Sales");
emp2.display();

// Encapsulation
class Person4 {
  private _name: string;
  public age: number;
  protected phone: string;
  constructor(name: string, age?: number, phone?: string) {
    this._name = name;
    this.age = age || 0;
    this.phone = phone || "";
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  display() {
    console.log(this.name, this.age, this.phone);
  }
}

const person4 = new Person4("John", 25, "1234567890");
console.log(person4.name);
person4.name = "Doe";
console.log(person4.name);
person4.display();


// Abstraction
abstract class Person3 {
  Name: string;
  constructor(name: string) {
    this.Name = name;
  }
  abstract display(): void;
}

class Employee3 extends Person3 {
  Department: string;
  constructor(name: string, department: string) {
    super(name);
    this.Department = department;
  }
  display() {
    console.log(this.Name, this.Department);
  }
}

const emp3 = new Employee3("John", "Sales");
emp3.display();

// Interface
interface Person5 {
  Name: string;
  display(): void;
}

class Employee5 implements Person5 {
  Name: string;
  Department: string;
  constructor(name: string, department: string) {
    this.Name = name;
    this.Department = department;
  }
  display() {
    console.log(this.Name, this.Department);
  }
}

const emp5 = new Employee5("John", "Sales");
emp5.display();
