const{test, expect}=require('@playwright/test')
test('Page Screenshot', async({page})=>{
   //to enable auto screenshot go on 'playwright.config.js and add the "screenshot:'on'"
   //to see the screenshot click 'test-results' or check in generated 'playwright test report'
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('manty@gmail.com');
    await page.locator('#loginpassword').fill('manty');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000)
})