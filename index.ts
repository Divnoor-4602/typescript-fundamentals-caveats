// TypeScript fundamentals

// Annotations -> allows to catch errors to specify the types of values for the data

// strings
const myName: string = "Divnoor";

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

let color: any = "blue";
color = 10; // no error here since any type was used instead of an annotation
console.log(color);

// Function parameters and annotations
const addOne = (num: number): number => {
  return num + 1;
};

// provide default value in the function and return annotations
const minAge = (age: number = 18): boolean => {
  if (age >= 18) return true;

  return false;
};

// Void type -> it is to denote the absence of any value, often used with functions
const printMessage = (message: string): void => {
  console.log(`This is my ${message}`);
};

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
