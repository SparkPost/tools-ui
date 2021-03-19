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

  it('inspects a domain.', () => {
    cy.get('[data-test-id="spf-builder-domain"] input')
          .type('sparkpost.com{enter}');

    cy.get('p').contains('Which domain’s MX records should be allowed to send mail for sparkpost.com?');
    cy.get('p').contains('Which domain’s A records should be allowed send mail for sparkpost.com?');
    cy.get('p').contains('Add IPv4 or IPv6 ranges in CIDR format that should be allowed to send for sparkpost.com.');
    cy.get('p').contains('Add any other domains whos SPF records should be included as part of sparkpost.com’s SPF record, such as third party services.');
    cy.get('p').contains('This mechanism tells a recipients servers what to do to non-compliant messages.');
  });
});
