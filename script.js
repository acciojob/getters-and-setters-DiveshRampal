// Person class definition
class Person {
  private _name: string;
  private _age: number;

  // Constructor to initialize name and age
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name(): string {
    return this._name;
  }

  // Getter for age
  get age(): number {
    return this._age;
  }

  // Setter for age
  set age(age: number) {
    this._age = age;
  }
}

// Student class that inherits from Person
class Student extends Person {
  // Constructor that passes name and age to the Person constructor
  constructor(name: string, age: number) {
    super(name, age);
  }

  // Method to simulate studying
  study(): void {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class that inherits from Person
class Teacher extends Person {
  // Constructor that passes name and age to the Person constructor
  constructor(name: string, age: number) {
    super(name, age);
  }

  // Method to simulate teaching
  teach(): void {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching
