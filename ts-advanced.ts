// extends keyword (classes, interfaces) or & in case of types to perform intersection of types

// T is a super set of string, has everything in string type and more stuff
// T needs to contain atleast one constraint of being a string and then can have extra stuff

// T must extend string
// type Generic<T extends string> = {
//   name: T;
// };

// type CustomType = {
//   age: number;
// } & string;

// const a: Generic<CustomType>;

// T can extend string and if it does, its true otherwise return false
// type Generic<T> = {
//   prop: T extends string ? string : T extends number ? number : undefined;
// };

// type CustomType = {
//   age: number;
// } & string;

// const a: Generic<null> = {
//   prop: undefined,
// };

// INFER -> extends on the extends keyword

// does t extend an array of any type and then set the value of the array to that type
// type Generic<T> = T extends Array<infer U> ? U : never;

// const b = ["efbeuf"];

// const a: Generic<typeof b> = "efbeuf";
