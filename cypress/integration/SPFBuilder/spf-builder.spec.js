/// <reference types="cypress" />

const PAGE_URL = '/spf/builder';

describe('The SPF builder', () => {
  beforeEach(() => {
    cy.visit(PAGE_URL);
  });

  it('has the correct page title.', () => {
    cy.title().should('include', 'SPF Builder');
  });

  it('has the correct page header.', () => {
    cy.findByRole('heading', { name: 'SPF Builder' }).should('be.visible');
  });
});
