const test = require("node:test");
const { LoginPage } = require("../playwright-report/Pages/LoginPage");

test('test', async({page})=>{

    //login
    const login=new LoginPage()
    await login.gotoLoginPage()
    await login.login('manty@gmail.com','manty')
    await page.waitForTimeout(3000)
    
    //Home
    //Cart
}
)