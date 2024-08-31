const LoginPage = require('../support/pages/home-page/LoginPage')


describe("Login", () => {

    beforeEach(() => {
        // pre step
        
        
        
        
    })

    it("Login with Blank Field", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('', '')
        LoginPage.verifyEmptyCredsErrorMessageAppears()
    })

    it("Login with Unregistered User", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('Cipung192299393', '12345')
        LoginPage.verifyUnregisteredUserErrorMessageAppears()
        
    })

    it("Login with Wrong Password", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('Cipung123', '12345')
        LoginPage.verifyWrongPasswordErrorMessageAppears()
        
    })

    it("Login with Valid Data", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('Cipung123', "123456789")
        LoginPage.verifyLoginSuccessfully()
        
    })

    



})