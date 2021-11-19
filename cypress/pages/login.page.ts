import { loginData, authToken } from '../fixtures/auth.data';

import BasePage from './base.page';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = '/login';
    this.components = {};
    this.elements = {
      form: 'login-form',
      usernameInput: 'input[name="username"]',
      passwordInput: 'input[name="password"]',
      submitButton: 'form-submit',
      alert: 'login-alert',
    };
  }

  public login(username: string, password: string) {
    cy.intercept('POST', '**/auth/login*', (req) => {
      const { username, password } = req.body;
      req.on('response', (res) => {
        res.setThrottle(1000);
      });
      req.continue((res) => {
        if (username === loginData.username && password === loginData.password) {
          res.send(200, { key: authToken });
        } else {
          res.send(400, { non_field_errors: ['Unable to log in with provided credentials'] });
        }
      });
    }).as('login');

    if (username) cy.get(this.elements.usernameInput).type(username);
    if (password) cy.get(this.elements.passwordInput).type(password);
    cy.getByTestId(this.elements.submitButton).click();
  }

  public goToRegisterPage() {
    cy.getByTestId('registration-link').click();
  }

  public goToHomePage() {
    cy.getByTestId('logo-link').click({ force: true });
  }

  public isAlertVisible() {
    cy.getByTestId('login-alert').should('exist');
  }
}

export default LoginPage;
