const uniqid = require('uniqid');

class Employee {
  constructor({ name, email, id = uniqid.time() } = {}) {
    this.name = name;
    this.email = email;
    this.id = id;
  }

  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;