const {test, expect}=require('@playwright/test')
test ('Handle Autosuggetions Dropdown', async({page})=>{

    await page.goto('https://www.redbus.com/online-tickets/bus-ticket-booking')
    
    await page.getByPlaceholder('FROM').fill('Pune')
    await page.waitForSelector('')


    await page.waitForTimeout(3000)

})