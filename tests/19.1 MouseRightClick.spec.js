const{test, expect}=require('@playwright/test')
test('Hnadle RightClick', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const rc=await page.locator("//span[@class='context-menu-one btn btn-neutral']")
    
    await rc.click({button: 'right'})

    await page.waitForTimeout(3000)
})