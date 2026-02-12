const{test, expect}=require('@playwright/test')
test('Handle MouseHover', async({page})=>{

    await page.goto('https://demo.opencartmarketplace.com/d1/oc_demo/demo_1/index.php?route=account/login')
    const desk=await page.locator("//a[normalize-space()='Desktops']")
    const pc=await page.locator("//a[normalize-space()='PC (0)']")

    //mouse hover
    await desk.hover()
    await page.waitForTimeout(1000)

    await pc.hover()
    await page.waitForTimeout(2000)

})