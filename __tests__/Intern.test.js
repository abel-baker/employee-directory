const Intern = require('../lib/Intern');

// super tests
test('creates an Intern object', () => {
  let galford = new Intern();

  expect(galford.id).not.toBe(-1);

  galford = new Intern({ name: 'Galford', email: 'galford@borg.or', school: 'Borgor Technical College' });

  expect(galford.name).toBe('Galford');
  expect(galford.getName()).toBe('Galford');
  expect(galford.email).toBe('galford@borg.or');
  expect(galford.getEmail()).toBe('galford@borg.or');
  expect(galford.getRole()).toBe('Intern');
});

test('Intern methods', () => {
  let galford = new Intern();
  
  galford = new Intern({ name: 'Galford', email: 'galford@borg.or', school: 'Borgor Technical College' });
  
  expect(galford.school).toBe('Borgor Technical College');

  expect(galford.officeNumber).toBeUndefined();
  expect(galford.github).toBeUndefined();
});