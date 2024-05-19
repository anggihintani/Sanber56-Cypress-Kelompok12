class Navigation {
    visitHomepage() {
      cy.visit("https://magento.softwaretestingboard.com/", { timeout: 6000 });
}
}
export default new Navigation();