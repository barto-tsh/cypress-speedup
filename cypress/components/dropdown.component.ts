import BaseComponent from './base.component';

class DropdownComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      opener: 'dropdown-opener',
      list: 'dropdown-list',
    };
  }

  public setOption(option: string) {
    cy.getByTestId(this.elements.opener).click();
    cy.getByTestId(this.elements.list).contains(option).click();
  }
}

export default DropdownComponent;
