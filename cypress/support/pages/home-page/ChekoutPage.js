const locators = require('./home-page-locators');
const { faker }  = require('@faker-js/faker');
const staticVars = require('../static-variables')

class ChekoutPage{

    ClickProduct(){
        cy.wait(5000);
        cy.xpath('//*[@href="prod.html?idp_=1" and contains (text(), "Samsung galaxy s6")]' , { timeout: 1000 }).click();
    }

    AddProduct(){
        
        cy.wait(5000);
        cy.xpath('//*[@onclick="addToCart(1)" and contains (text(), "Add to cart")]' , { timeout: 1000 }).click();
    }

    verifyAlertAppears(alertaddproduct) {
        cy.on('window:alert',(t)=>{
            expect(t).to.contains(alertaddproduct);
         })
    }

    verifyAddProductSuccesfully(){
        this.verifyAlertAppears(staticVars.success_message.alertaddproduct)
    }

    goToCartPage(){
        cy.xpath('//*[@class="nav-link" and contains (text(), "Cart")]' , { timeout: 1000 }).click();
    }

    ClickPlaceOrderButton(){
        cy.xpath('//*[@ data-target="#orderModal" and contains (text(), "Place Order")]' , { timeout: 1000 }).click();
    }

    verifyPlaceOrderModalAppears() {
        cy.xpath('//*[@id="orderModalLabel"]', { timeout: 1000 }).should('be.visible');
    }

    fillName(name) {
        cy.xpath('//*[@id="name"]').type(name);
    }

    fillCountry(country) {
        cy.xpath('//*[@id="country"]').type(country);
    }

    fillCity(city) {
        cy.xpath('//*[@id="city"]').type(city);
    }

    fillCard(card) {
        cy.xpath('//*[@id="card"]').type(card);
    }

    fillMonth(month) {
        cy.xpath('//*[@id="month"]').type(month);
    }

    fillYear(year) {
        cy.xpath('//*[@id="year"]').type(year);
    }

    clickPurchaseButton() {
        cy.xpath(locators.datatestid.button('Purchase')).click();
    }

    FillPlaceOrder(name, country, city, card, month, year) {
        if (name != '') {
            cy.wait(5000);
            this.fillName(name, { timeout: 1000 });
            this.fillCountry(country, { timeout: 1000 });
            this.fillCity(city, { timeout: 1000 });
            this.fillCard(card, { timeout: 1000 });
            this.fillMonth(month, { timeout: 1000 });
            this.fillYear(year, { timeout: 1000 });
        }
        this.clickPurchaseButton()
    }

    verifyCreateOrderSuccessfully(){
        cy.xpath('//*[@class="sa-placeholder"]', { timeout: 1000 }).should('be.visible');
    }


    





    
   





    
    


}

module.exports = new ChekoutPage();