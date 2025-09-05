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

console.log(minAge(1));
