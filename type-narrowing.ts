// // Type narrowing
// // Refining a variable type's using a conditional flow

// // Type guard
// // Mechanism that help TS undersant and narrow down the types more precisely.
// // One common type guard is the typeof operator

// type MyType = string | number;

// function exampleFunc(value: MyType): void {
//   if (typeof value === "string") {
//     // if value is set to run this code, if uppercase is removed from here and put on top, throws an error since the type can be a number or a string
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// exampleFunc("hello");
// exampleFunc(200);

// // Type narrowing using instance of operator now
// // Allows to check if the object is an instance of a particular type or class

// class Dog {
//   bark(): void {
//     console.log("woof");
//   }
// }

// class Cat {
//   meow(): void {
//     console.log("meow");
//   }
// }

// function animalSound(animal: Dog | Cat): void {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// animalSound(myDog);
// animalSound(myCat);

// // Intersection type to perform type narrowing
