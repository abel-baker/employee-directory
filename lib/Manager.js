const Employee = require('./Employee');

class Manager extends Employee {
  constructor(obj = {}) {
    super(obj);

    this.office = obj.office? obj.office : 404;
  }

  getRole() { 
    return 'Manager';
  }

  getOfficeNumber() {
    return this.office;
  }
}

module.exports = Manager;