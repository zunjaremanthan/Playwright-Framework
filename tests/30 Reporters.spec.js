const{test, expect}=require('@playwright/test')
test('Test1', async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')
})

test('Test2', async({page})=>{
await page.goto('https://demo.opencartmarketplace.com/d1/oc_demo/demo_1/index.php?route=account/login')
    await expect(page).toHaveTitle('Account Login')
})

test('Test3', async({page})=>{
await page.goto('https://ui.vision/demo/webtest/frames/')
    await expect(page).toHaveTitle('Frames - Web Automation Test')
})