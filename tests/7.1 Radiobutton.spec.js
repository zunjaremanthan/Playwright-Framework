const {test, expect}=require('@playwright/test')
test('Handleradiobuttons', async({page})=>{

    //Radio Buttons
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#male').check()
    //await page.check('#male')

    await expect(await page.locator('#male')).toBeChecked()
    await expect(await page.locator('#male').isChecked()).toBeTruthy()  //male
    await expect(await page.locator('#female').isChecked()).toBeFalsy()  //female

    await page.waitForTimeout(2000)   //pausing execution for specified time


})