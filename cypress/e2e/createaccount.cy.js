import userData from "../fixtures/userData.json";
import Navigation from "../support/Navigation";
import account from "../fixtures/account.json";


const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;

describe("Navigasi ke halaman create account", () => {
  beforeEach(() => {
    Navigation.visitHomepage();
    cy.clearAllCookies;
    cy.contains("Create an Account").click();
    cy.clearAllCookies;
  });
  
    //positive testcase
    it('TC-1 : Create account dengan semua inputan Sesuai', function() {
      cy.get(account.first).type(userData.validUser1.firstName);
      cy.get(account.last).type(userData.validUser1.lastName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswd).type(userData.validUser1.password);
      cy.get(account.paswdConfirm).type(userData.validUser1.passwordconfirmation);
      cy.get(account.submit).click();
    });

    //negative testcase
    it('TC-2 : Create account dengan format email salah', function() {
      cy.get(account.first).type(userData.invalidUser1.firstName);
      cy.get(account.last).type(userData.invalidUser1.lastName);
      cy.get(account.email).type(userData.invalidUser1.email);
      cy.get(account.paswd).type(userData.invalidUser1.password);
      cy.get(account.paswdConfirm).type(userData.invalidUser1.passwordconfirmation);
      cy.get(account.submit).click();
    });

    it('TC-3 : Create account tanpa mengisi last name', function() {
      cy.get(account.first).type(userData.invalidUser2.firstName);
      cy.get(account.last).type(userData.invalidUser2.lastName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswd).type(userData.invalidUser2.password);
      cy.get(account.paswdConfirm).type(userData.invalidUser2.passwordconfirmation);
      cy.get(account.submit).click();
    });

    

    
  
  })