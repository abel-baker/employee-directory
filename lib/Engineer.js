const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(obj = {}) {
    super(obj);

    this.github = obj.github? obj.github : undefined ;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return 'Engineer';
  }

}

module.exports = Engineer;