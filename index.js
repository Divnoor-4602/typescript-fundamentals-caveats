// OOPS IN JS -> weird ash

class User {
  // initialises the class object
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // method to encrypt password
  encryptPassword() {
    return `${this.password}abc`;
  }

  // capitalise username
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "divnoor");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene
// under the hood js uses functions and prototypes to create classes and methods

// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function () {
//   return `${this.password}abc`;
// };
