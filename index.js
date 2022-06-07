const inquirer = require('inquirer');
const uniqid = require('uniqid');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const roster = [];

// const roleQuestions = [
//   {
//     name: 'addEmployee',
//     type: 'confirm',
//     message: 'Add an employee?',
//     default: true
//   },
//   {
//     when: (answers) => answers.addEmployee,
//     name: 'employeeRole',
//     type: 'list',
//     message: 'Employee type:',
//     choices: ['Add engineer', 'Add intern', 'Cancel and finish roster']
//   }
// ];

const confirmContinueQuestions = [
  {
    name: 'continue',
    type: 'confirm',
    message: 'Add additional employee?',
    default: true
  }
];
const roleQuestions = [
  {
    when: (answers) => answers.addEmployee,
    name: 'employeeRole',
    type: 'list',
    message: 'Employee role:',
    choices: ['Add engineer', 'Add intern', 'Cancel and finish roster']    
  }
];

const employeeQuestions = [
  {
    name: 'role',
    type: 'list',
    message: 'Employee role:',
    choices: [
      { name: 'Add engineer', value: 'engineer' },
      { name: 'Add intern', value: 'intern' }]
  },
  {
    name: 'name',
    message: 'Employee name:',
    validate: input => input ? true : 'Please enter the Employee\'s name'
  },
  {
    name: 'email',
    message: 'Employee email:',
    validate: input => input ? true : 'Please enter the Employee\'s email'
  },
  {
    when: (answers) => answers.role == 'engineer',
    name: 'github',
    message: 'Engineer\'s github:',
    validate: input => input ? true : 'Please enter the Engineer\'s github name'
  },
  {
    when: (answers) => answers.role == 'intern',
    name: 'school',
    message: 'Intern\'s school:',
    validate: input => input ? true : 'Please enter the Intern\'s school name'
  },
  {
    when: (answers) => answers.role == 'manager',
    name: 'office',
    message: 'Office number:',
    validate: input => input ? true : 'Please enter the Manager\'s office number'
  }
];

async function promptManager() {
  console.log();
  console.log(`Enter Manager Information`);
  console.log(`========`);

  return new Manager(await promptEmployee(employeeQuestions, { role: 'manager' }));
}

async function promptEmployee(questions, answers) {
  const responses = await inquirer.prompt(questions, answers);
  let employee;

  switch (responses.role) {
    case 'intern':
      employee = new Intern(responses); break;
    case 'engineer':
      employee = new Engineer(responses); break;
    case 'manager':
      employee = new Manager(responses); break;
    default:
      employee = new Employee(responses);
  }

  return employee;
}

async function run() {
  const manager = await promptManager();

  roster.push(manager);
  console.log(roster);

  const employee = await promptEmployee(employeeQuestions, {});
  
  console.log(employee);

  // do {
  //   console.log();
  //   console.log(`Enter Employee Information`);
  //   console.log(`========`);

  //   const role = await inquirer.prompt(roleQuestions);
  //   const employee = await promptEmployee();
  //   console.log(employee);
    
  // } while (true);

}

run();

// .then(() => {
//   promptEmployee()
//   .then(promptEmployeeId)
//   .then(employeeData => {
//     console.log(employeeData);
//   })
// });




// Begin with required Manager employee: name, employeeID, email address, office number
// Add engineer or intern or finish team
// Engineer: name, id, email, github username
// Intern: name, id, email, school