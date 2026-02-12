const {test, expect}=require('@playwright/test')
test('AssertionsTest', async({page})=>{

    await page.goto('https://demo.nopcommerce.com/')

    //1. Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')

    //2. Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/')
    
    //3. element is visible
    const logoelement=await page.locator('.header-logo')
    await expect(logoelement).toBeVisible()

    //4. control is enabled
    const enable=await page.locator('#small-searchterms')
    await expect(enable).toBeEnabled()

    //5.Radio/Checkbox is checked
    //Radio
    const radio=await page.locator('#gender-male')
    await radio.click()  //select radio button
    await expect(radio).toBeChecked()

    //Chechbox
    const checkbox=await page.locator('#NewsLetterSubscriptions_0__IsActive')
    await expect(checkbox).toBeChecked()

    //6. Element has attribute
    const regbutton= await page.locator('#register-button')
    await expect(regbutton).toHaveAttribute('type','submit')

    //7. Element matches text
    await expect(await page.locator("//button[@name='register-button']")).toHaveText('Register') //full text

    //8. Element contains text
    await expect(await page.locator("//button[@name='register-button']")).toContainText('Reg') //partial text

    //9. Input has a value
    const email= await page.locator('#Email')
    await email.fill('test@demo.com')
    await expect(email).toHaveValue('test@demo.com')

    //10. to have count
    await page.waitForTimeout(30000)

})