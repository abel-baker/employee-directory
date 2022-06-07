const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const roster = [];

const confirmContinueQuestions = [
  {
    name: 'continue',
    type: 'confirm',
    message: 'Add additional employee?',
    default: true
  }
];

const employeeQuestions = [
  {
    name: 'role',
    type: 'list',
    message: 'Employee role:',
    choices: [
      { name: 'Add engineer', value: 'engineer', short: 'Engineer' },
      { name: 'Add intern', value: 'intern', short: 'Intern' }]
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
  if (!answers.role || answers.role != 'manager') {
    console.log();
    console.log(`Enter Employee Information`);
    console.log(`========`);
  }

  const responses = await inquirer.prompt(questions, answers);
  let employee;

  switch (responses.role) {
    case 'intern':
      employee = new Intern(responses);
      console.log(`Created employee '${employee.name} [${employee.id}]' - ${employee.getRole()}, ${employee.school}`);
      break;
    case 'engineer':
      employee = new Engineer(responses); 
      console.log(`Created employee '${employee.name} [${employee.id}]' - ${employee.getRole()}, ${employee.github}`);
      break;
    case 'manager':
      employee = new Manager(responses); 
      console.log(`Created employee '${employee.name} [${employee.id}]' - ${employee.getRole()}, office ${employee.office}`);
      break;
    default:
      employee = new Employee(responses);
  }

  return employee;
}

async function run() {
  const manager = await promptManager();

  roster.push(manager);
  console.log(roster);

  let repeat;
  do {
    const employee = await promptEmployee(employeeQuestions, {});
    roster.push(employee);
    console.log(roster);

    repeat = await inquirer.prompt(confirmContinueQuestions);
    console.log(repeat);
  } while (repeat.continue);

  console.log(`Roster complete with (${roster.length}) employees.`);
  fs.writeFile('./dist/roster.json', JSON.stringify(roster, null, 2), err => {
    if (err) throw err;
  });
}

run();
