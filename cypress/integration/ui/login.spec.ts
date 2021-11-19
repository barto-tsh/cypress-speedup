import LoginPage from '../../pages/login.page';
import { loginData } from '../../fixtures/auth.data';

describe('As a user I want to log in', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.interceptRequests();

    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('accessToken');

    loginPage.open();
  });

  it('Logins correctly', () => {
    loginPage.login(loginData.username, loginData.password);
    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });

  it('Shows error alert on incorrect credentials', () => {
    loginPage.login('badUsername', 'badPassword');
    loginPage.isAlertVisible();
  });

  it('Shows error labels under required fields', () => {
    loginPage.login('', '');
    cy.getByTestId('input-error').should('have.length', 2);
  });

  it('Inputs are disabled while loading', () => {
    loginPage.login(loginData.username, loginData.password);
    cy.get('input[name="username"]').should('be.disabled');
    cy.get('input[name="password"]').should('be.disabled');
    cy.wait('@login').then(() => {
      cy.get('input[name="username"]').should('not.be.disabled');
      cy.get('input[name="password"]').should('not.be.disabled');
    });
  });
});
