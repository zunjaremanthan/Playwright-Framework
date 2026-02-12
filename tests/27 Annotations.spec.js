import{test, expect}from '@playwright/test'

//only
/*test.only('test1', async({page})=>{
    console.log('this is test1..')
})

test.only('test2', async({page})=>{
    console.log('this is test2..')
})*/

//skip
/*test.only('test1', async({page})=>{
    console.log('this is test1..')
})

test.skip('test2', async({page})=>{
    console.log('this is test2..')
})*/

//condional skip
/*test('test3', async({page, browserName})=>{
     console.log('this is test3')
     if(browserName=='chromium')  //firebox
     {
        test.skip()
     }
})*/

//Fixme  //use when if you know test having some unknown issues
/*test.fixme('test4', async({page})=>{
    //test.fixme()
    console.log('this is test4..')
})*/

//fail
/*test('test5', async({page})=>{
    test.fail()  //expected to fail
    console.log('this is test5..')
    expect(1).toBe(2)  //If both exp and actual is failed then test pass
})*/

//conditional fail
/*test('test6', async({page, browserName})=>{
     console.log('this is test6')
     if(browserName=='chromium')  //firebox
     {
        test.fail()
     }
})*/

//slow test
test('test7', async({page})=>{
    //test.slow()  //increase the time by 3x whatever time defined in playwright.config.js
    //if needed add the 'timeout:3000' in playwright.config.js
    test.setTimeout(12000)  //alternative method to incresethe time
    await page.goto('https://testautomationpractice.blogspot.com/')
    //console.log('this is test7..')
})
