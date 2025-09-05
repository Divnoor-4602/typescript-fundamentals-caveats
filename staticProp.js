// static -> removes access of the property or the method

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(this.username);
  }

  // as soon as a user is made, give it an id
  static createId() {
    return `123`;
  }
}

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("div", "div@phone");
