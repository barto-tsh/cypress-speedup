import HomePage from '../../pages/home.page';
import { loginData, userData, authToken } from '../../fixtures/auth.data';
import { newEntryData } from '../../fixtures/entry.data';
import LoginPage from '../../pages/login.page';

describe('As a user I want to add new entry', () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const { title, description, resource_url, thumbnail, tags } = newEntryData;

  before(() => {
    cy.interceptRequests();
    homePage.open();
    if (!sessionStorage.getItem('user')) {
      loginPage.open();
      loginPage.login(loginData.username, loginData.password);
    }
  });

  beforeEach(() => {
    cy.interceptRequests();
  });

  it('Opens modal after clicking button', () => {
    homePage.openAddModal();
  });

  it('Adds entry correctly', () => {
    cy.intercept('POST', '**/resources*', (req) => req.continue((res) => res.send(200))).as('addEntry');
    homePage.fillAddModal(title, description, resource_url, thumbnail, tags);
    cy.getByTestId('add-submit').click();
    cy.wait('@addEntry');
    cy.getByTestId('add-modal').should('not.exist');
  });

  it('Shows error labels under errored fields', () => {
    homePage.openAddModal();

    homePage.fillAddModal(title);
    cy.getByTestId('add-submit').click();
    cy.getByTestId('input-error').should('have.length', 2);

    homePage.fillAddModal(title, description);
    cy.getByTestId('add-submit').click();
    cy.getByTestId('input-error').should('have.length', 1);

    homePage.fillAddModal(title, description, resource_url);
    cy.getByTestId('input-error').should('not.exist');

    homePage.closeAddModal();
  });

  it('Clears input fields after close', () => {
    homePage.testModalClose();
  });

  //   it('Logins correctly', () => {
  //     loginPage.login(loginData.username, loginData.password);
  //     cy.wait('@login').its('response.statusCode').should('eq', 200);
  //   });

  //   it('Shows error alert on incorrect credentials', () => {
  //     cy.on('uncaught:exception', () => false);
  //     loginPage.login('badUsername', 'badPassword');
  //     loginPage.isAlertVisible();
  //   });

  //   it('Shows error labels under required fields', () => {
  //     loginPage.login('', '');
  //     cy.getByTestId('input-error').should('have.length', 2);
  //   });

  //   it('Inputs are disabled while loading', () => {
  //     loginPage.login(loginData.username, loginData.password);
  //     cy.get('input[name="username"]').should('be.disabled');
  //     cy.get('input[name="password"]').should('be.disabled');
  //     cy.wait('@login').then(() => {
  //       cy.get('input[name="username"]').should('not.be.disabled');
  //       cy.get('input[name="password"]').should('not.be.disabled');
  //     });
  //   });
});
