import BaseComponent from './base.component';

class PaginationComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: 'logo',
      loginLink: 'login-link',
      registerLink: 'register-link',
    };
  }

  public setPage(page) {
    cy.get('.pagination__container').contains(page).click();
  }
}

export default PaginationComponent;
