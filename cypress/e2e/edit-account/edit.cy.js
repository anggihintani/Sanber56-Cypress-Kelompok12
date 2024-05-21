import EditPage from '../../support/PO/editpage-object'

describe('Edit Account Info', () => {
  it('Edit Account Information', () => {
    cy.clearAllCookies()
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains("Sign In").click()
    cy.get('#email').type("bia@gmail.com")
    cy.get('#pass').type("Biawak123")
    cy.get('#send2').click()

    //edit account
    EditPage.visitEditAccount()
    EditPage.fillFirstName("Ridwan")
    EditPage.fillLastName("Abdul")
    EditPage.clickChangeEmail()
    EditPage.clickChangePassword()
    EditPage.fillEmail("ridwan@gmail.com")
    EditPage.fillCurrentPassword("Biawak123")
    EditPage.fillNewPassword("Spoil123456")
    EditPage.fillConfirmPassword("Spoil123456")
    EditPage.clickSaveButton()
    
    //edit address
    EditPage.visitEditAddress()
    EditPage.fillCompany('Swasta')
    EditPage.fillPhone('0921871')
    EditPage.fillAddress1('Jalan 1')
    EditPage.fillAddress2('Jalan 2')
    EditPage.fillAddress3('Jalan 3')
    EditPage.fillCity('Lakasantri')
    EditPage.selectState('2')
    EditPage.fillZip('1312')
    EditPage.selectCountry('AL')
  })

})