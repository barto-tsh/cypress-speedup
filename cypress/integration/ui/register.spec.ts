import RegisterPage from '../../pages/register.page';
import { registerData, userData } from '../../fixtures/auth.data';

describe('As a user I want to create an account', () => {
  const registerPage = new RegisterPage();

  beforeEach(() => {
    cy.interceptRequests();

    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('accessToken');

    registerPage.open();
  });

  const { username, password, email } = registerData;

  it('Registers correctly', () => {
    registerPage.register(username, password, password, email);
    cy.wait('@register').its('response.statusCode').should('eq', 200);
    cy.location('pathname').should('eq', '/');
    cy.contains(userData.username).should('exist');
  });

  it('Shows error labels under errored fields', () => {
    registerPage.register('', '', '');
    cy.getByTestId('input-error').should('have.length', 3);
    registerPage.clearForm();

    registerPage.register('user', password, password);
    cy.getByTestId('input-error').should('have.length', 1);
    registerPage.clearForm();

    registerPage.register(username, 'pass', 'pass');
    cy.getByTestId('input-error').should('have.length', 1);
    registerPage.clearForm();

    registerPage.register(username, password, 'badpassword');
    cy.getByTestId('input-error').should('have.length', 1);
    registerPage.clearForm();
  });

  it('Shows error label on invalid email', () => {
    const { username, password } = registerData;
    registerPage.register(username, password, password, 'invalidEmail');
    cy.getByTestId('input-error').should('exist');
  });

  it('Inputs are disabled while loading', () => {
    registerPage.register(username, password, password);
    cy.get('input[name="username"]').should('be.disabled');
    cy.get('input[name="password1"]').should('be.disabled');
    cy.get('input[name="password2"]').should('be.disabled');
    cy.get('input[name="email"]').should('be.disabled');

    cy.wait('@register').then(() => {
      cy.get('input[name="username"]').should('not.be.disabled');
      cy.get('input[name="password1"]').should('not.be.disabled');
      cy.get('input[name="password2"]').should('not.be.disabled');
      cy.get('input[name="email"]').should('not.be.disabled');
    });
  });
});
