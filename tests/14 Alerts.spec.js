const{test, expect}=require('@playwright/test')

test.skip('Alert with ok', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //before performing any action enabling alert handling
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')   //simple alert
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click('#alertBtn')
    await page.waitForTimeout(3000)
})
test.skip('Confirmation Dialog-Alert with ok or Cancel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')   //confirmation alert
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept()  //close by using ok button
        //dialog.dismiss()  ////close by using cancel button
    })

    await page.click('#confirmBtn')
    await expect(await page.locator('#demo')).toHaveText('You pressed OK!')
    await page.waitForTimeout(3000)
})

test('Prompt Dialog', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')   //prompt alert
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue('Harry Potter'))
        dialog.accept('Manthan')    
    })

    await page.click('#promptBtn')
    await expect(await page.locator('#demo')).toHaveText('Hello Manthan! How are you today?')
    await page.waitForTimeout(3000)
})

