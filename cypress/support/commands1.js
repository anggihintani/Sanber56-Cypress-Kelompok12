Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jb2xsZWN0aW9ucy95b2dhLW5ldy5odG1s/')
    cy.get('#email').type(email); 
    cy.get('#pass').type(password); 
    cy.get('#send2').click();
    cy.url().should('include', 'https://magento.softwaretestingboard.com/')
})
