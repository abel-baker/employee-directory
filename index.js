const inquirer = require('inquirer');
const uniqid = require('uniqid');

const roster = {};

const roleQuestions = [
  {
    name: 'addEmployee',
    type: 'confirm',
    message: 'Add an employee?',
    default: true
  },
  {
    when: (answers) => answers.addEmployee,
    name: 'employeeRole',
    type: 'list',
    message: 'Employee type:',
    choices: ['Add engineer', 'Add intern', 'Cancel and finish roster']
  }
];

const employeeQuestions = [
  {
    name: 'employeeName',
    message: 'Employee name:',
    validate: input => input ? true : 'Please enter the Employee\'s name'
  },
  {
    name: 'employeeEmail',
    message: 'Employee email:',
    validate: input => input ? true : 'Please enter the Employee\'s email'
  }
];

const employeeIdQuestions = [
  {
    name: 'employeeId',
    message: 'Employee id:'
  },
  {
    when: (answers) => answers.employeeId == '',
    type: 'confirm',
    name: 'generateId',
    message: 'Generate employee id?',
    default: false
  }
];

function promptManager() {
  console.log();
  console.log(`Enter Manager Information`);
  console.log(`========`);

  return promptEmployee();
}

function promptEmployee() {
  return inquirer.prompt(employeeQuestions);
}
function promptEmployeeId(employeeData) {
  return inquirer.prompt(employeeIdQuestions)
    .then(idData => {
      // If the user omits an id, offer to generate
      if (idData.generateId) {
        idData.employeeId = uniqid();
      } else if (idData.employeeId === '') {
        return promptEmployeeId(employeeData);
      }

      employeeData.employeeId = idData.employeeId;

      return employeeData;
    })
}

promptManager()
.then(manager => {
  roster.manager = manager;
  console.log(roster);
})
.then(() => {
  promptEmployee() 
  .then(promptEmployeeId)
  .then(employeeData => {
    console.log(employeeData);
  })
});




// Begin with required Manager employee: name, employeeID, email address, office number
// Add engineer or intern or finish team
// Engineer: name, id, email, github username
// Intern: name, id, email, school