class Navigation {
    visitHomepage() {
        cy.visit("https://magento.softwaretestingboard.com/", {timeout: 60000});
    }
}
export default new Navigation();