const{test, expect}=require('@playwright/test')
test('Handle Keyboard', async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator("//textarea[@name='text1']").fill('Welcome to Automation')
   // await page.fill("name='text1'","Welcome to Automation")

    //ctrl + A //select the text
    await page.keyboard.press('Control+A')

    //ctrl + C //copy the text
    await page.keyboard.press('Control+C')

    //tab
    //await page.keyboard.press('Tab')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.waitForTimeout(2000)
    //ctrl + V //paste the text
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(2000)

})