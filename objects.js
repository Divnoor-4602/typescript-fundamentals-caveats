const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  logChai: () => {
    console.log("chai");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai)); // will return undefined since it is an object not a property

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // on selecting the property it works

// define the properties and change them
Object.defineProperty(chai, "name", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value === "function") {
    continue;
  } else {
    console.log(key, value);
  }
}
