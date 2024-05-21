context('Choose Products and Update Shopping Cart Scenario', () => {
    beforeEach(() => {
      cy.login('ak@email.com', 'Cahya890*'); // Menggunakan custom command login
      cy.visit('https://magento.softwaretestingboard.com/');
    })
  
      it('Choose Product', () => {
        //TC1_Positive Scenario
        cy.get('.home-main > .content > .action').click()
        cy.get('.wrapper > .products > :nth-child(1)').should('be.visible').click({ multiple: true })
        cy.get('#option-label-size-143-item-172').click()
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#qty').type('2')
        cy.get('#product-addtocart-button')
        .click()
        cy.get('.message-success').should('be.visible')
      })
      
      it('Update Product', () => {
        //TC2_Positive Scenario
        cy.get('.showcart').click()
        cy.get('.product-item-details > .actions > .primary > .action').click({force:true})
        cy.get('#qty').type('1')
        cy.get('#product-updatecart-button').click({multiple:true})
        cy.get('.message-success').should('be.visible')
      })
  
      it('Failed to Select Size Yet', () =>{
        //TC3_Negative Scenario
        cy.get('.home-main > .content > .action').click()
        cy.get('.wrapper > .products > :nth-child(1)').should('be.visible').click({ multiple: true })
        cy.get('#option-label-color-93-item-57').click()
        cy.get('#qty').type('0')
        cy.get('#product-addtocart-button').click()
        cy.get('#super_attribute\\[143\\]-error').should('contain','This is a required field.') //error allert
      })
  
      it('Failed Update Cart', () =>{
        //TC4_Negative Scenario
        cy.get('.showcart').click()
        cy.get('.product-item-details > .actions > .primary > .action').click({force:true})
        cy.get('#qty').type('100000')
        cy.get('#product-updatecart-button').click()
        cy.get('#qty-error').should('contain','The maximum you may purchase is 10000') //error alert
      })
      
    })
  