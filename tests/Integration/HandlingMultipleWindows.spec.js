import test from "node:test"

const{text, expect}=require('@playwright/test')
test('handling windos', async({page})=>{
await page.goto('https://googlt.com')
    
})

test.only('Handle Multiple Windows', async({browser})=>{

    const context= await browser.newcontext()
    const page= await context.newpage()
    await page.goto('https://training.rcvacademy.com/')
    await page.locator("//a[@href='https://play.google.com/store/apps/details?id=com.dop.zenler&hl=en_AU&gl=US']//img").click()

})