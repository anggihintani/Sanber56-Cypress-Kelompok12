Cypress.Commands.add('editAccount', (firstName, lastName) => {
    cy.get('#firstname').type(firstName)
    cy.get('#lastname').type(lastName)
    cy.get('button[type="submit"]').click()
  })