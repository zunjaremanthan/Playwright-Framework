const{test, expect}=require('@playwright/test')
test('Record Video', async({page})=>{
  //npx playwright codegen   - this will open browser with playwright inspector
  //npx playwright codegen --help  - shows various options of codegen
//npx playwright codegen --output  -saves the generated script to a file
    //to enable auto record video go on 'playwright.config.js and add the "video:'on'"
   //to see the video click 'test-results' or check in generated 'playwright test report'

    await page.goto('https://www.demoblaze.com/');
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('manty@gmail.com');
    await page.locator('#loginpassword').fill('manty');
    await page.waitForTimeout(2000)
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Log ou98' }).click();
    
})