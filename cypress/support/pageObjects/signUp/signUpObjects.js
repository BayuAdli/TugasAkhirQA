const Locator = require('./signUpLocator');
const sData = require('../staticData/staticData');
const { faker }  = require('@faker-js/faker');

class signUpObjects{
    validasiSignUpModal() {
        cy.xpath(Locator.validasiSignup).should('be.visible');
        cy.xpath(Locator.username_field).should('be.visible');
        cy.xpath(Locator.password_field).should('be.visible');
    }

    inputUsername(username) {
        if (username == 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com'
        }
        cy.wait(5000);
        cy.xpath(Locator.username_field, { timeout: 5000}).type(username);
    }

    inputPassword(password) {
        cy.xpath(Locator.password_field).type(password);
    }

    clickSignUpButton() {
        cy.xpath(Locator.regis_button).click();
    }

    verifikasiAlertMessage(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifikasiFieldKosong() {
        this.verifikasiAlertMessage(sData.error_message.empty_creds)
    }

    verifikasiUsernameSudahdigunakan() {
        this.verifikasiAlertMessage(sData.error_message.user_alr_exists)
    }

    verifikasiSuksesDaftar() {
        this.verifikasiAlertMessage(sData.success_message.signup)
    }

    signUp(username, password) {
        if (username != '') {
            this.inputUsername(username);
            this.inputPassword(password);
        }
        this.clickSignUpButton()
    }
}

module.exports = new signUpObjects();