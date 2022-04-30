const Engineer = require('../lib/Engineer');

// super tests
test('creates an Engineer object', () => {
  let alain = new Engineer();

  expect(alain.id).not.toBe(-1);

  alain = new Engineer({ name: 'Alain', email: 'alain@borg.or', github: 'alainborgor-with-cheese' });

  expect(alain.name).toBe('Alain');
  expect(alain.getName()).toBe('Alain');
  expect(alain.email).toBe('alain@borg.or');
  expect(alain.getEmail()).toBe('alain@borg.or');
  expect(alain.getRole()).toBe('Engineer');
});

test('Engineer methods', () => {
  let alain = new Engineer();
  
  alain = new Engineer({ name: 'Alain', email: 'alain@borg.or', github: 'alainborgor-with-cheese' });
  
  expect(alain.github).toBe('alainborgor-with-cheese');

  expect(alain.officeNumber).toBeUndefined();
  expect(alain.school).toBeUndefined();
});