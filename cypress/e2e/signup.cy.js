const homePage = require('../support/pages/home-page/homePage')

describe("Signup", () => {

    beforeEach(() => {
        // pre step
        
        
        
        
    })

    // it("with valid data ver 1", () => {
    //     //ke url https://www.demoblaze.com/index.html
    //     //pastikan homepage muncu
    //     //klik sign up menu
    //     //pastikan modal signup muncul
    //     //isi username
    //     //isi password
    //     //click signup

    //     cy.visit("https://www.demoblaze.com/index.html")
    //     cy.get('#nava').should('be.visible');
    //     cy.get('#signin2').click();
    //     cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
    //     cy.wait(10000);
    //     cy.get('#sign-username').type('limusin1234567890');
    //     cy.get('#sign-password').type('12345678');
    //     cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    //     cy.on('window:alert', (t)=>{
    //         expect(t).to.contains('This user already exist.');
    //     })

    // })

    it("with unregistered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'bela12344444444')
        homePage.verifyEmptyCredsErrorMessageAppears()
    })

    it("with empty data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('', 'bela12344444444')
        homePage.verifyEmptyCredsErrorMessageAppears()

    })

    it("with registered data", () => {
        homePage.goToHomePage()
        homePage.verifyHomePageAppears()
        homePage.clickSignUpMenu()
        homePage.verifySignUpModalAppears()
        homePage.signUp('random', '12345678')
        homePage.verifyUserAlreadyExistsErrorMessageAppears()

    })

})