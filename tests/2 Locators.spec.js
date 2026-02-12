const{test, expect}=require('@playwright/test')
test("locators", async({page})=>{

    //locators : property--> ('attribute=value')
    //css(#=id, .=class), xpath

    await page.goto('https://www.demoblaze.com/')

    //click on login button  - property
    //await page.locator("id='login2'").click()
    await page.click('id=login2')

    //provide username    -CSS
    //await page.locator('#loginusername').fill('Manty@gmail.com')
    await page.fill("#loginusername",'Manty@gmail.com')
    
    //provide password  -CSS
    await page.fill('input[id="loginpassword"]', 'manty')

    //click on login button  -xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify logout link presence
    const logout=await page.locator("//a[@id='logout2']")
    await expect(logout).toBeVisible()

    await page.close()

}
)