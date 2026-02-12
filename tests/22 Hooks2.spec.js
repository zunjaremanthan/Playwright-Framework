const{test, expect}=require('@playwright/test')

let page

test.beforeEach(async({browser})=>{
   page=await browser.newPage()
   await page.goto('https://www.demoblaze.com/');
    //login
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('manty@gmail.com');
    await page.locator('#loginpassword').fill('manty');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000)
})

test.afterEach(async()=>{
 //logout
    await page.getByRole('link', { name: 'Log out' }).click();
    await page.waitForTimeout(2000)
})

test('Home Page', async()=>{
    //homepage
    const product=await page.$$("//div[@class='col-lg-4 col-md-6 mb-4']")
    expect(product).toHaveLength(9) 
    await page.waitForTimeout(2000)
   })

test('Add to Cart', async()=>{
    //Add to cart
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.waitForTimeout(2000)
    await page.locator("//a[normalize-space()='Add to cart']").click()
    await page.waitForTimeout(2000)

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        dialog.accept()
    })
    await page.waitForTimeout(2000)
})