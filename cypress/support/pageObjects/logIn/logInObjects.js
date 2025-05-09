const Locator = require('./logInLocator');
const sData = require('../staticData/staticData');
const { faker }  = require('@faker-js/faker');

class logInObjects{
    validasiLogInModal() {
        cy.xpath(Locator.validasiLogIn).should('be.visible');
        cy.xpath(Locator.input_username).should('be.visible');
        cy.xpath(Locator.input_password).should('be.visible');
        cy.xpath(Locator.tombol_login).should('be.visible');
    }

    inputUsername(username) {
        if (username == 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com'
        }
        cy.wait(5000);
        cy.xpath(Locator.input_username, { timeout: 5000}).type(username);
    }

    inputPassword(password) {
        cy.wait(5000);
        cy.xpath(Locator.input_password).type(password);
    }

    clickLogInButton() {
        cy.wait(5000);
        cy.xpath(Locator.tombol_login).click();
    }

    verifikasiAlertMessage(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifikasiFieldKosong() {
        this.verifikasiAlertMessage(sData.error_message.empty_creds);
    }

    verifikasiAkunSalah() { 
        this.verifikasiAlertMessage(sData.error_message.wrong_account);
    }

    verifikasiSuksesLogin() {
        this.verifikasiAlertMessage(sData.success_message.login);
    }

    logIn(username, password) {
        if (username != '') {
            this.inputUsername(username);
            this.inputPassword(password);
        }
        this.clickLogInButton()
    }

}

module.exports = new logInObjects();