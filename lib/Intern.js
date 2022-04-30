const Employee = require('./Employee');

class Intern extends Employee {
  constructor(obj = {}) {
    super(obj);

    this.school = obj.school? obj.school : undefined;
  }

  getSchool() { 
    return this.school;
  }
  getRole() {
    return 'Intern';
  }

}

module.exports = Intern;