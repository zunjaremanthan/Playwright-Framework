const{test, expect}=require('@playwright/test')
    
    test.only('Page Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})  //If scrrenshot is not storing then just change the "\" to "/"
    //Added 'Date.now' bcoz every time with the same name screenshot is replacing
    await page.waitForTimeout(2000)

    })

    test('Full Page Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png',fullPage:true})  
    await page.waitForTimeout(2000)
    })

    test('Element Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
    const element=await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]")
    await element.screenshot({path:'tests/Screenshots/'+Date.now()+'SamsungG6.png'})  
    await page.waitForTimeout(2000)
    })
    
