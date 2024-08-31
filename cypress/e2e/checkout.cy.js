const ChekoutPage = require('../support/pages/home-page/ChekoutPage')
const LoginPage = require('../support/pages/home-page/LoginPage')

describe("Chekcout", () => {

    beforeEach(() => {
        // pre step
    
        
        
    })

    it("Chekout Data", () => {
        LoginPage.goToHomePage()
        LoginPage.verifyHomePageAppears()
        LoginPage.clickLogInMenu()
        LoginPage.verifyLogInModalAppears()
        LoginPage.LogIn('Cipung123', "123456789")
        ChekoutPage.ClickProduct()
        ChekoutPage.AddProduct()
        ChekoutPage.verifyAddProductSuccesfully()
        ChekoutPage.goToCartPage()
        ChekoutPage.ClickPlaceOrderButton()
        ChekoutPage.verifyPlaceOrderModalAppears()
        ChekoutPage.FillPlaceOrder('Cipung', "Indonesia", "Jakarta", "012999393993", "08", "2024")
        ChekoutPage.verifyCreateOrderSuccessfully()


        
    })

    



})