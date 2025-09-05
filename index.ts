// TypeScript fundamentals

// Annotations -> allows to catch errors to specify the types of values for the data

// strings
let myName: string = "Divnoor";

// number
const myNumber: number = 12;

// boolean
const myBool: boolean = false;

console.log(`${myName}, ${myNumber}, ${myBool}`);

// Type inference -> Allows the compiler to automatically determine the type of the variable based on its value
// If you intialise a variable without a type, it will automatically try to infer it.

let tech = "Typescript";
// tech = 12 -> this gives an error since ts infered the type to be string and it expects that to be consistent
console.log(typeof tech);

// Any type
// TS any type can be used to represent any type, basically having any value and it disables all type checking for that type
// better to use specific types

let color: string = "blue";
console.log(color);

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

const numbers: number[] = [1, 2, 3, 4, 5];

const numbersWeird: Array<number> = [1, 2, 3, 4, 5];

console.log(numbers, numbersWeird);

const items: string[] = [];

items.push("keyboard");
console.log(items);

// Multi dimensional arrays -> arrays of arrays
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(matrix);

// objects -> collection of propoerties make up an object
// key - value pairs
// Properties of objects have specific types, the object itself can have a type
// Often it is described using a type or an interface alias

const person: customType = {
  name: "Div",
  age: 23,
};

console.log(person.name, person.age);

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

const rishabh: TPersonAndEmployee = {
  name: "Rishabh",
  age: 23,
  id: 1,
  role: "CEO",
};

console.log(rishabh);

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

const me: TProfessorAndStudent = {
  name: "Hello",
  courseCode: 12,
};

console.log(me);

// Literal types -> have to pick from the options given in the literals could be string, numver or boolean
let newName: "div" | 12 = 12;

newName = "div";

console.log(newName);

// Tuple -> Tuple is a type that represents an array with a FIXED NUMBER OF ELEMENTS
// each element can have a DIFFERENT TYPE but the order of types for a tuple definition corresponds to the order of the values in the actual array
let myTuple: [string, number] = ["divnoor", 12];

console.log(myTuple);

// Destructuring
let [huh, age] = myTuple;

console.log(huh, age);

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

const john = new PersonNew("John", 20);
console.log(john.name);

// Access modifiers -> in JS there is no concept of access modifiers
// in TS, these can be used to access modifiers to control the visibility of class members. Access modifiers determine the ways in which class memebers
// can be accessed withing and otuside the class
// for js oops refer the js index file
