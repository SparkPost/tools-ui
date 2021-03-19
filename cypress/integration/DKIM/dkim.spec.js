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
    cy.intercept({
      method: 'POST',
      url: '/api/v1/messaging-tools/validator-emails',
    }).as('generateEmail');

    cy.findByRole('button', { name: 'Generate Email Address' }).click();
    cy.wait('@generateEmail');

    // VIEW RESULTS -> is an anchor... so lets not worry about that for now
    cy.findByRole('button', { name: 'Delete my email cookie and start over' }).should('be.visible');
  });
});
