export const loginData = {
  username: 'tester123',
  password: 'testPwD1234',
};

export const userData = {
  id: 1337,
  username: 'tester123',
  email: 'testUser@gmail.com',
  avatar: null,
  is_admin: false,
};

export const registerData = {
  ...loginData,
  username: 'newUser',
  email: 'newEmail@gmail.com',
};

export const authToken = 'token';
