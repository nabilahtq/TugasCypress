const locators = require('../home-page/home-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class homePage {
    goToHomePage() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    verifyHomePageAppears() {
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    clickSignUpMenu() {
        cy.xpath('//*[@id="signin2"]').click();
    }

    verifySignUpModalAppears() {
        cy.xpath('//*[@id="signInModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillUsername(username) {
        if (username == 'random') {
            username = faker.person.firstName() + faker.number.int() + '@test.com'
        }
        cy.wait(5000);
        cy.xpath('//*[@id="sign-username"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="sign-username"]', { timeout: 5000}).type(username);
    }

    fillPassword(password) {
        cy.xpath('//*[@id="sign-password"]').type(password);
    }

    clickSignUpButton() {
        cy.xpath(locators.datatestid.button('Sign up')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage);
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds)
    }

    verifyUserAlreadyExistsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.user_alr_exists)
    }

    verifySignUpSuccessMessageAppears() {
        this.verifyAlertAppears(staticVars.success_message.signup)
    }

    signUp(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickSignUpButton()
    }
}

module.exports = new homePage();
