const locators = require('./home-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class LoginPage{
    goToHomePage(){
        cy.visit("https://www.demoblaze.com/index.html");
    }

    verifyHomePageAppears(){
        cy.xpath(locators.datatestid.imageCompanyLogo).should('be.visible');
    }

    clickLogInMenu() {
        cy.xpath('//*[@id="login2"]').click();
    }

    verifyLogInModalAppears() {
        cy.xpath('//*[@id="logInModalLabel"]', { timeout: 1000 }).should('be.visible');

    }

    fillUsername(username) { 
        cy.wait(5000);
        cy.xpath('//*[@id="loginusername"]', { timeout: 1000 }).should('be.visible');
        cy.xpath('//*[@id="loginusername"]', { timeout: 5000}).type(username);
        
    }

    fillPassword(password) {
        cy.xpath('//*[@id="loginpassword"]', { timeout: 1000 }).type(password);
    }

    clickLognInButton() {
        cy.xpath(locators.datatestid.button('Log in')).click();
    }

    verifyAlertAppears(errorMessage) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(errorMessage, { timeout: 1000 });
         })
    }

    verifyEmptyCredsErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.empty_creds, { timeout: 5000 })
    }

    verifyWrongPasswordErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.wrong_pass, { timeout: 5000 })
    }

    verifyUnregisteredUserErrorMessageAppears() {
        this.verifyAlertAppears(staticVars.error_message.unregistered, { timeout: 5000 })
    }

    verifyLoginSuccessfully(){
        cy.xpath('//*[@id="nameofuser" and contains (text(), "Welcome Cipung123")]' , { timeout: 1000 }).click();
    }


    LogIn(username, password) {
        if (username != '') {
            this.fillUsername(username);
            this.fillPassword(password);
        }
        this.clickLognInButton()
    }


}

module.exports = new LoginPage();