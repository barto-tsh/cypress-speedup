import BasePage from './base.page';

import { registerData, authToken } from '../fixtures/auth.data';

class RegisterPage extends BasePage {
  constructor() {
    super();
    this.url = '/register';
    this.components = {};
    this.elements = {
      form: 'login-form',
      usernameInput: 'input[name="username"]',
      passwordInput: 'input[name="password1"]',
      passwordConfirmationInput: 'input[name="password2"]',
      emailInput: 'input[name="email"]',
      submitButton: 'form-submit',
      alert: 'login-alert',
    };
  }

  public goToLoginPage() {
    cy.getByTestId('login-link').click();
  }

  public goToHomePage() {
    cy.getByTestId('logo-link').click({ force: true });
  }

  public register(username: string, password1: string, password2: string, email?: string) {
    cy.intercept('POST', '**/auth/register*', (req) => {
      const { username, password1 } = req.body;
      req.on('response', (res) => {
        res.setThrottle(1000);
      });
      req.continue((res) => {
        if (username === registerData.username && password1 === registerData.password) {
          res.send(200, { key: authToken });
        } else {
          res.send(400, { non_field_errors: ['Unable to lg in with provided credentials'] });
        }
      });
    }).as('register');

    if (username) cy.get(this.elements.usernameInput).type(username);
    if (password1) cy.get(this.elements.passwordInput).type(password1);
    if (password2) cy.get(this.elements.passwordConfirmationInput).type(password2);
    if (email) cy.get(this.elements.emailInput).type(email);
    cy.getByTestId(this.elements.submitButton).click();
  }

  public clearForm() {
    cy.get(this.elements.usernameInput).clear();
    cy.get(this.elements.passwordInput).clear();
    cy.get(this.elements.passwordConfirmationInput).clear();
    cy.get(this.elements.emailInput).clear();
  }
}

export default RegisterPage;
