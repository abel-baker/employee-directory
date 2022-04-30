const Employee = require('./Employee');

class Manager extends Employee {
  constructor(obj = {}) {
    super(obj);

    this.officeNumber = obj.officeNumber? obj.officeNumber : 404;
  }

  getRole() { 
    return 'Manager';
  }
}

module.exports = Manager;