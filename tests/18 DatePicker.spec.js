const{test, expect}=require('@playwright/test')
test('Handle Dates', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.fill('#datepicker', '02/09/2026')

    //date picker
    const year='2022'
    const month='April'
    const date='15'

    await page.click('#datepicker')   //opens calander
    while(true)
    {
        const currentyear=await page.locator('.ui-datepicker-year').textContent()
        const currentmonth=await page.locator('.ui-datepicker-month').textContent()

        if(currentyear==year && currentmonth==month)
        {
            break;
        }

        //await page.locator('[title="Next"]').click()  //clicks on next button
        await page.locator('[title="Prev"]').click()  //clicks on previous button
    
    }

    const dates= await page.$$("//a[@class='ui-state-default']")

    //date selection using loop
    /*for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click()
            break
        }
    }*/

     //date selection without using loop
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`)  //above date parameterised and also used for xpath(`)
    await page.waitForTimeout(60000)

})

