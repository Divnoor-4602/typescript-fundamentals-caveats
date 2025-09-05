// Generics in ts
// resuable components that can work with a variety of types
// Genereics allow you to create types, functions, classes and interfaces that can work with different data types without having to duplicate code
// <T>: abbr for Type
// This is called a type parameter so the type can be passed from where the function is being called as well this a type and a parameter is passed from here

function printNum(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}

function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}

function printBool(item: boolean, defaultValue: boolean): [boolean, boolean] {
  return [item, defaultValue];
}

function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

const bruh = uniqueDataTypesFunc<string>("div", "div2"); // makes the parameter and return type to be T generic stype changing it to string

console.log(bruh);

const num = printNum(10, 20);
const str = printString("div", "div");
const bool = printBool(false, true);
console.log(num, str, bool);

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>(
  { name: "buddy", breed: "Labrador" },
  {
    name: "frosty",
    breed: "Husky",
  }
);

console.log(dog1);

const filterArray = <T>(array: T[], condition: (item: T) => boolean): T[] => {
  return array.filter(condition);
};

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = filterArray<number>(numberArr, (num) => num % 2 == 0);
console.log(evenNumbers);

// Generic type with multiple types
function reversePair<T, U>(value1: T, value2: U): [U, T] {
  return [value2, value1];
}

const reversedPair = reversePair<boolean, number>(false, 40);

console.log(reversedPair);

// class with generics
class Box<T> {
  private content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const box = new Box<string>("hello");

console.log(box.getContent());
