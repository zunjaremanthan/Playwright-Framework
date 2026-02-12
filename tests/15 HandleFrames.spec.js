const{test, expect}=require('@playwright/test')
test('Handle Frames', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    //total frames
    const totalframes=await page.frames()
    console.log('No. of Frames', totalframes.length)

    //approach 1 : Using name or url
    //const name=await page.frame('name')   //if frame name is present
    //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})  //url
    //await frame1.fill("//input[@name='mytext1']",'Hello')  

    //approach 2 : Using frame locator
    await page.frameLocator("//frame[@src='frame_1.html']").locator("//input[@name='mytext1']").fill('Hello')

    await page.waitForTimeout(3000)
})