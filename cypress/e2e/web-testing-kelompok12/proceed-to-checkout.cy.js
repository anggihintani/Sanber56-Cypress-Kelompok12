const data = require("../../fixtures/data.json")

describe('Proceed to checkout feature in website magento', () => {

  beforeEach(() => {
    cy.login(data.username, data.password)
    cy.chooseProduct(data.size,data.color)
  })

  it.only('Success proceed to checkout', () => {
    cy.get('.showcart').click();
    cy.get('#top-cart-btn-checkout').click({ force: true });
    cy.url().should('include', data.urlSale);
    cy.get('[name="company"]').type(data.company, { force: true });
    cy.get('[name="street[0]"]').type(data.street0, { force: true });
    cy.get('[name="street[1]"]').type(data.street1, { force: true });
    cy.get('[name="street[2]"]').type(data.street2, { force: true });
    cy.get('[name="city"]').type(data.city, { force: true });
    cy.get('[name="region_id"]').select(data.regionId, { force: true });
    cy.get('[name="postcode"]').type(data.postcode, { force: true });
    cy.get('[name="country_id"]').select(data.country, { force: true });
    cy.get('[name="telephone"]').type(data.telephone, { force: true });
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click();
    cy.get('.button.action.continue.primary').click();
    cy.url().should('include', data.urlCheckout);
    cy.get('.action.primary.checkout').click();
    cy.url().should('include', data.urlSuccessOrder);
    cy.get('.base').should('contain', 'Thank you for your purchase!');
    cy.screenshot('result Success proceed to checkout');
  });

  it('Success proceed to checkout with new address', () => {
    cy.get('.showcart').click()
    cy.get('#top-cart-btn-checkout').click({force: true});
    cy.url().should('include', data.urlSale)
    cy.get('.new-address-popup > .action').click()
    cy.get('[name="company"]').type(data.companyNew)
    cy.get('[name="street[0]"]').type(data.street0)
    cy.get('[name="street[1]"]').type(data.street1)
    cy.get('[name="street[2]"]').type(data.street2)
    cy.get('[name="city"]').type(data.city)
    cy.get('[name="region_id"]').select(data.regionId);
    cy.get('[name="postcode"]').type(data.postcode)
    cy.get('[name="country_id"]').select(data.country)
    cy.get('[name="telephone"]').type(data.telephone)
    
    cy.get('.action.primary.action-save-address').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').click()
    cy.get('.button.action.continue.primary').click()
    cy.url().should('include', data.urlCheckout)
    cy.get('.action.primary.checkout').click()
    cy.url().should('include', data.urlSuccessOrder)
    cy.get('.base').should('contain', 'Thank you for your purchase!')
    // cy.screenshot('result Success proceed to checkout with new address');
  })

  it('Cannot proceed to checkout with mandatory field not assigned', () => {
    cy.get('.showcart').click()
    cy.get('#top-cart-btn-checkout').click({force: true});
    cy.url().should('include', data.urlSale)
    cy.get('.new-address-popup > .action').click()
    cy.get('.action.primary.action-save-address').click()
    cy.get('.field-error').should('contain', 'This is a required field.')
    cy.screenshot('result Cannot proceed to checkout with mandatory field not assigned');
  })

})