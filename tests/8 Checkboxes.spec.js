const {test, expect}=require('@playwright/test')
test('HandleCheckboxes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
   
    //Single Checkboxes
   /* await page.locator("//input[@class='form-check-input' and @id='monday']").check()
    //await page.check("//input[@class='form-check-input' and @id='monday']")

    await expect(await page.locator("//input[@class='form-check-input' and @id='monday']")).toBeChecked()

    await expect(await page.locator("//input[@class='form-check-input' and @id='monday']").isChecked()).toBeTruthy()
    await expect(await page.locator("//input[@class='form-check-input' and @id='sunday']").isChecked()).toBeFalsy()
    */
    //Multiple Checkboxes
    const checkboxlocator=[
        "//input[@class='form-check-input' and @id='monday']",
        "//input[@class='form-check-input' and @id='sunday']",
        "//input[@class='form-check-input' and @id='saturday']"
    ]

    for(const checkboxes of checkboxlocator)
    {
        await page.locator(checkboxes).check()   //select multiple checkboxes
    }

    await page.waitForTimeout(2000)

    for(const checkboxes of checkboxlocator)
    {
        if(await page.locator(checkboxes).isChecked())
        {
         await page.locator(checkboxes).uncheck()   
        }
          //unselect multiple checkboxes
    }
    
    await page.waitForTimeout(2000)

})