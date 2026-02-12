const {test, expect} = require('@playwright/test')
test ('softassertions', async({page})=>{

    await page.goto('https://www.demoblaze.com/')

    //HardAssertions
    await expect(page).toHaveTitle('STOR')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page.locator('.navbar-brand')).toBeVisible()

    //SoftAssertions
   /* await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()*/

})