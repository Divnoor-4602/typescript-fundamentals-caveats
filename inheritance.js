// this keyword gives the current context

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }
}

// for inheritance use extends to get all the functionality of another class
class Teacher extends User {
  constructor(username, email, password) {
    // this.username = username;
    super(username); // refers to the original class and then sets it in there and get the access here
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const tea = new Teacher("div", "div@gmail.com", "divnoor");

tea.addCourse();

const chai = new User("div2");
chai.logMe();
