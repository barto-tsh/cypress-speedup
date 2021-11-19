import HomePage from '../../pages/home.page';

describe('As a developer I want to properly handle URL params change', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.interceptRequests();
  });

  it('Shows all entries correctly', () => {
    homePage.open();

    cy.wait('@getEntries').then((interception) => {
      const { results } = interception.response?.body;

      cy.getByTestId('entry-card')
        .should('have.length', results.length)
        .each((item, index) => {
          const [card] = item;
          const { title, description, score, thumbnail } = results[index];

          cy.wrap(card).within(() => {
            cy.get('h2').should('contain', title);
            cy.get('p').should('contain', description);
            if (thumbnail) cy.get(`img[alt="${title}"]`).should('have.attr', 'src', thumbnail);
            else cy.getByTestId('entry-thumb-placeholder').should('exist');
          });
        });
    });
  });

  it('Handles page change', () => {
    const page = 2;
    homePage.setPage(page);
    cy.wait('@getEntries').its('request.url').should('include', `page=${page}`);
    cy.location('search').should('include', `page=${page}`);
  });

  it('Handles sort property change', () => {
    homePage.setSortProperty('Highest score');
    cy.wait('@getEntries').its('request.url').should('include', 'order=-score');
    cy.location('search').should('include', 'sort=-score');
    cy.location('search').should('not.include', 'page');
  });

  it('Handles tag selection', () => {
    const tag = 'javascript';
    homePage.selectTag('javascript');
    cy.wait('@getEntries').its('request.url').should('include', `tags=${tag}`);
    cy.location('search').should('include', `tags=${tag}`);
    cy.location('search').should('not.include', 'page');
    homePage.selectTag('javascript');
    cy.location('search').should('not.include', 'tags');
  });

  it('Does not remove URL params after page reload', () => {
    homePage.selectTag('javascript');
    homePage.setSortProperty('Lowest score');
    cy.location('search').should('include', 'tags=javascript');
    cy.location('search').should('include', 'sort=score');
    cy.reload();
    cy.location('search').should('include', 'tags=javascript');
    cy.location('search').should('include', 'sort=score');
  });
});
