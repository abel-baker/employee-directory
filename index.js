const inquirer = require('inquirer');

const employeeQuestions = [
  {
    name: 'employeeName',
    message: 'Employee Name',
    validate: input => input ? true : 'Please enter the Employee\'s name'
  },
  {
    name: 'employeeEmail',
    message: 'Employee email',
    validate: input => input ? true : 'Please enter the Employee\'s name'
  }
];

const employeeIdQuestions = [
  {
    name: 'employeeId',
    message: 'Employee Id'
  },
  {
    when: (answers) => answers.managerId == '',
    name: 'generateId',
    message: 'Generate Employee Id?',
    default: false
  }
]

function promptEmployee() {
  return inquirer.prompt(employeeQuestions);
}
function promptEmployeeId(employeeData) {
  return inquirer.prompt(employeeIdQuestions)
    .then(idData => {
      employeeData.push(idData);
      return employeeData;
    })
  // return inquirer.prompt(employeeIdQuestions);
}

promptEmployee() 
  .then(promptEmployeeId)
  .then(employeeData => {

  })


// Begin with required Manager employee: name, employeeID, email address, office number
// Add engineer or intern or finish team
// Engineer: name, id, email, github username
// Intern: name, id, email, school