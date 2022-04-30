const Employee = require('../lib/Employee');

//
test('creates an Employee object', () => {
  let guy = new Employee();

  expect(guy.id).not.toBe(-1);

  guy = new Employee({ name: 'Guy', email: 'guy@borg.or' });

  expect(guy.name).toBe('Guy');
  expect(guy.getName()).toBe('Guy');
  expect(guy.email).toBe('guy@borg.or');
  expect(guy.getEmail()).toBe('guy@borg.or');
  expect(guy.getRole()).toBe('Employee');
});

test('child class methods', () => {
  let guy = new Employee({ name: 'Guy', email: 'guy@borg.or' });

  expect(guy.officeNumber).toBeUndefined();
  expect(guy.github).toBeUndefined();
  expect(guy.school).toBeUndefined();
});