const{test, expect, chromium}=require('@playwright/test')
test('Handle Pages/Windows', async() => {

    const browser=await chromium.launch()
    const context=await browser.newContext()
    //by using 'newContext()' method we can create multiple pages

    const page1=await context.newPage()
    const page2=await context.newPage()

    const allpages=context.pages()
    console.log('no of pages created',allpages.length)

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')

})

test.only('Handle Multiple Pages/Windows', async() => {

    const browser=await chromium.launch()
    const context=await browser.newContext()
   
    const page1=await context.newPage()
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page1.waitForTimeout(3000)
    await expect(page1).toHaveTitle('OrangeHRM')
    await page1.waitForTimeout(3000)

    const pagePromise=context.waitForEvent('page') //when click on below the link this will open the browser window
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    await page1.waitForTimeout(3000)
    //await newPage.waitForTimeout(3000)

    await browser.close()

})