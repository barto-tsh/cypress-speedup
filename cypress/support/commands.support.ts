import { userData, authToken } from '../fixtures/auth.data';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Checks element visibility.
       * Executes "should('be.visible')" underneath on the element.
       * @memberof Cypress.Chainable
       * @example
       ```
        cy.visible('.some-element')
       ```
       */
      isVisible: (elementName: string) => void;

      /**
       * Checks the email and returns URI matched by regex.
       * It needs to be executed after the "ACCOUNT_EMAIL_ADDRESS" environment variable is set.
       * @memberof Cypress.Chainable
       * @example
       ```n
        cy.getEmail()
       ```
       */
      getEmail: () => Chainable<any>;
    }
  }
}

Cypress.Commands.add('isVisible', (elementName: string) => {
  cy.get(elementName).should('be.visible');
});

Cypress.Commands.add('getByTestId', (selector) => {
  return cy.get(`[data-testid=${selector}]`);
});

Cypress.Commands.add('interceptRequests', () => {
  cy.on('uncaught:exception', () => false);
  cy.intercept('GET', '**/resources*', { fixture: 'entries.json' }).as('getEntries');

  cy.intercept('GET', '**/tags*', { fixture: 'trending_tags.json' }).as('getTrendingTags');

  cy.intercept('POST', '**/auth/logout*', (req) => req.continue((res) => res.send(200)));

  cy.intercept('GET', '**/users/me*', (req) => {
    req.continue((res) => {
      if (req.headers.authorization === `Token ${authToken}`) {
        res.send(200, userData);
      }
    });
  });
});
