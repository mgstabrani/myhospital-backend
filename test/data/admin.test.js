/* eslint-disable no-undef */
const { admin } = require('../../src/data');

test('admin should has correct data', () => {
  expect(admin.firstName).toBe('Mgs.');
  expect(admin.lastName).toBe('Tabrani');
  expect(admin.age).toBe(19);
  expect(admin.email).toBe('mgstabrani19@gmail.com');
  expect(admin.username).toBe('mgstabrani');
  expect(admin.password).toBe('mypassword');
});
