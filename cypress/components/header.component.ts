import BaseComponent from './base.component';

class HeaderComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      logo: 'logo',
      loginLink: 'login-link',
      registerLink: 'register-link',
      logoutLink: 'logout-link',
    };
  }

  public goToLoginPage() {
    cy.getByTestId(this.elements.loginLink).click();
  }

  public goToRegisterPage() {
    cy.getByTestId(this.elements.registerLink).click();
  }

  public logout() {
    cy.getByTestId(this.elements.logoutLink).click();
  }
}

export default HeaderComponent;
