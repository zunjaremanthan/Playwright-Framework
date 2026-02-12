const{test, expect}=require('@playwright/test')
test('Handle DragAndDrop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const source=await page.locator('#draggable')
    const dest=await page.locator('#droppable')

    await source.dragTo(dest)

    await page.waitForTimeout(2000)

})