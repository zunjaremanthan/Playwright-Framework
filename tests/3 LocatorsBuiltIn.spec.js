const{test, expect}=require('@playwright/test')
test('Builtin locators', async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    //page.getByAltText  --to locate an element usually page,by its text alernative
    const logo=await page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    //page.getByPlaceHolder  - to locate an input by placeholder
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    //page.getByRole()
    await page.getByRole('button',{type:'submit'}).click()



})