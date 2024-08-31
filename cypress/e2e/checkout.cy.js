const LoginPage = require('../support/pages/home-page/LoginPage')
const homePageLogin = require('../support/pages/home-page/LoginPage')

describe("Chekcout", () => {

    beforeEach(() => {
        // pre step
    
        
        
    })

    it("Login with Valid Data", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('Cipung123', '123456789')
        LoginPage.verifyRegisteredUserClikSuccessMessageAppears()
        
    })

    



})