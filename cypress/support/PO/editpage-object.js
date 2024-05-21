class EditPage {

visitEditAccount() {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/edit/')
}

visitEditAddress() {
  cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/')
}

fillFirstName(firstName) {
  cy.get('#firstname').type(firstName)
}

fillLastName(lastName) {
  cy.get('#lastname').type(lastName)
}

fillEmail(email) {
  cy.get('#email').type(email)
}

fillCurrentPassword(currentPassword) {
  cy.get('#current-password').type(currentPassword)
}

fillNewPassword(newPassword) {
  cy.get('#password').type(newPassword)
}

fillConfirmPassword(confirmPassword) {
  cy.get('#password-confirmation').type(confirmPassword)
}

fillCompany(company) {
  cy.get('#company').type(company)
}

fillPhone(telephone) {
  cy.get('#telephone').type(telephone)
}

fillAddress1(address1) {
  cy.get('#street_1').type(address1)
}

fillAddress2(address2) {
  cy.get('#street_2').type(address2)
}

fillAddress3(address3) {
  cy.get('#street_3').type(address3)
}

fillCity(city) {
  cy.get('#city').type(city)
}

fillZip(zip) {
  cy.get('#zip').type(zip)
}

selectState(state) {
  cy.get('#region_id').select(state)
}

selectCountry(country) {
  cy.get('#country').select(country)
}

clickSaveButton() {
  cy.contains('Save').click()
}

clickSaveAddressButton() {
  cy.contains('Save Address').click()
}

clickChangeEmail() {
  cy.get('#change-email').click()
}

clickChangePassword() {
  cy.get('#change-password').click()
} 

}


export default new EditPage()