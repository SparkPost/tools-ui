/// <reference types="cypress" />

const PAGE_URL = '/spf'; // should redirect to /spf/inspector, so that's why I set it this way here

describe('The SPF inspector', () => {
  beforeEach(() => {
    cy.visit(PAGE_URL);
  });

  it('has the correct page title.', () => {
    cy.title().should('include', 'SPF Inspector');
    cy.url().should('include', '/spf/inspector')
  });

  it('has the correct page header.', () => {
    cy.findByRole('heading', { name: 'SPF Inspector' }).should('be.visible');
  });

  it.only('inspects a domain.', () => {
    cy.findByLabelText('Inspect Domain')
          .clear()
          .type('sparkpost.com{enter}');

    cy.findByRole('heading', { name: 'sparkpost.com' }).should('be.visible');
    cy.findByRole('heading', { name: 'SPF Record' }).should('be.visible');

    cy.verifyLink({
      content: 'Back',
      href: '/spf/inspector',
    });

    cy.verifyLink({
      content: 'How do I fix errors?',
      href: 'https://www.sparkpost.com/email-tools/errors',
    });
  });
});
