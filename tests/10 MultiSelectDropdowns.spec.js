const{test, epect, expect}=require('@playwright/test')
test('Select Multiple Dropdowns', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.selectOption('#colors',['Blue','Red','Yellow'])
    //await page.locator('#colors').selectOption(['Blue','Red','Yellow'])

    //1)Check the number of options in dropdowns  -1
    //const options=await page.locator('#colors option')
    //await expect(options).toHaveCount(7)

     //2)Check the number of options in dropdowns using js array-2
     //const no=await page.$$('#colors option')
     //console.log('no of options', no.length)
     //await expect(no.length).toBe(7)

     //3) Check the presense of value in dropdown 
     const content=await page.locator('#colors').textContent()
     //await expect(content.includes('Black')).toBeTruthy()
     await expect(content.includes('Black')).toBeFalsy()

    await page.waitForTimeout(4000)
})