const Manager = require('../lib/Manager');

// super tests
test('creates an Manager object', () => {
  let franklin = new Manager();

  expect(franklin.id).not.toBe(-1);

  franklin = new Manager({ name: 'Franklin', email: 'franklin@borg.or', officeNumber: 200 });

  expect(franklin.name).toBe('Franklin');
  expect(franklin.getName()).toBe('Franklin');
  expect(franklin.email).toBe('franklin@borg.or');
  expect(franklin.getEmail()).toBe('franklin@borg.or');
  expect(franklin.getRole()).toBe('Manager');
});

test('Manager methods', () => {
  let franklin = new Manager();

  expect(franklin.officeNumber).toBe(404);

  franklin = new Manager({ name: 'Franklin', email: 'franklin@borg.or', officeNumber: 200 });

  expect(franklin.officeNumber).toBe(200);
  
  expect(franklin.github).toBeUndefined();
  expect(franklin.school).toBeUndefined();
});