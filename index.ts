// TypeScript fundamentals

// Annotations -> allows to catch errors to specify the types of values for the data

// strings
let basicString: string = "Divnoor";

// number
const basicNumber: number = 12;

// boolean
const basicBoolean: boolean = false;

console.log(`${basicString}, ${basicNumber}, ${basicBoolean}`);

// Type inference -> Allows the compiler to automatically determine the type of the variable based on its value
// If you intialise a variable without a type, it will automatically try to infer it.

let inferredString = "Typescript";
// inferredString = 12 -> this gives an error since ts infered the type to be string and it expects that to be consistent
console.log(typeof inferredString);

// Any type
// TS any type can be used to represent any type, basically having any value and it disables all type checking for that type
// better to use specific types

let anyTypeExample: string = "blue";
console.log(anyTypeExample);

// Function parameters and annotations
// const addOne = (num: number): number => {
//   return num + 1;
// };

// provide default value in the function and return annotations
// const minAge = (age: number = 18): boolean => {
//   if (age >= 18) return true;

//   return false;
// };

// Void type -> it is to denote the absence of any value, often used with functions
// const printMessage = (message: string): void => {
//   console.log(`This is my ${message}`);
// };

// Never -> somewhat like the any keyword, used to denote that the function will not return anything or that the variable can never have any value
// when to use the never keyword
// A function that has an infinite loop
// A function that always throws an error
// A variable that can never have a value
// const infiniteLoop = (): never => {
//   while (true) {}
// };

// Arrays -> object that can store multiple data values of the same type

const arrayNumbers: number[] = [1, 2, 3, 4, 5];

const arrayNumbersGeneric: Array<number> = [1, 2, 3, 4, 5];

console.log(arrayNumbers, arrayNumbersGeneric);

const arrayItems: string[] = [];

arrayItems.push("keyboard");
console.log(arrayItems);

// Multi dimensional arrays -> arrays of arrays
const arrayMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(arrayMatrix);

// objects -> collection of propoerties make up an object
// key - value pairs
// Properties of objects have specific types, the object itself can have a type
// Often it is described using a type or an interface alias

const objectPerson: customType = {
  name: "Div",
  age: 23,
};

console.log(objectPerson.name, objectPerson.age);

// type aliases
// a way to create custom types and initialising them in a meaningful way
type customType = {
  name: string;
  age: number;
};

// Optional properties
// add a question sign to make it optional, ts wont throw an error if you don't provide the optional property

// Readonly
// if a property in type is readonly, it cannot be reassigned

// type User = {
//   name: string;
//   readonly location: string;
// };

// const user: User = {
//   name: "div",
//   location: "chandigarh",
// };

// console.log(user.location);

// Intersection types
// Combines multiple types into a single type such that all the methods and properties of both the types are present in the resulting type
// Properties from both the types MUST be there
type Person = {
  name: string;
  age: number;
};

type Employee = {
  id: number;
  role: string;
};

type TPersonAndEmployee = Person & Employee;

const intersectionExample: TPersonAndEmployee = {
  name: "Rishabh",
  age: 23,
  id: 1,
  role: "CEO",
};

console.log(intersectionExample);

// Union of types -> combines multiple types into a single type where the properties of all the types combined may or may not be there
// All properties DO NOT NEED TO BE THERE
type Student = {
  name: string;
  courseCode: number;
};

type Professor = {
  id: number;
  subject: string;
};

type TProfessorAndStudent = Student | Professor;

const unionExample: TProfessorAndStudent = {
  name: "Hello",
  courseCode: 12,
};

console.log(unionExample);

// Literal types -> have to pick from the options given in the literals could be string, numver or boolean
let literalExample: "div" | 12 = 12;

literalExample = "div";

console.log(literalExample);

// Tuple -> Tuple is a type that represents an array with a FIXED NUMBER OF ELEMENTS
// each element can have a DIFFERENT TYPE but the order of types for a tuple definition corresponds to the order of the values in the actual array
let tupleExample: [string, number] = ["divnoor", 12];

console.log(tupleExample);

// Destructuring
let [tupleName, tupleAge] = tupleExample;

console.log(tupleName, tupleAge);

// Enums
// way to define a set of named constants
// allows you to define a collection of related values that can be used interchangeably
// automatically assings keys like 0 -> Sunny

// OOPS in TS
// Class in typescript

// you can annotate class property with a type in ts
class PersonNew {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const classExample = new PersonNew("John", 20);
console.log(classExample.name);

// Access modifiers -> in JS there is no concept of access modifiers
// in TS, these can be used to access modifiers to control the visibility of class members. Access modifiers determine the ways in which class memebers
// can be accessed withing and otuside the class
// for js oops refer the js index file
// public, private, protected

// public can be accessed outside and within the class
// private -> can only be accessed within the class, not accessible even with extends inheritance
// protected -> can be used within the class and inherited classes using the keyword extends

class Person12 {
  public first: string;
  public last: string;
  private age: number;
  protected role: string;

  constructor(first: string, last: string, age: number, role: string) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.role = role;
  }

  // Public method to access private age property
  public getAge(): number {
    return this.age;
  }

  // Public method to get full name
  public getFullName(): string {
    return `${this.first} ${this.last}`;
  }
}

class Work extends Person12 {
  constructor(first: string, last: string, age: number, role: string) {
    super(first, last, age, role);
  }
}

let accessModifierExample = new Work("div", "noor", 20, "trach");
console.log(
  "Worker class: private and protected test, ",
  accessModifierExample
);

// Interfaces
