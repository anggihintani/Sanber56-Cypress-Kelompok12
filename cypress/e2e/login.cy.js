import loginData from "../fixtures/loginData.json";
import HomepageNav from "../support/HomepageNav";
import login from "../fixtures/login.json";

describe("Menuju halaman Login", () => {
    beforeEach(() => {
        HomepageNav.visitHomepage();
        cy.clearAllCookies;
        cy.contains("Sign In").click();
        cy.clearAllCookies;
    });
    
    // //Positive Test Case
    it('TestCase-1: Login menggunakan input data yang sesuai', function(){
        cy.get(account.email).type(loginData.validLogin1.email);
        cy.get(account.password).type(loginData.validLogin1.password);
        cy.get(account.submit).click();
    })

    // //Negative Test Case 1
    it('TestCase-2: Login dengan email tidak sesuai', function(){
        cy.get(account.email).type(loginData.invalidLogin1.email);
        cy.get(account.password).type(loginData.invalidLogin1.password);
        cy.get(account.submit).click();
    })

    //Negative Test Case 2
    it('TestCase-3: Login dengan password kosong', function(){
        cy.get(account.email).type(loginData.invalidLogin2.email);
        cy.get(account.submit).click();
        cy.wait(6000);
        cy.get('#pass-error');
        //cy.get(account.error_msg).should('contain.text','This is a required field.');
        cy.wait(6000);
        //cy.get(':nth-child(7) > [data-layer="Content"]').should('be.visible');
    })
})
