import HeaderComponent from '../components/header.component';
import PaginationComponent from '../components/pagination.component';
import DropdownComponent from '../components/dropdown.component';
import { Ordering } from '../ts/types/ordering.enum';
import { newEntryData } from '../fixtures/entry.data';

import BasePage from './base.page';

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = '/';
    this.components = {
      header: new HeaderComponent(),
      pagination: new PaginationComponent(),
      dropdown: new DropdownComponent(),
    };
    this.elements = {
      addNewButton: 'add-new-button',
    };
  }

  public goToLoginPage() {
    this.components.header.goToLoginPage();
  }

  public goToRegisterPage() {
    this.components.header.goToRegisterPage();
  }

  public setPage(page) {
    this.components.pagination.setPage(page);
  }

  public setSortProperty(property: string) {
    this.components.dropdown.setOption(property);
  }

  public selectTag(tag: string) {
    cy.getByTestId('tag').contains(tag).click();
  }

  public logout() {
    if (window.sessionStorage.getItem('user')) {
      this.components.header.logout();
    }
  }

  public testAddButtonPresence() {
    cy.getByTestId(this.elements.addNewButton).should('exist');
  }

  public openAddModal() {
    cy.getByTestId(this.elements.addNewButton).click();
  }

  public fillAddModal(
    title?: string,
    description?: string,
    resource_url?: string,
    thumbnail?: string,
    tags?: string[],
  ) {
    if (title) cy.get('input[name="title"]').clear().type(title);
    if (description) cy.get('textarea[name="description"]').clear().type(description);
    if (resource_url) cy.get('input[name="resource_url"]').clear().type(resource_url);
    if (thumbnail) cy.get('input[name="thumbnail"]').clear().type(thumbnail);
    if (tags)
      tags.forEach((tag) => {
        cy.get('.react-tags__search-input').clear().type(`${tag}{enter}`);
      });
  }

  public closeAddModal() {
    cy.getByTestId('add-close').click();
  }

  public testModalClose() {
    const { title, description, resource_url, thumbnail } = newEntryData;
    this.openAddModal();
    this.fillAddModal(title, description, resource_url, thumbnail);
    this.closeAddModal();
    this.openAddModal();

    cy.get('input[name="title"]').should('be.empty');
    cy.get('textarea[name="description"]').should('be.empty');
    cy.get('input[name="resource_url"]').should('be.empty');
    cy.get('input[name="thumbnail"]').should('be.empty');
  }
}

export default HomePage;
