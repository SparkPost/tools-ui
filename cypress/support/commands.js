import '@testing-library/cypress/add-commands';

/**
 * Used to check for link visibility with a certain `href` attribute value
 *
 * @param {string} content - The content within the link - if the content is broken up by multiple DOM elements, this may not work well
 * @param {string} href - The expected value of the `href` attribute present on the link
 *
 */
 Cypress.Commands.add('verifyLink', ({ content, href }) => {
    cy.findByText(content)
      .should('be.visible')
      .closest('a')
      .should('have.attr', 'href', href);
});
