const {test, expect} = require("@playwright/test")
test('Handle Inputbox', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //inputbox handle
   await expect(await page.locator('#name')).toBeVisible()
   await expect(await page.locator('#name')).toBeEnabled()
   await expect(await page.locator('#name')).toBeEmpty()
   await expect(await page.locator('#name')).toBeEditable()

   //await page.locator('#name').fill('Manthan')
   await page.fill('#name', 'Manthan')

   await page.waitForTimeout(3000)  //pausing execution for specified time

})
