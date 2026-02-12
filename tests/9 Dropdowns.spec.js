const{test, expect}=require('@playwright/test')
test('Handle Dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to handle from the dropdown
    //await page.locator('#country').selectOption({lable:'India'})   //lable/visible text
    //await page.locator('#country').selectOption('India')   //visible text
    //await page.selectOption('#country','India')   //by text
    //await page.locator('#country').selectOption({value:'india'})  //by value
    //await page.locator('#country').selectOption({index:9})

    //Assertions
    //1) Check the number of option in dropdown -Approach 1
    //const options= await page.locator('#country option')  //added 'option' with path to get all options
    //await expect(options).toHaveCount(10)

    //2) Check the number of option in dropdown -Approach 2
    //const options= await page.$$('#country option')    //$$ reteurn the Element in the form of array
    //await console.log(options.length)
    //await expect(options.length).toBe(10)

    //3) Check the presense of value in dropdown - Approach 1
    const content= await page.locator('#country').textContent()   //returns text in string format
    await expect(content.includes('India')).toBeTruthy()

    //4) Check the presenseof value in dropdown - Approach 2 -using looping
    


    await page.waitForTimeout(2000)
})