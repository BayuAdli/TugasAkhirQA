const Locator = require("./homePageLocator")

class homePageObjects {
    gotoHomePage() {
        cy.visit('https://demoblaze.com/index.html');
    }

    validasiHomePage() {
        cy.xpath(Locator.valid_home).should('be.visible');
        cy.xpath(Locator.login_button).should('be.visible');
        cy.xpath(Locator.signup_button).should('be.visible');
    }

    validasiHomePageLogin() {
        cy.xpath(Locator.useraccount).should('be.visible');
        cy.xpath(Locator.buttonlogout).should('be.visible');
        cy.xpath(Locator.listproduct).should('be.visible');
    }
    
    gotoSignUpModal() {
        cy.xpath(Locator.signup_button).click();
    }

    gotoLoginModal() {
        cy.xpath(Locator.login_button).click();
    }
}

module.exports = new homePageObjects();