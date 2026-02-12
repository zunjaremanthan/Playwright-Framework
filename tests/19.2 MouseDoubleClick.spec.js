const{test, expect}=require('@playwright/test')
test('Handle DoubleClick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const dc=await page.locator("//button[normalize-space()='Copy Text']")
    await dc.dblclick()

    const verify=await page.locator('#field2')
    await expect(verify).toHaveValue("Hello World!")

    await page.waitForTimeout(2000)

})