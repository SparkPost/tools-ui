/// <reference types="cypress" />

const PAGE_URL = '/dkim';

describe('The DKIM inspector', () => {
  beforeEach(() => {
    cy.visit(PAGE_URL);
  });

  it('has the correct page title.', () => {
    cy.title().should('include', 'DKIM Validator');
  });

  it('has the correct page header.', () => {
    cy.findByRole('heading', { name: 'DKIM Validator' }).should('be.visible');
  });

  it('generates an email address.', () => {
    cy.findByRole('button', { name: 'Generate Email Address' }).click();
    cy.findByRole('button', { name: 'Delete my email cookie and start over' }).should('be.visible');
  });
});
